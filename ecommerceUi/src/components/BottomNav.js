import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Categories" component={CategoriesScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
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