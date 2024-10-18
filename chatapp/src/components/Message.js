// Message.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = ({ message, currentUserId }) => {
    const isMyMessage = message.user._id === currentUserId;

    return (
        <View style={[styles.messageContainer, isMyMessage ? styles.myMessage : styles.otherMessage]}>
            <Text style={styles.userName}>{message.user.name}:</Text>
            <Text style={styles.messageText}>{message.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    messageContainer: {
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        maxWidth: '80%',
    },
    myMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#dcf8c6',
    },
    otherMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#f1f1f1',
    },
    userName: {
        fontWeight: 'bold',
    },
    messageText: {
        marginTop: 2,
    },
});

export default Message;
