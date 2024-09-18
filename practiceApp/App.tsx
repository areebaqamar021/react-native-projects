import React from 'react';
import { View, Button, Text } from 'react-native';
import TimerApp from './src/components/TimerApp';
import CalendarComponent from './src/components/myCalender';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Main Menu</Text>
      <Button title="Open Calendar" onPress={() => navigation.navigate('Calendar')} />
      <Button title="Open Timer" onPress={() => navigation.navigate('Timer')} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Calendar" component={CalendarComponent} />
        <Stack.Screen name="Timer" component={TimerApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
