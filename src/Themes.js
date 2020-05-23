import {  DefaultTheme as NavigationLightTheme,
    DarkTheme as NavigationDarkTheme,
  } from '@react-navigation/native';
import { DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperLightTheme,
  } from 'react-native-paper';

  const customLightTheme = {
    ...NavigationLightTheme,
    ...PaperLightTheme,
    colors: {
      ...NavigationLightTheme.colors,
      ...PaperLightTheme.colors,
    },
  };

  const customDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#636e72',
      text: '#dfe6e9',
    },
  };
export default {customLightTheme, customDarkTheme}   ;