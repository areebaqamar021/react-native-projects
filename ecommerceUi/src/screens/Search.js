import { StyleSheet, Image, View, TextInput, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/Header';

const Search = () => {
  dummyData = [
    {
      keyword: 'Search keyword',
      icon: require('../assets/x.png'),
    },
    {
      keyword: 'Search keyword',
      icon: require('../assets/x.png'),
    },
    {
      keyword: 'Search keyword',
      icon: require('../assets/x.png'),
    },
    {
      keyword: 'Search keyword',
      icon: require('../assets/x.png'),
    },
  ]
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header shopName='Search' />
        <View style={styles.searchContainer}>
          <Image
            source={require('../assets/search.png')}
            style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Search Product"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.searches}>
          <Text style={styles.text}>Recent Search</Text>
          <TouchableOpacity>
            <Text style={styles.clear}>Clear All</Text>
          </TouchableOpacity>
        </View>
        <View>
          {
            dummyData.map((item, index) => {
              return (
                <View style={[styles.list, {
                  borderBottomWidth: index === dummyData.length - 1 ? 0 : 1,
                }]}>
                  <Text>{item.keyword}</Text>
                  <TouchableOpacity>
                    <Image
                      style={styles.icon1}
                      source={item.icon}
                      key={index}
                    />
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </View>
      </View>
      <View style={styles.category}>
        <View>
        <Text style={styles.text}>Category</Text>
        </View>
        <FlatList 
        columnWrapperStyle={{ marginTop: 20, justifyContent: 'space-evenly', marginBottom: 30 }}
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
          }
        ]}
        renderItem={({ item, index }) => {

          return <View key={index}>
            <Image source={item.image} style={styles.image} />
            <Text>{item.name}</Text>
          </View>
        }}
        numColumns={4}
        />
      </View>
    </ScrollView>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginLeft: 20,
    marginRight: 20,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginLeft: 10
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  searches: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  clear: {
    color: '#1A94FF',
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderBottomColor: '#ccc'
  },
  icon1: {
    width: 30,
    height: 30,
  },
  category: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: 10,
    marginTop : 10,
    marginBottom: 15
  },
  image: {
    width: 55,
    height: 55,
    marginBottom: 7,
  }
})