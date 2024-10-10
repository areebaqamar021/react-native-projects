import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ChatRoom = ({ route }) => {
  const userId = route.params;

  return (
    <View style={styles.container}>
      {/* {user && ( */}
      <View style={styles.header}>
        <Text style={styles.headerText}>{user.name}</Text>
      </View>
      {/* )} */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type a message"
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  )
}

export default ChatRoom

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontWeight: 'bold',
  },
  // message: {
  //     padding: 10,
  //     marginVertical: 5,
  //     backgroundColor: '#e1ffc7',
  //     borderRadius: 10,
  // },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

