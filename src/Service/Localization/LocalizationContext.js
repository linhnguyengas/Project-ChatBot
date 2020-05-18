import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as RNLocalize from 'react-native-localize';

import translation, {DEFAULT_LANGUAGE} from './Translations';

const APP_LANGUAGES = 'appLanguage';

export const LocalizationContext = React.createContext({
  translation,
  setAppLanguage: () => {},
  appLanguage: DEFAULT_LANGUAGE,
  initializeAppLanguage: () => {},
});

export const LocalizationProvider = ({children}) => {
  const [appLanguage, setAppLanguage] = React.useState(DEFAULT_LANGUAGE);

  const setLanguage = language => {
    translation.setLanguage(language);
    setAppLanguage(language);
    AsyncStorage.setItem(APP_LANGUAGES, language);
  };
  const initializeAppLanguage = async () => {
    const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGES);

    if (!currentLanguage) {
      let localeCode = DEFAULT_LANGUAGE;
      const supportedLocaleCode = translation.getAvailableLanguages();
      const phoneLocaleCode = RNLocalize.getLocales().map(
        locale => locale.languageCode,
      );
      phoneLocaleCode.some(code => {
        if (supportedLocaleCode.includes(code)) {
          localeCode = code;
          return true;
        }
      });
      setLanguage(localeCode);
    } else {
      setLanguage(currentLanguage);
    }
  };
  return (
    <LocalizationContext.Provider
      value={{
        translation,
        setAppLanguage: setLanguage,
        appLanguage,
        initializeAppLanguage,
      }}>
      {children}
    </LocalizationContext.Provider>
  );
};
