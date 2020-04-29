import React, { Component } from 'react'
import {View, StyleSheet  } from 'react-native'
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import * as firebase from 'firebase'
import { Drawer, Avatar, Title } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


class DrawerTab extends Component {
    state ={
        email:"",
        name:""
    }
    componentDidMount(){
        const {email, name} = firebase.auth().currentUser;
        this.setState({email, name});

     
    }
    signOutUser= () => {
        firebase.auth().signOut();
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <DrawerContentScrollView>
                    <View style={style.drawerContent}>
                        <View style={style.userInfoSection}>
                            <View style={{flexDirection: "row"}}>
                                <Avatar.Image
                                    source={{uri: null}}
                                    size={50}
                                />
                                <View style={{flexDirection: "row", marginLeft: 15}}>
                                    <Title style={style.title}>{this.state.name}</Title>
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
                        onPress={() =>{}}
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
        fontSize: 14,
        marginTop: 3,
        fontWeight: "bold"
    },
    caption:{
        fontSize: 14,
        lineHeight: 14
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
    preference:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})

export default DrawerTab;