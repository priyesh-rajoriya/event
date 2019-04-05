// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,Dimensions,FlatList,
//   AlertIOS,Alert,
//   View,Image, TextInput,TouchableOpacity,ImageBackground, ScrollView,backgroundColor,AsyncStorage
// } from 'react-native';
// import { Container, Header, Content,Button,Footer, FooterTab, Icon, Badge } from 'native-base'; 
// import AllAPI from "../Apis/AllAPI"

// var width = Dimensions.get('window').width; //full width
// var height = Dimensions.get('window').height; //full height
// import Menu, {
//   MenuProvider,
//   MenuTrigger,
//   MenuOptions,
//   MenuOption,
//   renderers
// } from 'react-native-popup-menu';

// let unique = 0;
// const { SlideInMenu } = renderers;

// export default class userProfile extends Component {

// constructor(props, ctx) {
//         super(props, ctx);
//         this.state = {text: '',toggleLeft: false,
//         toggleLeft1: false,    toggleLeft2: false,
//         user_id: '1',
//         customBackHandler: false,log: []
        
//        };
//        this.GetUser();
//        this.getBookedTicketList();  
//       }

//   // selectNumber(value) {
//   //   this.addLog(`selecting number: ${value}`);
//   // }
//   async  getBookedTicketList() {
//     this.setState({isLoading:true})
//     var data = new FormData();
//     data.append('user_id',this.state.user_id);

//       const config = {
//         method: 'POST',
//         headers: {
//           },
//         body: data,
//           }
//       console.log(data)
//       await fetch(AllAPI.getBookedTicketList,config).then(res => res.json())
//         .then(res => {
//         //  AsyncStorage.setItem('fullname', res.data[0].fullname);
//         //  AsyncStorage.setItem('mobile', res.data[0].mobile);
//         //  AsyncStorage.setItem('email', res.data[0].email);
//         //  AsyncStorage.setItem('emuser_idail', res.data[0].user_id);
         
//           console.log(res);
//           // this.props.navigation.navigate("ViewTicket",{data:res.data})
//           this.setState({
//             data:res.data.tickets
//           })
//           // if(res.success==true){  
//           //   Platform.select({
//           //     ios: () => { AlertIOS.alert(
//           //         '',
//           //       'Ticket Successfull',
//           //         [
//           //           {text: 'OK', onPress: () =>  this.props.navigation.navigate("Screen15")},
//           //         ]
//           //       )              
//           //     },
//           //     android: () => { 
//           //       ToastAndroid.show('Login Successfull, Welcome.', ToastAndroid.SHORT); 
//           //       this.props.navigation.navigate("Screen22");
//           // //     }
//           //  })();
//           // }else{
//           //   this.setState({isLoading:false});
//           //   Alert.alert(

//           //     [
//           //       {text: 'ok', onPress: () => console.log('ok pressed')},
//           //     ],)
//           //   }
//         }).catch((error) => { 
//           this.setState({isLoading:false})
//           console.log(error);
//         });
// };

//   async GetUser(){
//     try {
//       const firstName = await AsyncStorage.getItem('firstName');
//       const lastName = await AsyncStorage.getItem('lastName');
//       this.setState({
//         firstName: firstName,
//         lastName: lastName
//     })
//     } catch (error) {
//       // Error retrieving data
//     }
//   }
//   selectOptionType(value) {
//     const v = typeof value === 'object' ? JSON.stringify(value) : value;
//     this.addLog(`selecting type: ${v}`);
//     return value !== 'Do not close';
//   }

//   addLog(value) {
//     this.setState({
//       log: [...this.state.log, {
//         value,
//         id: ++unique
//       }]
//     });
//   }

//   toggleHighlight(id) {
//     const log = this.state.log.map(l => {
//       if (l.id === id) {
//         return Object.assign({}, l, {highlighted: !l.highlighted});
//       }
//       return l;
//     })
//     this.setState({ log });
//   }

//   deleteLogItem(id) {
//     const log = this.state.log.filter(l => l.id !== id);
//     this.setState({ log });fil
//   }
//   Screen17(){
//     this.props.navigation.navigate('Screen17');
//     console.log('done');
//   };
//   VolunteerWall(){
//     this.props.navigation.navigate('VolunteerWall');
//     console.log('done');
//   };
//   ViewTicket(){
//     this.props.navigation.navigate('ViewTicket');
//     console.log('done');
//   };
//   Logo(){
//     this.props.navigation.navigate('Logo');
//     console.log('done');
//   };
//   Settings(){
//     this.props.navigation.navigate('Settings');
//     console.log('done');
//   };
//   VolunteerFormDatenTime(){
//     //this.setState({ toggleLeft: !this.state.toggleLeft })
//     this.props.navigation.navigate('VolunteerFormDatenTime');
//     console.log('done');
//   };
//   volunteerSignup(){
//     this.props.navigation.navigate('volunteerSignup');
//     console.log('done');
//   };
//   Events(){
//     this.props.navigation.navigate('Events');
//     console.log('done');
//   };
//   NonProfit(){
//     this.props.navigation.navigate('NonProfit');
//     console.log('done');
//   };
//   Event(){
//     this.props.navigation.navigate('Event');
//     console.log('done');
//   };
//   Search(){
//     this.props.navigation.navigate('Search');
//     console.log('done');
//   };
//   QrCode(){
//     this.props.navigation.navigate('QrCode');
//     console.log('done');
//   };
//   openList(item){
//     this.props.navigation.navigate(
//       'ViewTicket',
//       { title: item.title,
//       quantity: item.quantity,
//       updated_at: item.updated_at,
//       description: item.description,
//       start_time: item.start_time,
//       vanue: item.vanue},
//     );
//   }
//   render() {
//     console.log('data', this.state.data)
//     return (
//       <MenuProvider style={{flex: 1}}>
//         <View style={styles.container}> 

//           <ImageBackground style={{height:250,width:window.width}} 
//            source={require('../Images/bg2.png')}>
//           <View style={{ justifyContent:'center',marginTop:50}}> 
//           <TouchableOpacity onPress={() => this.props.navigation.goBack()}
//               style={{ marginLeft: 10, position: 'absolute', left: 0, }}>
//               <Image source={require('../Images/back.png')}
//                 style={{ width: 35, height: 40, tintColor: '#fff' }} />
//             </TouchableOpacity>

//             <View style={ {position: 'absolute', right:10}}> 
//             <Menu name="types" onSelect={value => this.selectOptionType(value)}
//               onBackdropPress={() => this.addLog('menu will be closed by backdrop')}
//               onOpen={() => this.addLog('menu is opening')}
//               onClose={() => this.addLog('menu is closing')}
//               >
//               <MenuTrigger> 
//                 <Image resizeMode={'contain'} source={require('../Images/bot1.png')}
//                 style={{ width: 35, height: 40, }} />
//               </MenuTrigger>
//               <MenuOptions customStyles={{ optionText: styles.text }}>
            
//                 <TouchableOpacity style={{flexDirection:'row', marginTop:10}}
//                   onPress={() => this.props.navigation.navigate("editUserProfile")}>
//                 <Image style={styles.menuIcon} 
//                   source={require('../Images/editprofile_icon.png')} />
//                   <Text style={styles.menuText}>Edit Profile</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={{flexDirection:'row',marginTop:10}}
//                   onPress={() => this.props.navigation.navigate("Settings")}>
//                 <Image style={styles.menuIcon} 
//                   source={require('../Images/Settings.png')} />
//                   <Text style={styles.menuText}>Settings</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={{flexDirection:'row',marginTop:10, marginBottom:10}}
//                   onPress={() => this.props.navigation.navigate("Logo")}>
//                 <Image style={styles.menuIcon} 
//                   source={require('../Images/logout_icon.png')} />
//                   <Text style={styles.menuText}>Log Out</Text>
//                 </TouchableOpacity>
                
//               </MenuOptions>
//             </Menu>
//           </View> 

//         </View>
       

//       <View style={{flexDirection:'row',marginTop:30, }}>
//       <TouchableOpacity onPress={() => this.props.navigation.navigate("editUserProfile")}>
//       <Image style={{height:110,width:110,margin:10}} 
//         source={require('../Images/Profile-image.png')} />
//        </TouchableOpacity>   
//       <View style={{justifyContent:'center',marginLeft:5}}>
//       <Text style={{fontSize:14,color:'#fff',justifyContent:'center',backgroundColor:'transparent',marginLeft:20,marginRight:20}}>2 </Text>
//       <Text style={{fontSize:14,color:'#fff',backgroundColor:'transparent'}}>Tickets </Text>
//       </View>
//       <View style={{marginLeft:10,justifyContent:'center',}}>
//       <Text style={{fontSize:14,color:'#fff',backgroundColor:'transparent',justifyContent:'center',marginLeft:20,marginRight:20}}>0 </Text>
//       <Text style={{fontSize:14,color:'#fff',backgroundColor:'transparent',marginLeft:5}}>Likes </Text>
//       </View>
//       <View style={{marginLeft:10,justifyContent:'center',marginLeft:5}}>
//       <Text style={{fontSize:14,color:'#fff',backgroundColor:'transparent',justifyContent:'center',marginLeft:20,marginRight:20}}>0 </Text>
//       <Text style={{fontSize:14,color:'#fff',backgroundColor:'transparent'}}>Following </Text>
//       </View>
//       </View>       
//     </ImageBackground> 
//    <ScrollView style={{height:'100%'}}>  
//     <Text style={{fontSize:25,color:'#F79F81',marginLeft:20,marginTop:10}}>  {this.state.firstName} {this.state.lastName}</Text>

//         <View style={{flexDirection:'row',marginLeft:20,marginRight:20,justifyContent:'center'}}>
//           <View style={{marginTop:30,marginLeft:20,height:40}}>
//             <TouchableOpacity
//               onPress={() => this.volunteerSignup()}
//               style={[styles.leftTab, this.state.toggleLeft && styles.leftTabChange]}>
//               <Text style={{ color: '#6E6E6E', textAlign: 'center', fontSize: 12,margin:10 }}>VOLUNTEER SIGNUP</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={{marginTop:30,marginLeft:5,marginRight:20,height:40}}>
//             <TouchableOpacity onPress={() => this.VolunteerWall()}
             
//               style={[styles.leftTab, this.state.toggleLeft1 && styles.leftTabChange]}>
//               <Text style={{ color: '#6E6E6E', textAlign: 'center', fontSize: 12,margin:10 }}>VOLUNTEER DETAILS</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View style={{marginTop:10,height:40,width:"40%",alignSelf:'center'}}>
//           <TouchableOpacity
//           onPress={() => this.QrCode()}
//           // onPress={() => this.setState({ toggleLeft2: !this.state.toggleLeft2 })}
//           style={[styles.leftTab, this.state.toggleLeft2 && styles.leftTabChange]}>
//               <Text style={{ color: '#6E6E6E', textAlign: 'center', fontSize: 12,margin:10 }}>QR CODE</Text>
//           </TouchableOpacity>
//         </View>

//        <View style={{backgroundColor:'gray',height:1,marginLeft:10,marginTop:20,marginRight:10}}></View> 

//         <Text style={{fontSize:20,color:'#1C1C1C',marginLeft:20,marginTop:30}}>Tickets </Text>

//         <FlatList
//           data={this.state.data}
//           renderItem={({item}) => 
//           <TouchableOpacity onPress={() => this.openList(item)}
//            style={{flexDirection:'row'}}>
//           <View>   
//            <ImageBackground style={{height:90,width:90,marginTop:10,marginLeft:20,justifyContent:'center'}} 
//            source={{uri: item.image_url}}>
//             <Text style={{fontSize:14,color:'#fff',textAlign:'center',backgroundColor:'transparent'}}>{item.quantity} Tickets</Text>
//            </ImageBackground>
//            </View>
  
//            <View style={{marginLeft:10,marginTop:20}}>
//            <Text style={{fontSize:15,color:'#2E2E2E',justifyContent:'center',marginRight:20}}>{item.title}</Text>
//            <Text style={{fontSize:12,color:'#BDBDBD',marginTop:5,maxWidth:"85%"}}>{item.updated_at}{'\n'}{item.vanue}</Text>
//            </View>
//           </TouchableOpacity>
//         }
//           keyExtractor={(item, index) => index}
//         />
    
//         {/* <View style={{flexDirection:'row'}}>
//         <TouchableOpacity onPress={() => this.getBookedTicketList()}>   
//          <ImageBackground style={{height:90,width:90,marginTop:10,marginLeft:20,justifyContent:'center'}} 
//          source={require('../Images/tickets.png')}>
//           <Text style={{fontSize:14,color:'#fff',textAlign:'center',backgroundColor:'transparent'}}>2 Tickets</Text>
//          </ImageBackground>
//          </TouchableOpacity>

//          <View style={{marginLeft:10,marginTop:20}}>
//          <Text style={{fontSize:15,color:'#2E2E2E',justifyContent:'center',marginRight:20}}>The Rock concert</Text>
//          <Text style={{fontSize:12,color:'#BDBDBD',marginTop:5,maxWidth:"85%"}}>Set, 20 jan-9:00 AM-5:00 PM{'\n'}Sayaji Hotel, indore </Text>
//          </View>
//         </View>

//         <View style={{flexDirection:'row'}}>
//         <TouchableOpacity onPress={() => this.getBookedTicketList()}>   
//          <ImageBackground style={{height:90,width:90,marginTop:10,marginLeft:20,justifyContent:'center'}} 
//          source={require('../Images/tickets.png')}>
//           <Text style={{fontSize:14,color:'#fff',textAlign:'center',backgroundColor:'transparent'}}>2 Tickets</Text>
//          </ImageBackground>
//          </TouchableOpacity>

//          <View style={{marginLeft:10,marginTop:20}}>
//          <Text style={{fontSize:15,color:'#2E2E2E',justifyContent:'center',marginRight:20}}>The Rock concert</Text>
//          <Text style={{fontSize:12,color:'#BDBDBD',marginTop:5,maxWidth:"85%"}}>Set, 20 jan-9:00 AM-5:00 PM{'\n'}Sayaji Hotel, indore </Text>
//          </View> */}
//         {/* </View> */}
//         <View style={{height:70}}/>
//         </ScrollView> 

//         <Footer style={styles.footer}>
//           <View style={{ width: width, justifyContent: 'space-around', backgroundColor: "#fff",
//               flexDirection: 'row', alignItems: "center"}}>
//               <View style={{ alignItems: 'center' }}>
//                   <TouchableOpacity onPress={() => this.Events()}>
//                       <Image source={require('../Images/Home.png')}
//                           style={{ width: 35, height: 35, }} />
//                   </TouchableOpacity>
//               </View>
//               <View style={{ alignItems: 'center' }}>
//                   <TouchableOpacity  onPress={() => this.Event()} >
//                       <Image resizeMode={'contain'}
//                           source={require('../Images/Event.png')}
//                           style={{ width: 35, height: 35, }} />
//                   </TouchableOpacity>
//               </View>
//               <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                   <TouchableOpacity
//                    onPress={() => this.Search()} >
//                       <Image source={require('../Images/Search.png')}
//                           style={{ width: 35, height: 35, }} />
//                   </TouchableOpacity>
//               </View>
//               <View style={{ alignItems: 'center' }}>
//                   <TouchableOpacity onPress={() => this.props.navigation.navigate("NonProfit")}
//                       style={{ marginRight: 0, }}>
//                       <Image resizeMode={'contain'}
//                           source={require('../Images/Non-profit.png')}
//                           style={{ width: 35, height: 35, }} />
//                   </TouchableOpacity>
//               </View>
//               <View style={{ alignItems: 'center' }}>
//                   <TouchableOpacity onPress={() => this.props.navigation.navigate("Help")}
//                       style={{ marginRight: 0, }}>
//                       <Image source={require('../Images/User12.png')}
//                           style={{ width: 35, height: 35, }} />
//                   </TouchableOpacity>
//               </View>
//           </View>
//         </Footer> 

//         </View>
//       </MenuProvider>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#fff',
//   },
  
//   footer: {
//     position: 'absolute',
//     height: 60,
//     bottom: 0,
//     backgroundColor: "#fff"
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   menuIcon:{
//     height:25,
//     width:25,
//     marginLeft:5,
//     marginRight:5
//   },
//   menuText:{
//     color:"grey",
//     marginLeft:5,
//     marginRight:5,
//     fontSize:16
//   },
//   leftTab: {
//     height: 35, borderRadius: 20, alignItems: 'center',    borderColor: "#FA8258", 
//     borderWidth: 1,
//   borderColor: '#bbaa64', justifyContent: 'center',backgroundColor:'#E6E6E6'
//   },
//   leftTabChange: {
//     backgroundColor: '#F79F81',
//   },
//   topbar: {
//     flexDirection: 'row',
//     backgroundColor: 'transparent',
//     paddingTop : 15,
//   },
//   trigger: {
//     padding: 5,
//     margin: 5,
//   },
//   triggerText: {
//     color: 'white',
//   },
//   disabled: {
//     color: '#ccc',
//   },
//   divider: {
//     marginVertical: 5,
//     marginHorizontal: 2,
//     borderBottomWidth: 1,
//     borderColor: '#ccc'
//   },
//   logView: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   logItem: {
//     flexDirection: 'row',
//     padding: 8,
//   },
//   slideInOption: {
//     padding: 5,
//   },
//   text: {
//     fontSize: 18,
//   }
// });


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
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Moment from 'react-moment';
var marker;
var title;
export default class EnterLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textEnter: '',
      latitude: null,
      longitude: null,
      error: null,
      isLoading: false,
      mapRegion: null,
      lastLat: null,
      lastLong: null
    };
  }
  //   //current location start//
  componentDidMount() {
    this.watchID = navigator
      .geolocation
      .watchPosition((position) => {
        // Create the object to update this.state.mapRegion through the onRegionChange
        // function
        let region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.00922 * 1.5,
          longitudeDelta: 0.00421 * 1.5
        }
        this.onRegionChange(region, region.latitude, region.longitude);
      });
  }

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      // If there are no new values set use the the current ones
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
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
  }
  //current location end//

  PickLocation() {
    this
      .props
      .navigation
      .navigate('PickLocation');
    console.log('done');
  };
  categories() {
    this
      .props
      .navigation
      .navigate('categories');
    console.log('done');
  };
  render() {
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
              marginTop: 55
            }}
            source={require('../Images/back.png')} />
        </TouchableOpacity>
        <View
          style={{
            padding: 1,
            marginTop: 50,
            marginLeft: 10
          }}>
          <TextInput style={{
            fontSize: 40,
            marginLeft: 5
          }} placeholder={"Where?"}
            placeholderTextColor='#E5E7E9' //underlineColorAndroid='gray'
            onChangeText={(text) => this.setState({ textEnter: text })}
            value={this.state.textEnter} />
        </View>
        <View
          style={{
            marginTop: 1,
            backgroundColor: '#E5E7E9',
            height: .7,
            marginLeft: 10,
            marginRight: 10
          }}></View>
        <TouchableOpacity onPress={() => this.categories()}>
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
            marginTop: 10,
            justifyContent: 'center',
            marginLeft: 10,
            marginRight: 10
          }}>
          <MapView
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
          </MapView>
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
              .bind(this)}>
            <MapView.Marker
              coordinate={{
                latitude: (this.state.lastLat + 0.00050) || -36.82339,
                longitude: (this.state.lastLong + 0.00050) || -73.03569
              }}
              title={'currentLocation'}
              image={require('../Images/pin.png')}
              style={{height:10,width:10}}
              >
              <View>
                <Text style={{
                  color: '#000'
                }}>
                  {this.state.lastLong}
                  {this.state.lastLat}
                </Text>
              </View>
            </MapView.Marker>
          </MapView>
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
    height: 300
  }
});
AppRegistry.registerComponent('testCoords', () => testCoords);

get ID
  async GetId(){
    try {
       user_id = await AsyncStorage.getItem('id',);
     
      this.setState({isLoading:true})
    this.allevent();
    } catch (error) {
      // Error retrieving data
    }
  }

  Moment function
  getMonth() 
  {
    var dateTime = new Date(date); 
    var monthList    = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var month = monthList[dateTime.getMonth()]
    return month;
  }

  follow unfollow
       <TouchableOpacity
                  onPress={() => this.setState({
                  toggleLeft3: !this.state.toggleLeft3
                })}
                  style={[
                  styles.leftTab, this.state.toggleLeft3 && styles.leftTabChange
                ]}>
                  <Text
                    onPress={() => this.setState({
                    toggleLeft11: !this.state.toggleLeft3
                  })}
                    style={[
                    styles.leftTab1, this.state.toggleLeft3 && styles.leftTabChange1
                  ]}>FOLLOW</Text>
              </TouchableOpacity> */}
              {/* <TouchableOpacity onPress={() => this.changeColor()}
                   style={{backgroundColor:this.state.color}}
                   >
                  <Text style={{ color : this.state.color}}>FOLLOW</Text>
            </TouchableOpacity> */}
              
  async getdata() {
    var email = await AsyncStorage.getItem('created_at');
    var email = await AsyncStorage.getItem('description');
    var email = await AsyncStorage.getItem('end_time');
    var email = await AsyncStorage.getItem('event_category_id');
    var email = await AsyncStorage.getItem('id');
    var email = await AsyncStorage.getItem('image_url');
    var email = await AsyncStorage.getItem('is_like');
    var email = await AsyncStorage.getItem('publish_status');
    var email = await AsyncStorage.getItem('title');
    var email = await AsyncStorage.getItem('updated_at');
    var email = await AsyncStorage.getItem('user_id');
    var email = await AsyncStorage.getItem('vanue');
    var email = await AsyncStorage.getItem('vanue_lat');
    var email = await AsyncStorage.getItem('vanue_lng');
    var email = await AsyncStorage.getItem('venue_id');
  
    if (email !== "") {
      this.setState({email: email});
      console.log(email + 'email');
    };
  };
 
  list View
     <ListView
            enableEmptySections={true}
            dataSource={ds.cloneWithRows(datas)}
            renderRow={(rowData) =>
              <Card style={{
                flexDirection: 'row', height: 140, backgroundColor: '#fff',
                marginTop:10,width:"90%",alignSelf:'center',
              }}>

                <Image style={{ height: 137, borderRightWidth:20,width: 140, marginTop: 0 }}
                  source={rowData.pic} />
                <View style={{
                  marginLeft: 10,marginRight:10,width:"45%",marginTop:10
                }}>
                  <Text style={{ fontWeight: 'bold', color: '#EF7953', fontSize: 16,}}>
                    {rowData.item1}</Text>
                  <Text style={{ color: '#6E6E6E', fontSize: 14,marginRight:10}}>
                    {rowData.item2}</Text>
                  <Text style={{ color: '#6E6E6E', fontSize: 14, }}>
                    {rowData.item3}</Text>

                  <View style={{
                    alignItems: 'center', flexDirection: 'row',marginTop:-2,
                    height: 40,
                  }}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("NotificationDetail")}>
                    <Text style={{ color: '#8CBED5', fontSize: 12, }}>
                      {rowData.item4}</Text>
                      </TouchableOpacity>
                    <Text style={{ color: '#8CBED5', fontSize: 12, position: 'absolute', right: 0, }}>
                      {rowData.item5}</Text>
                  </View>
                </View>
              </Card>
            } />  