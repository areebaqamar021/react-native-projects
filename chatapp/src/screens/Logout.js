import { StyleSheet, Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';
import React from 'react'

const Logout = () => {
    const handleLogout = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    };
  return (
    <View>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  )
}

export default Logout

const styles = StyleSheet.create({})