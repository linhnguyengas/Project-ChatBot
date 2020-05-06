import React  from 'react'
import{View, Text,Image, TouchableOpacity} from 'react-native'
export default function CustomHeader ({title, navigation, isHome}) {
    return (
        <View style = {{flexDirection: "row", height: 60, borderBottomWidth: 0.2, borderBottomColor: "#b2bec3"  }}>
            {
                isHome ?

                <View style={{flex: 1, justifyContent: "center"}}>
                    <TouchableOpacity onPress = {() => navigation.goBack(null)}>
                            <Image style={{width: 21, height: 21, marginLeft: 7}}
                                source={require('../Images/backButton.png')}
                                resizeMode="contain"
                            />
                    </TouchableOpacity>
                </View>

              :  
                
                <View style={{flex: 1, justifyContent: "center"}}>
                <TouchableOpacity onPress = {() => navigation.openDrawer()}>
                        <Image style={{width: 25, height: 25, marginLeft: 7}}
                            source={require('../Images/menu.png')}
                            resizeMode="contain"
                        />
                </TouchableOpacity>
                </View>
            }
            <View style={{flex: 1.5, justifyContent:"center"}}>
                <Text style={{textAlign: "center",fontWeight: "bold", fontSize: 20}}>{title}</Text>
            </View>    
            <View style={{flex: 1}}></View>
        </View>
    );
}

