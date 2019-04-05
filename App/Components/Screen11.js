import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,Dimensions,
  View, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView, backgroundColor,AsyncStorage
} from 'react-native';
import { Container, Header, Content, Button, Footer, FooterTab, Card, Icon, Badge } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import Menu, {
  MenuProvider,
  MenuTrigger,
  MenuOptions,
  MenuOption,
  renderers
} from 'react-native-popup-menu';
import MapView from 'react-native-maps';

let unique = 0;
const { SlideInMenu } = renderers;

export default class Screen11 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',log: [],
      isVisible:false,
      isVisible1:false,
      isVisible2:false,
      isVisible3:false,
      title: 'yoo',
      description: 'solv',
      quantity: '5',
      price: '300',
      start_time:'23:34:3334',
      end_time: '22:34:3445',
      user_id: '1',
      event_id: '3',
      image: 'ejkfjy',
      publish_status: 'Done'

    };
  }

  async addTicket() {
    this.setState({isLoading: true})
    var data = new FormData();
    data.append('title', this.state.title);
    data.append('description', this.state.description);
    data.append('quantity', this.state.quantity);
    data.append('price', this.state.price);
    data.append('start_time', this.state.start_time);
    data.append('end_time', this.state.end_time);
    data.append('user_id', this.state.user_id);
    data.append('event_id', this.state.event_id);
    data.append('image', this.state.image);
    data.append('publish_status', this.state.publish_status);
    const config = {
      method: 'POST',
      headers: {},
      body: ''
    }
    console.log(data)
    await fetch('http://ec2-52-70-234-40.compute-1.amazonaws.com:3333/api/v1/addTicket?title=' + this.state.title + '&description=' + this.state.description + '&quantity'+this.state.quantity+ '$price'+this.state.price+ '&start_time'+this.state.start_time+ '&end_time'+this.state.end_time+ '&user_id'+this.state.user_id+ '&event_id'+this.state.event_id+ '&image'+this.state.image+ '&publish_status'+this.state.publish_status + config)
      .then(res => res.json())
      .then(res => {
        console.log(res); 
      //   if (res.success == true) {
      //     // AsyncStorage.setItem('title', res.data[0].title);
      //     // AsyncStorage.setItem('description', res.data[0].description);
      //     // AsyncStorage.setItem('user_id', res.data[0].user_id);
      //     // AsyncStorage.setItem('venue_id', res.data[0].venue_id);
      //     // AsyncStorage.setItem('mobile', res.data[0].mobile);
      //     // AsyncStorage.setItem('event_category_id', res.data[0].event_category_id);
      //     // AsyncStorage.setItem('start_time', res.data[0].start_time);
      //     // AsyncStorage.setItem('end_time', res.data[0].end_time());
      //     // AsyncStorage.setItem('image_url', res.data[0].image_url());
      //     // AsyncStorage.setItem('publish_status', res.data[0].publish_status());
      //     console.log(res);
      //     Platform.select({
      //       ios: () => {
      //         AlertIOS.alert('', 'Select Ticket Successfull', [
      //           {
      //             text: 'OK',
      //             onPress: () => this
      //               .props
      //               .navigation
      //               .navigate("Screen12")
      //           }
      //         ])
      //       },
      //       android: () => {
      //         ToastAndroid.show('Select Event Successfull', ToastAndroid.SHORT);
      //         this
      //           .props
      //           .navigation
      //           .navigate("Screen12");
      //       }
      //     })();
      //   } else {
      //     this.setState({isLoading: false});
      //     Alert.alert([
      //       {
      //         text: 'ok',
      //         onPress: () => console.log('ok pressed')
      //       }
      //     ],)
      //   }
     })
      .catch((error) => {
        this.setState({isLoading: false})
        console.log(error);
      });
  };

  onShow = () => {
    this.toggle()
    if (this.state.show == false) {
        this.setState({
            show: true
        })
    } else {
        this.setState({
            show: false
        })
    }
}
onShow1 = () => {
  this.toggle1()
  if (this.state.show1 == false) {
      this.setState({
          show1: true
      })
  } else {
      this.setState({
          show1: false
      })
  }
}
onShow2 = () => {
  this.toggle2()
  if (this.state.show == false) {
      this.setState({
          show1: true
      })
  } else {
      this.setState({
          show1: false
      })
  }
}
onShow3 = () => {
  this.toggle3()
  if (this.state.show == false) {
      this.setState({
          show1: true
      })
  } else {
      this.setState({
          show1: false
      })
  }
}
toggle() {
  if (this.state.isVisible) {
      this.setState({
          isVisible: false,      
      });
  } else {
      this.setState({
          isVisible: true,      
      });
  }
}
toggle1() {
  if (this.state.isVisible1) {
      this.setState({
          isVisible1: false,      
      });
  } else {
      this.setState({
          isVisible1: true,      
      });
  }
}
toggle2() {
  if (this.state.isVisible2) {
      this.setState({
          isVisible2: false,      
      });
  } else {
      this.setState({
          isVisible2: true,      
      });
  }
}
toggle3() {
  if (this.state.isVisible3) {
      this.setState({
          isVisible3: false,      
      });
  } else {
      this.setState({
          isVisible3: true,      
      });
  }
}
  selectOptionType(value) {
    const v = typeof value === 'object' ? JSON.stringify(value) : value;
    this.addLog(`selecting type: ${v}`);
    return value !== 'Do not close';
  }

  addLog(value) {
    this.setState({
      log: [...this.state.log, {
        value,
        id: ++unique
      }]
    });
  }

  toggleHighlight(id) {
    const log = this.state.log.map(l => {
      if (l.id === id) {
        return Object.assign({}, l, {highlighted: !l.highlighted});
      }
      return l;
    })
    this.setState({ log });
  }

  deleteLogItem(id) {
    const log = this.state.log.filter(l => l.id !== id);
    this.setState({ log });
  }

  Events() {
    this.props.navigation.navigate('Events');
    console.log('done');
  };
  Screen12() {
    this.props.navigation.navigate('Screen12');
    console.log('done');
  };
  render() {
    return (
      <MenuProvider style={{flex: 1}}>
      <View style={styles.container}>
      <View style={{height:260,width:'100%',backgroundColor:'#D35400'}}
       >
        <Header hasTabs
          style={{ backgroundColor: "transparent", justifyContent: 'center',marginTop:7 }}
          androidStatusBarColor="#000"
          iosBarStyle="dark-content">
          <View style={{ width: width, flexDirection: "row", }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}
              style={{ marginLeft: 10, position: 'absolute', left: 0, }}>
              <Image source={require('../Images/back.png')}
                style={{ width: 35, height: 35, tintColor: '#000' }} />
            </TouchableOpacity>
           
            <View style={ {position: 'absolute', right:10}}> 
            <Menu name="types" onSelect={value => this.selectOptionType(value)}
              onBackdropPress={() => this.addLog('menu will be closed by backdrop')}
              onOpen={() => this.addLog('menu is opening')}
              onClose={() => this.addLog('menu is closing')}
              >
              <MenuTrigger> 
                <Image resizeMode={'contain'} 
                source={require('../Images/3dot.png')}
                style={{ width: 25, height: 25,marginTop:4 }} />
              </MenuTrigger>
              <MenuOptions customStyles={{ optionText: styles.text }}>
            
                <TouchableOpacity style={{flexDirection:'row', marginTop:10}}
                  onPress={() => this.props.navigation.navigate("Calender")}>
                <Image style={styles.menuIcon} 
                  source={require('../Images/Calendar.png')} />
                  <Text style={styles.menuText}>Add to calender</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection:'row',marginTop:10}}
                 >
                <Image style={{height:13,width:17,marginLeft:10,marginTop:5}} 
                  source={require('../Images/emailicon.png')} />
                  <Text style={{color:"grey",
                         marginLeft:10,
                         marginRight:5,
                         fontSize:16}}>Contact to host</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection:'row',marginTop:10, marginBottom:10}}
                  >
                <Image style={styles.menuIcon} 
                  source={require('../Images/Logout.png')} />
                  <Text style={styles.menuText}>Report event</Text>
                </TouchableOpacity>
                
              </MenuOptions>
            </Menu>
          </View> 

          </View>
        </Header> 
          <View style={{ height: 160, width: '100%', marginTop: 20, backgroundColor: '#E6E6E6' }}></View>
        </View>  
        <ScrollView style={{ height: '100%' }}>
          <Text style={{ fontSize: 28, marginTop: 25, marginLeft: 20 }}>International Student {'\n'}Education Fair - Feb 2018</Text>
    
          <View style={{ flexDirection: 'row', marginTop: 40, marginLeft: 30 }}>
            <Image style={{ height: 40, width: 40, }}
              source={require('../Images/Calendar.png')} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 18 }}>Sunday, February 25</Text>
              <Text style={{ fontSize: 16, color: '#A4A4A4' }}>9:AM - 5:00 PM GMT+5:30</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 30 }}>
            <Image style={{ height: 35, width: 35, }}
              source={require('../Images/location1.png')} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 18 }}>Radisson Blue Hotel </Text>
              <Text style={{ fontSize: 16, color: '#A4A4A4' }}>Indore, Madhya Pradesh 452010</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 30 }}>
            <Image style={{ height: 40, width: 40, }}
              source={require('../Images/Ticket.png')} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 18 }}>Free</Text>
              <Text style={{ fontSize: 16, color: '#A4A4A4' }}>on AppName</Text>
            </View>
          </View>

          <Text style={{ fontSize: 22, marginTop: 50, marginLeft: 20 }}>Detail</Text>
          <Text style={{ fontSize: 17, marginTop: 20, marginLeft: 20 ,marginRight:20}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem lpsum is simply dummy text of the printing and typesetting industry.</Text>

          <Text style={{ fontSize: 22, marginTop: 30, marginLeft: 20 }}>Location</Text>
          <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 20 }}>Radisson Blu Hotel, Indore</Text>
          <View style={{marginTop:1,justifyContent:'center',marginLeft:20,marginRight:20}}>
          <MapView style={{height:120, width:'100%',}}
            initialRegion={{
              latitude: 22.7196,
              longitude: 75.8577,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
          </View>
       
          <Text style={{ fontSize: 22, marginTop: 20, marginLeft: 20 }}>Organizer</Text>
          <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 20 }}>Study Metro</Text>

          <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 20 ,marginRight:20}}>Lorem Ipsum is simply dummy text of the priniting and typesetting industry. Lorern Ipsum is simply dummy text of the printing and typesetting industry </Text>
          <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 20 }}>Details</Text>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity>
            <Image style={{ height: 30, width: 30, marginLeft: 20 }}
              source={require('../Images/Facebook.png')} />
          </TouchableOpacity> 
          <TouchableOpacity>   
            <Image style={{ height: 30, width: 30, marginLeft: 10, }}
              source={require('../Images/Twitter.png')} />
          </TouchableOpacity> 
          <TouchableOpacity>   
            <Image style={{ height: 30, width: 30, marginLeft: 10, }}
              source={require('../Images/insta.png')} />
          </TouchableOpacity>  
            <View style={{ height: 25, width: 100, borderRadius: 10, position: 'absolute', right: 20, borderWidth: 1, justifyContent: 'center' }}>
             <TouchableOpacity>
              <Text style={{ fontSize: 15, alignSelf: 'center' }}>FOLLOW</Text>
             </TouchableOpacity> 
            </View>
          </View>

          <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 20 }}>More event like this</Text>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
              <Card style={{marginLeft:20,marginRight:10,marginBottom:25}}>
                <View style={{height:100,backgroundColor:'grey'}}/>
                  <View style={{height:80,backgroundColor:'#F7F9F9',}}>  
                  <View style={{flexDirection:'row',position:'absolute',right:10,marginTop:-20}}>
                  <TouchableOpacity>
                    <Image style={{height:40,width:40}} 
                      source={require('../Images/share.png')} />   
                      </TouchableOpacity> 
                      <View>
                            <TouchableOpacity onPress={this.onShow}>
                                  <View>
                                   {this.state.isVisible && (
                                    <Image style={{ height: 40, width: 40, }}
                                    source={require('../Images/Heart-Button.png')} />
                                    )}
                                    {!this.state.isVisible && (
                                    <Image style={{ height: 40, width: 40,}}
                                    source={require('../Images/hart.png')} />
                                    )}
                                   </View>
                            </TouchableOpacity>
                       </View>  
                      {/* <TouchableOpacity>      
                    <Image style={{height:40,width:40,}} 
                      source={require('../Images/hart.png')} />  
                      </TouchableOpacity>                            */}
                  </View>
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:30}}>
                      <View style={{marginLeft:5}}>
                        <Text style={{fontSize:14,color:'#DC7633',backgroundColor:'transparent',}}>JAN</Text>
                        <Text style={{fontSize:14,}}>22</Text>      
                      </View>
                      <View style={{marginLeft:5}}>
                        <Text style={{fontSize:13}}>Enter La Sombra | life along the mi...</Text>
                        <Text style={{fontSize:12,color:'#D0D3D4',backgroundColor:'transparent'}}>Color - Fashion & Lifestyle Exhibi...</Text> 
                      </View>
                    </View>  
                  </View>    
              </Card>
              <Card style={{marginLeft:10,marginRight:10,marginBottom:25}}>
                <View style={{height:100,backgroundColor:'grey'}}/>
                  <View style={{height:80,backgroundColor:'#F7F9F9',}}>  
                  <View style={{flexDirection:'row',position:'absolute',right:10,marginTop:-20}}>
                  <TouchableOpacity>
                    <Image style={{height:40,width:40}} 
                      source={require('../Images/share.png')} /> 
                      </TouchableOpacity>       
                      <View>
                      <TouchableOpacity onPress={this.onShow1}>
                            <View>
                             {this.state.isVisible1 && (
                              <Image style={{ height: 40, width: 40, }}
                              source={require('../Images/Heart-Button.png')} />
                              )}
                              {!this.state.isVisible1 && (
                              <Image style={{ height: 40, width: 40,}}
                              source={require('../Images/hart.png')} />
                              )}
                             </View>
                      </TouchableOpacity>
                 </View>    
                  </View>
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:30}}>
                      <View style={{marginLeft:5}}>
                        <Text style={{fontSize:14,color:'#DC7633',backgroundColor:'transparent',}}>JAN</Text>
                        <Text style={{fontSize:14,}}>22</Text>      
                      </View>
                      <View style={{marginLeft:5}}>
                        <Text style={{fontSize:13}}>Enter La Sombra | life along the mi...</Text>
                        <Text style={{fontSize:12,color:'#D0D3D4',backgroundColor:'transparent'}}>Color - Fashion & Lifestyle Exhibi...</Text> 
                      </View>
                    </View>  
                  </View>    
              </Card>
              <Card style={{marginLeft:10,marginRight:20,marginBottom:25}}>
                <View style={{height:100,backgroundColor:'grey'}}/>
                  <View style={{height:80,backgroundColor:'#F7F9F9',}}>  
                  <View style={{flexDirection:'row',position:'absolute',right:10,marginTop:-20}}>
                  <TouchableOpacity>
                    <Image style={{height:40,width:40}} 
                      source={require('../Images/share.png')} /> 
                  </TouchableOpacity>     
                  <View>
                  <TouchableOpacity onPress={this.onShow2}>
                        <View>
                         {this.state.isVisible2 && (
                          <Image style={{ height: 40, width: 40, }}
                          source={require('../Images/Heart-Button.png')} />
                          )}
                          {!this.state.isVisible2 && (
                          <Image style={{ height: 40, width: 40,}}
                          source={require('../Images/hart.png')} />
                          )}
                         </View>
                  </TouchableOpacity>
             </View>                 
                  </View>
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:30}}>
                      <View style={{marginLeft:5}}>
                        <Text style={{fontSize:14,color:'#DC7633',backgroundColor:'transparent',}}>JAN</Text>
                        <Text style={{fontSize:14,}}>22</Text>      
                      </View>
                      <View style={{marginLeft:5}}>
                        <Text style={{fontSize:13}}>Enter La Sombra | life along the mi...</Text>
                        <Text style={{fontSize:12,color:'#D0D3D4',backgroundColor:'transparent'}}>Color - Fashion & Lifestyle Exhibi...</Text> 
                      </View>
                    </View>  
                  </View>    
              </Card>
            </ScrollView>
          </View>
          <View style={{height:60,backgroundColor:'transparent'}}></View>
        </ScrollView>
        <Footer style={styles.footer}>
        <View style={{ width: width.width, justifyContent: 'space-between', backgroundColor: "#fff",
            flexDirection: 'row', alignItems: "center"}}>
            <View style={{ alignItems: 'center' }}>
            <TouchableOpacity  onPress={() => this.Screen12()}>
                <LinearGradient colors={['#F1948A', '#E59866',]} style={{justifyContent:'center', padding: 5, height: 40, width:200,borderRadius:20 }}>
                  <Text style={{fontSize:20,color:'#fff',textAlign:'center'}}>
                   TICKETS
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>

                <TouchableOpacity  >
                    <Image resizeMode={'contain'}
                        source={require('../Images/share.png')}
                        style={{ width: 50, height: 50, }} />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <TouchableOpacity onPress={this.onShow3}>
                        <View>
                         {this.state.isVisible3 && (
                          <Image style={{ height: 50, width: 50, }}
                          source={require('../Images/Heart-Button.png')} />
                          )}
                          {!this.state.isVisible3 && (
                          <Image style={{ height: 50, width: 50,}}
                          source={require('../Images/hart.png')} />
                          )}
                         </View>
                  </TouchableOpacity>
             </View>            
            {/* <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity>
                    <Image source={require('../Images/hart.png')}
                        style={{ width: 50, height: 50, }} />
                </TouchableOpacity>
            </View> */}
         
          </View>
        </Footer>
      </View>
    </MenuProvider>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    //height:window.height+200,

    backgroundColor: '#fff',
  },
  footer: {
    position: 'absolute',
    maxHeight: 80,
    minHeight:60,
    bottom: 0,
    backgroundColor: "#fff"
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
  leftTab: {
    height: 35, borderRadius: 20, alignItems: 'center',
    borderColor: '#bbaa64', justifyContent: 'center', backgroundColor: '#E6E6E6'
  },
  leftTabChange: {
    backgroundColor: '#F79F81',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  menuIcon:{
    height:25,
    width:25,
    marginLeft:5,
    marginRight:5
  },
  menuText:{
    color:"grey",
    marginLeft:5,
    marginRight:5,
    fontSize:16
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
    marginLeft:10
  },
});
//marginLeft:20,width:140,height:40,borderRadius:20,borderColor:"#FA8258",borderWidth:1,backgroundColor:'transparent',justifyContent:'center'