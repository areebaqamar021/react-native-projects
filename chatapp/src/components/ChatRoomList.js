import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { getChatRooms } from '../services/firestoreService';
import { useEffect, useState } from 'react'


const ChatRoomList = ({ userId, navigation }) => {
    const [chatRooms, setChatRooms] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchChatRooms = async () => {
            try {
                const fetchedChatRooms = await getChatRooms(userId);
                setChatRooms(fetchedChatRooms);
            } catch (error) {
                setError('Error fetching chat rooms', error);
                console.error('Error fetching chat rooms:', error);
            }
        };
        fetchChatRooms();
    }, [userId]);    

    if (error) {
        return (
            <View>
                <Text>{error}</Text>
            </View>
        )
    }
    
    return (
        <SafeAreaView>
            <FlatList
                data={chatRooms}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Chat", { senderId: userId, receiverId: item.receiverId })}>
                    <Text style={styles.chatRoomText}>{item.id}</Text>
                </TouchableOpacity>

                )}
            />
        </SafeAreaView>
    )
}

export default ChatRoomList

const styles = StyleSheet.create({})