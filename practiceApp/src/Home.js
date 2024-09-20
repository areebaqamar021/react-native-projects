import React from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import { View } from "react-native";

const Home = () => {
    return (
        <View >
             <Header />
             <Product />
        </View>
    )
}

export default Home;