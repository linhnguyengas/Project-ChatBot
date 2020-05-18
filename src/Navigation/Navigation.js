import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Chat from '../Screens/ChatScreen/ChatScreen';
import SignIn from '../Screens/LoginScreen/SignIn';
import SignUp from '../Screens/LoginScreen/SignUp';
import LoadingScreen from '../LoadingScreen';
import DrawerNavigation from './Drawer/DrawerNavigation';
import ProfileScreen from '../ProfileScreen';
import SettingScreen from '../Screens/SettingScreen/SettingScreen';
import SelectLanguage from '../Screens/SettingScreen/SelectLanguage';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Loading">
      <Stack.Screen
        options={{headerShown: false}}
        name="Loading"
        component={LoadingScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SelectChat"
        component={DrawerNavigation}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Chat"
        component={Chat}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SettingScreen"
        component={SettingScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SelectLanguage"
        component={SelectLanguage}
      />
    </Stack.Navigator>
  );
}
