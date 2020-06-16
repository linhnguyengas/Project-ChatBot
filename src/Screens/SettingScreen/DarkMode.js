import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Switch, TouchableRipple, useTheme} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage'

import {AuthContext} from '../../Service/AuthContext/AuthContext';

export default function DarkMode() {
  const paperTheme = useTheme();




  const {toggleTheme} = React.useContext(AuthContext);
  return (
    <TouchableRipple
      onPress={() => {
        toggleTheme()
      }}
      style={{padding: 8}}>
      <View style={style.preference}>
        <Text style={style.textMode}>Dark Mode</Text>
        <View pointerEvents="none">
          <Switch value={
         paperTheme.dark
       
        }

          />
        </View>
      </View>
    </TouchableRipple>
  );
}
const style = StyleSheet.create({
  textMode: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingTop: 9,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
