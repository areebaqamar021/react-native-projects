import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { sendMessage, getMessages } from '../services/firestoreService';
import auth from '@react-native-firebase/auth';

const ChatRoom = ({ route }) => {
  const params = route.params;
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const currentUser = auth().currentUser;

  useEffect(() => {
    const unsubscribe = getMessages(currentUser.uid, params.uid, (fetchedMessages) => {
      setMessages(fetchedMessages);
    });

    return () => unsubscribe();
  }, [currentUser.uid, params.uid]);

  const handleMessage = async () => {
    try {
      await sendMessage(input, currentUser.uid, params.uid);
      setInput('');
    } catch (e) {
      console.log("error", e);
    }
  };

  const renderItem = ({ item }) => {
    const isCurrentUser = item.userId === currentUser.uid;
    return (
      <View style={[styles.messageContainer, isCurrentUser ? styles.sentMessage : styles.receivedMessage]}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
    <View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type a message"
        />
        <TouchableOpacity style={styles.button} onPress={handleMessage}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    // marginBottom: 25,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  messageContainer: {
    maxWidth: '75%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 15,
  },
  sentMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#007BFF',
    marginLeft: 20,
  },
  receivedMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#e1e1e1',
    marginRight: 20,
  },
  messageText: {
    fontSize: 16,
  },
  sentMessageText: {
    color: '#fff', 
  },
  receivedMessageText: {
    color: '#000', 
  },
});

