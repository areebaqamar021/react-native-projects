import firestore from '@react-native-firebase/firestore';

export const addUser = async (data) => {
    await firestore().collection('Users').doc(data.uid).set(data);
};

export const getAllUsers = async () => {
    const usersSnapshot = await firestore().collection('Users').get(); 
    return usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};