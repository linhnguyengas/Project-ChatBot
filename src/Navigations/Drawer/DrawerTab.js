import React, { Component } from 'react'
import {View, StyleSheet, Text  } from 'react-native'
import {DrawerContentScrollView, DrawerItem,} from '@react-navigation/drawer'
import * as firebase from 'firebase'
import { Drawer, Avatar, Title, Caption } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
if (Platform.OS === 'ios') {
   MaterialCommunityIcons.loadFont()
}

class DrawerTab extends Component {
    state ={
        email:"",
        displayName:"",
        photoURL: ""
    }
    signOutUser= () => {
        firebase.auth().signOut();
    }
    render() {
        var user = firebase.auth().currentUser // show console to check status profile user logged
        if (user != null) { 
            user.providerData.forEach(function (profile) {
              console.log("Sign-in provider: " + profile.providerId);
              console.log("  Provider-specific UID: " + profile.uid);
              console.log("  Name: " + profile.displayName);
              console.log("  Email: " + profile.email);
              console.log("  Photo URL: " + profile.photoURL);
            });
          }  
        this.state = {
            displayName: firebase.auth().currentUser.displayName,
            email : firebase.auth().currentUser.email
        }
        return (
            <View style={{flex: 1}}>
                <DrawerContentScrollView>
                    <View style={style.drawerContent}>
                        <View style={style.userInfoSection}>
                            <View style={{flexDirection: "row"}}>
                                <Avatar.Image
                                    source={require('../../Images/interface.png')}
                                    size={50}
                                />
                                <View style={{marginLeft: 15}}>
                                    <Title style={style.title}>{this.state.displayName}</Title>
                                    <Caption style={style.caption}>{this.state.email}</Caption>
                                </View>
                            </View>
                        </View>
                    </View>

                <Drawer.Section style={style.drawerSection}>
                    <DrawerItem 
                        icon = {({color,size}) => (
                            <Icon
                                name="account-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Profile"
                        onPress={() =>{this.props.navigation.navigate('ProfileScreen')}}
                        />
                    <DrawerItem 
                        icon = {({color,size}) => (
                            <Icon
                                name="settings-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Setting"
                        onPress={() =>{this.props.navigation.navigate('SettingScreen')}}
                        />
                    <DrawerItem 
                        icon = {({color,size}) => (
                            <Icon
                                name="account-check-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Support"
                        onPress={() =>{}}
                        />
                </Drawer.Section>
                </DrawerContentScrollView>
                   <Drawer.Section style={style.bottomDrawerSection}>
                    <DrawerItem 
                    icon = {({color,size}) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={this.signOutUser}
                    />
                </Drawer.Section>
            </View>
        );
    }
}
const style = StyleSheet.create({
    drawerContent:{
        flex: 1
    },
    userInfoSection:{
        paddingLeft: 20,
        paddingTop: 5
    },
    title:{
        fontSize: 16,
        marginTop: 3,
        fontWeight: "bold"
    },
    caption:{
        fontSize: 12,
        lineHeight: 12
    },
    row:{
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    section:{
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15
    },
    paragraph:{
        fontWeight: "bold",
        marginRight: 3
    },
    drawerSection:{
        marginTop: 15
    },
    bottomDrawerSection:{
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
})

export default DrawerTab;