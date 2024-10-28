import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Main from './src/screens/Main';
import BottomNav from './src/components/BottomNav';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <Main />
      <BottomNav />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})