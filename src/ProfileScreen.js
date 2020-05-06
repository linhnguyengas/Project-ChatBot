import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import CustomHeader from './Customheader/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <SafeAreaView style = {{flex: 1}}>
                <View>
                    <CustomHeader title="Profile" isHome={true} navigation={this.props.navigation}/>

                </View>
            </SafeAreaView>
        );
    }
}

export default ProfileScreen;