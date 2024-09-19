import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
    return (
      <SafeAreaView>
        <View style={styles.container}>
            <Icon name="bars" size={24} color="#000" style={styles.icon} />
            <Ionicons name="shirt" size={24} color="#000" style={styles.icon} />
            <Text style={styles.title}>Home</Text>
            <Icon name="search" size={24} color="#000" style={styles.icon} />
            <Icon name="shopping-bag" size={24} color="#000" style={styles.icon} />
        </View>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#f8f8f8', 
    },
    icon: {
      marginHorizontal: 10,
    },
    title: {
      flex: 1,
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
  
  export default Header;