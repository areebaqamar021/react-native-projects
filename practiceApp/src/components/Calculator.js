import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonPress = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const clearInput = () => {
    setInput('');
  };

  const calculateResult = () => {
    try {
      const result = eval(input); 
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.input}>{input}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <Button title="1" onPress={() => handleButtonPress('1')} />
          <Button title="2" onPress={() => handleButtonPress('2')} />
          <Button title="3" onPress={() => handleButtonPress('3')} />
          <Button title="+" onPress={() => handleButtonPress('+')} />
        </View>
        <View style={styles.row}>
          <Button title="4" onPress={() => handleButtonPress('4')} />
          <Button title="5" onPress={() => handleButtonPress('5')} />
          <Button title="6" onPress={() => handleButtonPress('6')} />
          <Button title="-" onPress={() => handleButtonPress('-')} />
        </View>
        <View style={styles.row}>
          <Button title="7" onPress={() => handleButtonPress('7')} />
          <Button title="8" onPress={() => handleButtonPress('8')} />
          <Button title="9" onPress={() => handleButtonPress('9')} />
          <Button title="*" onPress={() => handleButtonPress('*')} />
        </View>
        <View style={styles.row}>
          <Button title="C" onPress={clearInput} />
          <Button title="0" onPress={() => handleButtonPress('0')} />
          <Button title="=" onPress={calculateResult} />
          <Button title="/" onPress={() => handleButtonPress('/')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    fontSize: 36,
    textAlign: 'right',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
});

export default Calculator;
