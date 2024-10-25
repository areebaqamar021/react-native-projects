import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper'

const data = [
    require('../assets/Image.png'),
    require('../assets/Image.png'),
    require('../assets/Image.png'),
    require('../assets/Image.png'),
];
const {width} = Dimensions.get("screen")

const Slider = () => {
    return (
        <View style={{ height:150 }}>
            <Swiper styles={styles.container}
            dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 20, height: 1, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
            activeDot={<View style={{backgroundColor:'#007aff', width: 20, height: 1, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
            >
                {
                    data.map((item, index) => {
                        return <Image 
                        key={index}
                        style={{
                            width:width*0.9,
                            marginHorizontal:width*0.05,
                            borderRadius:10,
                            marginTop:10,
                            height:100
                        }} source={item} />
                    })
                }
            </Swiper>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'green',
        width
    },
    item: {
        borderRadius: 10,
        height: 250,
        overflow: 'hidden',
        marginLeft: 25,
        marginRight: 25,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default Slider;
