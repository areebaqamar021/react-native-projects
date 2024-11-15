import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';

const mainCategories = [
  { id: '1', name: 'Category 1', icon: 'https://path/to/icon1' },
  { id: '2', name: 'Category 2', icon: 'https://path/to/icon2' },
  // ...more main categories
];

const subCategories = [
  { id: '1.1', name: 'Category 1.1', icon: 'https://path/to/subicon1' },
  { id: '1.2', name: 'Category 1.2', icon: 'https://path/to/subicon2' },
  // ...more subcategories within a category
];

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState('1');
  return (
    <View>
      <Header shopName={'Category'} />
      <View style={styles.container}>
      {/* Sidebar for Main Categories */}
      <View style={styles.sidebar}>
        <FlatList
          data={mainCategories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.categoryButton, item.id === selectedCategory && styles.selectedCategory]}
              onPress={() => setSelectedCategory(item.id)}
            >
              <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
              <Text style={[styles.categoryText, item.id === selectedCategory && styles.selectedText]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Main Content Area for Subcategories */}
      <ScrollView contentContainerStyle={styles.mainContent}>
        <Text style={styles.mainCategoryTitle}>Category {selectedCategory}</Text>
        <FlatList
          data={subCategories} // Filter this list based on selected main category if needed
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.subCategoryContainer}>
              <Image source={{ uri: item.icon }} style={styles.subCategoryIcon} />
              <Text style={styles.subCategoryText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  sidebar: {
    width: 100,
    backgroundColor: '#e6eaf2',
    paddingVertical: 20,
    alignItems: 'center',
  },
  categoryButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 12,
    color: '#7a7a7a',
    marginTop: 5,
  },
  selectedCategory: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 5,
  },
  selectedText: {
    color: '#3498db',
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    padding: 20,
  },
  mainCategoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 10,
  },
  subCategoryContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
  },
  subCategoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  subCategoryText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
    color: '#7a7a7a',
  },
})