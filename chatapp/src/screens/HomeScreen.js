import { Text, StyleSheet, TextInput, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logout from './Logout';
import auth from '@react-native-firebase/auth';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [currentUserId, setCurrentUserId] = useState(null);
    const [chatUsers, setChatUsers] = useState([]);

    useEffect(() => {
        const fetchChatUsers = async () => {
            const currentUser = auth().currentUser;

            const chatsSnapshot = await firestore()
                .collection('chats')
                .where('users', 'array-contains', currentUser.uid)
                .get();

            const users = chatsSnapshot.docs.map(doc => {
                const chatData = doc.data();
                const otherUser = chatData.users.find(userId => userId !== currentUser.uid);
                return { id: doc.id, otherUser };
            });

            setChatUsers(users);
        };

        fetchChatUsers();
    }, []);

    useEffect(() => {
        const user = auth().currentUser;
        if (user) {
            setCurrentUserId(user.uid);
        } else {
            console.error("User is not logged in.");
        }
    }, []);

    const goToChatRoom = (chatId, otherUserId) => {
        navigation.navigate('ChatRoom', { chatId, otherUserId });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search Users..."
            />
            {/* <FlatList
                data={chatUsers}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => goToChatRoom(item.id, item.otherUser)}>
                        <Text>Chat with {item.otherUser}</Text>
                    </TouchableOpacity>
                )}
            /> */}
            <Logout />
            {/* {currentUserId ? (
                <ChatRoomList userId={currentUserId} navigation={props.navigation} />
            ) : (
                <Text>User not logged in</Text>
            )} */}
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Users', { currentUserId })}>
                <Icon name="add-box" size={50} />
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBar: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
        margin: 20,
        borderRadius: 20
    },
    addButton: {
        bottom: 40,
        right: 35,
        position: 'absolute',
    }
})