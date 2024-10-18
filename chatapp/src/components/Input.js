// Input.js
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const Input = ({ onSend }) => {
    const [newMessage, setNewMessage] = useState('');

    const handleSend = () => {
        onSend(newMessage);
        setNewMessage(''); // Clear input after sending
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Type your message..."
                value={newMessage}
                onChangeText={setNewMessage}
            />
            <Button title="Send" onPress={handleSend} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
    },
});

export default Input;
