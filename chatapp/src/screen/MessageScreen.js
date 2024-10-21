import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'; // Import Firebase Auth

Icon.loadFont().then();

const Stack = createNativeStackNavigator();

const MessageScreen = ({ route, navigation }) => {
  const { user } = route.params;
  const [users, setUsers] = useState([]);
  console.log('Retrieved user:', user);

  const getUsers = async () => {
    if (!user || !user.uid) {
      console.warn("User is not defined or uid is missing");
      return;
    }
    const querySnap = await firestore()
      .collection('users')
      .where('uid', '!=', user.uid)
      .get();
    const allUsers = querySnap.docs.map(docSnap => docSnap.data());
    setUsers(allUsers);
  };

  useEffect(() => {
    console.log('Current user:', user);
    if (user && user.uid) {
      getUsers();
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await auth().signOut();
      navigation.navigate('Signin'); 
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Chats', { name: item.name, uid: item.uid })}
          >
            <View style={styles.card}>
              <Image
                style={styles.userImageST}
                source={{ uri: 'https://placeimg.com/140/140/any' }}
              />
              <View style={styles.textArea}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.msgTime}>{item.messageTime}</Text>
                <Text style={styles.msgContent}>{item.email}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    paddingHorizontal: 10,
  },
  header: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff', 
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  logoutButton: {
    padding: 10,
    backgroundColor: '#000', 
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff', 
    fontSize: 14,
    fontWeight: 'bold',
  },
  card: {
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', 
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', 
    marginVertical: 5,
  },
  userImageST: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000', 
  },
  textArea: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  msgTime: {
    fontSize: 12,
    color: '#666', 
    marginTop: 2,
  },
  msgContent: {
    fontSize: 14,
    color: '#000',
    marginTop: 4,
  },
});

export default MessageScreen;
