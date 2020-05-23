import React from 'react';
import Navigation from './src/Navigation/Navigation';
// import {AppearanceProvider, useColorScheme} from 'react-native-appearance'
// import {View} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {
  ThemeProvider

} from 'react-native-paper';
import {
  NavigationContainer,

} from '@react-navigation/native';
import { EventRegister } from 'react-native-event-listeners'
import Themes from './src/Themes'

import {AuthContext} from './src/Service/AuthContext/AuthContext';
import {LocalizationProvider} from './src/Service/Localization/LocalizationContext';
import * as firebase from 'firebase';

let firebaseCall = require('./src/Service/Firebase/FirebaseConfig')
  .firebaseConfig;

firebase.initializeApp(firebaseCall);

const KEY_APP = 'dark'

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const authContext = React.useMemo(() => ({
    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
    },
  }));
  
 

  const theme = isDarkTheme ? Themes.customDarkTheme : Themes.customLightTheme;
  //const scheme = useColorScheme()

  return (
   
      <ThemeProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <LocalizationProvider>
       
          <NavigationContainer theme={theme}> 
            <Navigation />
            
          </NavigationContainer>
        
          
        </LocalizationProvider>
      </AuthContext.Provider>
    </ThemeProvider>
  
  );
};

export default App;
