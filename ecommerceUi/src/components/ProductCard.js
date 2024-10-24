import { View, StyleSheet, Text, Image } from 'react-native'
import React from 'react'

const ProductCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={
                    {
                        uri: item.image
                    }
                } />
            <Text style={styles.text}>{item.name}</Text>
            <View style={styles.rating}>
                {[1,1,1,1,1].map((item1, index)=>{
                    return <Image
                    style={{
                        ...styles.icon,
                        tintColor: item.rating > index ? undefined : '#ccc'
                    }}
                    source={require('../assets/star.png')}
                    resizeMode='contain' />
                })}
                <Text>{item.reviewCount}</Text>
            </View>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        width: 120,
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
        width: 20,
        height: 20,
    },
    rating: {
        flexDirection: 'row',
    }
})