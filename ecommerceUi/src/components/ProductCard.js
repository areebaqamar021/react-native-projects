import { View, StyleSheet, Text, Image } from 'react-native'
import React from 'react'

const ProductCard = () => {
  return (
    <View style={styles.container}>
        <Image 
        style={styles.img}
        source={require('../assets/product.png')}/>
        <Text style={styles.text}>Product Name</Text>
        <Image 
        style={styles.icon}
        source={require('../assets/ratingDisplay.png')}
        resizeMode='contain'/>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 120,
        margin: 10,
    },
    text: {
        fontSize: 15
    },
    img: {
        width: 120,
        height: 120,
        marginBottom: 7,
    },
    icon: {
        width: 100,
        height: 30,
    }
})