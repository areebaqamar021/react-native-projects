import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';

const HomeScreen = ({ navigation }) => {
    const handleLogout = () => {
        auth()
            .signOut()
            .then(() => {
                navigation.navigate('Login');
            });
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