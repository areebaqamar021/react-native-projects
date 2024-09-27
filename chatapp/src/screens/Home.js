import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login'
import SignUp from './SignUp'

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Home

