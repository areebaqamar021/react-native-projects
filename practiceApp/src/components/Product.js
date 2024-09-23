import { Image, StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react';

const Card = ({ product }) => (
    <View style={styles.card}> 
        <Image style={styles.img} source={{ uri: product.images[0] }} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
    </View>
)

const Product = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/products')
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const _data = await response.json();
            console.log(_data);
            setData(_data)

        } catch (error) {
            console.log(error, 'error');
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    const renderItem = ({ item }) => <Card product={item} />

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
        />
    )
}

export default Product

const styles = StyleSheet.create({
    card: {
        margin: 5,
        padding : 10,
        width: 175,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    img: {
        width: 155,
        height: 150,
        borderRadius : 10,
    },
    title: {
        marginTop: 10,
        width: 160,
    },
    price : {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 5,
        color: '#B0B0B0'
    }
})