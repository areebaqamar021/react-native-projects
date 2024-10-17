import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, Alert, SafeAreaView, TextInput, Button, FlatList, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ChatScreen = ({ route }) => {
  const { roomId } = route.params;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const user = auth().currentUser;
//   console.log("=====user", user);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('chatRooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(
        querySnapshot => {
          const messagesFirestore = querySnapshot.docs.map(doc => {
            const firebaseData = doc.data();
            return {
              id: doc.id,
              text: firebaseData.text,
              createdAt: firebaseData.createdAt,
              user: {
                id: firebaseData.user._id,
                name: firebaseData.user.name,
              },
            };
          });
          setMessages(messagesFirestore);
        },
        error => {
          Alert.alert('Error', 'Failed to load messages.', error);
        },
      );
    return () => unsubscribe();
  }, [roomId]);

  const sendMessage = useCallback(async () => {
    if (newMessage.trim() === '') {
      Alert.alert('Validation', 'Message cannot be empty.');
      return;
    }
    const message = {
      text: newMessage,
      createdAt: firestore.FieldValue.serverTimestamp(),
      user: {
        _id: user.uid,
        name: user.displayName || 'Anonymous',
      },
    };

    try {
      await firestore()
        .collection('chatRooms')
        .doc(roomId)
        .collection('messages')
        .add(message);
      setNewMessage(''); // Clear input after sending
    } catch (err) {
      Alert.alert('Error', 'Failed to send message.', err);
    }
  }, [newMessage, user.uid, roomId]);

  const renderItem = ({ item }) => (
    <View style={[styles.messageContainer, item.user.id === user.uid ? styles.myMessage : styles.otherMessage]}>
      <Text style={styles.userName}>{item.user.name}:</Text>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        inverted 
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    maxWidth: '80%',
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f1f1',
  },
  userName: {
    fontWeight: 'bold',
  },
  messageText: {
    marginTop: 2,
  },
});

export default ChatScreen;




















// import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
// import { getChatRooms } from '../services/firestoreService';
// import { useEffect, useState } from 'react'


// const ChatRoomList = ({ userId, navigation }) => {
//     const [chatRooms, setChatRooms] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchChatRooms = async () => {
//             try {
//                 const fetchedChatRooms = await getChatRooms(userId);
//                 setChatRooms(fetchedChatRooms);
//             } catch (error) {
//                 setError('Error fetching chat rooms', error);
//                 console.error('Error fetching chat rooms:', error);
//             }
//         };
//         fetchChatRooms();
//     }, [userId]);    

//     if (error) {
//         return (
//             <View>
//                 <Text>{error}</Text>
//             </View>
//         )
//     }
    
//     return (
//         <SafeAreaView>
//             <FlatList
//                 data={chatRooms}
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => (
//                     <TouchableOpacity onPress={() => navigation.navigate("Chat", { senderId: userId, receiverId: item.receiverId })}>
//                     <Text style={styles.chatRoomText}>{item.id}</Text>
//                 </TouchableOpacity>

//                 )}
//             />
//         </SafeAreaView>
//     )
// }

// export default ChatRoomList

// const styles = StyleSheet.create({})