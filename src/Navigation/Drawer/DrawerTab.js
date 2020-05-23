import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import * as firebase from 'firebase';
import {Drawer, Avatar, Title, Caption} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
if (Platform.OS === 'ios') {
  MaterialCommunityIcons.loadFont();
}

import {LocalizationContext} from '../../Service/Localization/LocalizationContext.js';
  

class DrawerTab extends Component {
 
  signOutUser = () => {
    firebase.auth().signOut();
  };
  render () {
    var user = firebase.auth().currentUser; // lấy dữ liệu của user từ firebase
    if (user != null) {
      // show console to check status profile user logged
      user.providerData.forEach(function(profile) {
        console.log('Sign-in provider: ' + profile.providerId);
        console.log('  Provider-specific UID: ' + profile.uid);
        console.log('  Name: ' + profile.displayName);
        console.log('  Email: ' + profile.email);
        console.log('  Photo URL: ' + profile.photoURL);
        console.log('  Phone: ' + profile.phoneNumber);

      });
    }
 
   
      this.state = {
        // lấy dữ liệu của user từ firebase
        item: [
          {
            displayName: user.displayName,
            email: user.email,
          },
        ],
      };
    
    return (
      <Translate
        signOutUser={this.signOutUser}
        navigation={this.props.navigation}
        item={this.state.item[0]}
      />
    );
  }
}

function Translate({navigation, signOutUser, item}) {
  const {translation} = React.useContext(LocalizationContext);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView>
        <View style={style.drawerContent}>
          <View style={style.userInfoSection}>
              <View style={{flexDirection: 'row'}}>
                <Avatar.Image
                  source={require('../../Images/interface.png')}
                  size={50}
                />
                <View style={{marginLeft: 15}}>
                  <Title style={style.title}>{item.displayName}</Title>
                  <Caption style={style.caption}>{item.email}</Caption>
                </View>
              </View>
          </View>
        </View>

        <Drawer.Section style={style.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="account-outline" color={color} size={size} />
            )}
            label={translation.PROFILE}
            onPress={() => {
              navigation.navigate('ProfileScreen', item);
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="settings-outline" color={color} size={size} />
            )}
            label={translation.SETTINGS}
            onPress={() => {
              navigation.navigate('SettingScreen');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="account-check-outline" color={color} size={size} />
            )}
            label={translation.SUPPORT}
            onPress={() => {}}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={style.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label={translation.SIGN_OUT}
          onPress={signOutUser}
        />
      </Drawer.Section>
    </View>
  );
}

const style = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingTop: 5,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 12,
    lineHeight: 12,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
});

export default DrawerTab;
