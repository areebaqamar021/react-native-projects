import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import React, { useState } from 'react';

const Cart = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const navigation = useNavigation();

    const handleIncrement1 = () => setCount1(count1 + 1);
    const handleDecrement1 = () => setCount1(count1 > 0 ? count1 - 1 : 0);
    const handleReset1 = () => setCount1(0);

    const handleIncrement2 = () => setCount2(count2 + 1);
    const handleDecrement2 = () => setCount2(count2 > 0 ? count2 - 1 : 0);
    const handleReset2 = () => setCount2(0);

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
                        <Text style={{ marginLeft: 30, color: '#808089' }}>2h - 3h</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 10 }}>Order Details</Text>
                <View style={styles.shippingContainer}>
                    <View style={styles.details}>
                        <Image
                            source={(require('../assets/image1.png'))}
                            resizeMode='contain'
                            style={{
                                width: 40,
                                height: 40, marginRight: 10,
                            }}
                        />
                        <View style={{ flexDirection: 'column', }}>
                            <Text style={{ marginBottom: 5 }}>Product Detail</Text>
                            <Text style={{ fontWeight: 'bold' }}>X0.000 ₫</Text>
                            <View style={{ flexDirection: 'row', marginTop: 7, marginBottom: 15 }}>
                                <TouchableOpacity onPress={handleDecrement1}>
                                    <Text style={styles.button1}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleReset1}>
                                    <Text style={styles.button2}>{count1}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleIncrement1}>
                                    <Text style={styles.button3}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.details}>
                        <Image
                            source={(require('../assets/Image2.png'))}
                            resizeMode='contain'
                            style={{
                                width: 40,
                                height: 40, marginRight: 10,
                            }}
                        />
                        <View style={{ flexDirection: 'column', }}>
                            <Text style={{ marginBottom: 5 }}>Product Detail</Text>
                            <Text style={{ fontWeight: 'bold' }}>X0.000 ₫</Text>
                            <View style={{ flexDirection: 'row', marginTop: 7, marginBottom: 15 }}>
                                <TouchableOpacity onPress={handleDecrement2}>
                                    <Text style={styles.button1}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleReset2}>
                                    <Text style={styles.button2}>{count2}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleIncrement2}>
                                    <Text style={styles.button3}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.containerPrice}>
                        <View style={styles.row}>
                            <Text style={styles.label}>Price</Text>
                            <Text style={styles.value}>00.000 đ</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Shipping fee</Text>
                            <Text style={styles.value}>00.000 đ</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Promotion</Text>
                            <Text style={[styles.value, styles.promotionValue]}>-00.000 đ</Text>
                        </View>
                        <View style={[styles.row, styles.totalRow]}>
                            <Text style={styles.label}>Total</Text>
                            <Text style={styles.totalValue}>00.000 đ</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buy}>
                    <Text style={{ color: '#fff', fontSize: 18 }}>Pay 00.000 ₫</Text>
                </TouchableOpacity>
            </View>
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
        margin: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    address: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    service: {
        justifyContent: 'space-between',
        marginLeft: 30,
        marginBottom: 20,
    },
    details: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        margin: 15,
    },
    buttons: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    button1: {
        borderWidth: 1,
        padding: 10,
        width: 40,
        textAlign: 'center',
        marginRight: 4,
        borderColor: '#DDDDE3',
        color: '#DDDDE3',
        borderRadius: 5,
    },
    button2: {
        borderWidth: 1,
        padding: 10,
        width: 40,
        textAlign: 'center',
        marginRight: 4,
        borderColor: '#ccc',
        color: '#ccc',
        borderRadius: 5,
    },
    button3: {
        borderWidth: 1,
        padding: 10,
        width: 40,
        textAlign: 'center',
        marginRight: 4,
        borderColor: '#1A94FF',
        color: '#1A94FF',
        borderRadius: 5,
    },
    containerPrice: {
        padding: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 8,
    },
    buy: {
        borderWidth: 1,
        borderRadius: 40,
        width: 370,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A94FF',
        borderColor: '#fff',
        padding: 10,
    },
    label: {
        color: '#333',
    },
    value: {
        color: '#000',
    },
    promotionValue: {
        color: 'green',
    },
    totalValue: {
        fontWeight: 'bold',
        color: '#000',
    },
    totalRow: {
        borderBottomWidth: 0,
    },
})