import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Image,AppRegistry, TextInput,TouchableOpacity,ImageBackground
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import CheckBox from 'react-native-check-box';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

let data = [{
    value: 'Anytime',
  }, {
    value: 'Indore',
  }, {
    value: 'Anything',
  }];

  var radio_props = [
    {label: 'Relevance', value: 0 },
    {label: '     Data', value: 1 }
  ];

var leftText;
export default class Screen10 extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '',
                  data,
                 leftText : data.name,
                 check:false,
      };  
    
  }
  getInitialState() {
    return {
      value: 0,
    }
  }
 checkbox(){
   this.SetState(check);
 }
  Tickets(){
    this.props.navigation.navigate('Tickets');
    console.log('done');
  };
  render() {
    return (
      <View style={styles.container}>
       <View style={{flexDirection:"row",marginTop:40,width:'100%'}}>
         <Image style={{height:30,width:30,position:'absolute',left:10}} 
         source={require('../Images/cross.png')} />
         <Image style={{height:30,width:30,position:'absolute',right:10}} 
         source={require('../Images/right.png')} />
       </View>

        <Text style={{fontSize:24,marginLeft:5,color:'#1C1C1C',marginLeft:20,marginRight:20,marginTop:60}}>Data
        </Text>
       
        <Dropdown 
        style={{marginLeft:40,marginRight:40,textAlign:'center'}}
            label='Anytime'
            data={data}
        />
      
      <Text style={{fontSize:22,marginLeft:5,color:'#1C1C1C',marginLeft:20,marginRight:20,marginTop:10}}>Location
        </Text>
       
        <Dropdown 
        style={{width:"80%",marginLeft:20,marginRight:20}}
            label='Indore'
            data={data}
        />
      
      <Text style={{fontSize:22,marginLeft:5,color:'#1C1C1C',marginLeft:20,marginRight:20,marginTop:10}}>Category
        </Text>
       
        <Dropdown 
        style={{width:"80%",marginLeft:20,marginRight:20}}
            label='Anything'
            data={data}
        />
      
      <Text style={{fontSize:22,marginLeft:5,color:'#1C1C1C',marginLeft:20,marginRight:20,marginTop:10}}>Price
        </Text>

        <CheckBox
          style={{ fontSize: 10,marginTop:10,marginLeft:10,marginRight:15}}
          onClick={()=>this.onClick(checkbox)}
          isChecked={data.checked}
          leftText={"free stuff only"}
        />
       <View style={{height:1,backgroundColor:'gray',marginLeft:10,marginRight:10,marginTop:10}}></View>

       <Text style={{fontSize:22,marginLeft:5,color:'#1C1C1C',marginLeft:20,marginRight:20,marginTop:10}}>Sort by
        </Text>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
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
