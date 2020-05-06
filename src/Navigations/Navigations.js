import React, { Component } from 'react'
import {NavigationContainer, DarkTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Provider as PaperProvider, DarkTheme as PaperDarkTheme} from 'react-native-paper'

import Chat from '../Screens/ChatScreen/ChatScreen';
import SignIn from '../Screens/LoginScreen/SignIn';
import SignUp from '../Screens/LoginScreen/SignUp';
import LoadingScreen from '../LoadingScreen';
import DrawerNavigation from './Drawer/DrawerNavigation'
import ProfileScreen from '../ProfileScreen'
import SettingScreen from '../SettingScreen/SettingScreen';
import SelectLanguage from '../SettingScreen/SelectLanguage';
import {AuthContext} from '../AuthContext/AuthContext'
const Stack = createStackNavigator();

export default function Navigations (){
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const authContext = React.useMemo(()=>{
        toggleTheme = () =>{
            setIsDarkTheme(isDarkTheme => !isDarkTheme)
            }
    })
    
    return(
        <PaperProvider theme={PaperDarkTheme}>
        <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={DarkTheme} >
            <Stack.Navigator initialRouteName="Loading">
                <Stack.Screen options={{headerShown: false}} name="Loading" component={LoadingScreen}/>
                <Stack.Screen options={{headerShown: false}} name="SignIn" component={SignIn}/>
                <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUp}/>
                <Stack.Screen options={{headerShown: false}} name="SelectChat" component={DrawerNavigation}/>
                <Stack.Screen options={{headerBackTitleVisible: false, headerTintColor: "black"}} name="Chat" component={Chat}/>
                <Stack.Screen options={{headerShown: false}} name="ProfileScreen" component={ProfileScreen}/>
                <Stack.Screen options={{headerShown: false}} name="SettingScreen" component={SettingScreen}/>
                <Stack.Screen options={{headerShown: false}} name="SelectLanguage" component={SelectLanguage}/>
            </Stack.Navigator>
        </NavigationContainer>
        </AuthContext.Provider>
        </PaperProvider>
    );
}


