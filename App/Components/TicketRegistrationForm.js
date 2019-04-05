import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, AsyncStorage,
  View, Image, AppRegistry,

  TextInput, TouchableOpacity,
  ScrollView, KeyboardAvoidingView,
  AlertIOS, Alert, ToastAndroid, FlatList, Modal
} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import { Dropdown } from 'react-native-material-dropdown';
import AllAPI from "../Apis/AllAPI"

import CountDown from 'react-native-countdown-component';

import countryArray from "../country.json";

import { Header, Content, Card, CardItem, Body, } from 'native-base';
let data = [{
  value: '1',
}, {
  value: '2',
}, {
  value: '3',
},
{
  value: '4',
},
{
  value: '5',
},
{
  value: '6',
}, {
  value: '7',
}];
var number;
var user_id;
var event_id
var tempTicket = [];
export default class TicketRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '', data: '',
      user_id: '',
      value: '',
      event_id: '',
      first_name: '',
      first_name1: '',
      first_name2: '',
      first_name3: '',
      first_name4: '',
      first_name5: '',
      first_name6: '',
      last_name: '',
      last_name1: '',
      last_name2: '',
      last_name3: '',
      last_name4: '',
      last_name5: '',
      last_name6: '',
      email: '',
      email1: '',
      email2: '',
      email3: '',
      email4: '',
      email5: '',
      email6: '',
      quantity: '',
      mobile_number: '',
      mobile_number1: '',
      mobile_number2: '',
      mobile_number3: '',
      mobile_number4: '',
      mobile_number5: '',
      mobile_number6: '',
      landline_number: '',
      country: '',
      address_one: '',
      address_two: '',
      city: '',
      state: '',
      postal_code: '',
      quantity: 1,
      hideButton: false,
      hideButtonText: 'Hide',
      time: 480,
      store: {
        "state": ""
      },
      storeArray: [],
      uiRender: false, isCountry: false, selectedCountry: 'Select Country'
    };
    this.getParamValue()
    this.fillForm1 = this.fillForm1.bind(this)
    this.fillForm2 = this.fillForm2.bind(this)
    this.fillForm3 = this.fillForm3.bind(this)
    this.fillForm4 = this.fillForm4.bind(this)
  }
  selectCountry() {
    this.setState({
      isCountry: true
    })
  }
  doSelectCountry(item) {
    this.setState({
      isCountry: false,
      selectedCountry: item.label
    })
  }

  async componentWillMount() {
    user_id = await AsyncStorage.getItem('id');
    console.log(user_id + 'id');
    if (user_id != undefined) {
      this.setState({ user_id: user_id });
      console.log(user_id + 'id');
    }
    event_id = await AsyncStorage.getItem('event_id');
    console.log(event_id, 'event_id');
    if (event_id != undefined) {
      this.setState({ event_id: event_id });
      console.log(event_id + 'event_id');
    }
  };

  validate() {

    this.Registration()
  }



  async  addTicket() {
    console.log(this.state.storeArray);


  }

  ViewTicket() {
    this.props.navigation.navigate('ViewTicket');
    console.log('done');
  };
  TicketDetails() {
    this.props.navigation.navigate('TicketDetails');
    console.log('done');
  };
  SearchResultDetail() {
    this.props.navigation.navigate('SearchResultDetail');
    console.log('done');
  };
  userProfile() {
    this.props.navigation.navigate('userProfile');
    console.log('done');
  };
  getParamValue() {
    var params = this.props.navigation.state.params
    number = params.value

    var tmp = Number(params.value);
    var qnt = tmp - 1
    if (qnt > 0) {
      var a = 1;
      while (a <= qnt) {
        // tempTicket.push(params.value)
        this.state.storeArray.push({ "afname": "", "alname": "", "aemail": "", "amobile": "" })
        a++;
      }
    }
    console.log(this.state.storeArray, 'tempTicket')
  }
  backgo() {
    tempTicket = []
    this.props.navigation.goBack()
  }

  sampleArray = []

  onPriceChange(index, value) {
    console.log(index + " " + value);
  }

  hideButton() {
    if (this.state.hideButton == false) {
      this.setState({ hideButton: true, hideButtonText: 'Hide' })
    } else if (this.state.hideButton == true) {
      this.setState({ hideButton: false, hideButtonText: 'Show' })
    }
  }
  render() {
    var params = this.props.navigation.state.params;
    return (
      <KeyboardAvoidingView
        style={styles.container}>
        <ScrollView>
          <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10 }}>
              <TouchableOpacity onPress={() => this.backgo()}>
                <Image style={{ height: 30, width: 35, tintColor: 'black' }}
                  source={require('../Images/Icons/keyboard-backspace.png')} />
              </TouchableOpacity>
              <Text style={{ fontSize: 20, marginLeft: 70, color: '#424242', }}>Ticket Details
         </Text>
            </View>
            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 20, color: '#1C1C1C', }}>{params.title}
            </Text>
            <View>
              <Text style={{ fontSize: 14, color: 'red', marginLeft: 20, marginTop: 10, }}>{params.start_day}, {params.start_month} {params.end_date}, {params.start_year} from {params.from_time} to{'\n'} {params.to_time}
              </Text>
            </View>
            <View style={{ width: '90%', marginTop: 20, height: 60, alignSelf: 'center', justifyContent: "center", backgroundColor: '#3ECCFF', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'row', marginLeft: 10, justifyContent: "center", marginTop: 10 }}>
                <CountDown
                  timeTxtColor={'#3ECCFF'}
                  digitBgColor={'#3ECCFF'}
                  digitTxtColor={'#fff'}
                  timeToShow={['M', 'S']}
                  until={this.state.time}
                  onFinish={() => Alert.alert(
                    'Alert',
                    'Times up for registration',
                    [
                      { text: "continue", onPress: () => console.log('continue Pressed') },
                      { text: 'Go back', onPress: () => this.props.navigation.navigate('TicketDetails') },
                    ],
                    { cancelable: false }
                  )
                  }
                  onPress={() => alert('hello')}
                  size={18}
                />
                <Text style={{ fontSize: 16, color: '#848484', width: "80%", color: "white" }}>After 8 minutes, the reservation we are holiding Will be released.</Text>
              </View>
            </View>
            <View style={{ alignSelf: 'center', width: '90%', marginTop: 20 }}>
              <View style={{ backgroundColor: '#D8D8D8', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', width: "90%", height: 40, backgroundColor: '#D8D8D8', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 16, color: '#1C1C1C', }}> Total : Free -</Text>
                  <Text style={{ fontSize: 14, color: '#848484', }}> 1 item</Text>

                  <TouchableOpacity
                    onPress={() => this.hideButton()}>
                    <Text style={{ fontSize: 14, color: '#5882FA', }}> ({this.state.hideButtonText}) </Text>
                  </TouchableOpacity>
                </View>
                {this.state.hideButton &&
                  <View style={{ flexDirection: 'row', height: 70, marginBottom: 2, width: '99%', backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ position: 'absolute', left: 5 }}>
                      <Text style={{ fontSize: 16, color: '#BDBDBD', marginTop: 7, }}> IPSUM-2018,indore</Text>
                      <TouchableOpacity >
                        <Text style={{ fontSize: 14, color: '#81BEF7', marginLeft: 2, }}>More info</Text>
                      </TouchableOpacity>
                      <Text style={{ fontSize: 12, color: 'grey', marginLeft: 3 }}>All fees included in price</Text>
                    </View>
                    <Text style={{ fontSize: 14, textAlign: 'center', marginTop: -20, color: 'red', marginLeft: 45 }}> Free</Text>
                    <View style={{ height: 28, width: 45, position: 'absolute', right: 10, backgroundColor: '#E5E7E9' }}>
                      <Dropdown
                        style={{ fontSize: 15, textAlign: 'center', marginTop: -30, width: 50 }}
                        value={number}
                        data={data}
                        baseColor='transparent'
                        itemColor='gray'
                        textColor='gray'
                        onChangeText={(value) => this.setState({ quantity: value })}
                      />
                      <Image style={{ height: 10, width: 20, marginTop: 13, position: 'absolute', right: 4 }}
                        source={require('../Images/if_ic_arrow_drop_down_48px_352021.png')} />
                    </View>
                  </View>
                }

              </View>
            </View>
            <View style={{ marginTop: 30 }}>
              <Text style={{ fontSize: 20, marginLeft: 20, color: 'black' }}>Your Info</Text>
              <View style={{ borderRadius: 3, paddingBottom: 10, marginLeft: 10, borderWidth: 1, borderColor: 'gray', marginRight: 10, marginTop: 10 }}>
                <Text style={{ fontSize: 17, marginLeft: 20, marginTop: 20, color: '#848484' }}>First Name<Text style={{ color: 'red' }}>*</Text>
                </Text>
                <View style={{ height: 40, marginLeft: 20, marginTop: 5, marginRight: 20, borderColor: 'gray', borderWidth: 1 }}>
                  <TextInput
                    style={{ fontSize: 18, height: 40, padding: 5 }}
                    //placeholder="First Name"
                    ref='description'
                    placeholderTextColor="grey"
                    returnKeyType='next'
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({ first_name: text })}
                    value={this.state.first_name}
                    onSubmitEditing={(event) => {
                      this.refs.last_name.focus();
                    }} />
                </View>
                <Text style={{ fontSize: 17, marginLeft: 20, marginTop: 20, color: '#848484' }}>Last Name<Text style={{ color: 'red' }}>*</Text>
                </Text>
                <View style={{ height: 40, marginLeft: 20, marginTop: 5, marginRight: 20, borderColor: 'gray', borderWidth: 1 }}>
                  <TextInput
                    style={{ fontSize: 18, height: 40, padding: 5 }}
                    //placeholder="First Name"
                    ref='last_name'
                    placeholderTextColor="grey"
                    returnKeyType='next'
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({ last_name: text })}
                    value={this.state.last_name}
                    onSubmitEditing={(event) => {
                      this.refs.email.focus();
                    }} />
                </View>
                <Text style={{ fontSize: 17, marginLeft: 20, marginTop: 20, color: '#848484' }}>Email<Text style={{ color: 'red' }}>*</Text>
                </Text>
                <View style={{ height: 40, marginTop: 5, marginLeft: 20, marginRight: 20, borderColor: 'gray', borderWidth: 1 }}>
                  <TextInput
                    style={{ fontSize: 18, height: 40, padding: 5 }}
                    //placeholder="First Name"
                    ref='email'
                    placeholderTextColor="grey"
                    returnKeyType='next'
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({ email: text })}
                    value={this.state.email}
                    onSubmitEditing={(event) => {
                      this.refs.mobile_number.focus();
                    }} />
                </View>

                <Text style={{ fontSize: 17, marginLeft: 20, marginTop: 20, color: '#848484' }}>Mobile Number<Text style={{ color: 'red' }}>*</Text>
                </Text>
                <View style={{ height: 40, marginTop: 5, marginLeft: 20, marginRight: 20, borderColor: 'gray', borderWidth: 1 }}>
                  <TextInput
                    style={{ fontSize: 18, height: 40, padding: 5 }}
                    //placeholder="First Name"
                    ref='mobile_number'
                    placeholderTextColor="grey"
                    underlineColorAndroid='transparent'
                    keyboardType='numeric'
                    returnKyeType='next'
                    maxLength={10}
                    onChangeText={(text) => this.setState({ mobile_number: text })}
                    value={this.state.mobile_number}
                    onSubmitEditing={(event) => {
                      this.refs.address_one.focus();
                    }} />
                </View>
                <Text style={{ fontSize: 20, marginTop: 20, }}>    Home Address</Text>
                <TouchableOpacity onPress={() => { this.selectCountry() }}
                  style={{ marginLeft: 20, marginRight: 20, height: 40, marginTop: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#BDBDBD' }}>
                  <Text style={{ fontSize: 17, color: '#2E2E2E' }}>{this.state.selectedCountry}</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 17, marginLeft: 20, marginTop: 20, color: '#848484' }}>Address<Text style={{ color: 'red' }}>*</Text>
                </Text>
                <View style={{ height: 40, marginTop: 5, marginLeft: 20, marginRight: 20, borderColor: 'gray', borderWidth: 1 }}>
                  <TextInput
                    style={{ fontSize: 18, height: 40, padding: 5 }}
                    //placeholder="First Name"
                    ref='address_one'
                    placeholderTextColor="grey"
                    returnKeyType='next'
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({ address_one: text })}
                    value={this.state.address_one}
                    onSubmitEditing={(event) => {
                      this.refs.address_two.focus();
                    }} />
                </View>
                <View style={{ height: 40, marginTop: 15, marginLeft: 20, marginTop: 10, marginRight: 20, borderColor: 'gray', borderWidth: 1 }}>
                  <TextInput
                    style={{ fontSize: 18, height: 40, padding: 5 }}
                    //placeholder="First Name"
                    ref='address_two'
                    placeholderTextColor="grey"
                    returnKeyType='next'
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({ address_two: text })}
                    value={this.state.address_two}
                    onSubmitEditing={(event) => {
                      this.refs.city.focus();
                    }} />
                </View>
                <Text style={{ fontSize: 17, marginTop: 5, marginTop: 5, marginLeft: 20, marginTop: 20, color: '#848484' }}>City<Text style={{ color: 'red' }}>*</Text>
                </Text>
                <View style={{ height: 40, marginLeft: 20, marginTop: 5, marginRight: 20, borderColor: 'gray', borderWidth: 1 }}>
                  <TextInput
                    style={{ fontSize: 18, height: 40, padding: 5 }}
                    //placeholder="First Name"
                    ref='city'
                    placeholderTextColor="grey"
                    returnKeyType='next'
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({ city: text })}
                    value={this.state.city}
                    onSubmitEditing={(event) => {
                      this.refs.state.focus();
                    }} />
                </View>
                <Text style={{ fontSize: 17, marginTop: 5, marginLeft: 20, marginTop: 20, color: '#848484' }}>State/Province<Text style={{ color: 'red' }}>*</Text>
                </Text>
                <View style={{ height: 40, marginTop: 5, marginLeft: 20, marginRight: 20, justifyContent: 'center', borderColor: 'gray', borderWidth: 1 }}>
                  <TextInput
                    style={{ fontSize: 18, height: 40, marginLeft: 10, }}
                    placeholder="India"
                    ref='state'
                    placeholderTextColor="grey"
                    returnKeyType='next'
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({ state: text })}
                    value={this.state.state}
                    onSubmitEditing={(event) => {
                      this.refs.postal_code.focus();
                    }} />
                </View>
                <Text style={{ fontSize: 17, marginLeft: 20, marginTop: 20, color: '#848484' }}>PIN Code<Text style={{ color: 'red' }}>*</Text>
                </Text>
                <View style={{ height: 40, marginTop: 5, marginLeft: 20, marginRight: 20, borderColor: 'gray', borderWidth: 1 }}>
                  <TextInput
                    style={{ fontSize: 18, height: 40, padding: 5 }}
                    //placeholder="First Name"
                    ref='postal_code'
                    placeholderTextColor="grey"
                    keyboardType='numeric'
                    returnKeyType='go'
                    maxLength={10}
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({ postal_code: text })}
                    value={this.state.postal_code}
                    onSubmitEditing={(event) => {

                    }} />
                </View>
              </View>



              <FlatList
                data={this.state.storeArray}
                scrollEnabled={true}
                renderItem={({ item, index }) =>
                  <View style={{ borderRadius: 3, paddingBottom: 10, marginLeft: 10, borderWidth: 1, borderColor: 'gray', marginRight: 10, marginTop: 10 }}>
                    <Text style={{ color: 'black', marginTop: 10, marginLeft: 10 }}> Ticket {index + 1} - RSVP</Text>
                    <Text style={{ fontSize: 17, marginLeft: 20, marginTop: 10, color: '#848484' }}>First Name<Text style={{ color: 'red' }}>*</Text>
                    </Text>
                    <View style={{ height: 40, marginLeft: 10, marginRight: 10, borderColor: 'gray', borderWidth: 1, marginTop: 5 }}>
                      <TextInput
                        style={{ fontSize: 18, height: 30, padding: 5 }}
                        placeholder="First Name"
                        ref='description'
                        placeholderTextColor="grey"
                        returnKeyType='next'
                        underlineColorAndroid='transparent'
                        onChangeText={(value) => this.fillForm1(value, index)}
                        value={this.state.afname}
                        onSubmitEditing={(event) => {
                          this.refs.last_name.focus();
                        }} />
                    </View>

                    <Text style={{ fontSize: 17, marginLeft: 20, marginTop: 10, color: '#848484' }}>Last Name<Text style={{ color: 'red' }}>*</Text>
                    </Text>
                    <View style={{ height: 40, marginLeft: 10, marginTop: 5, marginRight: 10, borderColor: 'gray', borderWidth: 1 }}>
                      <TextInput
                        style={{ fontSize: 18, height: 30, padding: 5 }}
                        //placeholder="First Name"
                        ref='last_name'
                        placeholderTextColor="grey"
                        returnKeyType='next'
                        underlineColorAndroid='transparent'
                        onChangeText={(value) => this.fillForm2(value, index)}
                        value={this.state.alname}
                        onSubmitEditing={(event) => {
                          this.refs.email.focus();
                        }} />
                    </View>

                    <Text style={{ fontSize: 17, marginLeft: 20, marginTop: 10, color: '#848484' }}>Email<Text style={{ color: 'red' }}>*</Text>
                    </Text>
                    <View style={{ height: 40, marginTop: 5, marginLeft: 10, marginRight: 10, borderColor: 'gray', borderWidth: 1 }}>
                      <TextInput
                        style={{ fontSize: 18, height: 30, padding: 5 }}
                        //placeholder="First Name"
                        ref='email'
                        placeholderTextColor="grey"
                        returnKeyType='next'
                        underlineColorAndroid='transparent'
                        onChangeText={(value) => this.fillForm3(value, index)}
                        value={this.state.aemail}
                        onSubmitEditing={(event) => {
                          this.refs.mobile_number.focus();
                        }} />
                    </View>

                    <Text style={{ fontSize: 17, marginLeft: 20, marginTop: 10, color: '#848484' }}>Mobile Number<Text style={{ color: 'red' }}>*</Text>
                    </Text>
                    <View style={{ height: 40, marginTop: 5, marginLeft: 10, marginRight: 10, borderColor: 'gray', borderWidth: 1 }}>
                      <TextInput
                        style={{ fontSize: 18, height: 30, padding: 5 }}
                        //placeholder="First Name"
                        ref='mobile_number'
                        placeholderTextColor="grey"
                        underlineColorAndroid='transparent'
                        keyboardType='numeric'
                        returnKyeType='next'
                        maxLength={10}
                        onChangeText={(value) => this.fillForm4(value, index)}
                        value={this.state.amobile}
                        onSubmitEditing={(event) => {
                          this.refs.address_one.focus();
                        }} />
                    </View>
                  </View>
                } />
            </View>
            <View style={{ width: "85%", alignSelf: 'center', marginTop: 10 }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 11 }}>I accept the</Text>
                <TouchableOpacity>
                  <Text style={{ fontSize: 11, color: '#00BFFF' }}>{" "}terms of service </Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 11 }}>and have read the</Text>
                <TouchableOpacity>
                  <Text style={{ fontSize: 11, color: '#00BFFF', marginRight: 10 }}>{" "}privacy</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 11 }}>I agree that AppName may </Text>
                <TouchableOpacity>
                  <Text style={{ fontSize: 11, color: '#00BFFF' }}> share my information </Text>
                </TouchableOpacity>
              </View>
              <Text style={{ fontSize: 11 }}>With then event organizer. </Text>
            </View>
            <TouchableOpacity onPress={() => this.addTicket()}>
              <View style={{ marginLeft: 20, marginRight: 20, height: 40, marginTop: 20, borderRadius: 3, justifyContent: 'center', alignItems: 'center', backgroundColor: '#31B404' }}>
                <Text style={{ fontSize: 20, color: '#fff', }}>Register </Text>
              </View>
            </TouchableOpacity >
            <View style={{ height: 10, }}></View>
          </View>

          <View style={{ flex: 1 }}>
            <Modal
              transparent={true}
              supportedOrientations={['portrait', 'landscape']}
              visible={this.state.isCountry}
              onRequestClose={() => console.log("sdfdf")}>
              <View style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-around',
                backgroundColor: '#00000040'
              }}>
                <View
                  style={{
                    height: 400,
                    width: 270, 
                    backgroundColor:'#FFF', 
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <FlatList
                  showsVerticalScrollIndicator={false}
                    style={{ alignSelf: 'center', }}
                    data={countryArray}
                    renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => { this.doSelectCountry(item) }}>
                        <View
                          style={styles.itemContainer}
                        >
                          <Text style={{ fontSize: 16,color:'gray',textAlign:'center',marginTop:10 }}
                          >{item.label}</Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  fillForm(value, index) {
    console.log(value + " " + index);
    this.setState({
      uiRender: true
    })
    this.state.storeArray[index].afname = value;
    this.state.storeArray[index].alname = value;
    this.state.storeArray[index].aemail = value;
    this.state.storeArray[index].amobile = value;

    console.log(this.state.storeArray);
    setTimeout(() => {
      this.setState({
        uiRender: false
      })
    }, 500)

  }
  fillForm1(value, index) {
    console.log(value + " " + index);
    this.setState({
      uiRender: true
    })
    this.state.storeArray[index].afname = value;

    console.log(this.state.storeArray);
    setTimeout(() => {
      this.setState({
        uiRender: false
      })
    }, 500)

  }
  fillForm2(value, index) {
    console.log(value + " " + index);
    this.setState({
      uiRender: true
    })
    this.state.storeArray[index].alname = value;

    console.log(this.state.storeArray);
    setTimeout(() => {
      this.setState({
        uiRender: false
      })
    }, 500)

  }
  fillForm3(value, index) {
    console.log(value + " " + index);
    this.setState({
      uiRender: true
    })
    this.state.storeArray[index].aemail = value;

    console.log(this.state.storeArray);
    setTimeout(() => {
      this.setState({
        uiRender: false
      })
    }, 500)
  }
  fillForm4(value, index) {
    console.log(value + " " + index);
    this.setState({
      uiRender: true
    })
    this.state.storeArray[index].amobile = value;

    console.log(this.state.storeArray);
    setTimeout(() => {
      this.setState({
        uiRender: false
      })
    }, 500)

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
