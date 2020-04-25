import React, { Component } from 'react'
import Navigations from './src/Navigations/Navigations';

import * as firebase from 'firebase';

let firebasecall = require('./src/Service/FirebaseConfig').firebaseConfig

firebase.initializeApp(firebasecall);

class App extends Component {
    render() {
        return (
            <Navigations/>
        );
    }
}

export default App;
