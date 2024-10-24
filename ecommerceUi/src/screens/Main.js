import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import ProductCard from '../components/ProductCard'

const Main = () => {
    return (
        <View style={{ flex: 1 }} >
            <Header />
            <Slider />
            <View style={styles.view}>
                <Text style={styles.deals}>Hot Deals</Text>
                <Text style={styles.more}> View more   > </Text>
            </View>
            <FlatList
                data={[
                    {
                        name: "product name",
                        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    
                    },
                    {
                        name: "product name 2",
                        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    
                    },
                    {
                        name: "product name 3",
                        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    
                    },
                    {
                        name: "product name 5",
                        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    
                    },
                ]}
                renderItem={({item, index})=>{
                    return <ProductCard  />
                }}
            />
            
        </View>
    )
}

export default Main

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
        color: 'blue',
        borderBottomWidth: 1,
        textDecorationLine: 'underline',
    }
})