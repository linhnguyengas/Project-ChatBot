import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SelectScreen from '../../Screens/SelectChat/SelectScreen';
import DrawerTab from './DrawerTab';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={({navigation}) => <DrawerTab navigation={navigation} />}>
      <Drawer.Screen name="SelectChat" component={SelectScreen} />
    </Drawer.Navigator>
  );
}
