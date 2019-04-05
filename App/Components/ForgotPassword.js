import React, {Component} from 'react';
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
  ActivityIndicator,
  AsyncStorage,
  TextInput,
  BackHandler,
  Platform,
  BackAndroid,
  Alert,
  AlertIOS
} from 'react-native';
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


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

import AllAPI from "../Apis/AllAPI"

export default class ForgotPassword extends Component {
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
  async getdata() {
    var email = await AsyncStorage.getItem('email');
    if (email !== "") {
      this.setState({email: email});
      console.log(email + 'email');
    };
  };

  // async UserLogin() {
  //   if (this.state.email != "") {
  //     if (this.state.password != "") {
  //       this.setState({isLoading: true});
  //       var data = new FormData();
  //       data.append('email', this.state.email);
  //       data.append('password', this.state.password);
  //       const config = {
  //         method: 'POST',
  //         headers: {},
  //         body: data
  //       }
  //       await fetch(AllAPI.userLogin, config)
  //         .then(res => res.json())
  //         .then(res => {
  //           console.log(res);
  //           if (res.success == true) {
  //             AsyncStorage.setItem('email', res.data[0].email);
  //             AsyncStorage.setItem('firstName', res.data[0].firstname);
  //             AsyncStorage.setItem('lastName', res.data[0].lastname);
  //             AsyncStorage.setItem('id', res.data[0].id.toString());
  //             // AsyncStorage.setItem('interest', res.data[0].interest);
  //             // AsyncStorage.setItem('membership_id', res.data[0].membership_id);
  //             AsyncStorage.setItem('mobile', res.data[0].mobile);
  //             AsyncStorage.setItem('qr_code_image', res.data[0].qr_code_image);
  //             AsyncStorage.setItem('updated_at', res.data[0].updated_at);
  //             AsyncStorage.setItem('user_role', res.data[0].user_role.toString());
  //             AsyncStorage.setItem('password', res.data[0].password.toString());  
  //             this.setState({isLoading: false});
  //             Platform.select({
  //               ios: () => {
  //                 AlertIOS.alert('', 'Login Successful, Welcome.', [
  //                   {
  //                     text: 'OK',
  //                     onPress: () => this
  //                       .props
  //                       .navigation
  //                       .navigate("Home")
  //                   }
  //                 ])
  //               },
  //               android: () => {
  //                 ToastAndroid.show('Login Successful, Welcome.', ToastAndroid.SHORT);
  //                 this
  //                   .props
  //                   .navigation
  //                   .navigate("Home");
  //               }
  //             })();
  //           } else {
  //             this.setState({isLoading: false});
  //             Platform.select({
  //               ios: () => {
  //                 AlertIOS.alert('Please, Check Email & Password.');
  //               },
  //               android: () => {
  //                 ToastAndroid.show('Please, Check Email & Password.', ToastAndroid.SHORT);
  //               }
  //             })();
  //           }
  //         })
  //         .catch((error) => {
  //           this.setState({isLoading: false});
  //           Platform.select({
  //             ios: () => {
  //               AlertIOS.alert('Error, please try again later.');
  //             },
  //             android: () => {
  //               ToastAndroid.show('Error, please try again later.', ToastAndroid.SHORT);
  //             }
  //           })();
  //           console.log(error);
  //         })
  //     } else {
  //       Platform.select({
  //         ios: () => {
  //           AlertIOS.alert('Password cannot be Empty');
  //         },
  //         android: () => {
  //           ToastAndroid.show('Password cannot be Empty', ToastAndroid.SHORT);
  //         }
  //       })();
  //     }
  //   } else {
  //     Platform.select({
  //       ios: () => {
  //         AlertIOS.alert('Email cannot be Empty');
  //       },
  //       android: () => {
  //         ToastAndroid.show('Email cannot be Empty', ToastAndroid.SHORT);
  //       }
  //     })();
  //   }
  // }
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
  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{
          flex: 1,
          justifyContent: 'center',
          paddingTop: 20
        }}>
          <ActivityIndicator size="large"/>
        </View>
      );
    }
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
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{

              position: 'absolute',
              left:20,marginTop:20
            }}>
              <Image
                source={require('../Images/Icons/keyboard-backspace.png')}
                style={{
                width: 30,
                height: 30,
                tintColor: '#000',
              }}/>
            </TouchableOpacity>
        </Header>

        <View style={{justifyContent:'center'}}>
        <Text style={{fontSize:18,alignSelf:'center',marginTop:100,color:'#FF8000'}}>Please enter your registered email</Text>
        <TextInput
            style={{ fontSize: 18, height:40, borderWidth:1, marginTop:20, marginLeft:20, marginRight:20, borderRadius:5, paddingLeft:5  }}
            placeholder="Enter email"
           // secureTextEntry={true}
            underlineColorAndroid='transparent'
            placeholderTextColor="grey"
            onChangeText={(text) =>this.setState({text:text}) }
            //value={this.state.Conpassword}                  
          />

          <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('OTP')}}>
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
              }}>SEND
            </Text>
          </ImageBackground>
        </TouchableOpacity>
       </View>
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
