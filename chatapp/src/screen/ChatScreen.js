import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { GiftedChat, Bubble, InputToolbar } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';

Icon.loadFont().then();

const ChatScreen = ({ user, route }) => {
  const [messages, setMessages] = useState([]);
  const { uid } = route.params;

  const getAllMessages = async () => {
    const docId = uid > user.uid ? user.uid + "-" + uid : uid + "-" + user.uid;
    const msgResponse = await firestore()
      .collection('Chats')
      .doc(docId)
      .collection('messages')
      .orderBy('createdAt', "desc")
      .get();

    const allTheMsgs = msgResponse.docs.map(docSnap => {
      return {
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt.toDate()
      };
    });

    setMessages(allTheMsgs);
  };

  useEffect(() => {
    getAllMessages();
  }, []);

  const onSend = (msgArray) => {
    const msg = msgArray[0];
    const userMsg = {
      ...msg,
      sentBy: user.uid,
      sentTo: uid,
      createdAt: new Date(),
    };

    setMessages(previousMessages => GiftedChat.append(previousMessages, userMsg));
    const docId = uid > user.uid ? user.uid + "-" + uid : uid + "-" + user.uid;

    firestore()
      .collection('Chats')
      .doc(docId)
      .collection('messages')
      .add({ ...userMsg, createdAt: firestore.FieldValue.serverTimestamp() });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <GiftedChat
        messages={messages}
        onSend={text => onSend(text)}
        user={{
          _id: user.uid,
        }}
        renderBubble={(props) => (
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: "#009387",
              },
            }}
          />
        )}
        renderInputToolbar={(props) => (
          <InputToolbar
            {...props}
            containerStyle={{ borderTopWidth: 1.5, borderTopColor: '#009387' }}
            textInputStyle={{ color: "black" }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


