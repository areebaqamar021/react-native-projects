// screens/Home.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const Home1 = ({ navigation }) => {
  const { backgroundColor, color, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={{ color }}>Home Screen</Text>
      <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home1;
