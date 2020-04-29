import React, { Component } from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import SelectScreen from '../SelectScreen';
import DrawerTab from './DrawerTab';

const Drawer = createDrawerNavigator();

class DrawerNavigation extends Component {
  
    render() {
        return (
            <Drawer.Navigator 
                drawerContent={(props) =><DrawerTab{...props}/>} 
                >
                <Drawer.Screen name="SelectChat" component={SelectScreen}/> 
            </Drawer.Navigator>
        );
    }
}

export default DrawerNavigation;