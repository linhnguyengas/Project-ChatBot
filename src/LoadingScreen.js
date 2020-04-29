import React, { Component } from 'react'
import * as firebase from 'firebase';
import { View, StyleSheet, ActivityIndicator} from 'react-native';

class LoadingScreen extends Component { 
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.replace(user ? "SelectChat" : "SignIn");
        })
    }
 
    render() {
        return (
            <View style = {style.container}>
                <ActivityIndicator size="large" color="#0000ff" ></ActivityIndicator>
            </View>
        );
    }
}
const style = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent : "center",
        alignItems: "center"
    }
})

export default LoadingScreen;
