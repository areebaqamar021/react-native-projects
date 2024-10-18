import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../services/firestoreService';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await getAllUsers();
                const currentUser = auth().currentUser;
                const filteredUser = usersData.filter((user) => user.id !== currentUser.uid);
                setUsers(filteredUser);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchUsers();
    }, []);

    // Function to generate room ID
    const generateRoomId = (userId1, userId2) => {
        return userId1 < userId2 ? `${userId1}_${userId2}` : `${userId2}_${userId1}`;
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => {
                const currentUser = auth().currentUser;
                const roomId = generateRoomId(currentUser.uid, item.id); // Generate the room ID
                navigation.navigate('Chat', { roomId }); // Navigate to ChatScreen
            }}>
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

export default UsersList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    listContainer: {
        paddingTop: 20,
    },
    item: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
});
