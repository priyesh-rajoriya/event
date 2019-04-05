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
import MapView from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import RNGooglePlaces from 'react-native-google-places';
var marker;
var title;
var live;
export default class EnterLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textEnter: '',
      latitude: 22.719568 ,
      longitude: 75.857727 ,
      error: null,
      isLoading: false,
      mapRegion: null,
      lastLat: null,
      lastLong: null,
      locationName: '',
      map: true,
    };
  }
  //   //current location start//
//   componentDidMount() {
//     console.log('------------------------------------');
//     this.watchID = navigator
//       .geolocation
//       .watchPosition((position) => {
//         // Create the object to update this.state.mapRegion through the onRegionChange
//         // function
//         console.log('------------------------------------');


//         t region = {
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           latitudeDelta: 0.00922 * 1.5,
//           longitudeDelta: 0.00421 * 1.5
//         }

//         fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' +  position.coords.latitude + ',' + position.coords.longitude + '&key=' + 'AIzaSyBfNqfG7McUNjxcxRrRZb5kLTucBTGqiOA')
//         .then((response) => response.json())
//         .then((responseJson) => {
//             console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
// })
//         this.onRegionChange(region, region.latitude, region.longitude);
//         this.setState({longitude: region.longitude, latitude: region.latitude})
//       });
//   }

//------current location start------//
componentDidMount() {

  navigator.geolocation.getCurrentPosition(
      (position) => {
          console.log("wokeeey");
          console.log(position);
          this.setState({
              currentLatitude: position.coords.latitude.toString(),
              currentLongitude: position.coords.longitude.toString(),
              currentError: null,
          });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
  );
}
//------current location end------// 

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      // If there are no new values set use the the current ones
      lastLat: lastLat, //this.state.lastLat,
      lastLong: lastLong, //this.state.lastLong
    });
  }

  componentWillUnmount() {
    navigator
      .geolocation
      .clearWatch(this.watchID);
  }

  onMapPress(e) {
    console.log(e.nativeEvent.coordinate.longitude);
    let region = {
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      latitudeDelta: 0.00922 * 1.5,
      longitudeDelta: 0.00421 * 1.5
    }
    this.onRegionChange(region, region.latitude, region.longitude);
    this.setState({ longitude: region.longitude, latitude: region.latitude})
  }
  //current location end//

  openSearchModal() {
    this.setState({map:false})
    RNGooglePlaces.openAutocompleteModal()
    .then((place) => {
    this.setState({
       map:false
    })
    let region = {
      latitude: place.latitude,
      longitude: place.longitude,
      latitudeDelta: 0.00922 * 1.5,
      longitudeDelta: 0.00421 * 1.5
    }
    this.onRegionChange(region, region.latitude, region.longitude);
    this.setState({latitude:place.latitude});
    this.setState({longitude:place.longitude});
    this.setState({
      cityname:place.name,
      // latitude:place.latitude,
      // longitude:place.longitude,
       map:true
    })
    console.log(this.state)

		// place represents user's selection from the
		// suggestions and it is a simplified Google Place object.
    })
    // console.log(this.state.latitude)
    //   console.log(this.state.longitude)
    .catch(error => console.log(error.message));  // error is a Javascript Error object
  }

  PickLocation() {
    this
      .props
      .navigation
      .navigate('PickLocation');
    console.log('done');
  };
  Login() {
    AsyncStorage.setItem('latitude', this.state.latitude.toString());
    AsyncStorage.setItem('longitude', this.state.longitude.toString());
    this.props.navigation.navigate('Login');
    console.log('done', this.state.longitude.toString(), this.state.latitude.toString());
  };
  render() {
    console.log(this.state);
    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingTop: 20
          }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Image
            style={{
              height: 40,
              width: 40,
              marginLeft: 2,
              marginTop: 35
            }}
            source={require('../Images/back.png')} />
        </TouchableOpacity>

    <View style={{padding: 1,
            marginTop: 50,
            marginLeft: 10}}>
      {this.state.cityname == undefined &&
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.openSearchModal()}
        >
          <Text style={{ fontSize: 40,
            marginLeft: 5}}>Where?</Text>
        </TouchableOpacity>
      }
       {this.state.cityname != undefined &&
        <TouchableOpacity
        style={styles.button}
        onPress={() => this.openSearchModal()}
      >
        <Text style={{ fontSize: 40,
          marginLeft: 5}}>{this.state.cityname}</Text>
      </TouchableOpacity>
       }
      </View>
      <View
          style={{
            marginTop: 1,
            backgroundColor: '#E5E7E9',
            height: .8,
            marginLeft: 10,
            marginRight: 10
          }}></View>

        <TouchableOpacity onPress={() => this.Login()}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                marginLeft: 15
              }}
              source={require('../Images/smallicon.png')} />
            <Text
              style={{
                fontSize: 24,
                marginLeft: 8,
                color: '#2E2E2E'
              }}>Use my current location
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            marginTop:10,
            marginLeft: 10,
            marginRight: 10,
            flex:1
          }}>
          {/* <MapView
            region={this.state.region}
            onRegionChange={this.onRegionChange}
          >
            {this.state.markers.map(marker => (
              <Marker
                coordinate={marker.latlng}
                title={marker.title}
              description={marker.description}
              image={require('../assets/pin.png')}
              />
            ))}
          </MapView> */}
             {this.state.map == true &&
          <MapView
            style={styles.map}
            region={this.state.region}
            onRegionChange={this.onRegionChange}
            region={this.state.mapRegion}
            showsUserLocation={true}
            followUserLocation={true}
            onRegionChange={this
              .onRegionChange
              .bind(this)}
            onPress={this
              .onMapPress
              .bind(this)}
            >
            <MapView.Marker
            //  key={marker.uniqueId}
              coordinate={{
                latitude: (this.state.latitude + 0.00050),//-36.82339,
                longitude: (this.state.longitude + 0.00050)// -73.03569
              }}
              title={'currentLocation'}
              >
              <Image
                source={require('../Images/pin.png')}
                style={{width:40,height:40}}
              />
              <View>
                {/* <Text style={{
                  color: '#000'
                }}>
                  {this.state.lastLong}
                  {this.state.lastLat}
                </Text> */}
              </View>

            </MapView.Marker>
          </MapView>
              }
              <TouchableOpacity onPress={() => this.Login()}>
              <View style={{ alignItems: 'flex-end', marginRight: 30 }}>
                <Image style={{ height: 60, width: 60, marginTop: 30 }}
                  source={require('../Images/fullicon.png')} />
              </View>
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
  },
  map: {
    width: '100%',
    height: '60%',
  },
});
AppRegistry.registerComponent('testCoords', () => testCoords);

