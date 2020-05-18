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
  // loading check language
  const {initializeAppLanguage} = React.useContext(LocalizationContext);

  React.useEffect(() => {
    initializeAppLanguage();
    const timer = setTimeout(() => {
      navigation.navigate('SelectChat');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation, initializeAppLanguage]);

  // check login or not login
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      navigation.replace('SelectChat');
    } else {
      if (Platform.OS === 'ios') {
        navigation.replace('SignIn');
      }
      if (Platform.OS === 'android') {
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
