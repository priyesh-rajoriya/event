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

export default class QrCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isLoading: false,
      email: '',
      password: ''
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.GetUser();
  };
  async getdata() {
    var email = await AsyncStorage.getItem('email');
    if (email !== "") {
      this.setState({email: email});
      console.log(email + 'email');
    };
  };
  async GetUser(){
    try {
      const firstName = await AsyncStorage.getItem('firstName');
      const lastName = await AsyncStorage.getItem('lastName');
      this.setState({
        firstName: firstName,
        lastName: lastName
    })
      
    } catch (error) {
      // Error retrieving data
    }
  }

  userProfile() {
    this
      .props
      .navigation
      .navigate('userProfile');
    console.log('done');
  };

    //------exit app start------//
    componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  handleBackButtonClick() {
      this.props.navigation.goBack(null);
      return true;
  }
  //------exit app end------//


  render() {

    var params = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <Header
          hasTabs
          style={{
          backgroundColor: "transparent",
          justifyContent: 'center'
        }}
          androidStatusBarColor="#000"
          iosBarStyle="dark-content">
       
            <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
              style={{
             
              position: 'absolute',
              right:20,marginTop:20
            }}>
              <Image
                source={require('../Images/right.png')}
                style={{
                width: 30,
                height: 30,
                tintColor: '#000',
              }}/>
            </TouchableOpacity>
             
        </Header>

        <View  style={{justifyContent:'center'}}>
        <Image  source={require('../Images/download.png')}
          style={{
                width: 230,
                height: 230,
               marginTop:100,alignSelf:'center'
              }}/>
           
        <Text
          style={{
          fontSize: 18,
          marginTop: 25,
          marginLeft: 18,
          color: '#151515',fontWeight:'bold',alignSelf:'center'
        }}>
          {this.state.firstName} {this.state.lastName},Your QR-Code ID!
        </Text>
        
       
        {/* <Text
          style={{
          fontSize: 15,
          marginTop: 20,
          marginLeft: 18,
          color: '#151515',alignSelf:'center'
        }}>
        We just sent you an email with a link to reset {'\n'}your Password
        </Text> */}
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
