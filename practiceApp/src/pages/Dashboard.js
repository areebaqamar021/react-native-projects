import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const Dashboard = ({ navigation }) => {
  const { backgroundColor, color, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={{ color }}>Dashboard Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
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

export default Dashboard;
