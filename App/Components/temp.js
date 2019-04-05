import React, { Component } from 'react';
import { Text, View ,FlatList,TouchableOpacity} from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    var params = this.props.navigation.state.params
    console.log(params.ticket_count)
    var payments = [params.ticket_count];

    console.log(payments)






	// for(let i = 0; i < ticket.length; i++){

	// 	payments.push(
    //         ticket[i].title
    //     ) 
    // }
    
    return (
        
      <View>
        <Text>payments</Text> 

        <FlatList
        data={params.ticket}
        renderItem={({item}) => 
        <TouchableOpacity 
         style={{flexDirection:'row'}}>  
         <View style={{marginLeft:10, marginTop:10, width:250}}>
         <Text style={{fontSize:15,color:'#2E2E2E',justifyContent:'center',marginRight:20}}>{item.title}</Text> 
         <Text style={{fontSize:15,color:'#2E2E2E',justifyContent:'center',marginRight:20}}>---------------</Text>
          
         


         <FlatList
         data={payments}
         renderItem={({item}) => 
         <TouchableOpacity 
          style={{flexDirection:'row'}}>  
          <View style={{marginLeft:10, marginTop:10, width:250}}>
          <Text style={{fontSize:15,color:'#2E2E2E',justifyContent:'center',marginRight:20}}>{item}</Text> 
          <Text style={{fontSize:15,color:'#2E2E2E',justifyContent:'center',marginRight:20}}>*************</Text>
           
          
 
 
          <Text style={{fontSize:15,color:'#2E2E2E',justifyContent:'center',marginRight:20}}>---------------</Text>
           
          </View>
         </TouchableOpacity>
       }
        //  keyExtractor={(item, index) => index}
       />




         <Text style={{fontSize:15,color:'#2E2E2E',justifyContent:'center',marginRight:20}}>---------------</Text>
          
         </View>
        </TouchableOpacity>
      }
        keyExtractor={(item, index) => index}
      />




      
      </View>
    );
  }
}