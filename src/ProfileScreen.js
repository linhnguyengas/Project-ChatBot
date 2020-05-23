import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'
import CustomHeader from './Customheader/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LocalizationContext} from '../src/Service/Localization/LocalizationContext'

function ProfileScreen ({navigation, route}) {
    const {translation} = React.useContext(LocalizationContext);
  
        return (
            <SafeAreaView style = {{flex: 1}}>
                <CustomHeader title={translation.PROFILE} isHome={true} navigation={navigation}/>
                <View>
                    <View>
                        <View>
                            <Image source={require('../src/Images/interface.png')}/>
                        </View>
                    </View>

                    <View>
                        
                    </View>

                </View>
            </SafeAreaView>
        );
    
}

export default ProfileScreen;