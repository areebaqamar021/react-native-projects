import { StyleSheet, TextInput, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ChatList from '../components/ChatList';

const HomeScreen = ({route}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search Users..."
            />
            <ChatList currentUserId={route.params?.user?.uid}/>
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