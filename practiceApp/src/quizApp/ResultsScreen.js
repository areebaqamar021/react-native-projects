import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ResultsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quiz Finished!</Text>
            <Button title="Back to Quiz" onPress={() => navigation.navigate('Start')} />
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

export default ResultsScreen;
