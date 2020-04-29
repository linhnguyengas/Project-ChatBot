import React, { Component } from 'react'
import {NavigationContainer, StackActions, DrawerActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Chat from '../Screens/ChatScreen/ChatScreen';
import SignIn from '../Screens/LoginScreen/SignIn';
import SignUp from '../Screens/LoginScreen/SignUp';
import LoadingScreen from '../LoadingScreen';
import DrawerNavigation from '../Navigations/Drawer/DrawerNavigation';



const Stack = createStackNavigator();




class Navigations extends Component {

    render() {
        return (
            <NavigationContainer >
                <Stack.Navigator initialRouteName="Loading">
                    <Stack.Screen options={{headerShown: false}} name="Loading" component={LoadingScreen}/>
                    <Stack.Screen options={{headerShown: false}} name="SignIn" component={SignIn}/>
                    <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUp}/>
                    <Stack.Screen options ={{headerShown: false }} name="SelectChat" component={DrawerNavigation}/>
                    <Stack.Screen name="Chat" component={Chat}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigations;