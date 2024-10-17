import { Text, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ChatRoomList from '../components/ChatScreen';
import Logout from './Logout';
import auth from '@react-native-firebase/auth';

const HomeScreen = () => {
    const navigation = useNavigation();
    // const [currentUserId, setCurrentUserId] = useState(null);

    // useEffect(() => {
    //     const user = auth().currentUser;
    //     if (user) {
    //         setCurrentUserId(user.uid);
    //     } else {
    //         console.error("User is not logged in.");
    //     }
    // }, []);
  
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search Users..."
            />
            {/* {currentUserId ? (
                <ChatRoomList userId={currentUserId} navigation={props.navigation} />
            ) : (
                <Text>User not logged in</Text>
            )} */}
            <Logout />
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Users')}>
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