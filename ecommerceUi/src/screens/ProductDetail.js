import { Text, StyleSheet, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native';

const ProductDetail = ({ route }) => {
    const item = route?.params?.item
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Header
                shopName={
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image source={require('../assets/back.png')}
                            resizeMode='contain'
                            style={styles.backIcon} />
                    </TouchableOpacity>
                }
            />
                <ScrollView style={{flex: 1}}>
                    <Image
                        style={styles.img}
                        source={
                            {
                                uri: item.image
                            }
                        }
                    />
                    <View style={styles.box}>
                        <Text style={styles.text}>{item.name}</Text>
                        <View style={styles.rating}>
                            {[1, 1, 1, 1, 1].map((item1, index) => {
                                return <Image
                                    style={{
                                        ...styles.icon,
                                        tintColor: item.rating > index ? undefined : '#ccc'
                                    }}
                                    key={index}
                                    source={require('../assets/star.png')}
                                    resizeMode='contain' />
                            })}
                            <Text>({item.reviewCount})</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.add}>
                        <Text style={{color: '#1A94FF'}}>Add to Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buy}> 
                        <Text style={{color: '#fff'}}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 25,
        marginBottom: 8
    },
    img: {
        width: 400,
        height: 400,
        marginBottom: 7,
        borderRadius: 9
    },
    icon: {
        width: 20,
        height: 20,
    },
    rating: {
        flexDirection: 'row',
        marginBottom: 8
    },
    backIcon: {
        width: 20,
        height: 20,
    },
    box: {
        marginLeft: 10,
    },
    buttons: {
        margin: 10,
        flexDirection : 'row',
        justifyContent: 'space-between'
    },
    add: {
        borderWidth: 1,
        borderRadius: 40,
        padding: 10,
        width: 180,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#1A94FF'
    },
    buy: {
        borderWidth: 1,
        borderRadius: 40,
        width: 180,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A94FF',
        borderColor: '#fff'
    }
})