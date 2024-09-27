import { StyleSheet, SafeAreaView, TextInput, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your password"
      />
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
        <Text style={styles.link}>Don't have an account? {''}
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.linkText}>
            SignUp
        </Text>
        </TouchableOpacity>
        </Text>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 180
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%'
  },
  button: {
    marginTop: 10,
    backgroundColor: '#000',
    paddingVertical: 15,
    width: '25%',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
  link: {
    fontSize: 18,
    marginTop: 10
  },
  linkText: {
    color: '#0EA5E9', 
    textDecorationLine: 'underline',
  }
})