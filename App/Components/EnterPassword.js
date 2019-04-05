import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  ScrollView,
  ListView,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  AsyncStorage,
  TextInput,
  BackHandler,
  Platform,
  Keyboard,
  ToastAndroid,
  BackAndroid,
  Alert,
  AlertIOS
} from 'react-native';
import Spinner from './Spinner';
import {
  Container,
  Content,
  Row,
  Header,
  Title,
  Button,
  Fab,
  Right,
  Left,
  Tabs,
  Tab,
  TabHeading,
  Card,
  Body,
  CardItem,
  Item,
  Input,
  Label
} from 'native-base';

var width = Dimensions
  .get('window')
  .width; //full width
var height = Dimensions
  .get('window')
  .height; //full height

import AllAPI from "../Apis/AllAPI"

export default class EnterPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isLoading: false,
      email: '',
      password: ''
    };
    this.getdata();
  };
  // async getdata() {
  //   var email =  AsyncStorage.getItem('email');
  //   console.log(email);
  //   // if (email !== "") {
  //     this.setState({ email: email });
  //     console.log(this.state.email);
  //   //   console.log(email + 'email');
  //   // };
  // };
  async getdata() {
    try {
      const email = await AsyncStorage.getItem('email');
      this.setState({
        email: email,
      })
    } catch (error) {
      // Error retrieving data
    }
  }
  validate = () => {
    console.log('Error Check');

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
      this.UserLogin()
    }
  }

  async UserLogin() {
    if (this.state.email != "") {
      if (this.state.password != "") {
        this.setState({ isLoading: true });
        var data = new FormData();
        data.append('email', this.state.email);
        data.append('password', this.state.password);
        const config = {
          method: 'POST',
          headers: {},
          body: data
        }
        await fetch(AllAPI.userLogin, config)
          .then(res => res.json())
          .then(res => {
            console.log(res);
            if (res.success == true) {
              AsyncStorage.setItem('email', res.data.email);
              AsyncStorage.setItem('firstName', res.data.firstname);
              AsyncStorage.setItem('lastName', res.data.lastname);
              AsyncStorage.setItem('mobile', res.data.mobile);
              AsyncStorage.setItem('id', res.data.id.toString());
              AsyncStorage.setItem('password', this.state.password.toString());
              AsyncStorage.setItem('categoty', JSON.stringify(res.data.category_selected));

              this.setState({ isLoading: false });
              console.log(res.data.interest)
              this.props.navigation.navigate("Home")

            } else {
              this.setState({ isLoading: false });
              Platform.select({
                ios: () => {
                  AlertIOS.alert('Please, Check Email & Password.');
                },
                android: () => {
                  ToastAndroid.show('Please, Check Email & Password.', ToastAndroid.SHORT);
                }
              })();
            }
          })
          .catch((error) => {
            this.setState({ isLoading: false });
            Platform.select({
              ios: () => {
                AlertIOS.alert('Error, please try again later.');
              },
              android: () => {
                ToastAndroid.show('Error, please try again later.', ToastAndroid.SHORT);
              }
            })();
            console.log(error);
          })
      } else {
        Platform.select({
          ios: () => {
            AlertIOS.alert('Password cannot be Empty');
          },
          android: () => {
            ToastAndroid.show('Password cannot be Empty', ToastAndroid.SHORT);
          }
        })();
      }
    } else {
      Platform.select({
        ios: () => {
          AlertIOS.alert('Email cannot be Empty');
        },
        android: () => {
          ToastAndroid.show('Email cannot be Empty', ToastAndroid.SHORT);
        }
      })();
    }
  }
  Events() {
    this
      .props
      .navigation
      .navigate('Events');
    console.log('done');
  };
  Register() {
    this
      .props
      .navigation
      .navigate('Register');
    console.log('done');
  };
  ForgotPassword() {
    this
      .props
      .navigation
      .navigate('ForgotPassword');
    console.log('done');
  };
  render() { 
    return (
      <View style={styles.container}>
        <Header
          hasTabs
          style={{
            backgroundColor: "transparent",
            justifyContent: 'center'
          }}
          androidStatusBarColor="#D35400"
          iosBarStyle="dark-content">
          <View
            style={{
              width: width,
              flexDirection: "row",
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{
                marginLeft: 10,
                position: 'absolute',
                left: 0
              }}>
              <Image
                source={require('../Images/Icons/keyboard-backspace.png')}
                style={{
                  width: 35,
                  height: 35,
                  tintColor: '#000'
                }} />
            </TouchableOpacity>
            <Text
              style={{
                fontWeight: 'bold',
                color: "#000",
                fontSize: 18,
                textAlign: 'center'
              }}>
              Login</Text>
          </View>
        </Header>
        <KeyboardAvoidingView>
          <ScrollView>
            <Text
              style={{
                fontSize: 18,
                marginTop: 40,
                marginLeft: 18,
                color: '#151515'
              }}>
              Email
          </Text>
            <View
              style={{
                padding: 1,
                marginLeft: 20,
                marginRight: 20
              }}>
              <TextInput
                style={{
                  fontSize: 15,
                  height: 40
                }}
                keyboardType="email-address"
                placeholder="Enter email address"
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.setState({ email: text })}
                value={this.state.email}
                onSubmitEditing={(event) => {
                this.refs.password.focus();
                  }}
                />
            </View>
            <View
              style={{
                backgroundColor: '#828080',
                height: 1,
                marginLeft: 25,
                marginRight: 25
              }}></View>
            <Text
              style={{
                fontSize: 18,
                marginTop: 20,
                marginLeft: 18,
                color: '#151515'
              }}>
              Password
          </Text>
            <View
              style={{
                padding: 1,
                marginLeft: 20,
                marginRight: 20
              }}>
              <TextInput
                style={{
                  fontSize: 15,
                  height: 40
                }}
                ref='password'
                placeholder="Enter Password"
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.setState({ password: text })}
                value={this.state.password}
                secureTextEntry={true}
                onSubmitEditing={(event) => {
                  Keyboard.dismiss
                  }}/>
            </View>
            <View
              style={{
                backgroundColor: '#828080',
                height: 1,
                marginLeft: 25,
                marginRight: 25
              }}></View>
            <TouchableOpacity onPress={() => this.validate()}>
              <ImageBackground
                resizeMode="contain"
                style={{
                  height: 50,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 45,
                  justifyContent: 'center'
                }}
                source={require('../Images/btn.png')}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                    textAlign: 'center',
                    backgroundColor: 'transparent'
                  }}>LOG IN
              </Text>
              </ImageBackground>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 15,
                marginTop: 10,
                color: '#58ACFA',
                justifyContent: 'center',
                textAlign: 'center'
              }}>OR
          </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}>
              <ImageBackground
                resizeMode="contain"
                style={{
                  height: 50,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10,
                  justifyContent: 'center'
                }}
                source={require('../Images/btn.png')}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                    textAlign: 'center',
                    backgroundColor: 'transparent'
                  }}>REGISTER
              </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("ForgotPassword")}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 10,
                  color: '#58ACFA',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}>Forgot Password
            </Text>
            </TouchableOpacity>
          </ScrollView>

          {this.state.isLoading &&
            < Spinner />
          }

        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
