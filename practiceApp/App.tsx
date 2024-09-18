import React from 'react';
import { View, Button, Text } from 'react-native';
import TimerApp from './src/components/TimerApp';
import CalendarComponent from './src/components/myCalender';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotesApp from './src/components/NotesScreen';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Main Menu</Text>
      <Button title="Calendar" onPress={() => navigation.navigate('Calendar')} />
      <Button title="Timer" onPress={() => navigation.navigate('Timer')} />
      <Button title="Notes" onPress={() => navigation.navigate('Notes')} />
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
        <Stack.Screen name='Notes' component={NotesApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
