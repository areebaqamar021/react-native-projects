import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header'
import React from 'react'

const Cart = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Header
                shopName={
                    <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('productDetails')}>
                        <Image source={require('../assets/back.png')}
                            resizeMode='contain'
                            style={styles.backIcon} />
                    </TouchableOpacity>
                    <Text style={{fontSize: 20, marginLeft: 10, fontWeight: 'bold'}}>Cart</Text></View>
                }
            />
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    backIcon: {
        width: 20,
        height: 20,
    },
})