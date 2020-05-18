import React, {Component, Children} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import * as firebase from 'firebase';

export class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    //id:"",
    password: '',
    errorMessage: null,
  };

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredentials => {
        // tạo dữ liệu new user trong realtime database
        firebase
          .database()
          .ref('heyapp/user')
          .child(userCredentials.user.uid)
          .set({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            id: userCredentials.user.uid,
            create_at: Date.now(),
          });
        return userCredentials.user.updateProfile({ // tạo và lưu tên user lên firebase
          displayName: this.state.firstName + ' ' + this.state.lastName,
        });
      })
      .catch(error => this.setState({errorMessage: error.message}));
  };

  render() {
    return (
      <SafeAreaView style={style.container}>
        <Text style={style.logo}>Register</Text>
        <View style={style.inputView}>
          <TextInput
            style={style.inputText}
            placeholder="First Name"
            placeholderTextColor="#033f5c"
            onChangeText={firstName => this.setState({firstName})}
            value={this.state.firstName}
          />
        </View>
        <View style={style.inputView}>
          <TextInput
            style={style.inputText}
            placeholder="Last Name"
            placeholderTextColor="#033f5c"
            onChangeText={lastName => this.setState({lastName})}
            value={this.state.lastName}
          />
        </View>
        <View style={style.inputView}>
          <TextInput
            style={style.inputText}
            placeholder="Email"
            placeholderTextColor="#033f5c"
            autoCapitalize="none"
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
        </View>
        <View style={style.inputView}>
          <TextInput
            style={style.inputText}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#033f5c"
            autoCapitalize="none"
            onChangeText={password => this.setState({password})}
            value={this.state.password}
          />
        </View>
        <View>
          {this.state.errorMessage && (
            <Text style={style.errorMessage}>{this.state.errorMessage}</Text>
          )}
        </View>
        <TouchableOpacity style={style.signInBtn} onPress={this.handleSignUp}>
          <Text style={style.loginText}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.backBtn}
          onPress={() => this.props.navigation.navigate('SignIn')}>
          <Text style={style.loginText}>BACK</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  loginText: {
    color: 'white',
  },
  signInBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  errorMessage: {
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
  },
  backBtn: {
    alignItems: 'center',
    marginTop: 30,
  },
});

export default SignUp;
