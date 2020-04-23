import React, { Component } from 'react'
import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Vision from '../Screens/ChatScreen/VisionChat';
import Login from '../Screens/LoginScreen/Login';
import SelectScreen from '../Screens/SelectChat/SelectScreen';

const Stack = createStackNavigator();

class Navigations extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
                    <Stack.Screen name="Chat" component={Vision}/>
                    <Stack.Screen options={{headerLeft: null, title: "Select Bot"}} name="SelectChat" component={SelectScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigations;