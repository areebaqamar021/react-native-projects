import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import HomeScreen from './src/screens/HomeScreen';
import auth from '@react-native-firebase/auth';
import UsersList from './src/components/UsersList';
import ChatRoom from './src/components/ChatRoom';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatScreen from './src/components/ChatScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  function onAuthStateChanged(user) {
    console.log(user, "=== user")
    setUser(user);
    
    if (initializing) {
      setInitializing(false);
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "Home" : "Login"} >
        {user ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen}  options={{ //initialParams={{ user }}
              headerRight: () => <TouchableOpacity>
                <Icon name="ellipsis-vertical-sharp" size={20} />
              </TouchableOpacity>
            }} />
            <Stack.Screen name="Users" component={UsersList} />
            <Stack.Screen name="ChatRoom" component={ChatRoom} />
            <Stack.Screen name="Chat" component={ChatScreen} />
          </>
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
