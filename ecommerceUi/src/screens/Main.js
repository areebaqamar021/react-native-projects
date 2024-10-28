import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import ProductCard from '../components/ProductCard'
import Categories from './Categories'
import ProductList from './ProductList'
import BottomNav from '../components/BottomNav'

const Main = () => {
    return (
        <ScrollView style={{ flex: 1 }} >
            <Header />
            <Slider />
            <View style={styles.view}>
                <Text style={styles.deals}>Hot Deals</Text>
                <TouchableOpacity>
                    <Text style={styles.more}> View more   > </Text>
                </TouchableOpacity>
            </View>
            <View>
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
                            image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800",
                            rating: 2,
                            reviewCount: 35
                        },
                        {
                            name: "product name 3",
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
                            name: "product name 6",
                            image: "https://images.pexels.com/photos/247769/pexels-photo-247769.jpeg?auto=compress&cs=tinysrgb&w=800",
                            rating: 5,
                            reviewCount: 65
                        },
                        {
                            name: "product name 6",
                            image: "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=800",
                            rating: 5,
                            reviewCount: 65
                        },
                    ]}
                    renderItem={({ item, index }) => {
                        return <ProductCard item = {item}/>
                    }}
                    horizontal={true}
                />
                </View>
            <Categories />
            <ProductList />
            <BottomNav />
        </ScrollView>
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
        color: '#1A94FF',
    },
})