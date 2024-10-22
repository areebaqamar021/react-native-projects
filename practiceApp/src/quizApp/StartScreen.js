import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const StartScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Quiz!</Text>
            <Button title="Start Quiz" onPress={() => navigation.navigate('Quiz')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default StartScreen;
