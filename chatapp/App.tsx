import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import HomeScreen from './src/screens/HomeScreen';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  function onAuthStateChanged(user: any) {
    console.log(user, "=== user")
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={user ? "Home" : "Login"}>
      {user ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  </NavigationContainer>
  )
};

export default App;
