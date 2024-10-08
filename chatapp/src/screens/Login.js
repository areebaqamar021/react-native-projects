import { StyleSheet, SafeAreaView, TextInput, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {

    setError('');

    if (email === '' || password === '') {
      setError('Please fill in all fields.');
      return;
    }

    auth()
      .signInWithEmailAndPassword(email.trim(), password)
      .then(() => {
        console.log('User logged In');
        Alert.alert('Success', 'Logged In successfully!');
      })
      .catch(error => {
        if (error.code === 'auth/user not found') {
          setError('No user found with this email');
        } else if (error.code === 'auth/wrong password') {
          setError('Incorrect password.');
        } else {
          setError('An error occurred, please try again.');
        }
        console.error(error);
      });
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        autoCorrect={false}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
  },
  errorText: {
    color: 'red',
    marginTop: 8,
    textAlign: 'center',
  },
})