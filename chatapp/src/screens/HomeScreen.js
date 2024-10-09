import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {

    const navigation = useNavigation();

    const handleLogout = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    };

    return (
        <View style={styles.container}>
            <Text>Welcome to Home Screen!</Text>
            <Button title="Logout" onPress={handleLogout} />
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        bottom: 40,
        right: 35,
        position: 'absolute',
    }
})