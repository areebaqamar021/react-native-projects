// ChatScreen.js
import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, Alert, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Message from './Message';
import Input from './Input';

const ChatScreen = ({ route }) => {
    const { userId } = route.params;
    const user = auth().currentUser;
    const [messages, setMessages] = useState([]);
    const [roomId, setRoomId] = useState(null);

    if (!user) {
        console.error("User is not authenticated.");
        return <View><Text>User not authenticated</Text></View>;
    }

    console.log("Authenticated User ID:", user.uid);

    useEffect(() => {
        // Generate room ID based on user IDs
        const generateRoomId = (id1, id2) => (id1 < id2 ? `${id1}_${id2}` : `${id2}_${id1}`);
        console.log(generateRoomId);
        setRoomId(generateRoomId(user.uid, userId));

        const unsubscribe = firestore()
            .collection('chatRooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const messagesFirestore = querySnapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setMessages(messagesFirestore);
                },
                error => {
                    console.error("Error loading messages:", error);
                    Alert.alert('Error', 'Failed to load messages.');
                }
            );

        return () => unsubscribe();
    }, [roomId]);

    const sendMessage = useCallback(async (text) => {
        if (text.trim() === '') {
            Alert.alert('Validation', 'Message cannot be empty.');
            return;
        }

        const message = {
            text,
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
        } catch (err) {
            console.error("Error sending message:", err);
            Alert.alert('Error', 'Failed to send message.');
        }
    }, [roomId, user.uid]);

    const renderItem = ({ item }) => (
        <Message message={item} currentUserId={user.uid} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                inverted // Show the latest message at the bottom
            />
            <Input onSend={sendMessage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

export default ChatScreen;
