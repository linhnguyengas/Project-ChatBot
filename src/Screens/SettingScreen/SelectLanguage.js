import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../Customheader/CustomHeader';
import {LocalizationContext} from '../../Service/Localization/LocalizationContext';

function SelectLanguage({navigation}) {
  const {translation, appLanguage, setAppLanguage} = React.useContext(
    LocalizationContext,
  );

  const handlerSetLanguage = async language => {
    setAppLanguage(language);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader
        title={translation.SELECT_LANGUAGE}
        isHome={true}
        navigation={navigation}
      />
      <View style={style.container}>
        {translation.getAvailableLanguages().map(item => (
          <View key={item}>
            <TouchableOpacity
              style={{
                paddingVertical: 20,
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => handlerSetLanguage(item)}>
              <Text style={style.text}>{item}</Text>
              {appLanguage === item ? <Text style={{left: 20}}>√</Text> : null}
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default SelectLanguage;
