import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const StartScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Quiz!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quiz')}>
                <Text style={styles.buttonText}>Start Quiz</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#c2e9fb',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#007bff',
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#007bff',
        color: 'white',
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default StartScreen;
