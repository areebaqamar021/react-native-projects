import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../screens/Search';
import MyAccount from '../screens/MyAccount';
import Home from '../screens/Home';
import Category from '../screens/Category';
import ProductDetail from '../screens/ProductDetail';
import Cart from '../screens/Cart';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomNav = () => {
    return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
                    <Stack.Screen name="productDetails" component={ProductDetail} options={{ headerShown: false }} />
                    <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    };
    const TabNavigator = () => {
        return (    
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
                            case 'Category':
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
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Category" component={Category} />
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="Profile" component={MyAccount} />
            </Tab.Navigator>
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
