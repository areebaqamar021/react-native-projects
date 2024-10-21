import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Platform,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [data, setData] = useState({
    secureTextEntry: true,
  });

  const updateSecureText = () => {
    setData({
      secureTextEntry: !data.secureTextEntry,
    });
  };

  // Register user
  const userRegistration = async () => {
    setError('');

    if (password === '' || confirmPassword === '') {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (!email || !password || !name) {
      alert('Please fill out the empty fields');
      return;
    }
    try {
      const newReg = await auth().createUserWithEmailAndPassword(email, password);
      await firestore().collection('users').doc(newReg.user.uid).set({
        name: name,
        email: newReg.user.email,
        uid: newReg.user.uid,
      });
      alert('Registration successful');
    } catch (err) {
      alert('Registration Unsuccessful! Try again');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <TextInput
        placeholder="Full Name"
        style={styles.textInput}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry={data.secureTextEntry}
          style={styles.passwordInput}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={updateSecureText} style={styles.showHideButton}>
          <Text style={styles.showHideText}>
            {data.secureTextEntry ? 'Show' : 'Hide'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={data.secureTextEntry}
          style={styles.passwordInput}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={updateSecureText} style={styles.showHideButton}>
          <Text style={styles.showHideText}>
            {data.secureTextEntry ? 'Show' : 'Hide'}
          </Text>
        </TouchableOpacity>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={userRegistration}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <Text style={styles.link}>Already Don't have an account? {''}
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.linkText}>Sign in</Text>
      </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    color: '#000',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',  
    marginBottom: 20,
    overflow: 'hidden', 
  },
  passwordInput: {
    flex: 1,
    padding: 10,
    color: '#000',
  },
  showHideButton: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  showHideText: {
    color: '#007BFF',
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
    textAlign: 'center'
  },
  linkText: {
    color: '#0EA5E9',
    textDecorationLine: 'underline',
  },
});
