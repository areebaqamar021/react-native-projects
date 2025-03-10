import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProductCard from './ProductCard';
import React from 'react'

const ProductList = () => {
    const navigation = useNavigation();
    return (
        <View>
            <FlatList
                contentContainerStyle={{ alignSelf: 'flex-start' }}
                data={[
                    {
                        name: "Product Name",
                        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        rating: 3,
                        reviewCount: 25
                    },
                    {
                        name: "Product Name 2",
                        image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800",
                        rating: 2,
                        reviewCount: 35
                    },
                    {
                        name: "Product Name 3",
                        image: "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=800",
                        rating: 3,
                        reviewCount: 33
                    },
                    {
                        name: "product name 5",
                        image: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=800",
                        rating: 4,
                        reviewCount: 45
                    },
                    {
                        name: "Product Name 6",
                        image: "https://images.pexels.com/photos/247769/pexels-photo-247769.jpeg?auto=compress&cs=tinysrgb&w=800",
                        rating: 5,
                        reviewCount: 65
                    },
                    {
                        name: "Product Name 6",
                        image: "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=800",
                        rating: 5,
                        reviewCount: 65
                    },
                ]}
                renderItem={({ item, index }) => {
                    return <TouchableOpacity onPress={() => navigation.navigate('productDetails',{item})}><ProductCard item={item} key={index} imageStyles={{
                        width: 175,
                        height: 175,
                        marginBottom: 7,
                    }} /></TouchableOpacity>
                }}
                scrollEnabled={false}
                numColumns={2}
            />
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
    },
})