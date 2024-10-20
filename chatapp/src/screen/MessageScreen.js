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
  Button,
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
      <StatusBar />
      <View style={styles.header}>
        <Button title="Logout" onPress={handleLogout} />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    padding: 10,
    backgroundColor: '#f8f8f8',
    alignItems: 'flex-end',
  },
  card: {
    width: '100%',
    height: 'auto',
    marginHorizontal: 4,
    marginVertical: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  userImageST: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textArea: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5,
    paddingLeft: 10,
    width: 300,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  nameText: {
    fontSize: 14,
    fontWeight: '900',
    fontFamily: 'Verdana',
  },
  msgTime: {
    textAlign: 'right',
    fontSize: 11,
    marginTop: -20,
  },
  msgContent: {
    paddingTop: 5,
  },
});

export default MessageScreen;
