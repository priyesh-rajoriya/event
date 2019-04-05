import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, Dimensions, FlatList,
  AlertIOS, Alert,
  View, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView, backgroundColor, AsyncStorage
} from 'react-native';
import { Container, Header, Content, Button, Footer, FooterTab, Icon, Badge } from 'native-base';
import AllAPI from "../Apis/AllAPI"

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import Menu, {
  MenuProvider,
  MenuTrigger,
  MenuOptions,
  MenuOption,
  renderers
} from 'react-native-popup-menu';
import ViewTicket from './ViewTicket';

let unique = 0;
const { SlideInMenu } = renderers;
var user_id;
var pic = "http://ec2-52-207-124-182.compute-1.amazonaws.com:3333/profile_images/user.png";
export default class userProfile extends Component {

  constructor(props, ctx) {
    super(props, ctx);
    this.state = {
      text: '', toggleLeft: false,
      toggleLeft1: false, toggleLeft2: false,
      user_id: '', firstName: '', lastName: '',
      customBackHandler: false, log: [],
      following_count: "0", like_count: "0", ticket_count: "0", user_image: pic
    };
  }
  async componentWillMount() {
    user_id = await AsyncStorage.getItem('id');
    console.log(user_id + 'id');
    const firstName = await AsyncStorage.getItem('firstName');
    const lastName = await AsyncStorage.getItem('lastName');
    console.log('Error23', this.state.user_id)
    if (user_id != undefined) {
      this.setState({ firstName: firstName, lastName: lastName, user_id: user_id })
      console.log(user_id + 'id', firstName, lastName);
      this.getBookedTicketList();
    }
  };
  // alert(){
  //   Alert.alert(
  //     'Alert Title',
  //     'Are you sure you want to go out?',
  //     [
  //       {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
  //       {text: 'CANCEL', onPress: () => console.log('CANCEL Pressed'), style: 'cancel'},
  //       {text: 'LOGOUT', onPress: () => console.log('LOGOUT Pressed')},
  //     ],
  //     { cancelable: false }
  //   )
  // }

  alert() {
    Alert.alert(
      'Alert Title',
      'Are you sure you want to go out?',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        { text: 'CANCEL', onPress: () => console.log('CANCEL Pressed'), style: 'cancel' },
        { text: 'LOGOUT', onPress: () => console.log('LOGOUT Pressed') },
      ],
      { cancelable: false }
    )
  }
  logout() {
    try {
      Platform.select({
        ios: () => {
          AlertIOS.alert('', 'Are you sure you want to logout.', [
            { text: 'CANCEL', onPress: () => console.log('CANCEL Pressed'), style: 'cancel' },
            { text: 'LOGOUT', onPress: () => { AsyncStorage.clear(), this.props.navigation.navigate("Login") } },
          ])
        },
        android: () => {
          Alert.alert('', 'Are you sure you want to logout.', [
            { text: 'CANCEL', onPress: () => console.log('CANCEL Pressed'), style: 'cancel' },
            { text: 'LOGOUT', onPress: () => { AsyncStorage.clear(), this.props.navigation.navigate("Login") } },
          ]);
        }
      })();
    } catch (e) {
      console.log(e)
    }
  }

  async  getBookedTicketList() {
    this.setState({ isLoading: true })
    const config = {
      method: 'POST',
      headers: {
      },
      body: '',
    }
    console.log(config)
    await fetch(AllAPI.getBookedTicketList + '?user_id=' + user_id, config).then(res => res.json())
      .then(res => {
        //  AsyncStorage.setItem('fullname', res.data[0].fullname);
        console.log('jcbkuwe', res);
        // this.props.navigation.navigate("ViewTicket",{data:res.data})
        // console.log(res.data.user_details.following_count,
        //  this.state.following_count ,this.state.ticket_count, this.state.user_image, this.state.like_count
        //);
        this.setState({
          data1: res.data.tickets,
          following_count: res.data.user_details.following_count,
          like_count: res.data.user_details.like_count,
          ticket_count: res.data.user_details.ticket_count,
          user_image: res.data.user_details.user_image
        })
        //console.log(res.user_details.following_count, this.state.following_count ,this.state.ticket_count, this.state.user_image, this.state.like_count);
      }).catch((error) => {
        this.setState({ isLoading: false })
        console.log(error);
      });
  };


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
        return Object.assign({}, l, { highlighted: !l.highlighted });
      }
      return l;
    })
    this.setState({ log });
  }

  deleteLogItem(id) {
    const log = this.state.log.filter(l => l.id !== id);
    this.setState({ log }); fil
  }
  VolunteerWall() {
    this.props.navigation.navigate('VolunteerWall');
    console.log('done');
  };
  ViewTicket() {
    this.props.navigation.navigate('ViewTicket');
    console.log('done');
  };
  Splash() {

    let keys = ['firstName', 'lastName'];
    AsyncStorage.multiRemove(keys, (err) => {
    });
    this.props.navigation.navigate('Splash');
    console.log('done');
  };
  Settings() {
    this.props.navigation.navigate('Settings');
    console.log('done');
  };

  VolunteerFormDatenTime() {
    this.props.navigation.navigate('VolunteerFormDatenTime');
    console.log('done');
  };
  Events() {
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
  Search() {
    this.props.navigation.navigate('Search');
    console.log('done');
  };
  QrCode() {
    this.props.navigation.navigate('QrCode');
    console.log('done');
  };
  openList(item) {
    this.props.navigation.navigate(
      'ViewTicket',
      {
        ticket: item,
        ticket_count: item.quantity
      },
    );
  }

  openList1() {
    this.props.navigation.navigate('QrCode');
  }

  async openSetting() {
    var userid = await AsyncStorage.getItem('id');
    console.log(userid, 'id');
    try {
      setTimeout(() => {
        if (userid != null) {
          this.props.navigation.navigate('editUserProfile');
        } else {
          alert("Please Login")
        }
      }, );
    }
    catch (error) {
      console.log('error' + error)
    }
  }
  render() {
    console.log('flatlist')
    console.log(this.state.data1, 'flatlist')
    console.log('data', this.state.data1)
    return (
      <MenuProvider style={{ flex: 1 }}>
        <View style={styles.container}>
          <ImageBackground style={{ height: 250, width: window.width }}
            source={require('../Images/bg2.png')}>
            <View style={{ justifyContent: 'center', marginTop: 50 }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}
                style={{ marginLeft: 10, position: 'absolute', left: 0, }}>
                <Image source={require('../Images/Icons/keyboard-backspace.png')}
                  style={{ width: 35, height: 40, tintColor: '#fff' }} />
              </TouchableOpacity>

              <View style={{ position: 'absolute', right: 10 }}>
                <Menu name="types" onSelect={value => this.selectOptionType(value)}
                  onBackdropPress={() => this.addLog('menu will be closed by backdrop')}
                  onOpen={() => this.addLog('menu is opening')}
                  onClose={() => this.addLog('menu is closing')}
                >
                  <MenuTrigger>
                    <Image resizeMode={'contain'} source={require('../Images/icon3.png')}
                      style={{ width: 35, height: 40, tintColor: '#fff' }} />
                  </MenuTrigger>
                  <MenuOptions customStyles={{ optionText: styles.text }}>
                    <MenuOption onSelect={() => this.openSetting()} >
                      <View style={{ flexDirection: 'row',}}>
                        <Image style={styles.menuIcon}
                          source={require('../Images/editprofile_icon.png')} />
                        <Text style={styles.menuText}>Edit Profile</Text>
                      </View>
                    </MenuOption>

                    <MenuOption onSelect={() =>this.props.navigation.navigate("Settings")} >
                    <View style={{ flexDirection: 'row',}}>
                      <Image style={styles.menuIcon}
                        source={require('../Images/Settings.png')} />
                      <Text style={styles.menuText}>Settings</Text>
                    </View>
                  </MenuOption>

                  {this.state.user_id != null &&
                  <MenuOption onSelect={() =>this.logout()} >
                  <View style={{ flexDirection: 'row'}}>
                    <Image style={styles.menuIcon}
                      source={require('../Images/logout_icon.png')} />
                    <Text style={styles.menuText}>Log Out</Text>
                  </View>
                </MenuOption>
                  }

                  </MenuOptions>
                </Menu>
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 30, }}>
              <Image style={{ height: 110, width: 110, margin: 10 }}
                source={{ uri: this.state.user_image }} />
              <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                <Text style={{ fontSize: 14, color: '#fff', justifyContent: 'center', backgroundColor: 'transparent', marginLeft: 20, marginRight: 20 }}>{this.state.ticket_count}</Text>
                <Text style={{ fontSize: 14, color: '#fff', backgroundColor: 'transparent' }}>Tickets</Text>
              </View>
              <View style={{ marginLeft: 10, justifyContent: 'center', }}>
                <Text style={{ fontSize: 14, color: '#fff', backgroundColor: 'transparent', justifyContent: 'center', marginLeft: 20, marginRight: 20 }}>{this.state.like_count}</Text>
                <Text style={{ fontSize: 14, color: '#fff', backgroundColor: 'transparent', marginLeft: 5 }}>Likes</Text>
              </View>
              <View style={{ marginLeft: 10, justifyContent: 'center', marginLeft: 5 }}>
                <Text style={{ fontSize: 14, color: '#fff', backgroundColor: 'transparent', justifyContent: 'center', marginLeft: 20, marginRight: 20 }}>{this.state.following_count}</Text>
                <Text style={{ fontSize: 14, color: '#fff', backgroundColor: 'transparent' }}>Following</Text>
              </View>
            </View>
          </ImageBackground>
          <ScrollView style={{ height: '100%' }}>
            <Text style={{ fontSize: 25, color: '#F79F81', marginLeft: 20, marginTop: 10 }}>{this.state.firstName} {this.state.lastName}</Text>

            <View style={{ flexDirection: 'row', marginLeft: 20, marginRight: 20, justifyContent: 'center' }}>
              <View style={{ marginTop: 30, marginLeft: 20, height: 40 }}>
                <TouchableOpacity
                  onPress={() => this.VolunteerFormDatenTime()}
                  style={[styles.leftTab, this.state.toggleLeft && styles.leftTabChange]}>
                  <Text style={{ color: '#6E6E6E', textAlign: 'center', fontSize: 12, margin: 10 }}>VOLUNTEER SIGNUP</Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 30, marginLeft: 5, marginRight: 20, height: 40 }}>
                <TouchableOpacity onPress={() => this.VolunteerWall()}
                  style={[styles.leftTab, this.state.toggleLeft1 && styles.leftTabChange]}>
                  <Text style={{ color: '#6E6E6E', textAlign: 'center', fontSize: 12, margin: 10 }}>VOLUNTEER DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginTop: 10, height: 40, width: "40%", alignSelf: 'center' }}>
              <TouchableOpacity
                onPress={() => this.openList1()}
                // onPress={() => this.setState({ toggleLeft2: !this.state.toggleLeft2 })}
                style={[styles.leftTab, this.state.toggleLeft2 && styles.leftTabChange]}>
                <Text style={{ color: '#6E6E6E', textAlign: 'center', fontSize: 12, margin: 10 }}>QR CODE</Text>
              </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: 'gray', height: 1, marginLeft: 10, marginTop: 20, marginRight: 10 }}></View>

            <Text style={{ fontSize: 20, color: '#1C1C1C', marginLeft: 20, marginTop: 30 }}>Tickets</Text>

            <FlatList
              data={this.state.data1}
              renderItem={({ item }) =>
                <TouchableOpacity onPress={() => this.openList(item)}
                  style={{ flexDirection: 'row' }}>
                  <View>
                    <ImageBackground style={{ height: 90, width: 90, marginTop: 10, marginLeft: 20, justifyContent: 'center' }}
                      source={{ uri: item.image_url }}>
                      <Text style={{ fontSize: 14, color: '#fff', textAlign: 'center', backgroundColor: 'transparent' }}>{item.quantity} Tickets</Text>
                    </ImageBackground>
                  </View>
                  <View style={{ marginLeft: 10, marginTop: 10, width: 250 }}>
                    <Text style={{ fontSize: 15, color: '#2E2E2E', justifyContent: 'center', marginRight: 20 }}>{item.title}</Text>
                    <Text style={{ fontSize: 12, color: '#BDBDBD', marginTop: 5, maxWidth: "85%" }}>set,{item.start_date}{item.end_month}-{item.from_time}-{item.to_time}{'\n'}{item.vanue}</Text>
                  </View>
                </TouchableOpacity>
              }
              keyExtractor={(item, index) => index}
            />
            <View style={{ height: 70 }} />
          </ScrollView>

          <Footer style={styles.footer}>
            <View style={{
              width: width, justifyContent: 'space-around', backgroundColor: "#fff",
              flexDirection: 'row', alignItems: "center"
            }}>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.Events()}>
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
                  onPress={() => this.Search()} >
                  <Image source={require('../Images/Search.png')}
                    style={{ width: 35, height: 35, }} />
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("NonProfit")}
                  style={{ marginRight: 0, }}>
                  <Image resizeMode={'contain'}
                    source={require('../Images/Non-profit.png')}
                    style={{ width: 35, height: 35, }} />
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Help")}
                  style={{ marginRight: 0, }}>
                  <Image source={require('../Images/User12.png')}
                    style={{ width: 35, height: 35, }} />
                </TouchableOpacity>
              </View>
            </View>
          </Footer>

        </View>
      </MenuProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },

  footer: {
    position: 'absolute',
    height: 60,
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
  menuIcon: {
    height: 25,
    tintColor: 'black',
    width: 25,
    marginLeft: 5,
    marginRight: 5
  },
  menuText: {
    color: "black",
    marginLeft: 5,
    marginRight: 5,
    fontSize: 16
  },
  leftTab: {
    height: 35, borderRadius: 20, alignItems: 'center', borderColor: "#FA8258",
    borderWidth: 1,
    borderColor: '#bbaa64', justifyContent: 'center', backgroundColor: '#E6E6E6'
  },
  leftTabChange: {
    backgroundColor: '#F79F81',
  },
  topbar: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    paddingTop: 15,
  },
  trigger: {
    padding: 5,
    margin: 5,
  },
  triggerText: {
    color: 'white',
  },
  disabled: {
    color: '#ccc',
  },
  divider: {
    marginVertical: 5,
    marginHorizontal: 2,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  logView: {
    flex: 1,
    flexDirection: 'column',
  },
  logItem: {
    flexDirection: 'row',
    padding: 8,
  },
  slideInOption: {
    padding: 5,
  },
  text: {
    fontSize: 18,
  }
});