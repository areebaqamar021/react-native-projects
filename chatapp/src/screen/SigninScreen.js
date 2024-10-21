import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const SigninScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState({
    secureTextEntry: true
  });

  const updateSecureText = () => {
    setData({
      secureTextEntry: !data.secureTextEntry
    });
  }

  const userSignin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      const user = auth().currentUser;
      console.log('Signed in user:', user);
      navigation.navigate('MessageScreen', { user });
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <Text style={styles.subHeader}>Enter your email and password to login.</Text>

      <TextInput
        placeholder="Email"
        style={styles.textInput}
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry={data.secureTextEntry ? true : false}
          style={styles.textInputPassword}
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={updateSecureText} style={styles.showHideButton}>
          <Text style={styles.showHideText}>
            {data.secureTextEntry ? "Show" : "Hide"}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={userSignin}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.link}>Don't have an account? {''}
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.linkText}>
            SignUp
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center'
  },
  subHeader: {
    fontSize: 14,
    color: '#7d7d7d',
    marginBottom: 30,
    textAlign: 'center'
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 30,
    paddingBottom: 5,
    color: '#000'
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 30
  },
  textInputPassword: {
    flex: 1,
    paddingBottom: 5,
    color: '#000'
  },
  showHideButton: {
    padding: 5
  },
  showHideText: {
    color: '#1c1c1e',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  link: {
    marginTop: 10,
    textAlign: 'center'
  },
  linkText: {
    color: '#0EA5E9',
    textDecorationLine: 'underline',
  },
  signupText: {
    color: '#000',
    textAlign: 'center',
    marginTop: 10
  }
});
