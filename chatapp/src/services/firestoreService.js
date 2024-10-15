import firestore from '@react-native-firebase/firestore';

export const addUser = async (data) => {
    await firestore().collection('Users').doc(data.uid).set(data);
};

export const getAllUsers = async () => {
    const usersSnapshot = await firestore().collection('Users').get();
    return usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const sendMessage = async (text, senderId, recieverId) => {
    const chatId = senderId + recieverId;
    // await firestore()
    //     .collection('messages')
    //     .doc(chatId)
    //     .set({
    //         senderId,
    //         recieverId,
    //     })
    if (text.trim()) {
        await firestore()
            .collection('messages')
            .doc(chatId).
            collection('chat')
            .add({
                text,
                createdAt: firestore.FieldValue.serverTimestamp(),
                users: [senderId, recieverId],
                senderId,
                recieverId
            })
    }
}

export const getMessages = (senderId, receiverId, callback) => {
    const chatId = senderId + receiverId;

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
            // console.log('Fetched messages:', messages);
            callback(messages);
        });

    return unsubscribe;
};


