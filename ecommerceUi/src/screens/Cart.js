import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import React from 'react';

const Cart = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Header
                shopName={
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Image source={require('../assets/back.png')}
                                resizeMode='contain'
                                style={styles.backIcon} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 22, marginLeft: 10, fontWeight: 'bold' }}>Cart</Text></View>
                }
            />
            <ScrollView>
                <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 10, marginLeft: 10 }}>Shipping Details</Text>
                <View style={styles.shippingContainer}>
                    <View style={styles.address}>
                        <View>
                            <View style={{ flexDirection: 'row' }}><Image
                                source={require('../assets/address.png')}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20, marginRight: 10,
                                }} />
                                <Text style={{ fontSize: 15, marginBottom: 10 }}>Shipping Address</Text></View>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 7 }}>288 Erie Street South Unit D,</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 7 }}>Leamington, Ontario</Text>
                            <Text style={{ color: '#808089', marginBottom: 10 }}>Nick • 0969696969</Text>
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
                    <View style={styles.service}>
                        <View style={{ flexDirection: 'row' }}><Image
                            source={require('../assets/tiki.png')}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20, marginRight: 10,
                            }} />
                            <Text style={{ fontSize: 15, marginBottom: 8 }}>Shipping Service</Text></View>
                        <Text style={{ fontWeight: 'bold', marginLeft: 30, marginBottom: 6 }}>Tiki Now</Text>
                        <Text style={{marginLeft: 30, color: '#808089'}}>2h - 3h</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 10 }}>Order Details</Text>
                <View>
                    
                </View>
            </ScrollView>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backIcon: {
        marginTop: 5,
        width: 18,
        height: 18,
    },
    shippingContainer: {
        margin: 20,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    address: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        // padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    service: {
        justifyContent: 'space-between',
        marginLeft: 30,
        marginBottom: 20,
    }
})