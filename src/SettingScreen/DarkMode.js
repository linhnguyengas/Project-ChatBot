import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Switch, TouchableRipple} from 'react-native-paper'

import {AuthContext} from '../AuthContext/AuthContext'

export default function DarkMode() {
    const {toggleTheme} = React.useContext(AuthContext)
    return(
        <TouchableRipple onPress = {()=>{toggleTheme()}} style ={{padding: 8,}}>
            <View style = {style.preference}>
                <Text style = {style.textMode}>Dark Mode</Text>
                <View pointerEvents="none">
                    <Switch value={isDarkTheme}/>
                </View>
            </View> 
        </TouchableRipple>
    );    
}
const style = StyleSheet.create({
    textMode:{
        fontSize: 17,
        fontWeight: 'bold',
        paddingTop: 9
    },
    preference:{
        
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})