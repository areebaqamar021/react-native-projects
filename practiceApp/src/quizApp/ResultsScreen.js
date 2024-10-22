import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ResultsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quiz Finished!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Start')}>
                <Text style={styles.buttonText}>Start Over</Text>
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

export default ResultsScreen;
