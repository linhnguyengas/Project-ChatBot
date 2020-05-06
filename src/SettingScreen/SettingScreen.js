import React, { Component } from 'react'
import {SafeAreaView, ScrollView, StyleSheet, View, Text} from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import CustomHeader from '../Customheader/CustomHeader'
import DarkMode from '../SettingScreen/DarkMode'
import Language from '../SettingScreen/Language'
class SettingScreen extends Component {

    render() {
        return (
            <SafeAreaView style = {{flex: 1}}>
                 <CustomHeader title="Setting" isHome={true} navigation={this.props.navigation}/>
                <ScrollView>

                    <DarkMode/>

                    <TouchableRipple onPress ={()=> this.props.navigation.navigate('SelectLanguage')} style={{padding: 8,}}>
                    <View style = {style.preference}>
                        <Text style={style.textTitle}>Language</Text>
                        <Text>{this.props.route.params}</Text>
                    </View>
                </TouchableRipple>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const style = StyleSheet.create({
    textTitle:{
        fontSize: 17,
        fontWeight: "bold"
    },
    preference:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})

export default SettingScreen;