import React, {useEffect} from 'react';
import Navigation from './src/Navigation/Navigation';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance'
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperLightTheme,
} from 'react-native-paper';
import {
  NavigationContainer,
  DefaultTheme as NavigationLightTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import {AuthContext} from './src/Service/AuthContext/AuthContext';
import {LocalizationProvider} from './src/Service/Localization/LocalizationContext';
import * as firebase from 'firebase';

let firebaseCall = require('./src/Service/Firebase/FirebaseConfig')
  .firebaseConfig;

firebase.initializeApp(firebaseCall);

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState();

  const authContext = React.useMemo(() => ({
    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
    },
  }));

  const CustomLightTheme = {
    ...NavigationLightTheme,
    ...PaperLightTheme,
    colors: {
      ...NavigationLightTheme.colors,
      ...PaperLightTheme.colors,
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#636e72',
      text: '#dfe6e9',
    },
  };
  const theme = isDarkTheme ? CustomDarkTheme : CustomLightTheme;
  const scheme = useColorScheme()

  return (
    <AppearanceProvider theme={scheme ? CustomDarkTheme : CustomLightTheme}>
      <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <LocalizationProvider>
          <NavigationContainer theme={theme}>
            <Navigation />
          </NavigationContainer>
        </LocalizationProvider>
      </AuthContext.Provider>
    </PaperProvider>
    </AppearanceProvider>
  );
};

export default App;
