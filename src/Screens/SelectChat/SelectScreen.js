import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  
  FlatList,
} from 'react-native';

class SelectScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Bot : []
         };
    }
    componentDidMount(){
        const bot = require('./Bot.json').bot;
        this.setState({bot});
    }

    renderItem = ({item}) => {
        return (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat',item)}>
            <View style={styles.row}>
              <Image source={{ uri: item.image }} style={styles.pic} />
              <View>
                <View style={styles.nameContainer}>
                  <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
                </View>
                <View style={styles.msgContainer}>
                  <Text style={styles.msgTxt}>{item.status}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      }

    render() {
        return(
            <View style={{ flex: 1 }} >
              <FlatList 
                extraData={this.state}
                data={this.state.bot}
                keyExtractor = {(item) => {
                  return item.id;
                }}
                renderItem={this.renderItem}/>
            </View>
          );
    }
}

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#DCDCDC',
      backgroundColor: '#fff',
      borderBottomWidth: 1,
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
      width:170,
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