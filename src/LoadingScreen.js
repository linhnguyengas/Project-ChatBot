import React, {Component} from 'react';
import * as firebase from 'firebase';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  BackHandler,
  Platform,
  Text,
} from 'react-native';
import {LocalizationContext} from './Service/Localization/LocalizationContext';
function LoadingScreen({navigation}) {
  // loading language
  const {initializeAppLanguage} = React.useContext(LocalizationContext);

  // check login or not login and loading default language
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      initializeAppLanguage();
      navigation.replace('SelectChat');
    } else {
      if (Platform.OS === 'ios') {
        initializeAppLanguage();
        navigation.replace('SignIn');
      }
      if (Platform.OS === 'android') {
        initializeAppLanguage();
        navigation.navigate('SignIn');
        BackHandler.addEventListener('hardwareBackPress', function() {
          BackHandler.exitApp();
          return false;
        });
      }
    }
    //navigation.replace(user ? "SelectChat" : "SignIn");
  });

  return (
    <View style={style.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;
