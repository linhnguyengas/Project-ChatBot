import React  from 'react'
import{View, Text,Image, TouchableOpacity} from 'react-native'
export default function CustomHeader ({title, navigation}) {
    return (
        <View style = {{flexDirection: "row", height: 60, backgroundColor: "white", borderBottomWidth: 0.2 }}>
            <View style={{flex: 1, justifyContent: "center"}}>
               <TouchableOpacity onPress = {() => navigation.openDrawer()}>
                    <Image style={{width: 25, height: 25, marginLeft: 7}}
                        source={require('../Images/menu.png')}
                        resizeMode="contain"
                    />
               </TouchableOpacity>
            </View>
            <View style={{flex: 1.5, justifyContent:"center"}}>
                <Text style={{textAlign: "center",fontWeight: "bold", fontSize: 20}}>{title}</Text>
            </View>    
            <View style={{flex: 1}}></View>
        </View>
    );
}

