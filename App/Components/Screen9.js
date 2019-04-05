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


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class Screen9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',toggleLeft: false,
      toggleLeft1: false,
      toggleLeft2: false,
      toggleLeft3: false,
      toggleLeft4: false,
      toggleLeft5: false,
      toggleLeft6: false,
      toggleLeft7: false,
      isVisible:false,
      isVisible1:false,
      isVisible2:false,
      isVisible3:false,
      isVisible4:false,
      isVisible5:false,
    };
  }
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
          show2: true
      })
  } else {
      this.setState({
          show2: false
      })
  }
}
onShow4 = () => {
    this.toggle4()
    if (this.state.show == false) {
        this.setState({
            show2: true
        })
    } else {
        this.setState({
            show2: false
        })
    }
  }
  onShow5 = () => {
    this.toggle5()
    if (this.state.show == false) {
        this.setState({
            show2: true
        })
    } else {
        this.setState({
            show2: false
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
toggle4() {
  if (this.state.isVisible4) {
      this.setState({
          isVisible4: false,      
      });
  } else {
      this.setState({
          isVisible4: true,      
      });
  }
}
toggle5() {
  if (this.state.isVisible5) {
      this.setState({
          isVisible5: false,      
      });
  } else {
      this.setState({
          isVisible5: true,      
      });
  }
}

  Screen11() {
    this.props.navigation.navigate('Screen11');
    console.log('done');
  };
  Screen9_() {
    this.props.navigation.navigate('Screen9_');
    console.log('done');
  };
  Search() {
    this.props.navigation.navigate('Search');
    console.log('done');
  };
  render() {
    return (
      <View style={styles.container}>
       <Header
          hasTabs
          style={{
          backgroundColor: "transparent",
          justifyContent: 'center',marginTop:20
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
                source={require('../Images/back.png')}
                style={{
                width: 35,
                height: 35,
                tintColor: '#000'
              }}/>
            </TouchableOpacity>
          
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Screen9_")}
            style={{ position: "absolute", right: 20 }}>
              <Image 
                resizeMode='contain'
                style={{ height: 25, width: 30, marginTop: 10 }}
                source={require('../Images/Filter.png')} />
            </TouchableOpacity> 
          </View>
        </Header>
        <ScrollView style={{ height: '100%' }}>
        <Text style={{fontSize: 25, marginLeft: 20, marginTop: 15, color:'#E6E6E6'}}>Search for...</Text>
          {/* <TextInput
            style={{ fontSize: 25, marginLeft: 20, marginTop: 15 }}
            placeholder="Search for..."
            placeholderTextColor="#E6E6E6"
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ text })}
          /> */}
          <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: 'center' ,marginLeft:20,marginRight:20}}>
          <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false} >
            <View>
             <TouchableOpacity
                  onPress={() => this.setState({ toggleLeft: !this.state.toggleLeft })}
                  style={[styles.leftTab, this.state.toggleLeft && styles.leftTabChange]}>
              <Text style={{ fontSize: 14, color: '#848484', margin: 10 }}>This month
            </Text>
            </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                  onPress={() => this.setState({ toggleLeft1: !this.state.toggleLeft1 })}
                  style={[styles.leftTab, this.state.toggleLeft1 && styles.leftTabChange]}>
              <Text style={{ fontSize: 14, color: '#848484', margin: 10 }}>DIY
            </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                  onPress={() => this.setState({ toggleLeft2: !this.state.toggleLeft2 })}
                  style={[styles.leftTab, this.state.toggleLeft2 && styles.leftTabChange]}>
              <Text style={{ fontSize: 14, color: '#848484', margin: 10 }}>Party
            </Text>
            </TouchableOpacity>
            </View>
            <View >
             <TouchableOpacity
                  onPress={() => this.setState({ toggleLeft3: !this.state.toggleLeft3 })}
                  style={[styles.leftTab, this.state.toggleLeft3 && styles.leftTabChange]}>
              <Text style={{ fontSize: 14, color: '#848484', margin: 10 }}>Business
            </Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity
                  onPress={() => this.setState({ toggleLeft4: !this.state.toggleLeft4 })}
                  style={[styles.leftTab, this.state.toggleLeft4 && styles.leftTabChange]}>
              <Text style={{ fontSize: 14, color: '#848484', margin: 10 }}>This month
            </Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity
                  onPress={() => this.setState({ toggleLeft5: !this.state.toggleLeft5 })}
                  style={[styles.leftTab, this.state.toggleLeft5 && styles.leftTabChange]}>
              <Text style={{ fontSize: 14, color: '#848484', margin: 10 }}>DIY
            </Text>
            </TouchableOpacity>
            </View>
            <View >
            <TouchableOpacity
                  onPress={() => this.setState({ toggleLeft6: !this.state.toggleLeft6 })}
                  style={[styles.leftTab, this.state.toggleLeft6 && styles.leftTabChange]}>
              <Text style={{ fontSize: 14, color: '#848484', margin: 10 }}>Party
            </Text>
            </TouchableOpacity>
            </View>
            <View >
            <TouchableOpacity
                  onPress={() => this.setState({ toggleLeft7: !this.state.toggleLeft7})}
                  style={[styles.leftTab, this.state.toggleLeft7 && styles.leftTabChange]}>
              <Text style={{ fontSize: 14, color: '#848484', margin: 10 }}>Business
            </Text>
            </TouchableOpacity>
            </View>
          </ScrollView>        
          </View>

          <Text style={{ fontSize: 20, marginTop: 30, marginLeft: 20, color: '#848484' }}>
            05 Results
          </Text>
          <View style={{justifyContent:'center',margin:5}}>
            <TouchableOpacity style={{ margin:5}}
              onPress={() => this.Screen11()}>
              <View style={{ flexDirection: 'row', marginTop: 20,width:'100%' }}>
                <View style={{ height: 65, width: 75, backgroundColor: '#D8D8D8', borderRadius: 5, }}></View>
                <View style={{ marginLeft: 5, marginTop: 5, }}>
                  <Text style={{ fontSize: 13, }}>Entre La Sombra | life along the</Text>
                  <View style={{ flexDirection: 'row', marginTop: 5, }}>
                    <Text style={{ fontSize: 12, color: '#D8D8D8' ,width:210}}>Sat, 20 jan - 9:00 AM - 5:00 PM {'\n'}Redisson Blu Hotel, Indore</Text>
                       <View>
                            <TouchableOpacity onPress={this.onShow1}>
                                       <View style={{marginTop: 5,marginLeft:5}}>
                                          {this.state.isVisible1 && (
                                         <Image style={{ height: 20, width: 25, }}
                                         source={require('../Images/redHeart.png')} />
                                        )}
                                       {!this.state.isVisible1 && (
                                       <Image style={{ height: 20, width: 25,}}
                                       source={require('../Images/hart2.png')} />
                                      )}
                                     </View>
                            </TouchableOpacity>
                       </View> 
                   {/* <TouchableOpacity style={{marginTop: 5,marginLeft:5}}> 
                    <Image style={{ height: 20, width: 25, }}
                      source={require('../Images/hart2.png')} />
                   </TouchableOpacity>    */}
                  </View>
                </View>
              </View>
            </TouchableOpacity>

           <TouchableOpacity style={{ margin:5}}
              onPress={() => this.Screen11()}>
              <View style={{ flexDirection: 'row', marginTop: 20,width:'100%'  }}>
                <View style={{ height: 65, width: 75, backgroundColor: '#D8D8D8', borderRadius: 5, }}></View>
                <View style={{ marginLeft: 5, marginTop: 5 }}>
                  <Text style={{ fontSize: 13, }}>Health and Wealth Expo</Text>
                  <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 12, color: '#D8D8D8',width:210 }}>Fri, 04 Feb - Sat,05eb {'\n'}Redisson Blu Hotel, Indore</Text>
                    <View>
                    <TouchableOpacity onPress={this.onShow2}>
                               <View style={{marginTop: 5,marginLeft:5}}>
                                  {this.state.isVisible2 && (
                                 <Image style={{ height: 20, width: 25, }}
                                 source={require('../Images/redHeart.png')} />
                                )}
                               {!this.state.isVisible2 && (
                               <Image style={{ height: 20, width: 25,}}
                               source={require('../Images/hart2.png')} />
                              )}
                             </View>
                    </TouchableOpacity>
               </View> 
                  </View>
                </View>
              </View>
            </TouchableOpacity>

          <TouchableOpacity style={{ margin:5}}
              onPress={() => this.Screen11()}>
              <View style={{ flexDirection: 'row', marginTop: 20,width:'100%' }}>
                <View style={{ height: 65, width: 75, backgroundColor: '#D8D8D8', borderRadius: 5, }}></View>
                <View style={{ marginLeft: 5, marginTop: 5 }}>
                  <Text style={{ fontSize: 13, }}>International Students Education</Text>
                  <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 12, color: '#D8D8D8',width:210 }}>Sat, 20 jan - 9:00 AM - 5:00 PM {'\n'}Redisson Blu Hotel, Indore</Text>
                    <View>
                    <TouchableOpacity onPress={this.onShow3}>
                               <View style={{marginTop: 5,marginLeft:5}}>
                                  {this.state.isVisible3 && (
                                 <Image style={{ height: 20, width: 25, }}
                                 source={require('../Images/redHeart.png')} />
                                )}
                               {!this.state.isVisible3 && (
                               <Image style={{ height: 20, width: 25,}}
                               source={require('../Images/hart2.png')} />
                              )}
                             </View>
                    </TouchableOpacity>
               </View> 
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ margin:5}}
              onPress={() => this.Screen11()}>
              <View style={{ flexDirection: 'row', marginTop: 20,width:240 }}>
                <View style={{ height: 65, width: 75, backgroundColor: '#D8D8D8', borderRadius: 5, }}></View>
                <View style={{ marginLeft: 5, marginTop: 5 }}>
                  <Text style={{ fontSize: 13, }}>The Rock concert</Text>
                  <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 12, color: '#D8D8D8',width:210 }}>Sat, 20 jan - 9:00 AM - 5:00 PM {'\n'}Sahaji Hotel, Indore</Text>
                    <View>
                    <TouchableOpacity onPress={this.onShow4}>
                               <View style={{marginTop: 5,marginLeft:5}}>
                                  {this.state.isVisible4 && (
                                 <Image style={{ height: 20, width: 25, }}
                                 source={require('../Images/redHeart.png')} />
                                )}
                               {!this.state.isVisible4 && (
                               <Image style={{ height: 20, width: 25,}}
                               source={require('../Images/hart2.png')} />
                              )}
                             </View>
                    </TouchableOpacity>
               </View>  
                  </View>
                </View>
              </View>
            </TouchableOpacity>

             <TouchableOpacity style={{ margin:5}}
              onPress={() => this.Screen11()}>
              <View style={{ flexDirection: 'row', marginTop: 20,width:240 }}>
                <View style={{ height: 65, width: 75, backgroundColor: '#D8D8D8', borderRadius: 5, }}></View>
                <View style={{ marginLeft: 5, marginTop: 5 }}>
                  <Text style={{ fontSize: 13, }}>Kite Festival</Text>
                  <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 12, color: '#D8D8D8',width:210 }}>Set, 20 jan - 9:00 AM - 5:00 PM {'\n'}Mahalaxmi Nagar, Indore</Text>
                    <View>
                    <TouchableOpacity onPress={this.onShow5}>
                               <View style={{marginTop: 5,marginLeft:5}}>
                                  {this.state.isVisible5 && (
                                 <Image style={{ height: 20, width: 25, }}
                                 source={require('../Images/redHeart.png')} />
                                )}
                               {!this.state.isVisible5 && (
                               <Image style={{ height: 20, width: 25,}}
                               source={require('../Images/hart2.png')} />
                              )}
                             </View>
                    </TouchableOpacity>
               </View> 
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
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
  leftTab: {
    height: 35, backgroundColor: '#F2F2F2', justifyContent: 'center', borderRadius: 15,margin:5
  },
  leftTabChange: {
    backgroundColor: '#F79F81',
  },
});
//marginLeft:20,width:140,height:40,borderRadius:20,borderColor:"#FA8258",borderWidth:1,backgroundColor:'transparent',justifyContent:'center'