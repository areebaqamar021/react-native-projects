import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { sendMessage, getMessages, createOrGetChatRoom } from '../services/firestoreService';
import auth from '@react-native-firebase/auth';

const ChatRoom = ({ route }) => {
  const params = route.params;
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const flatListRef = useRef(null); 

  useEffect(() => {
    const user = auth().currentUser;
    if (user) {
      setCurrentUser(user);
    } else {
      console.error("Current user is not logged in");
    }
  }, []);

  useEffect(() => {
    if (!currentUser) return;

    const unsubscribe = getMessages(params?.senderId, params?.recieverId, (fetchedMessages) => {
      setMessages(fetchedMessages);
      if (!fetchedMessages.length) {
        createOrGetChatRoom(params, currentUser); 
      }
      flatListRef.current?.scrollToEnd({ animated: true });
    });

    return () => unsubscribe(); 
  }, [currentUser, params]);

  const handleMessage = async () => {
    if (!currentUser) {
      console.error("Cannot send message; no current user");
      return;
    }
    try {
      await sendMessage(input, params.senderId, params.receiverId);
      setInput('');
    } catch (e) {
      console.error(["Error sending message", e]);
    }
  };

  const renderItem = ({ item }) => {
    const isCurrentUser = item.senderId === currentUser.uid;
    return (
      <View style={[styles.messageContainer, isCurrentUser ? styles.sentMessage : styles.receivedMessage]}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}  // Auto-scroll when content changes
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
    </SafeAreaView>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
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
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e1e1e1',
    marginLeft: 20,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007BFF',
    marginRight: 20,
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
});
