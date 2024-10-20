import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import ProfileScreen from './src/screen/ProfileScreen';
import ChatScreen from './src/screen/ChatScreen';
import SignupScreen from './src/screen/SignupScreen';
import SigninScreen from './src/screen/SigninScreen';
import MessageScreen from './src/screen/MessageScreen';


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
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#009387' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        {user ? (
          <>
            <Stack.Screen
              name="Messages"
              component={MessageScreen}
              initialParams={{ user }} // Pass user prop if needed
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              initialParams={{ user }} // Pass user prop if needed
            />
            <Stack.Screen
              name="Chats"
              options={({ route }) => ({
                title: route.params?.name,
                headerBackTitleVisible: false,
              })}
            >
              {(props) => <ChatScreen {...props} user={user} />}
            </Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen
              name="Signin"
              component={SigninScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={SignupScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  iconColor: {
    color: '#009387', // Corrected color code format
  },
});


