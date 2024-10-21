import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const ChatScreen = ({ user, route }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const { uid } = route.params;

  const getChatId = () => {
    return uid > user.uid ? `${user.uid}-${uid}` : `${uid}-${user.uid}`;
  };

  const getAllMessages = async () => {
    const docId = getChatId();
    const msgResponse = await firestore()
      .collection('Chats')
      .doc(docId)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .get();

    const allTheMsgs = msgResponse.docs.map(docSnap => ({
      ...docSnap.data(),
      createdAt: docSnap.data().createdAt.toDate(),
    }));

    setMessages(allTheMsgs);
  };

  useEffect(() => {
    getAllMessages();
  }, []);

  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const docId = getChatId();
    const message = {
      text: inputMessage,
      sentBy: user.uid,
      sentTo: uid,
      createdAt: new Date(),
    };

    setMessages(prevMessages => [message, ...prevMessages]);

    await firestore()
      .collection('Chats')
      .doc(docId)
      .collection('messages')
      .add({
        ...message,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

    setInputMessage('');
  };

  const renderMessage = ({ item }) => {
    const isSentByUser = item.sentBy === user.uid;
    return (
      <View
        style={[
          styles.messageContainer,
          isSentByUser ? styles.messageSent : styles.messageReceived,
        ]}
      >
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <FlatList
        data={messages}
        inverted
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderMessage}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={inputMessage}
          onChangeText={setInputMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messageContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    maxWidth: '75%',
  },
  messageSent: {
    alignSelf: 'flex-end',
    backgroundColor: '#007BFF',
  },
  messageReceived: {
    alignSelf: 'flex-start',
    backgroundColor: '#333',
  },
  messageText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#f9f9f9',
  },
  sendButton: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#000',
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

