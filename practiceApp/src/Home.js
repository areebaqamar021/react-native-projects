import React from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import { StyleSheet, View } from "react-native";

const Home = () => {
    return (
        <View style={StyleSheet.container}>
             <Header />
             <Product />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ccc'
    }
})

export default Home;