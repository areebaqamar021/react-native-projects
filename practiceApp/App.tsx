import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import TimerApp from './src/components/TimerApp';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.welcome}>Welcome to React Native!</Text> */}
      <TimerApp />
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
