import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Image,AppRegistry, TextInput,TouchableOpacity, ScrollView, KeyboardAvoidingView
} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import { Dropdown } from 'react-native-material-dropdown';
import {  Header, Content, Card, CardItem, Body,  } from 'native-base';
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
},{
  value: '7',
}];
export default class Screen13 extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '',data:'',};
  }
  Screen15(){
    this.props.navigation.navigate('Screen15');
    console.log('done');
  };
  Screen12(){
    this.props.navigation.navigate('Screen12');
    console.log('done');
  };
  Screen1(){
    this.props.navigation.navigate('Screen12');
    console.log('done');
  };
  render() {
    return (  
       <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
       >
      <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection:'row',marginTop:20,marginLeft:10}}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>  
         <Image style={{height:30,width:35,}} 
         source={require('../Images/back.png')} />
      </TouchableOpacity>  
         <Text style={{fontSize:20,marginLeft:70,color:'#424242',}}>Ticket Details
         </Text>
        </View> 
         <Text style={{fontSize:18,marginLeft:20,marginTop:20,color:'#1C1C1C',}}>International Student Education Fair {'\n'}- Feb 2018
         </Text> 
        <View> 
         <Text style={{fontSize:14,color:'red',marginLeft:20,marginTop:10,}}>Sunday, February 25, 2018 from 9:00 AM to{'\n'}5:00 Pm
         </Text>
       </View>
        <View style={{ width:'90%',marginTop:20,height:60,alignSelf:'center',backgroundColor:'#79EFFF',justifyContent:'center'}}>
          <View style={{flexDirection:'row',marginLeft:5,marginRight:10}}>
            <Text style={{fontSize:21,marginTop:5,marginLeft:5,color:'white'}}>8:00</Text>
            <Text style={{fontSize:14,color:'#848484',marginLeft:10,width:"80%",color:"white"}}>After 8 minutes, the reservation we are holiding Will be released.</Text>
          </View>
        </View>

        <View style={{alignSelf:'center',width:'90%',marginTop:20}}>        
           <View style={{backgroundColor:'#D8D8D8',alignItems:'center',justifyContent:'center'}}> 
            <View style={{flexDirection:'row',width:"90%",height:40,backgroundColor:'#D8D8D8',alignItems:'center',justifyContent:'center'}}> 
              <Text style={{fontSize:16,color:'#1C1C1C',}}> Total : Free -</Text>
              <Text style={{fontSize:14,color:'#848484',}}> 1 item</Text>
              <Text style={{fontSize:14,color:'#5882FA',}}> (hide)</Text>
            </View>           
            <View style={{flexDirection:'row',height:70,marginBottom:2,width:'99%',backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}> 
              <View style={{position:'absolute',left:5}}>
                <Text style={{fontSize:13,color:'#BDBDBD',marginTop:7,}}> IPSUM-2018,indore</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Screen11")}>
                <Text style={{fontSize:12,color:'#81BEF7',marginLeft:2,}}>More info</Text> 
                </TouchableOpacity> 
                <Text style={{fontSize:10,color:'grey',marginLeft:3}}>All fees included in price</Text> 
              </View> 
                <Text style={{fontSize:14,textAlign:'center',marginTop:-20,color:'red',marginLeft:45}}> Free</Text> 
                
                <View style={{height:28,width:45,position:'absolute',right:10,backgroundColor:'#E5E7E9'}}>
                  <Dropdown 
                  style={{fontSize:15,width:0,textAlign:'center',marginTop:-30}}
                  //label='Anytime'
                  value='1'
                  data={data}
                  baseColor='transparent'   
                  itemColor='gray'                                        
                   textColor='gray' 
                />
                 <TouchableOpacity style={{position:'absolute',right:4}}>
                  <Image  style={{height:10,width:20,marginTop:13,}}
               source={require('../Images/if_ic_arrow_drop_down_48px_352021.png')} />
                 </TouchableOpacity>
              </View>
              
            </View>
            </View>
          </View> 
         <View style={{marginTop:30}}>
         <Text style={{fontSize:20,marginLeft:20}}>Your Info</Text>
         <Text style={{fontSize:17,marginLeft:20,marginTop:20,color:'#848484'}}>First Name*
        </Text>
        <View style={{height:40,marginLeft:20,marginTop:5,marginRight:20,borderColor:'gray',borderWidth:1}}>
        <TextInput
          style={{fontSize:18 ,height:40}}
          //placeholder="First Name"
          placeholderTextColor="grey"
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setState({text})}
        />
        </View>
        <Text style={{fontSize:17,marginLeft:20,marginTop:20,color:'#848484'}}>Last Name*
        </Text>
        <View style={{height:40,marginLeft:20,marginTop:5,marginRight:20,borderColor:'gray',borderWidth:1}}>
        <TextInput
          style={{fontSize:18 ,height:40}}
          //placeholder="First Name"
          placeholderTextColor="grey"
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setState({text})}
        />
        </View>
        <Text style={{fontSize:17,marginLeft:20,marginTop:20,color:'#848484'}}>Email*
        </Text>
        <View style={{height:40,marginTop:5,marginLeft:20,marginRight:20,borderColor:'gray',borderWidth:1}}>
        <TextInput
          style={{fontSize:18 ,height:40}}
          //placeholder="First Name"
          placeholderTextColor="grey"
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setState({text})}
        />
        </View>
        {/* <Text style={{fontSize:17,marginLeft:20,marginTop:20,color:'#848484'}}>Landline Number*
        </Text>
        <View style={{height:40,marginTop:5,marginLeft:20,marginRight:20,borderColor:'gray',borderWidth:1}}>
        <TextInput
          style={{fontSize:15 }}
          //placeholder="First Name"
          placeholderTextColor="grey"
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setState({text})}
        />
        </View> */}
        <Text style={{fontSize:17,marginLeft:20,marginTop:20,color:'#848484'}}>Mobile Number*
        </Text>
        <View style={{height:40,marginTop:5,marginLeft:20,marginRight:20,borderColor:'gray',borderWidth:1}}>
        <TextInput
          style={{fontSize:18 ,height:40}}
          //placeholder="First Name"
          placeholderTextColor="grey"
          underlineColorAndroid='transparent'
          keyboardType='numeric'
          maxLength={10}
          onChangeText={(text) => this.setState({text})}
        />
        </View>
        <Text style={{fontSize:20,marginTop:20,}}>    Home Address</Text>
         <Text style={{fontSize:16,color:'#848484',marginLeft:20}}>Country</Text>
         <View style={{marginLeft:20,marginRight:20,height:40,marginTop:10,justifyContent:'center',alignItems:'center',backgroundColor:'#BDBDBD'}}>
           <Text style={{fontSize:17,color:'#2E2E2E'}}>USA</Text>
         </View>
         <Text style={{fontSize:17,marginLeft:20,marginTop:20,color:'#848484'}}>Address*
        </Text>
        <View style={{height:40,marginTop:5,marginLeft:20,marginRight:20,borderColor:'gray',borderWidth:1}}>
        <TextInput
          style={{fontSize:18 ,height:40}}
          //placeholder="First Name"
          placeholderTextColor="grey"
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setState({text})}
        />
        </View>
        <View style={{height:40,marginTop:15,marginLeft:20,marginTop:10,marginRight:20,borderColor:'gray',borderWidth:1}}>
        <TextInput
          style={{fontSize:18 ,height:40}}
          //placeholder="First Name"
          placeholderTextColor="grey"
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setState({text})}
        />
        </View>
        <Text style={{fontSize:17,marginTop:5,marginTop:5,marginLeft:20,marginTop:20,color:'#848484'}}>City*
        </Text>
        <View style={{height:40,marginLeft:20,marginTop:5,marginRight:20,borderColor:'gray',borderWidth:1}}>
        <TextInput
          style={{fontSize:18 ,height:40}}
          //placeholder="First Name"
          placeholderTextColor="grey"
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setState({text})}
        />
        </View>
        <Text style={{fontSize:17,marginTop:5,marginLeft:20,marginTop:20,color:'#848484'}}>State/Province*
        </Text>
        <View style={{height:40,marginTop:5,marginLeft:20,marginRight:20,justifyContent:'center',borderColor:'gray',borderWidth:1}}>
        <TextInput
          style={{fontSize:18 ,marginLeft:10}}
          placeholder="California"
          placeholderTextColor="grey"
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setState({text})}
        />
        </View>
        <Text style={{fontSize:17,marginLeft:20,marginTop:20,color:'#848484'}}>PIN Code*
        </Text>
        <View style={{height:40,marginTop:5,marginLeft:20,marginRight:20,borderColor:'gray',borderWidth:1}}>
        <TextInput
          style={{fontSize:18 ,height:40}}
          //placeholder="First Name"
          placeholderTextColor="grey"
          keyboardType='numeric'
          maxLength={10}
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setState({text})}
        />
        </View>

         </View>
        <View style={{width:"85%",alignSelf:'center',marginTop:10}}>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:11}}>I accept the</Text>
           <TouchableOpacity>
              <Text style={{fontSize:11,color:'#00BFFF'}}>{" "}terms of service </Text>
           </TouchableOpacity>
            <Text style={{fontSize:11}}>and have read the</Text>
           <TouchableOpacity>
              <Text style={{fontSize:11,color:'#00BFFF',marginRight:10}}>{" "}privacy</Text>
           </TouchableOpacity>   
          </View> 
          <View style={{flexDirection:'row'}}> 
            <Text style={{fontSize:11}}>I agree that AppName may </Text>
           <TouchableOpacity> 
            <Text style={{fontSize:11,color:'#00BFFF'}}> share my information </Text>
           </TouchableOpacity> 
          </View> 
            <Text style={{fontSize:13,}}>With then event organizer. </Text>
        </View>          
       <TouchableOpacity onPress={() => this.Screen15()}> 
        <View style={{marginLeft:20,marginRight:20,height:40,marginTop:20,borderRadius:3,justifyContent:'center',alignItems:'center',backgroundColor:'#31B404'}}>   
         <Text style={{fontSize:20,color:'#fff',}}>Register </Text>
         </View> 
       </TouchableOpacity >  
       <View style={{height:10,}}></View>    
      </View>
      </ScrollView> 
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {   
    flex:1,
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
