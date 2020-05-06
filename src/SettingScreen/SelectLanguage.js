import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../Customheader/CustomHeader';


class SelectLanguage extends Component {
    state = { 
        Language:[]
     }

    componentDidMount(){
        const language = require('../Service/Language.json').Language
        this.setState({language});
    }

    renderItem = ({item}) =>{
        return(
            <TouchableOpacity onPress={() => this.props.navigation.goBack(item)}>
                <View style={style.container}>
                <Text style={style.text}>{item.nameLanguage}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <CustomHeader title="Select Language" isHome={true} navigation={this.props.navigation}/> 
                <View style={{flex: 1}}>
                    <FlatList
                    extraData={this.state}
                    data={this.state.language}
                    keyExtractor={(item)=> item.id}
                    renderItem={this.renderItem}
                 />
                </View>
            </SafeAreaView> 
        );
    }
}
const style = StyleSheet.create({
    container:{
        alignItems: "center",
        borderBottomColor: "#b2bec3",
        borderBottomWidth: 0.2,
        padding: 20,
    },
    text:{
        fontSize: 15,
    }
})
export default SelectLanguage;