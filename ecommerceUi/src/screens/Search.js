import { StyleSheet, Image, View, TextInput } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const Search = () => {
  return (
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
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
})