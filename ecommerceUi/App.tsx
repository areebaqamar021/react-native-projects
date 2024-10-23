import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Header from './src/components/Header';
import Main from './src/screens/Main';

const App = () => {
  return (
    <SafeAreaView>
    <View>
       <Main/>
    </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})