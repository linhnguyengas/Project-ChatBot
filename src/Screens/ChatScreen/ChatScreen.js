import React, {Component} from 'react';
import {View, YellowBox} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';

import {dialogflowConfig} from '../../Service/BOT/BotService';
import {Dialogflow_V2} from 'react-native-dialogflow';
import CustomHeader from '../../Customheader/CustomHeader';
import {SafeAreaView} from 'react-native-safe-area-context';

YellowBox.ignoreWarnings([
  'Warning: componentWillReceiveProps has been renamed',
  'Warning: componentWillMount has been renamed',
]);

export default class Vision extends Component {
  componentDidMount() {
    //gọi dialogflow api bot
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id,
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          _id: 1,
          text: this.props.route.params.text, //truyền data từ realtime firebase
          createdAt: new Date(),
          user: {
            _id: 2,
            name: this.props.route.params.name, //truyền data từ realtime firebase
            avatar: this.props.route.params.image, //truyền data từ realtime firebase
          },
        },
      ],
    };
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    let message = messages[0].text;
    Dialogflow_V2.requestQuery(
      message,
      result => this.handleGoogleResponse(result),
      error => Console.log(error),
    );
  }

  handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }
  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: this.props.route.params.name, //truyền data từ realtime firebase
        avatar: this.props.route.params.image, //truyền data từ realtime firebase
      },
    };
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg]),
    }));
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title="Chat"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View style={{flex: 1}}>
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
