import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, ListView,FlatList,
  View, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView, backgroundColor,AsyncStorage
} from 'react-native';
import { Container, Header, Content, Button, Footer, FooterTab, Icon, Card, Tab, Tabs, Badge } from 'native-base';

import LinearGradient from 'react-native-linear-gradient';
var user_id
export default class BecomeaMemberform extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '',
                   user_id: '', }; 
                   this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
 
  async componentWillMount() {
    try {
      user_id = await AsyncStorage.getItem('id');
    } catch (e) {
      console.log(e);
    }    
  };


NonProfitEventDetails() {
    this.props.navigation.navigate('NonProfitEventDetails');
  };
  render() {
   
    return (
      <View style={styles.container}>
      <LinearGradient start={{ x: 1, y: 1 }} end={{ x: 0, y: 1 }}
      colors={['#F27A50', '#EE6E61']}>
      <Header hasTabs
          style={{ backgroundColor: "transparent", justifyContent: 'center', }}
          androidStatusBarColor="#D35400"
          iosBarStyle="light-content">

          <View style={{ width: "100%", flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>

              <TouchableOpacity onPress={() => this.props.navigation.goBack()}
                  style={{ marginLeft: 10, position: 'absolute', left: 0, }}>
                  <Image source={require('../Images/Icons/keyboard-backspace.png')}
                      style={{ width: 30, height: 35, tintColor: '#fff' }} />
              </TouchableOpacity>
              <Text style={{ fontWeight: 'bold', color: "#FFF", fontSize: 18, position: 'absolute', }}>
                  Become a member</Text>

          </View>
      </Header>
  </LinearGradient>
        <ScrollView>
             <View style={{ marginLeft:10, marginRight:10 }}>
             <View  style={{ flexDirection:"row", width:"100%" }}>
                <TextInput
                  style={{ fontSize: 15 ,  width:"50%"}}
                  placeholder="First Name"
                  keyboardType="email-address"
                  placeholderTextColor="grey"
                  //underlineColorAndroid='transparent'
                />
                 <TextInput
                  style={{ fontSize: 15 , width:"50%" }}
                  placeholder="Last Name"
                  keyboardType="email-address"
                  placeholderTextColor="grey"
                  //underlineColorAndroid='transparent'
                />
              </View>
              <View  style={{ flexDirection:"row", width:"100%" }}>
              <TextInput
                  style={{ fontSize: 15 ,  width:"50%"}}
                  placeholder="Spouse First Name"
                  keyboardType="email-address"
                  placeholderTextColor="grey"
                  // underlineColorAndroid='transparent'
                />      

                <TextInput
                  style={{ fontSize: 15 ,  width:"50%"}}
                  placeholder="Spouse Last Name"
                  keyboardType="email-address"
                  placeholderTextColor="grey"
                  // underlineColorAndroid='transparent'
                />      
              </View>
                 <TextInput
                  style={{ fontSize: 15 , }}
                  placeholder="Address"
                  keyboardType="email-address"
                  placeholderTextColor="grey"
                  // underlineColorAndroid='transparent'
                 
               
                />      
                <View  style={{ flexDirection:"row", width:"100%" }}>
                  <TextInput
                      style={{ fontSize: 15 ,  width:"50%"}}
                    placeholder="City"
                    keyboardType="email-address"
                    placeholderTextColor="grey"
                    // underlineColorAndroid='transparent'
                  
                
                  />      

                 <TextInput
                 style={{ fontSize: 15 ,  width:"50%"}}
                  placeholder="State"
                  keyboardType="email-address"
                  placeholderTextColor="grey"
                  // underlineColorAndroid='transparent'
                 
               
                />      
                </View>

                <View  style={{ flexDirection:"row", width:"100%" }}>
                <TextInput
                    style={{ fontSize: 15 ,  width:"50%"}}
                  placeholder="Zip"
                  keyboardType="email-address"
                  placeholderTextColor="grey"
                  // underlineColorAndroid='transparent'
                 
               
                  keyboardType="numeric" 
                />      

                 <TextInput
                  style={{ fontSize: 15 ,  width:"50%" }}
                  placeholder="Home Tel"
                  keyboardType="email-address"
                  placeholderTextColor="grey"
                  // underlineColorAndroid='transparent'
                 
               
                />      
      </View>
      <View  style={{ flexDirection:"row", width:"100%" }}>
      <TextInput
          style={{ fontSize: 15 ,  width:"50%"}}
                  placeholder="Cell/Work"
                  keyboardType="email-address"
                  placeholderTextColor="grey"
                  // underlineColorAndroid='transparent'
                 
               
                />      

                <TextInput
                  style={{ fontSize: 15,  width:"50%"}}
                  placeholder="Spouse Tel"
                  keyboardType="email-address"
                  placeholderTextColor="grey"
                  // underlineColorAndroid='transparent'
                 
               
                /> 
                </View>
        <View>        
        <Text style={{fontSize:16,alignItems:'center',color:'#FF0000', marginTop:5}}>MEMBER INFO
        </Text>
       </View> 
                 <TextInput
                  style={{ fontSize: 15 , }}
                  placeholder="Email"
                  keyboardType="email-address"
                  placeholderTextColor="grey"
                  // underlineColorAndroid='transparent'
                 
               
                /> 

                <TextInput
                  style={{ fontSize: 15 , }}
                  placeholder="Alumni/College"
                  keyboardType="email-address"
                  placeholderTextColor="grey"
                  // underlineColorAndroid='transparent'
                 
               
                /> 

                <TextInput
                  style={{ fontSize: 15 ,  }}
                  placeholder="Profession"
                  keyboardType="email-address"
                  placeholderTextColor="grey"
                  // underlineColorAndroid='transparent'
                 
               
                /> 

                <TextInput
                  style={{ fontSize: 15 , }}
                  placeholder="Professional Speciality"
                  keyboardType="email-address"
                  placeholderTextColor="grey"
                  // underlineColorAndroid='transparent'
                 
               
                /> 

                <TextInput
                  style={{ fontSize: 15 , }}
                  placeholder="Home Place & Distirct in India"
                  keyboardType="email-address"
                  placeholderTextColor="grey"
                  // underlineColorAndroid='transparent'
                 
               
                /> 
                 <TextInput
                  style={{ fontSize: 15 , }}
                  placeholder="Interests"
                  keyboardType="email-address"
                  placeholderTextColor="grey"
                  // underlineColorAndroid='transparent'                             
                /> 
                
<View style={{flexDirection:'row',justifyContent:'center',marginBottom:20,marginTop:10,}}>
                <Button onPress={() => this.props.navigation.goBack()}
                style={{height:35,width:100,backgroundColor:'#FF0000',justifyContent:'center',borderRadius:5,}}> 
                  <Text style={{color:'#000',fontSize:15}}>Submit
                  </Text>
                </Button>  
                <Button onPress={() => this.props.navigation.goBack()} 
                style={{height:35,width:100,backgroundColor:'#FF0000',justifyContent:'center', marginLeft:5,borderRadius:5}}> 
                  <Text style={{color:'#000',fontSize:15}}>Cancel
                  </Text>
                </Button>
                </View>
                </View>
       </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  linearGradient: {

    height: 70,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,


  },
});
