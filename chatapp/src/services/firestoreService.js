import firestore from '@react-native-firebase/firestore';

export const addUser = async (data) => {
    await firestore().collection('Users').doc(data.uid).set(data);
};

export const getAllUsers = async () => {
    const usersSnapshot = await firestore().collection('Users').get();
    return usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const createChatRoom = async roomName => {
  try {
    const roomRef = await firestore()
      .collection('chatRooms')
      .add({name: roomName, createdAt: firestore.FieldValue.serverTimestamp()});
    return roomRef;
  } catch (error) {
    throw error;
  }
};

export const getChatRooms = (setChatRooms) => {
  return firestore()
    .collection('chatRooms')
    .orderBy('createdAt', 'desc')
    .onSnapshot(snapshot => {
      const rooms = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setChatRooms(rooms);
    });
};

















// const getUserNameById = async (userId) => {
//     const userDoc = await firestore().collection('Users').doc(userId).get(); 
//     console.log("userDoc", userDoc);
//     return userDoc.exists ? userDoc.data().name : null;
// };

// export const sendMessage = async (text, senderId, receiverId) => {
//     const chatRoomId = await createOrGetChatRoom(senderId, receiverId);
  
    // Add the message to the messages sub-collection
    // const messageRef = firestore()
    //   .collection('chatrooms')
    //   .doc(chatRoomId)
    //   .collection('messages');
  
    // await messageRef.add({
    //   text,
    //   senderId,
    //   createdAt: firestore.FieldValue.serverTimestamp(),
    // });
  
    // Update the last message and timestamp in the chat room
  //   await firestore()
  //     .collection('chatrooms')
  //     .doc(chatRoomId)
  //     .update({
  //       lastMessage: text,
  //       updatedAt: firestore.FieldValue.serverTimestamp(),
  //     });
  // };
  

//   export const getMessages = (senderId, receiverId, callback) => {
//     const chatRoomId = [senderId, receiverId].sort().join('_'); 
  
//     const unsubscribe = firestore()
//       .collection('chatrooms')
//       .doc(chatRoomId)
//       .collection('messages')
//       .orderBy('createdAt', 'asc')
//       .onSnapshot(snapshot => {
//         const messages = snapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         callback(messages);
//       });
  
//     return unsubscribe;
//   };
  

// export const createOrGetChatRoom = async (senderId, receiverId) => {
//   const chatRoomId = [senderId, receiverId].sort().join('_'); 

//   const chatRoomRef = firestore().collection('chatrooms').doc(chatRoomId);

//   const chatRoomSnapshot = await chatRoomRef.get();
  
//   if (!chatRoomSnapshot.exists) {
//     await chatRoomRef.set({
//       participants: [senderId, receiverId],
//       createdAt: firestore.FieldValue.serverTimestamp(),
//       updatedAt: firestore.FieldValue.serverTimestamp(),
//       lastMessage: '',
//     });
//   }
  
//   return chatRoomId; 
// };

// export const getChatRooms = async (userId) => {
//     const chatRoomsSnapshot = await firestore()
//       .collection('chatrooms')
//       .where('messages', 'array-contains', userId)
//       .orderBy('updatedAt', 'desc')
//       .get();
  
//     return chatRoomsSnapshot.docs.map(doc => ({
//       id: doc.id, 
//       ...doc.data(), 
//     }));
//   };
  

