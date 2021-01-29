import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/LoginScreen';
import Profile from '../screens/RegisterScreen';

import First from '../screens/first';
import Second from '../screens/second';
import Third from '../screens/third';
import Fourth from '../screens/fourth';
import Fifth from '../screens/fifth';
import Sixth from '../screens/sixth';
import Seventh from '../screens/seventh';


const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const UpperTab = createMaterialTopTabNavigator();

const AppScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={Profile} options={{ headerShown: false }}  />
                <Stack.Screen name="AfterSignup" component={aftersignup} options={{ headerShown: false }} />
                <Stack.Screen name="AfterLogin" component={afterlogin} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const afterlogin = () =>
    <BottomTab.Navigator>
        <BottomTab.Screen name="First" component={First} />
        <BottomTab.Screen name="Second" component={Second} />
        <BottomTab.Screen name="Thrid" component={Third} />
        <BottomTab.Screen name="Fourth" component={Fourth} />
        <BottomTab.Screen name="Fifth" component={Fifth} />
    </BottomTab.Navigator>

const aftersignup= () =>
    <UpperTab.Navigator 
    >
        <UpperTab.Screen name="Sixth" component={Sixth} />
        <UpperTab.Screen name="Seventh" component={Seventh} />
    </UpperTab.Navigator>

export default AppScreen;
