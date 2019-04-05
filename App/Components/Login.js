import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  AsyncStorage, ToastAndroid, AlertIOS,
  View, Image, AppRegistry, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView
} from 'react-native';
import Spinner from './Spinner';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      email: '',
      isLoading: false
    };
  }

  validate = () => {
    console.log('hello')
    console.log(this.state.email,"email id")
    if (this.state.email == '') {
      Platform.select({
          ios: () => { AlertIOS.alert('Please enter email'); },
          android: () => { ToastAndroid.show('Please enter email', ToastAndroid.SHORT); }
      })();
      return false;
  }
    var text = this.state.email;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      Platform.select({
        ios: () => {
          AlertIOS.alert('Email is Not Correct');
        },
        android: () => {
          ToastAndroid.show('Email is Not Correct', ToastAndroid.SHORT);
        }
      })();
      return false;
    } else {
      this.checkEmail()
    }
  }

  async checkEmail() {
    if (this.state.email != "") {
      this.setState({ isLoading: true });
      var data = new FormData();
      data.append('email', this.state.email);

      const config = {
        method: 'POST',
        headers: {},
        body: data
      }
      console.log(config)
      await fetch('http://ec2-52-207-124-182.compute-1.amazonaws.com:3333/api/v1/checkEmail?email=' + this.state.email, config)
        .then(res => res.json()).then(res => {
          console.log(res);
          if (res.success == true) {
            AsyncStorage.setItem('email', this.state.email);
            this.setState({ isLoading: false });
            this.props.navigation.navigate('EnterPassword');
          } else {
            this.setState({ isLoading: false });
            this.props.navigation.navigate('Register');
          }
        }).catch((error) => {
          this.setState({ isLoading: false });
          Platform.select({
            ios: () => {
              AlertIOS.alert('Error, please try again later.');
            },
            android: () => {
              ToastAndroid.show('Error, please try again later.', ToastAndroid);
            }
          })();
          console.log(error);
        })
    }
  }

  Register() {
    this.props.navigation.navigate('Register');
    console.log('done');
  };
  categories() {
    this.props.navigation.navigate('categories');
    console.log('done');
  };
  EnterPassword() {
    AsyncStorage.setItem('email', this.state.email);
    this.props.navigation.navigate('EnterPassword');
    console.log('done');
  };
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
      //behavior="padding"
      >
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image style={{ height: 30, width: 40, marginLeft: 10, marginTop: 30 }}
              source={require('../Images/Icons/keyboard-backspace.png')} />
          </TouchableOpacity>
          <Text style={{ fontSize: 45, color: '#FA8258', marginTop: 15, marginLeft: 25, marginRight: 25, justifyContent: 'center', alignItems: 'center', }}>
            Let's do this
        </Text>
          <Text style={{ marginTop: 20, fontSize: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 20, marginRight: 20, color: '#2E2E2E' }}>
            Sign in to see our top picks for you
        </Text>
          <Text style={{ fontSize: 18, marginTop: 30, marginLeft: 18, color: '#2E2E2E' }}> Email
         </Text>
          <View style={{ padding: 1, marginLeft: 20, paddingLeft: 3, marginRight: 20, }}>
            <TextInput
              style={{ fontSize: 18, height: 40 }}
              keyboardType="email-address"
              placeholder="Enter email address"
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ email: text })}
              value={this.state.email}
            />
            <View style={{ height: 1, backgroundColor: '#808080', }}></View>
          </View>
          <TouchableOpacity onPress={() => this.validate()}>
            <ImageBackground
              resizeMode="contain"
              style={{ height: 45, alignItems: 'center', marginLeft: 20, marginRight: 20, marginTop: 25, justifyContent: 'center', }}
              source={require('../Images/btn.png')} >
              <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center', backgroundColor: 'transparent' }}>GET STARTED
         </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.categories()}>
            <Text style={{ fontSize: 20, marginTop: 20, color: '#2E2E2E', textAlign: 'center', }}>Later
         </Text>
          </TouchableOpacity>

          {this.state.isLoading &&
            < Spinner />
          }

        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    height: "100%"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
