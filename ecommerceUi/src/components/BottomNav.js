import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Categories from '../screens/Categories';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
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

                        return <Image source={iconSource} style={styles.icon} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="Categories" component={Categories} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    },
});

export default BottomNav;