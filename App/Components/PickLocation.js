import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  BackHandler,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Footer,
  FooterTab,
  Icon,
  Card,
  Badge
} from 'native-base';

export default class PickLocation extends Component {
  constructor() {
    super();
    this.state = {
      latitude: " ",
      longitude: " ",
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  //current location start//  
  myLocation() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
    this.props.navigation.navigate('Login');
    console.warn(this.state.latitude+"   "+"  "+this.state.longitude);
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }
  //current location end//

  EnterLocation() {
  
    this.props.navigation.navigate('EnterLocation');
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
        
          <Text style={{ fontSize: 42, color: '#EF8251', marginTop: 20, justifyContent: 'center', textAlign: 'center', }}>
            Where do you{'\n'} go out?
        </Text>
          <Text style={{ marginTop: 11, fontSize: 18, justifyContent: 'center', textAlign: 'center', color: '#2E2E2E' }}>
            We'll show you what's good near you
        </Text>
          <Image style={{ maxHeight:"55%", marginTop: 10, width: "100%", }} resizeMode="stretch"
            source={require('../Images/logo2.png')} />
          <TouchableOpacity onPress={() => this.EnterLocation()}>
            <ImageBackground resizeMode='contain' style={{ height: 55, marginTop: 5, marginLeft: 20, marginRight: 20, justifyContent: 'center', }}
              source={require('../Images/btn.png')} >
              <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center', backgroundColor: 'transparent' }}>
                PICK A LOCATION
              </Text>
            </ImageBackground>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => this.myLocation()}
            style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ height: 31, width: 31, }}
              source={require('../Images/smallicon.png')} />
            <Text style={{ fontSize: 22, color: '#2E2E2E', marginLeft: 10}}>
              Use my current location
            </Text>
         </TouchableOpacity>

         <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Login')}
            style={{ flexDirection: 'row',  alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 22,  textAlign: 'center', color: '#2E2E2E', marginBottom:10}}>Skip
         </Text>
         </TouchableOpacity>


      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
