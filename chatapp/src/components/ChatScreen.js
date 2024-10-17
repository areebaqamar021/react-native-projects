import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, Alert, SafeAreaView,} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ChatScreen = ({route}) => {
  const {roomId, roomName} = route.params;
  const [messages, setMessages] = useState([]);
  const user = auth().currentUser;
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
            const data = {
              _id: doc.id,
              text: '',
              createdAt: new Date().getTime(),
              ...firebaseData,
            };
            if (!firebaseData.system) {
              data.user = {
                _id: firebaseData.user._id,
                name: firebaseData.user.name,
              };
            }
            return data;
          });
          setMessages(messagesFirestore);
        },
        error => {
          Alert.alert('Error', 'Failed to load messages.',error);
        },
      );
    return () => unsubscribe();
  }, []);

  const onSend = useCallback((messages = []) => {
    const writes = messages.map(m =>
      firestore()
        .collection('chatRooms')
        .doc(roomId)
        .collection('messages')
        .add({...m, createdAt: firestore.FieldValue.serverTimestamp()}),
    );
    Promise.all(writes).catch(err => {
      Alert.alert('Error', 'Failed to send message.',err);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: user.uid,
        name: user.displayName || 'Anonymous',
      }}
    />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }});

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