import React, { Component } from 'react';
import{View} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';

import {dialogflowConfig} from '../../Service/BotService'
import { Dialogflow_V2 } from 'react-native-dialogflow';


export default class Vision extends Component{

componentDidMount(){ //gọi dialogflow api
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
                id: 1, 
                createdAt: new Date(),
                user: BOT_USER
            },
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
                        id: 1
                    }}
                />
            </View>
        );
    }
}