import { Text, StyleSheet, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native';
import ProductList from '../components/ProductList';

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
            <ScrollView style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#fff' }}>
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
                    <View style={styles.colorContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.colorIcon}
                                source={require('../assets/color.png')} />
                            <View style={{ flexDirection: 'column', marginLeft: 10, justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 15 }}>Color</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, }}>Blue</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Image style={{
                                width: 20,
                                height: 20,
                                marginTop: 20,
                            }} source={require('../assets/more.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.colorContainer}>
                        <View style={{ flexDirection: 'column', marginLeft: 10, justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 17 }}>Size</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 10 }}>S</Text>
                        </View>
                        <TouchableOpacity>
                            <Image style={{
                                width: 20,
                                height: 20,
                                marginTop: 20,
                            }} source={require('../assets/more.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.shippingContainer}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Shipping Details</Text>
                    <View style={styles.address}>
                        <View>
                            <Text style={{ fontSize: 15 }}>Shipping Address</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>288 Erie Street South Unit D,</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Leamington, Ontario</Text>
                        </View>
                        <TouchableOpacity>
                            <Image
                                style={{
                                    width: 20,
                                    height: 20,
                                    marginTop: 20,
                                }}
                                source={require('../assets/more.png')} /></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.shippingContainer}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 10, }}>Descriptions</Text>
                    <View style={styles.desription}>
                        <View>
                            <Text style={{ marginBottom: 10 }}>Made In</Text>
                            <Text style={{ marginBottom: 10 }}>Size</Text>
                            <Text style={{ marginBottom: 10 }}>Color</Text>
                            <Text style={{ marginBottom: 10 }}>Materail</Text>
                        </View>
                        <View>
                            <Text style={{ marginBottom: 10 }}>Vietnam</Text>
                            <Text style={{ marginBottom: 10 }}>S</Text>
                            <Text style={{ marginBottom: 10 }}>Blue</Text>
                            <Text style={{ marginBottom: 10 }}>Spandex</Text>
                        </View>
                    </View>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing augue nisl, gravida a, sapien leo. Morbi vulputate fermentum porta nunc. Viverra laoreet convallis massa elementum vel. Eget tincidunt massa sodales non massa euismod.</Text>
                </View>
                <View style={{ backgroundColor: '#fff', marginTop: 10, }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, marginTop: 10 }}>Similar Product</Text>
                    <ProductList />
                </View>
            </ScrollView>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.add}>
                    <Text style={{ color: '#1A94FF' }}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buy}>
                    <Text style={{ color: '#fff' }}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
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
    },
    colorContainer: {
        margin: 15,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    colorIcon: {
        width: 50,
        height: 50,
    },
    shippingContainer: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#fff',
    },
    address: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#ccc',
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    desription: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})