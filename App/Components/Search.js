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
  Footer
} from 'native-base';
import { Dropdown } from 'react-native-material-dropdown';
import RNGooglePlaces from 'react-native-google-places';

import AllAPI from "../Apis/AllAPI"
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
var user_id;

let data = [
  {
    value: 'Anytime',
  },
  {
    value: 'Today',
  },
  {
    value: 'Tomorrow',
  },
  {
    value: 'This Weekend',
  },
  {
    value: 'In the next month',
  },
  {
    value: 'Pick a date',
  },
];

var tempArray;
export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      tempArray: [],
      isLoading: false,
      toggleLeft: false,
      lat: '',
      lng: '',
      dropDownvalue: "Anytime",
      AvtivityDropdown: 1,
      location:'',
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.allCategory();
  }

  async componentWillMount() {
    user_id = await AsyncStorage.getItem('id');
    console.log(user_id + 'id');
  }

  async findEvent() {
    var value
    this.setState({ isLoading: true })
    if (this.state.AvtivityDropdown != 1) {
      value = this.state.AvtivityDropdown + 1;
    } else {
      value = 1
    }
    const config = {
      method: 'POST',
      headers: {
      },
      body: '',
    }
    await fetch('http://ec2-52-207-124-182.compute-1.amazonaws.com:3333/api/v1/searchEvent?user_id=' + user_id + '&time=' + this.state.dropDownvalue + '&lat=22.7196&lng=75.8577&event_category_id=' + value, config).then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ isLoading: false })
        var array = res.data;
        this.props.navigation.navigate("SearchResult", { array: array })
      }).catch((error) => {
        this.setState({ isLoading: false })
        console.log(error);
      });
  };

  async allCategory() {
    let id, name;
    let tempArray = []
    await fetch(AllAPI.eventCategory)
      .then(res => res.json())
      .then(res => {
        for (let items of res.data) {
          tempArray.push({
            "id": items.id,
            "value": items.name,
            // "Checked": false
          });
        }
        this.setState({ cat_data: tempArray })
        console.log(tempArray)
        this.setState({ isLoading: false, tempArray: tempArray })
      })
      .catch((error) => {
        this.setState({ isLoading: false })
        console.log(error);
      });
  }

  SearchResult() {
    this.props.navigation.navigate('SearchResult');
    console.log('done');
  };
  Events() {
    this.props.navigation.navigate('Events');
    console.log('done');
  };
  Home() {
    this.props.navigation.navigate('Home');
    console.log('done');
  };
  NonProfit() {
    this.props.navigation.navigate('NonProfit');
    console.log('done');
  };
  Event() {
    this.props.navigation.navigate('Event');
    console.log('done');
  };
  userProfile() {
    this.props.navigation.navigate('userProfile');
    console.log('done');
  };
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
    console.warn(this.state.latitude + "   " + "  " + this.state.longitude);
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
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

  async openSearchModal() {
    RNGooglePlaces.openAutocompleteModal({
      type: 'cities',
    }).then((place) => {
      console.log(place);
      var words = place.address.split(',');
      var city = words.length - 3;
      console.log(words[city])
      this.setState({
        location: words[city],
        setLat: place.latitude.toString(),
        setLng: place.longitude.toString(),
      })
    }).catch(error => console.log(error.message));
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.container}>
          <ImageBackground style={{ height: 200, width: '102%', marginLeft: -2 }}
            resizeMode='stretch'
            source={require('../Images/bg.png')}>
            <Header hasTabs
              style={{ backgroundColor: "transparent", justifyContent: 'center' }}
              androidStatusBarColor="#D35400"
              iosBarStyle="dark-content">
              <View style={{ backgroundColor: "transparent", width: width, flexDirection: "row", }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                  style={{
                    marginLeft: 10, position: 'absolute', left: 0
                  }}>
                  <Image source={require('../Images/Icons/keyboard-backspace.png')}
                    style={{
                      width: 35, height: 35, tintColor: '#fff'
                    }} />
                </TouchableOpacity>
              </View>
            </Header>
            <Text style={{ fontSize: 30, marginLeft: 15, marginTop: 20, color: '#fff' }}>Search for...</Text>

          </ImageBackground>
          <ScrollView padder scrollEnabled={true}>
            <View>
              <View style={{ padding: 1, marginTop: 35, marginLeft: 10, width: 250, height: 60 }}>
                <Text style={{ fontSize: 17, marginLeft: 10 }}>I want to go out</Text>
                <Dropdown
                  style={{ fontSize: 20, marginLeft: 10, marginTop: -25 }}
                  value='Anytime'
                  data={data}
                  baseColor='transparent'
                  itemColor='gray'
                  onChangeText={(value) => this.setState({ dropDownvalue: value })}
                />
              </View>
              <TouchableOpacity onPress={() => this.openSearchModal()}>
                <View style={{ backgroundColor: 'gray', height: 1, width: 150, marginLeft: 20, marginTop: 10 }} />
                <View style={{ padding: 1, marginTop: 20, marginLeft: 10, width: 165 }}>
                  <Text style={{ fontSize: 17, marginLeft: 10 }}>In</Text>
                  <TextInput
                    style={{ fontSize: 20, marginLeft: 6, marginTop: -15, height: 65 }}
                    placeholder='Indore'
                    editable={false}
                   value={this.state.location}
                    onChangeText={(text) => this.setState({location: text })}
                  />
                </View>
              </TouchableOpacity>


              <View style={{ marginTop: 20, marginLeft: 10, width: 250, height: 60, padding: 1, }}>
                <Text style={{ fontSize: 17, marginLeft: 10, }}>And i'm up for</Text>
                <Dropdown
                  style={{ marginTop: -30, fontSize: 20, marginLeft: 10 }}
                  //label='Anytime'
                  value='Activity'
                  data={this.state.cat_data}
                  baseColor='transparent'
                  itemColor='gray'
                  onChangeText={(value, index) => this.setState({ AvtivityDropdown: index })}
                />
              </View>
              <View style={{ backgroundColor: 'gray', height: 1, width: 150, marginLeft: 20 }} />

              <TouchableOpacity onPress={() => this.findEvent()}>
                <View style={{ alignItems: 'flex-end', marginRight: 30 }}>
                  <Image style={{ height: 60, width: 60, marginTop: 30 }}
                    source={require('../Images/fullicon.png')} />
                </View>
              </TouchableOpacity>
              <View style={{ height: 65 }} />
            </View>
          </ScrollView>

          <Footer style={styles.footer}>
            <View style={{
              width: width, justifyContent: 'space-around', backgroundColor: "#fff",
              flexDirection: 'row', alignItems: "center"
            }}>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.Home()}>
                  <Image source={require('../Images/Home.png')}
                    style={{ width: 35, height: 35, }} />
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.Event()} >
                  <Image resizeMode={'contain'}
                    source={require('../Images/Event.png')}
                    style={{ width: 35, height: 35, }} />
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                >
                  <Image source={require('../Images/Search21.png')}
                    style={{ width: 30, height: 30, }} />
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.NonProfit()}>
                  <Image resizeMode={'contain'}
                    source={require('../Images/Non-profit.png')}
                    style={{ width: 35, height: 35, }} />
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("userProfile")}
                  style={{ marginRight: 0, }}>
                  <Image source={require('../Images/User.png')}
                    style={{ width: 35, height: 35, }} />
                </TouchableOpacity>
              </View>
            </View>
          </Footer>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: "100%",
    backgroundColor: '#fff',
  },
  footer: {
    position: 'absolute',
    height: 60,
    bottom: 0,
    backgroundColor: "#fff"
  },
  leftTab: {
    // marginLeft:10,
    // marginRight:10,
    // minWidth:140,
    // maxWidth:160,
    // height: 45,
    // borderRadius: 20,
    // borderColor: "#FA8258",
    // borderWidth: 1,
    // backgroundColor: 'transparent',
    // justifyContent: 'center'
  },
  leftTabChange: {
    backgroundColor: '#F79F81',
  },
});
