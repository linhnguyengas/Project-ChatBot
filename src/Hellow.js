import React, { Component } from 'react'
import {View} from 'react-native'
import * as firebase from 'firebase'
class Hellow extends Component {
    state = {
        displayName:""
    };
    componentDidMount(){
        const{displayName} = firebase.auth().currentUser;
        this.setState({displayName});
        
    }
    render() {
        return (
            <View>
                
            </View>
        );
    }
}

export default Hellow;