import React, {Component} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import CustomHeader from '../../Customheader/CustomHeader';
import DarkMode from '../SettingScreen/DarkMode';
import {LocalizationContext} from '../../Service/Localization/LocalizationContext';

function SettingScreen({navigation}) {
  const {translation} = React.useContext(LocalizationContext);

  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader
        title={translation.SETTINGS}
        isHome={true}
        navigation={navigation}
      />
      <ScrollView>
        <DarkMode />

        <TouchableRipple
          onPress={() => navigation.navigate('SelectLanguage')}
          style={{padding: 8}}>
          <View style={style.preference}>
            <Text style={style.textTitle}>{translation.LANGUAGE}</Text>
            <Text />
          </View>
        </TouchableRipple>
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  textTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default SettingScreen;
