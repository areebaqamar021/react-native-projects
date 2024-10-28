import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Categories from '../screens/Categories';
import Profile from '../screens/Profile';
import Main from '../screens/Main';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        let iconSource;

                        switch (route.name) {
                            case 'Home':
                                iconSource = require('../assets/icons/home.png');
                                break;
                            case 'Search':
                                iconSource = require('../assets/icons/search.png');
                                break;
                            case 'Categories':
                                iconSource = require('../assets/icons/grid.png');
                                break;
                            case 'Profile':
                                iconSource = require('../assets/icons/account.png');
                                break;
                            default:
                                iconSource = require('../assets/icons/home.png');
                        }

                        return (
                            <View style={styles.iconContainer}>
                                <Image source={iconSource} style={[styles.icon, focused && styles.iconFocused]} />
                            </View>
                        );
                    },
                    tabBarLabel: route.name,
                    tabBarActiveTintColor: '#1A94FF',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={Main} />
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="Categories" component={Categories} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10, 
    },
    icon: {
        width: 24,
        height: 24,
    },
    iconFocused: {
        tintColor: '#1A94FF',
    },
});

export default BottomNav;
