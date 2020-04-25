import React,{Component} from 'react'
import {StyleSheet, View, Text,TextInput, TouchableOpacity, SafeAreaView} from 'react-native'


export class SignIn extends Component {
    render(){
           return (
            <SafeAreaView style = {style.container}>
                <Text style = {style.logo}>HeyAPP</Text>
                <View style= {style.inputView}>
                    <TextInput style= {style.inputText}
                        placeholder='Email'
                        placeholderTextColor='#033f5c'
                        onChangeText={text => this.setState({email: text})}
                    />   
                </View>
                <View style= {style.inputView}>
                    <TextInput style= {style.inputText}
                        placeholder='Password'
                        placeholderTextColor='#033f5c'
                        onChangeText={text => this.setState({password: text})}
                    />   
                </View>
                <View>
                    <Text style = {style.errowMessage}>Error Message</Text>
                </View>
                <TouchableOpacity style = {style.signInBtn}
                    onPress ={() => this.props.navigation.navigate('SelectChat')}
                >
                    <Text style = {style.loginText}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {style.signInBtn}
                    onPress ={() => this.props.navigation.navigate('SignUp')}
                >
                    <Text style = {style.loginText}>SIGN UP</Text>
                </TouchableOpacity>
            </SafeAreaView>    
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
    signInBtn : {
        width : '80%',
        backgroundColor : '#fb5b5a',
        borderRadius : 25,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : 20,
    },
    inputView: {
        width: '80%',
        backgroundColor: '#465881',
        borderRadius: 25,
        height: 50,
        marginBottom : 20,
        justifyContent: 'center',
        padding: 20
    },
    inputText: {
        height: 50,
        color: 'white', 
    },
    errowMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold"
    },
    signUpBtn: {
        alignItems: "center",
        marginTop: 20
    }
});

export default SignIn;