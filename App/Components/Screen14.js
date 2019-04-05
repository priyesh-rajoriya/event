  import React, { Component } from 'react';
  import {
    Platform,
    StyleSheet,
    Text,Dimensions,
    View,Image, TextInput,TouchableOpacity,ImageBackground, ScrollView,backgroundColor,Alert
  } from 'react-native';
  import { Container, Header, Content,Button,Footer, FooterTab, Icon, Badge } from 'native-base';
  var width = Dimensions.get('window').width; //full width
  var height = Dimensions.get('window').height; //full height
  
  export default class Screen14 extends Component {
    constructor(props) {
      super(props);
      this.state = {text: '',toggleLeft: false,
      toggleLeft1: false,};
    }
    alert(){
      Alert.alert(
        'Alert Title',
        'Aelect an Event or Ongoing Volunteey Opportunity',
        [
          {text: 'Special Event', onPress: () => console.log('Special Event pressed')},
          {text: 'CANCEL', onPress: () => console.log('CANCEL Pressed'), style: 'cancel'},
          {text: 'NEXT', onPress: () => console.log('NEXT Pressed')},
        ],
        { cancelable: false }
      )
    }
    Screen15(){
      this.setState({ toggleLeft1: !this.state.toggleLeft1 })
      this.props.navigation.navigate('Screen15');
      console.log('done');
    };
    Screen22(){
      this.setState({ toggleLeft: !this.state.toggleLeft })
      this.props.navigation.navigate('Screen22');
      console.log('done');
    };
    render() {
      return (
        <View style={styles.container}>
        <ScrollView>
        <ImageBackground style={{height:220,width:window.width}} 
          source={require('../Images/bg2.png')}>
          <View style={{ alignItems:'flex-end'}}> 
          <Image style={{height:30,width:22,marginTop:40,marginRight:10}} 
          source={require('../Images/bot1.png')} />
          </View> 
          <View style={{flexDirection:'row'}}>
          <Image style={{height:90,width:90,marginTop:25,marginLeft:10,marginRight:5}} 
          source={require('../Images/profilepic.png')} />
          <View style={{justifyContent:'center',marginTop:50,marginLeft:10}}>
          <Text style={{fontSize:16,color:'#fff',justifyContent:'center',backgroundColor:'transparent',marginLeft:20,marginRight:20}}>2 </Text>
          <Text style={{fontSize:16,color:'#fff',backgroundColor:'transparent'}}>Tickets </Text>
          </View>
          <View style={{marginLeft:20,marginTop:50,justifyContent:'center',marginLeft:10}}>
          <Text style={{fontSize:14,color:'#fff',backgroundColor:'transparent',justifyContent:'center',marginLeft:20,marginRight:20}}>0 </Text>
          <Text style={{fontSize:14,color:'#fff',backgroundColor:'transparent'}}>Likes </Text>
          </View>
          <View style={{marginLeft:10,marginTop:50,justifyContent:'center',marginLeft:10}}>
          <Text style={{fontSize:14,color:'#fff',backgroundColor:'transparent',justifyContent:'center',marginLeft:20,marginRight:20}}>0 </Text>
          <Text style={{fontSize:14,color:'#fff',backgroundColor:'transparent'}}>Following </Text>
          </View>
          </View>       
        </ImageBackground>  
        
        <TouchableOpacity full transparent bordered rounded onPress={() => this.alert()}> 
          <Text style={{fontSize:25,color:'#F79F81',marginLeft:20,marginTop:10}}>User Name </Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',marginLeft:20,marginRight:20,justifyContent:'center'}}>
          <View style={{marginTop:50,marginLeft:20,height:40}}>
            <TouchableOpacity
              onPress={() => this.Screen22()}
              style={[styles.leftTab, this.state.toggleLeft && styles.leftTabChange]}>
              <Text style={{ color: '#6E6E6E', textAlign: 'center', fontSize: 12,margin:10 }}>VOLUNTEER SIGNUP </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop:50,marginLeft:5,marginRight:20,height:40}}>
            <TouchableOpacity
              onPress={() => this.setState({ toggleLeft1: !this.state.toggleLeft1 })}
              style={[styles.leftTab, this.state.toggleLeft1 && styles.leftTabChange]}>
              <Text style={{ color: '#6E6E6E', textAlign: 'center', fontSize: 12,margin:10 }}>VOLUNTEER DETAILS</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop:10,height:40,width:"40%",alignSelf:'center'}}>
          <TouchableOpacity
              onPress={() => this.Screen15()}
              style={[styles.leftTab, this.state.toggleLeft1 && styles.leftTabChange]}>
              <Text style={{ color: '#6E6E6E', textAlign: 'center', fontSize: 12,margin:10 }}>QR CODE SCANNER</Text>
          </TouchableOpacity>
        </View>
          {/* <View style={{height:1,backgroundColor:'#2E2E2E',marginTop:110}}></View> */}

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
      height:"100%",
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
    leftTab: {
      height: 35, borderRadius: 20, alignItems: 'center',
    borderColor: '#bbaa64', justifyContent: 'center',backgroundColor:'#E6E6E6'
    },
    leftTabChange: {
      backgroundColor: '#F79F81',
    },
  });
