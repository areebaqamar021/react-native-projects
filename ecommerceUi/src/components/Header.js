import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.shopName}>Shop name</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image 
            source={require('../assets/icons/cart.png')} 
            style={styles.cartIcon} 
          />
        </TouchableOpacity>
        <View style={styles.iconGroup}>
          <TouchableOpacity>
            <Image 
              source={require('../assets/icons/more.png')}
              style={styles.icon} 
            />
          </TouchableOpacity>
          <View style={styles.verticalLine} />
          <TouchableOpacity>
            <Image 
              source={require('../assets/icons/close.png')}  
              style={styles.icon} 
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,  
  },
  shopName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconGroup: {
    width: 70,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', 
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 15,
  },
  cartIcon: {
    width: 30, 
    height: 30, 
    marginHorizontal: 6,
  },
  icon: {
    width: 20, 
    height: 20, 
    marginHorizontal: 6,
  },
  verticalLine: {
    width: 1,
    height: 24, 
    backgroundColor: '#ccc', 
   
  },
});

export default Header;
