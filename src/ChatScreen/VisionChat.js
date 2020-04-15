import React, { Component } from 'react';
import{View, Text, Image,} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';

import {dialogflowConfig} from '../Service/BotService'
import { Dialogflow_V2 } from 'react-native-dialogflow';

const BOT_USER ={
    _id: 2,
    name :'VISION',
    avatar: 'https://i.imgur.com/7k12EPD.png'
}

export default class Vision extends Component{

componentDidMount(){
    Dialogflow_V2.setConfiguration(
        dialogflowConfig.client_email,
        dialogflowConfig.private_key,
        Dialogflow_V2.LANG_ENGLISH_US,
        dialogflowConfig.project_id
    );
}

constructor(props){
    super(props);
    this.state = {
        messages: [
            {
                _id: 1, 
                text : 'Hi! I am a Vision .\n\Can I help you?',
                createdAt: new Date(),
                user: BOT_USER
            }
        ]
    }
};
   
    onSend(messages = []){
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages)
        }));
        let message = messages[0].text;
        Dialogflow_V2.requestQuery(
            message,
            result => this.handleGoogleResponse(result),
            error => Console.log(error)
        );
    };

    handleGoogleResponse(result){
        let text = result.queryResult.fulfillmentMessages[0].text.text[0];
        this.sendBotResponse(text);
    }
    sendBotResponse(text){
        let msg ={
            _id: this.state.messages.length + 1,
            text,
            createdAt: new Date(),
            user : BOT_USER
        };
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [msg])
        }));
    }

    render(){
        return(
            <View style = {{flex: 1, backgroundColor: '#fff',}}>
                <GiftedChat
                    messages = {this.state.messages}
                    onSend = {messages => this.onSend(messages)}
                    user = {{
                        _id: 1
                    }}
                />
            </View>
        );
    }
}