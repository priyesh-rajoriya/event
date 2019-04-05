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

var email;

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      email:'' 
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  async componentWillMount() {
    try {
      email = await AsyncStorage.getItem('email');
    } catch (e) {
      console.log(e);
    }
    //email
    if (email != null) {
      this.setState({email: email});
      console.log(email + 'name');
    } 
  };
  alert(){
    Alert.alert(
      'Alert Title',
      'Are you sure you want to go out?',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'CANCEL', onPress: () => console.log('CANCEL Pressed'), style: 'cancel'},
        {text: 'LOGOUT', onPress: () => console.log('LOGOUT Pressed')},
      ],
      { cancelable: false }
    )
  }
  logout(){
    try {
      AsyncStorage.removeItem("id");
      Platform.select({
        ios: () => {
          AlertIOS.alert('', 'Are you sure you want to logout.', [
            {text: 'CANCEL', onPress: () => console.log('CANCEL Pressed'), style: 'cancel'},
            {text: 'LOGOUT', onPress: () => this.props.navigation.navigate("Logo")},
          ])
        },
        android: () => {
          Alert.alert('', 'Are you sure you want to logout.', [
            {text: 'CANCEL', onPress: () => console.log('CANCEL Pressed'), style: 'cancel'},
            {text: 'LOGOUT', onPress: () => this.props.navigation.navigate("Logo")},
          ]);
        }
      })();
    }catch (e) {
      console.log(e)
    }
  }
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
    return (
      <View style={styles.container}>
        <Header hasTabs
          style={{ backgroundColor: "transparent", justifyContent: 'center' }}
          androidStatusBarColor="#D35400"
          iosBarStyle="dark-content">
          <View style={{ backgroundColor: "transparent",width: width, flexDirection: "row",}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{marginLeft: 10, position: 'absolute',left: 0
            }}>
              <Image source={require('../Images/Icons/keyboard-backspace.png')}
                style={{width: 45, height: 45, tintColor: '#000'
              }}/>
            </TouchableOpacity>
          </View>
        </Header>
         <Text style={{fontSize:15,marginLeft:20,marginTop:25,color:'#FA8258'}}> ACCOUNT
         </Text>
         <View style={{padding:1,marginTop:20,marginLeft:20,marginRight:20}}> 
        <TouchableOpacity onPress={() => this.props.navigation.navigate("PushNotifications")}>
          <Text style={{fontSize:18}}> Push Notification</Text>
        </TouchableOpacity>
      </View>
   
        <Text style={{fontSize:15,marginLeft:20,marginTop:25,color:'#FA8258'}}> ABOUT
         </Text> 
    
          <View style={{padding:1,marginTop:20,marginLeft:20,marginRight:20,}}>
            <TouchableOpacity>
              <Text style={{fontSize:18,}}>Rate us</Text>
            </TouchableOpacity>
            <View style={{height:1,backgroundColor:'gray',marginTop:20}}></View>
          </View>
          <View style={{padding:1,marginTop:20,marginLeft:20,marginRight:20,}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Legal")}>
              <Text style={{fontSize:18,}}> Legal</Text>
            </TouchableOpacity>
            <View style={{height:1,backgroundColor:'gray',marginTop:20}}></View>
          </View>
          <View style={{padding:1,marginTop:20,marginLeft:20,marginRight:20,}}>
            <TouchableOpacity>
              <Text style={{fontSize:18,}}> Help</Text>
            </TouchableOpacity>
            <View style={{height:1,backgroundColor:'gray',marginTop:20}}></View>
          </View>
          <View style={{padding:1,marginTop:20,marginLeft:20,marginRight:20,}}>
            <TouchableOpacity>
              <Text style={{fontSize:18,}}> Acknowledgements</Text>
            </TouchableOpacity>
            {/* <View style={{height:1,backgroundColor:'gray',marginTop:10}}></View> */}
          </View>
   
            <Text style={{fontSize:15,marginLeft:20,marginTop:35,color:'#FA8258'}}>PROFILE
            </Text> 
        
          <View style={{padding:1,marginTop:10,marginLeft:20,marginRight:20,}}>
            <TouchableOpacity> 
              <Text style={{fontSize:16,}}>{this.state.email}</Text>
            </TouchableOpacity>
            {/* <View style={{height:1,backgroundColor:'gray',marginTop:5}}></View> */}
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#F5FCFF',
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
