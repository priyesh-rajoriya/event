import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Image,AppRegistry, TextInput,TouchableOpacity
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
export default class Screen12 extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', data:'',};
  }
  Screen13(){
    this.props.navigation.navigate('Screen13');
    console.log('done');
  };
  Screen11(){
    this.props.navigation.navigate('Screen11');
    console.log('done');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row',marginTop:20,marginLeft:10,}}>
        <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>  
         <Image style={{height:30,width:35,marginLeft:5}} 
         source={require('../Images/back.png')} />
       </TouchableOpacity>  
         <Text style={{fontSize:20,color:'#1C1C1C',marginLeft:70}}>Ticket Details
         </Text>
        </View> 
         <Text style={{fontSize:20,marginLeft:20,marginTop:20,color:'#1C1C1C'}}>International Student Education Fair{'\n'} - Feb 2018
         </Text> 
       <View style={{flexDirection:'row'}}>  
        <Text style={{fontSize:17,marginLeft:20,marginTop:5,}}>by
         </Text>
        <TouchableOpacity> 
         <Text style={{fontSize:17,marginLeft:5,marginTop:5,color:'#81BEF7'}}>Study Metro
         </Text>
        </TouchableOpacity>  
         </View>
        <View> 
         <Text style={{fontSize:14,marginLeft:20,marginTop:20,color:"red"}}>Sunday February 25, 2018 from 9:00 AM to{'\n'}5:00 PM
         </Text>
       </View>
        <View style={{marginRight:20,marginLeft:20,marginTop:25,height:10,}}>
         
           <View style={{flexDirection:'row',height:50,backgroundColor:'#D8D8D8',alignItems:'center',justifyContent:'center'}}> 
             <Text style={{fontSize:14,position:'absolute',left:10}}> Ticket Type</Text>
             <Text style={{fontSize:14,textAlign:"center",marginLeft:35}}> Price</Text>
             <Text style={{fontSize:14,position:'absolute',right:20}}> Qty</Text>
           </View>
           <View style={{flexDirection:'row',height:50,backgroundColor:'#F8F8FF',alignItems:'center',justifyContent:'center'}}> 
            <View style={{position:'absolute',left:5}}>
              <Text style={{fontSize:13,color:'black'}}>IPSUM-2018,indore</Text>
              <TouchableOpacity> 
              <Text style={{fontSize:10,color:'#81BEF7',}}>More info</Text> 
              </TouchableOpacity> 
            </View>
             <Text style={{fontSize:15,marginLeft:40,color:'red'}}> Free</Text>
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
             {/* <TouchableOpacity style={{height:25,width:40,position:'absolute',right:25,backgroundColor:'transparent'}}>
             <Image 
               source={require('../Images/dropdwn.png')} />
              </TouchableOpacity>  */}
             {/* <View style={{height:20,width:40,position:'absolute',right:15,}}> */}
             {/* <Dropdown 
               style={{fontSize:10,textAlign:'center',backgroundColor:'gray'}}
               label='1'
               data={data}
               baseColor='#000'   
               // itemColor='gray'
               //  textColor='gray' 
               /></View>   */}

           
        </View>   
        <TouchableOpacity style={{marginLeft:30,marginRight:30,marginTop:150}} onPress={() => this.Screen13()}>   
          <View style={{height:50,borderRadius:3,justifyContent:'center',alignItems:'center',backgroundColor:'#6AD218'}}>   
            <Text style={{fontSize:20,color:'#fff',}}>Register </Text>
         </View> 
       </TouchableOpacity>      
      </View>
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
