import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import '@react-native-firebase/app'; 
import auth from '@react-native-firebase/auth';  

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('User registered successfully!');
    } catch (error) {
      console.log(error, 'error');
    }
  };

  const signIn = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('User signed in successfully!');
    } catch (error) {
      console.log(error, 'error');    
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <Button title="Sign Up" onPress={signUp} />
      <Button title="Sign In" onPress={signIn} />
    </View>
  );
};

export default App;
