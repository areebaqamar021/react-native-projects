import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import { getAllUsers } from '../services/firestoreService'; // Adjust the path as needed

const HomeScreen = () => {
    const handleLogout = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    };
    return (
        <View>
            <Text>Welcome to Home Screen!</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

export default HomeScreen

const styles = StyleSheet.create({})