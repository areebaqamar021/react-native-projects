import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';
import React from 'react'

const ProductList = () => {
  return (
    <View>
      <View style={styles.view}>
                <Text style={styles.deals}>Product list</Text>
                <TouchableOpacity>
                    <Text style={styles.more}> View more   > </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                    contentContainerStyle={{ alignSelf: 'flex-start' }}
                    data={[
                        {
                            name: "product name",
                            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            rating: 3,
                            reviewCount: 25
                        },
                        {
                            name: "product name 2",
                            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            rating: 2,
                            reviewCount: 35
                        },
                        {
                            name: "product name 3",
                            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            rating: 3,
                            reviewCount: 33
                        },
                        {
                            name: "product name 5",
                            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            rating: 4,
                            reviewCount: 45
                        },
                        {
                            name: "product name 6",
                            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            rating: 5,
                            reviewCount: 65
                        },
                        {
                            name: "product name 6",
                            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            rating: 5,
                            reviewCount: 65
                        },
                    ]}
                    renderItem={({ item, index }) => {
                        return <ProductCard item = {item} imageStyles={{
                                width: 175,
                                height: 175,
                                marginBottom: 7,
                                backgroundColor: 'red'
                        }}/>
                    }}
                    scrollEnabled={false}
                    numColumns={2}
                />
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    deals: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    more: {
        color: '#1A94FF',
    },
})