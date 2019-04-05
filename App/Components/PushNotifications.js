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
  Alert
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

import ToggleSwitch from 'toggle-switch-react-native';

var id;

import AllAPI from "../Apis/AllAPI"

export default class PushNotifications extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      notifyMeToggle:'1',
      myEventToggle:'1',
      mTicketToggle:'1',
      user_id:'',
      isLoading:false
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  };

  async componentWillMount() {
    try {
      id = await AsyncStorage.getItem('id');
    } catch (e) {
      console.log(e);
    }    
    //id
    if (id != null) {
      this.setState({user_id: id});
      console.log(id + 'id');
    };
  };
  async  notifyMeToggle(value) {
    var temp;
    if(value==true){
      temp = "1"
    }else{
      temp = "0"
    }
    this.setState({notifyMeToggle:temp});
    //this.setState({isLoading:true})
    var data = new FormData();
    data.append('user_id',this.state.user_id);
    data.append('event_remainder',temp);
    data.append('ticket_remainder',this.state.mTicketToggle);
    data.append('event_update',this.state.myEventToggle);
      const config = {
        method: 'POST',
        headers: {
          },
        body: data,
          }
      console.log(data)
      await fetch(AllAPI.updatePushNotificationSetting,config).then(res => res.json())
        .then(res => {
          console.log(res);
          if(res.success==true){  
            console.log("done 1");
            //this.setState({isLoading:false});
        }else{
          //this.setState({isLoading:false});
          Alert.alert(
            '',
            "Error, please try again",
            [
              {text: 'ok', onPress: () => console.log('ok pressed')},
            ],)
          }
      }).catch((error) => { 
        //this.setState({isLoading:false})
        console.log(error);
      });
  }

    async  mTicketToggle(value) {  
      var temp;
      if(value==true){
        temp = "1"
      }else{
        temp = "0"
      }
      //this.setState({isLoading:true});
      this.setState({mTicketToggle:temp});  
      var data = new FormData();
      data.append('user_id',this.state.user_id);
      data.append('event_remainder',this.state.notifyMeToggle);
      data.append('ticket_remainder',temp);
      data.append('event_update',this.state.myEventToggle);
        const config = {
          method: 'POST',
          headers: {
            },
          body: data,
            }
        console.log(data)
        await fetch(AllAPI.updatePushNotificationSetting,config).then(res => res.json())
          .then(res => {
            console.log(res);
            if(res.success==true){  
              console.log("done 2");
              //this.setState({isLoading:false});
          }else{
            //this.setState({isLoading:false});
            Alert.alert(
              '',
              "Error, please try again",
              [
                {text: 'ok', onPress: () => console.log('ok pressed')},
              ],)        
            }
        }).catch((error) => { 
          //this.setState({isLoading:false})
          console.log(error);
        });
    }

  async  myEventToggle(value) { 
    var temp;
    if(value==true){
      temp = "1"
    }else{
      temp = "0"
    }
    
   // this.setState({isLoading:true});
    this.setState({myEventToggle:temp});
    var data = new FormData();
    data.append('user_id',this.state.user_id);
    data.append('event_remainder',this.state.notifyMeToggle);
    data.append('ticket_remainder',this.state.mTicketToggle);
    data.append('event_update',temp);
      const config = {
        method: 'POST',
        headers: {
          },
        body: data,
          }
      console.log(data)
      await fetch(AllAPI.updatePushNotificationSetting,config).then(res => res.json())
        .then(res => {
          console.log(res);
          if(res.success==true){  
            console.log("done 3");
            //this.setState({isLoading:false});
          }else{
            //this.setState({isLoading:false});
          Alert.alert(
            '',
            "Error, please try again",
            [
              {text: 'ok', onPress: () => console.log('ok pressed')},
            ],)
          }
      }).catch((error) => { 
        //this.setState({isLoading:false})
        console.log(error);
      });
  }

  Screen21(){
    this.props.navigation.navigate('Screen21');
    console.log('done');
  };
  Screen18(){
    this.props.navigation.navigate('Screen18');
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
    return (
      <View style={styles.container}>
      <Header hasTabs
          style={{ backgroundColor: "transparent", justifyContent: 'center', }}
          androidStatusBarColor="#D35400"
          iosBarStyle="dark-content">
          <View style={{ width: width, flexDirection: "row", }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}
              style={{ marginLeft: 10, position: 'absolute', left: 0, }}>
              <Image source={require('../Images/Icons/keyboard-backspace.png')}
                style={{ width: 35, height: 35, tintColor: '#000' }} />
            </TouchableOpacity>
            <Text style={{ fontWeight: 'bold', color: "#000", fontSize: 18,marginLeft:60,marginTop:5 }}>
              Push Notifications
            </Text>
          </View>
        </Header>
        <Text style={{fontSize:16,margin:20,color:'#1C1C1C',fontWeight:'bold'}}> 
          Notify me
        </Text> 
       <View style={{flexDirection:'row'}}>  
        <Text style={{fontSize:15,marginLeft:20,marginTop:5,}}>Notify me three hours before my event
         </Text>
        <View style={{position:'absolute', right:10,marginTop:-8}}>
         <ToggleSwitch 
            isOn={false}
            onColor='#E59866'
            offColor='#B2BABB'
            label=''
            labelStyle={{color: 'black', fontWeight: '900'}}
            size='medium'
            onToggle={ (isOn) => console.log('changed to : ', isOn) }
        />
       </View>
       </View>
       <View style={{height:1,backgroundColor:'grey',marginTop:20,marginLeft:20,marginRight:20}}></View>
       <Text style={{fontSize:16,margin:20,color:'#1C1C1C',fontWeight:'bold'}}> My Events
         </Text> 
        <View style={{flexDirection:'row'}}>   
        <Text style={{fontSize:15,marginLeft:20,marginTop:5,width:260}}>Recieve update when your tickets are availabe in the app, reminder before start time, and alerts if your event was rescheduled.
         </Text> 
         <View style={{position:'absolute', marginTop:10,right:10}}>
         <ToggleSwitch 
            isOn={false}
            onColor='#E59866'
            offColor='#B2BABB'
            label=''
            labelStyle={{color: 'black', fontWeight: '900'}}
            size='medium'
            onToggle={ (isOn) => console.log('changed to : ', isOn) }
        />
       </View>
       </View>  
       <View style={{height:1,backgroundColor:'grey',marginTop:20,marginLeft:20,marginRight:20}}></View>
       <TouchableOpacity  onPress={() => this.Screen21()}>   
       <Text style={{fontSize:16,margin:20,color:'#1C1C1C',fontWeight:'bold'}}>Ticket reminders
         </Text>
       </TouchableOpacity>  
        <View style={{flexDirection:'row',}}>    
        <Text style={{fontSize:15,marginLeft:20,marginTop:5,width:260}}>Konw when events you're interested in are about to sell out and get reminders to finish checkouts.
         </Text> 
         <View style={{position:'absolute', marginTop:10,right:10}}>
         <ToggleSwitch 
            isOn={false}
            onColor='#E59866'
            offColor='#B2BABB'
            label=''
            labelStyle={{color: 'black', fontWeight: '900'}}
            size='medium'
            onToggle={ (isOn) => console.log('changed to : ', isOn) }
        />
       </View>
       </View> 
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
