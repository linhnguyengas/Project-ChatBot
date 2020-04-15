import React, { Component } from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style = {style.container}>
                <Text style = {style.logo}>HeyAPP</Text>
                <TouchableOpacity style = {style.loginBtn}>
                    <Text style = {style.loginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>        
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex : 1,   
        backgroundColor : '#003f5c',
        alignItems : 'center',
        justifyContent : 'center',
    },
    logo : {
        fontWeight : 'bold',
        fontSize : 50,
        color : '#fb5b5a',
        marginBottom : 40,
    },
    loginText : { 
        color : 'white'
    },
    loginBtn : {
        width : '80%',
        backgroundColor : '#fb5b5a',
        borderRadius : 25,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : 40,
        marginBottom : 10,
    }
});

export default Login;