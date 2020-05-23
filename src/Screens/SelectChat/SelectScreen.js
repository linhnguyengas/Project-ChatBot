import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  YellowBox,
  SafeAreaView,
} from 'react-native';
import * as firebase from 'firebase';
import {LocalizationContext} from '../../Service/Localization/LocalizationContext';
import CustomHeader from '../../Customheader/CustomHeader';
YellowBox.ignoreWarnings([
  'Failed child context type',
  'Setting a timer',
  'Each child in a list',
]);

function Translate ({navigation}) { 
  const {translation} = React.useContext(LocalizationContext);
  return (
    <CustomHeader title={translation.SELECT_CHAT} navigation={navigation} />
  );
};

class SelectScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Bot: [],
    };
  }
  componentDidMount() {
    firebase
      .database()
      .ref('heyapp')
      .child('bot')
      .once('value')
      .then(snapshot => {
        const item = [];
        snapshot.forEach(child => {
          item.push({
            id: child.val().key,
            image: child.val().image,
            name: child.val().name,
            text: child.val().text,
            status: child.val().status,
          });
        });
        this.setState({Bot: item});
      });
  }
  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Chat', item/*Param router*/)}>
        <View style={styles.row}>
          <Image source={{uri: item.image}} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.name}
              </Text>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.status}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Translate navigation={this.props.navigation} />
          <FlatList
            extraData={this.state}
            data={this.state.Bot}
            keyExtractor={item => item.id}
            renderItem={this.renderItem}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#b2bec3',
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    width: 170,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
});

export default SelectScreen;
