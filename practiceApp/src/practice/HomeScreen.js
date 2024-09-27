import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = props => {
  return (
    <SafeAreaView>
    <View>
      <Text style={styles.Text}>Hi! There</Text>
      <Button 
      onPress={() => props.navigation.navigate('Component')}
      title='Go to components Demo'
      />
      <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    Text: {
        fontSize: 30
    }
})