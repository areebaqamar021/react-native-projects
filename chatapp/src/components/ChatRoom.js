// ChatRoom.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ChatRoom = ({ route }) => {
  const { chatId, otherUserId } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('chats')
      .doc(chatId)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const fetchedMessages = [];
        querySnapshot.forEach(doc => {
          const messageData = doc.data();
          if (messageData.createdAt) {
            fetchedMessages.push({
              id: doc.id,
              ...messageData,
            });
          }
        });
        setMessages(fetchedMessages);
      });

    return unsubscribe;
  }, [chatId]);

  const sendMessage = async () => {
    const currentUser = auth().currentUser;

    if (message.length > 0) {
      await firestore()
        .collection('chats')
        .doc(chatId)
        .collection('messages')
        .add({
          text: message,
          createdAt: firestore.FieldValue.serverTimestamp(),  // Ensure that this is properly sent
          senderId: currentUser.uid,
        });

      setMessage('');  // Clear the message input after sending
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <FlatList
        data={messages}
        inverted
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.senderId === auth().currentUser.uid ? styles.myMessage : styles.otherMessage,
            ]}
          >
            <Text style={styles.messageText}>
              {item.senderId === auth().currentUser.uid ? 'Me' : otherUserId}: {item.text}
            </Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  messageContainer: {
    padding: 10,
    margin: 10,
    borderRadius: 8,
    maxWidth: '80%',
  },
  myMessage: {
    backgroundColor: '#dcf8c6',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#e1e1e1',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#0b93f6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ChatRoom;
