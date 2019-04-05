import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, Dimensions,
  View, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView, backgroundColor
} from 'react-native';
import { Container, Header, Content, Button, Footer, FooterTab, Icon, Card, Badge } from 'native-base';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class VolunteeringEvents extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  Screen17() {
    this.props.navigation.navigate('Screen17');
    console.log('done');
  };
  VolunteerWall() {
    this.props.navigation.navigate('VolunteerWall');
    console.log('done');
  };
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <ImageBackground style={{ height: 110, width: window.width }}
          source={require('../Images/VolunteerBg.png')}>
          <Header hasTabs
            style={{ backgroundColor: "transparent", justifyContent: 'center', }}
            androidStatusBarColor="#D35400"
            iosBarStyle="dark-content">

            <View style={{ width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>

              <TouchableOpacity  onPress={() => this.props.navigation.goBack()}
                style={{ marginLeft: 10, position: 'absolute', left: 0, }}>
                <Image source={require('../Images/Icons/keyboard-backspace.png')}
                  style={{ width: 30, height: 40, tintColor: '#fff' }} />
              </TouchableOpacity>
              <Text style={{ fontWeight: 'bold', color: "#FFF", fontSize: 21, position: 'absolute', }}>
                Volunteering Events</Text>
              <TouchableOpacity
                style={{ marginRight: 10, position: 'absolute', right: 0, }}>
                <Image
                  style={{ height: 24, width: 24, }}
                  source={require('../Images/bot1.png')}
                />
              </TouchableOpacity>

            </View>
          </Header>
        </ImageBackground>

        <Card style={{ backgroundColor: '#fff', width:"95%" ,maxHeight:160,alignSelf:'center',}}>
          <View style={{ flexDirection: 'row', marginTop: 6 ,marginRight:10}}>
            <View style={{ height: 80, marginLeft: 10, width: 80, backgroundColor: '#D7DBDD'}}></View>
            <View>
              <Text style={{ fontSize: 14, marginLeft: 7, marginTop: 10 }}>Enter La Sombra | life along the</Text>
              <Text style={{ fontSize: 12, marginLeft: 7, marginTop: 5, color: '#CACFD2' }}>Set,20 jan - 9:00 AM - 5:00PM{'\n'}Redisson Blu Hotel, Indore</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row',margin:15}}>
            <Image style={{ height: 20, width: 30, position: 'absolute', left: 10 }}
              source={require('../Images/groupicon.png')} />
            <Text style={{ fontSize: 13, color: '#EB984E', position: 'absolute', left: 50}}>576</Text>

            <Image style={{ height: 40, width: 40, position: 'absolute', right: 40 ,marginTop:-10}}
              source={require('../Images/share.png')} />

            <Image style={{ height: 40, width: 40, position: 'absolute', right: 5 ,marginTop:-10}}
              source={require('../Images/hart.png')} />
          </View>

          <View style={{ height: 35, marginTop: 15, flexDirection: 'row', backgroundColor: '#E59866', justifyContent: 'center' }}>
            <Text style={{ fontSize: 14, color: '#fff', marginLeft: 30,marginTop:10 }}>DETAILS</Text>
            <Text style={{ width: 1, backgroundColor: '#873600', marginLeft: 20 }}></Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("VolunteerWall")}>
            <Text style={{ fontSize: 14, color: '#fff', marginLeft: 20,marginTop:10 }}>VOLUNTEER</Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card style={{ backgroundColor: '#fff', width:"95%" ,maxHeight:160,marginTop:10,alignSelf:'center',}}>
        <View style={{ flexDirection: 'row', marginTop: 6 ,marginRight:10}}>
          <View style={{ height: 80, marginLeft: 10, width: 80, backgroundColor: '#D7DBDD'}}></View>
          <View>
            <Text style={{ fontSize: 14, marginLeft: 7, marginTop: 10 }}>Enter La Sombra | life along the</Text>
            <Text style={{ fontSize: 12, marginLeft: 7, marginTop: 5, color: '#CACFD2' }}>Set,20 jan - 9:00 AM - 5:00PM{'\n'}Redisson Blu Hotel, Indore</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row',margin:15}}>
          <Image style={{ height: 20, width: 30, position: 'absolute', left: 10 }}
            source={require('../Images/groupicon.png')} />
          <Text style={{ fontSize: 13, color: '#EB984E', position: 'absolute', left: 50}}>576</Text>

          <Image style={{ height: 40, width: 40, position: 'absolute', right: 40 ,marginTop:-10}}
            source={require('../Images/share.png')} />

          <Image style={{ height: 40, width: 40, position: 'absolute', right: 5 ,marginTop:-10}}
            source={require('../Images/hart.png')} />
        </View>

        <View style={{ height: 35, marginTop: 15, flexDirection: 'row', backgroundColor: '#E59866', justifyContent: 'center' }}>
          <Text style={{ fontSize: 14, color: '#fff', marginLeft: 30,marginTop:10 }}>DETAILS</Text>
          <Text style={{ width: 1, backgroundColor: '#873600', marginLeft: 20 }}></Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("VolunteerWall")}>
          <Text style={{ fontSize: 14, color: '#fff', marginLeft: 20,marginTop:10 }}>VOLUNTEER</Text>
          </TouchableOpacity>          
        </View>
      </Card>

      <Card style={{ backgroundColor: '#fff', width:"95%" ,maxHeight:160,marginTop:10,alignSelf:'center',}}>
      <View style={{ flexDirection: 'row', marginTop: 6 ,marginRight:10}}>
        <View style={{ height: 80, marginLeft: 10, width: 80, backgroundColor: '#D7DBDD'}}></View>
        <View>
          <Text style={{ fontSize: 14, marginLeft: 7, marginTop: 10 }}>Enter La Sombra | life along the</Text>
          <Text style={{ fontSize: 12, marginLeft: 7, marginTop: 5, color: '#CACFD2' }}>Set,20 jan - 9:00 AM - 5:00PM{'\n'}Redisson Blu Hotel, Indore</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row',margin:15}}>
        <Image style={{ height: 20, width: 30, position: 'absolute', left: 10 }}
          source={require('../Images/groupicon.png')} />
        <Text style={{ fontSize: 13, color: '#EB984E', position: 'absolute', left: 50}}>576</Text>

        <Image style={{ height: 40, width: 40, position: 'absolute', right: 40 ,marginTop:-10}}
          source={require('../Images/share.png')} />

        <Image style={{ height: 40, width: 40, position: 'absolute', right: 5 ,marginTop:-10}}
          source={require('../Images/hart.png')} />
      </View>

      <View style={{ height: 35, marginTop: 15, flexDirection: 'row', backgroundColor: '#E59866', justifyContent: 'center' }}>
        <Text style={{ fontSize: 14, color: '#fff', marginLeft: 30,marginTop:10 }}>DETAILS</Text>
        <Text style={{ width: 1, backgroundColor: '#873600', marginLeft: 20 }}></Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("VolunteerWall")}>
        <Text style={{ fontSize: 14, color: '#fff', marginLeft: 20,marginTop:10 }}>VOLUNTEER</Text>
        </TouchableOpacity>
        
      </View>
    </Card>     
    <View style={{height:70}}/>   
    </ScrollView>
        <Footer style={styles.footer}>
        <View style={{ width: width, justifyContent: 'space-around', backgroundColor: "#fff",
            flexDirection: 'row', alignItems: "center"}}>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity >
                    <Image source={require('../Images/Home.png')}
                        style={{ width: 30, height: 30, }} />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity  >
                    <Image resizeMode={'contain'}
                        source={require('../Images/star-icon.png')}
                        style={{ width: 30, height: 30, }} />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                >
                    <Image source={require('../Images/search-icon-black.png')}
                        style={{ width: 30, height: 30, }} />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity //onPress={() => this.props.navigation.navigate("MyWallet")}
                    style={{ marginRight: 0, }}>
                    <Image resizeMode={'contain'}
                        source={require('../Images/handseak-icon.png')}
                        style={{ width: 30, height: 30, }} />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Help")}
                    style={{ marginRight: 0, }}>
                    <Image source={require('../Images/man.png')}
                        style={{ width: 30, height: 30, }} />
                </TouchableOpacity>
            </View>
        </View>
      </Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: window.height,
    
    backgroundColor: '#F7F9F9',
    //alignItems:'center'
  },
  footer: {
    position: 'absolute',
    maxHeight: 65,
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
});
