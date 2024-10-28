import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const Categories = () => {
  return (
    <View>
      <Header shopName={'Category'}/>
      <View style={styles.category}>
        <Text style={styles.deals}>Category</Text>
        <TouchableOpacity>
          <Text style={styles.more}> View more   > </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-evenly', marginBottom: 30 }}
        data={[
          {
            name: 'category 1',
            image: require('../assets/category1.png')
          },
          {
            name: 'category 2',
            image: require('../assets/category1.png')
          },
          {
            name: 'category 3',
            image: require('../assets/category1.png')
          },
          {
            name: 'category 4',
            image: require('../assets/category1.png')
          },
          {
            name: 'category 5',
            image: require('../assets/category1.png')
          },
          {
            name: 'category 6',
            image: require('../assets/category1.png')
          },
          {
            name: 'category 7',
            image: require('../assets/category1.png')
          },
          {
            name: 'category 8',
            image: require('../assets/category1.png')
          },
        ]}
        renderItem={({ item, index }) => {

          return <View key={index} style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        }}
        numColumns={4}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 15
  },
  deals: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  more: {
    color: '#1A94FF',
  },
  image: {
    width: 55,
    height: 55,
    marginBottom: 7,
  }

})