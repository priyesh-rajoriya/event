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

var width = Dimensions
  .get('window')
  .width; //full width
var height = Dimensions
  .get('window')
  .height; //full height

export default class Legal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  Screen18() {
    this
      .props
      .navigation
      .navigate('Screen18');
    console.log('done');
  };
  Logo() {
    this
      .props
      .navigation
      .navigate('VolunteerFormDatenTime');
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
          androidStatusBarColor="#000"
          iosBarStyle="dark-content">
          <View
            style={{
            width: width,
            flexDirection: "row"
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
                  width: 35, height: 35, tintColor: '#000'
                
              }}/>
            </TouchableOpacity>
            <Text
              style={{
                fontWeight: 'bold', color: "#000", fontSize: 18,marginLeft:60,marginTop:5
            }}>
              Legal
            </Text>
          </View>
        </Header>
        <View
          style={{
          padding: 1,
          marginTop: 30,
          marginLeft: 20,
          marginRight: 20
        }}>
          <TouchableOpacity>
            <Text
              style={{
              fontSize: 18,
              margin: 5
            }}>
              Privacy</Text>
          </TouchableOpacity>
          <View
            style={{
            height: 1,
            backgroundColor: 'gray',
            marginTop: 10
          }}></View>
        </View>
        <View
          style={{
          padding: 1,
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20
        }}>
          <TouchableOpacity>
            <Text
              style={{
              fontSize: 18,
              margin: 5
            }}>
              Terms of service</Text>
          </TouchableOpacity>
          <View
            style={{
            height: 1,
            backgroundColor: 'gray',
            marginTop: 10
          }}></View>
        </View>
        <View
          style={{
          padding: 1,
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20
        }}>
          <TouchableOpacity>
            <Text
              style={{
              fontSize: 18,
              margin: 5
            }}>Cookie Policy</Text>
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
