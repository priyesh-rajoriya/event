/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TextInput,
  Button,
  TouchableOpacity,
  ToastAndroid,
  AlertIOS,
  FlatList,
  ImageBackground
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.inputView}>
          <Text style={{ color: 'black', fontSize: 20, marginTop: 35}}>
            OTP
        </Text>
          <TextInput
            placeholder='Please enter your OTP'
            underlineColorAndroid='transparent'
            style={{ borderRadius: 8, borderWidth: 1, borderColor: 'gray', width: 325, height: 37, fontSize: 15, marginTop: 10 }}>
          </TextInput>
        </View>
        <View style={styles.inputView}>
          <Text style={{ color: 'black', fontSize: 20, marginTop: 35}}>
           Reset password
        </Text>
          <TextInput
            placeholder='Please enter your password'
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            value={this.state.email}
            onChangeText={(text) => this.setState({ email: text })}
            style={{ borderRadius: 8, borderWidth: 1, borderColor: 'gray', width: 325, height: 37, fontSize: 15, marginTop: 10 }}>
          </TextInput>
        </View>
        <View style={styles.inputView}>
          <Text style={{ color: 'black', fontSize: 20, marginTop: 35}}>
           Confirm password
        </Text>
          <TextInput
            placeholder='Please confirm your password'
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ password: text })}
            value={this.state.password}
            style={{ borderRadius: 8, borderWidth: 1, borderColor: 'gray', width: 325, height: 37, fontSize: 15, marginTop: 10 }}>
          </TextInput>
        </View>

        <View style = {{width:'100%'}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
        <ImageBackground

          style={{ height: 45,
            width:325,
            alignItems: 'center',
            marginLeft: 50,
            marginRight: 20,
            marginTop: 35,
            justifyContent: 'center', }}
          source={require('../Images/btn.png')}>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              textAlign: 'center',
              backgroundColor: 'transparent'
            }}>Submit
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      </View>

        <Text style={{ fontSize: 20, color: '#000' }}>
          {this.state.tmpArray}
        </Text>
        <FlatList
          data={this.state.cat}
          renderItem={({ item }) =>
          <View>

           <Text>{item.cat_name}</Text>
           <Text>{item.cat_name},{item.cat_status}</Text>
           </View>
          } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex:1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputView: {
    alignItems: 'center',
    //justifyContent:'left',
     width: '100%',
    marginLeft: 15
  },
});