import { StyleSheet, SafeAreaView, TextInput, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('')

  const createUser = () => {

    setError('');

    if (password === '' || confirmPassword === '') {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
      Alert.alert('Success', 'User account created successfully!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        setError('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        setError('That email address is invalid!');
      } else {
        setError('An error occurred, please try again.');
      }
      console.error(error);
    });
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
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
        placeholder="Enter your password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry
        autoCorrect={false}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null} {/* Error message */}

      <TouchableOpacity style={styles.button} onPress={createUser}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.link}>
        Already have an account?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Login</Text>
        </TouchableOpacity>
      </Text>
    </SafeAreaView>
  );
};

export default SignUp

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
  errorText: {
    color: 'red',
    marginTop: 8,
    textAlign: 'center',
  },
})