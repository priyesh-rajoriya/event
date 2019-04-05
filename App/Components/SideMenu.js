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

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      id: ''
    };
    this.GetUser();
  }
  async componentWillMount() {
    console.log("home")
    try {
      // var firstName = await AsyncStorage.getItem('firstName');
      // var lastName = await AsyncStorage.getItem('lastName');
      var firstName = await AsyncStorage.getItem('firstName');
      var lastName = await AsyncStorage.getItem('lastName');
      var email = await AsyncStorage.getItem('email')
      var mobile = await AsyncStorage.getItem('mobile')
      var tempArray = await AsyncStorage.getItem('tempArray');
      this.state.user_id = await AsyncStorage.getItem('id');
      this.setState({
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobile: mobile,
        tempArry: tempArray
      })
      console.log(firstName, '123456789')
      console.log(tempArray, this.state.user_id)
    } catch (error) {
      console.log(error)
    }
  }
  async GetUser() {
    try {
      const id = await AsyncStorage.getItem('id');
      if (id != null || id != "" || id != undefined) {
        this.setState({
          id: id,
        })

      }
    } catch (error) {
      // Error retrieving data
    }
  }
  userProfile() {
    this.props.navigation.navigate('userProfile');
    console.log('done');
  };
  EnterPassword() {
    this.props.navigation.navigate('EnterPassword');
    console.log('done');
  };
  alert() {
    Alert.alert(
      'Alert Title',
      'Are you sure you want to go out?',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        { text: 'CANCEL', onPress: () => console.log('CANCEL Pressed'), style: 'cancel' },
        { text: 'LOGOUT', onPress: () => console.log('LOGOUT Pressed') },
      ],
      { cancelable: false }
    )
  }
  logout() {
    try {
      Platform.select({
        ios: () => {
          AlertIOS.alert('', 'Are you sure you want to logout.', [
            { text: 'CANCEL', onPress: () => console.log('CANCEL Pressed'), style: 'cancel' },
            { text: 'LOGOUT', onPress: () => { AsyncStorage.clear(), this.props.navigation.navigate("Home") } },
          ])
        },
        android: () => {
          Alert.alert('', 'Are you sure you want to logout.', [
            { text: 'CANCEL', onPress: () => console.log('CANCEL Pressed'), style: 'cancel' },
            { text: 'LOGOUT', onPress: () => { AsyncStorage.clear(), this.props.navigation.navigate("Home") } },
          ]);
        }
      })();
    } catch (e) {
      console.log(e)
    }
  }
  render() {

    return (
      <View style={styles.container}>
        <ImageBackground style={{ height: 170, width: window.width, justifyContent: 'center' }}
          source={require('../Images/Background.png')}>
          <View style={{ flexDirection: 'row',alignItems:'center',justifyContent:'center' }}>
            <View
             onPress={() => this.props.navigation.navigate('userProfile')}>
              <Image style={{ height: 90, width: 90,marginLeft:10}}
                source={require('../Images/Profile-image.png')} />
            </View>
            <View>
            <Text style={{ fontSize: 16, color: 'white' }}> {this.state.firstName} {this.state.lastName}</Text>
              <Text
              ellipsizeMode='tail' numberOfLines={1}
              style={{ fontSize: 14, color: 'white',marginTop:6}}> {this.state.email} </Text>
              <Text style={{ fontSize: 14, color: 'white',marginTop:3}}> {this.state.mobile} </Text>
            </View>
          </View>
        </ImageBackground>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <View style={{ marginTop: 30, flexDirection: 'row', marginLeft: 20, }}>
            <Image style={{ height: 30, width: 34, tintColor: 'black' }}
              source={require('../Images/Home.png')} />

            <Text style={{ fontSize: 17, alignSelf: 'center', marginLeft: 20, color: 'black' }}>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate("Events")}>
          <View style={{ marginTop: 15, flexDirection: 'row', marginLeft: 20, }}>
            <Image style={{ height: 30, width: 34, tintColor: 'black' }}
              source={require('../Images/Event.png')} />

            <Text style={{ fontSize: 17, alignSelf: 'center', marginLeft: 20, color: 'black' }}>Event</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate("Search")}>
          <View style={{ marginTop: 15, flexDirection: 'row', marginLeft: 20, }}>
            <Image style={{ height: 30, width: 34, tintColor: 'black' }}
              source={require('../Images/Search.png')} />
            <Text style={{ fontSize: 17, alignSelf: 'center', marginLeft: 20, color: 'black' }}>Search</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate("NonProfit")}>
          <View style={{ marginTop: 15, flexDirection: 'row', marginLeft: 20, }}>
            <Image style={{ height: 34, width: 34, tintColor: 'black' }}
              source={require('../Images/Non-profit.png')} />

            <Text style={{ fontSize: 17, alignSelf: 'center', marginLeft: 20, color: 'black' }}>Non-Profit</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate("userProfile")}>
          <View style={{ marginTop: 15, flexDirection: 'row', marginLeft: 20, }}>
            <Image style={{ height: 34, width: 34, tintColor: 'black' }}
              source={require('../Images/User.png')} />

            <Text style={{ fontSize: 17, alignSelf: 'center', marginLeft: 20, color: 'black' }}>Profile</Text>
          </View>
        </TouchableOpacity>
        {/*
       <TouchableOpacity>
       <View style={{marginTop:25,flexDirection:'row',marginLeft:20,}}>
            <Image style={{height:22,width:22,marginLeft:10}}
                source={require('../Images/Membership-Details.png')} />

            <Text style={{fontSize:17,alignSelf:'center',marginLeft:20}}>  Membership Details</Text>
       </View>
       </TouchableOpacity> */}

        <TouchableOpacity onPress={() => this.props.navigation.navigate("Settings")}>
          <View style={{ marginTop: 15, flexDirection: 'row', marginLeft: 20, }}>
            <Image style={{ height: 30, width: 34, tintColor: 'black' }}
              source={require('../Images/Settings.png')} />

            <Text style={{ fontSize: 17, alignSelf: 'center', marginLeft: 20, color: 'black' }}>Settings</Text>
          </View>
        </TouchableOpacity>
        {this.state.id != null &&
          <TouchableOpacity onPress={() => this.logout()}>
            <View style={{ marginTop: 35, flexDirection: 'row', marginLeft: 20, }}>
              <Image style={{ height: 30, width: 34, tintColor: 'black' }}
                source={require('../Images/Logout.png')} />
              <Text style={{ fontSize: 17, alignSelf: 'center', marginLeft: 20, color: 'black' }}>Log Out</Text>
            </View>
          </TouchableOpacity>
        }
        {this.state.id == null &&
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
            <View style={{ marginTop: 30, flexDirection: 'row', marginLeft: 20, }}>
              <Image style={{ height: 30, width: 34 }}
                source={require('../Images/Logout.png')} />
              <Text style={{ fontSize: 17, alignSelf: 'center', marginLeft: 20,color: 'black' }}>Login</Text>
            </View>
          </TouchableOpacity>
        }
        <View style={{ height: 20 }} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
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
