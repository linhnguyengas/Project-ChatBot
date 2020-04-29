import React,{Component} from 'react';
import {StyleSheet, View, Text,TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import * as firebase from 'firebase';

export class SignIn extends Component {
    state = {
        email: '',
        password: '',
        name:'',
        errorMessage: null
    }

    handleLogin = () =>{
        const {email,password} = this.state

        firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch(
                error => this.setState({errorMessage: error.message})
            )
    }

    render(){
           return (
            <SafeAreaView style = {style.container}>
                <Text style = {style.logo}>HeyAPP</Text>
                <View style= {style.inputView}>
                    <TextInput style= {style.inputText}
                        placeholder='Email'
                        placeholderTextColor='#033f5c'
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                    />   
                </View>
                <View style= {style.inputView}>
                    <TextInput style= {style.inputText}
                        placeholder='Password'
                        secureTextEntry
                        placeholderTextColor='#033f5c'
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
                    />   
                </View>
                <View>
                    {this.state.errorMessage && <Text style = {style.errorMessage}>{this.state.errorMessage}</Text>}
                </View>
                <TouchableOpacity style = {style.signInBtn}
                    // onPress ={() => this.props.navigation.navigate('SelectChat')
                    onPress={this.handleLogin }
                >
                    <Text style = {style.loginText}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.signUpBtn}
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
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold"
    },
    signUpBtn: {
        alignItems: "center",
        marginTop: 30
    }
});

export default SignIn;