import firestore from '@react-native-firebase/firestore';

export const addUser = async (data) => {
    await firestore().collection('Users').doc(data.uid).set(data);
};

export const getAllUsers = async () => {
    const usersSnapshot = await firestore().collection('Users').get();
    return usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const sendMessage = async (text, senderId, recieverId) => {
    await firestore().collection('messages').doc(senderId + recieverId).set({
        senderId,
        recieverId,
    })
    if (text.trim()) {
        await firestore().collection('messages').doc(senderId + recieverId).collection('chat').add({
            text,
            createdAt: firestore.FieldValue.serverTimestamp(),
            users: [senderId, recieverId]
        })
    }

}

// Function to get messages in real-time
export const getMessages = (senderId, receiverId, callback) => {
    const chatId = senderId + receiverId; // Create a unique chat ID

    // Listen for real-time updates
    const unsubscribe = firestore()
        .collection('messages')
        .doc(chatId)
        .collection('chat')
        .orderBy('createdAt')
        .onSnapshot(snapshot => {
            const messages = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            // Call the callback with the new messages
            callback(messages);
        });

    // Return a function to unsubscribe from the listener when no longer needed
    return unsubscribe;
};