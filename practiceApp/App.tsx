import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import TimerApp from './src/components/TimerApp';
import CalendarComponent from './src/components/myCalender';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <TimerApp />
      <CalendarComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default App;
