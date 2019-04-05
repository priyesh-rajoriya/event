import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, ListView,FlatList,
  View, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView, backgroundColor,AsyncStorage,BackHandler
} from 'react-native';
import { Container, Header, Content, Button, Footer, FooterTab, Icon, Card, Tab, Tabs, Badge } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';;

const pic = require('../Images/event1.png');
const datas = [
  {
    pic: pic,
    item1: "Event Jini",
    item2: "Redisson Blu Hotel, Indore 452001",
    item3: "18 Feb, Sunday 10 AM-01 PM",
    item4: "More Details",
    item5: "12:15PM",
  },
  {
    pic: pic,
    item1: "Event Jini",
    item2: "Redisson Blu Hotel, Indore 452001",
    item3: "18 Feb, Sunday 10 AM-01 PM",
    item4: "More Details",
    item5: "12:15PM",
  },
  {
    pic: pic,
    item1: "Event Jini",
    item2: "Redisson Blu Hotel, Indore 452001",
    item3: "18 Feb, Sunday 10 AM-01 PM",
    item4: "More Details",
    item5: "12:15PM",
  },
  {
    pic: pic,
    item1: "Event Jini",
    item2: "Redisson Blu Hotel, Indore 452001",
    item3: "18 Feb, Sunday 10 AM-01 PM",
    item4: "More Details",
    item5: "12:15PM",
  },
  {
    pic: pic,
    item1: "Event Jini",
    item2: "Redisson Blu Hotel, Indore 452001",
    item3: "18 Feb, Sunday 10 AM-01 PM",
    item4: "More Details",
    item5: "12:15PM",
  },
  {
    pic: pic,
    item1: "Event Jini",
    item2: "Redisson Blu Hotel, Indore 452001",
    item3: "18 Feb, Sunday 10 AM-01 PM",
    item4: "More Details",
    item5: "12:15PM",
  },
];
var user_id
export default class NotificationTab extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '',
                   user_id: '', };
      this.getNotificationsList();
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
 
  async componentWillMount() {
    try {
      user_id = await AsyncStorage.getItem('id');
    } catch (e) {
      console.log(e);
    }    
  };
  openList(item){
    console.log(item)
    this.props.navigation.navigate(
      'NotificationDetail',
      { title: item.title,
        image_url: item.image_url,
        start_date: item.start_date,
        start_month: item.start_month,
      vanue: item.vanue,
      from_time: item.from_time,
      to_time: item.to_time,
      start_day: item.start_day,
     },
    );
  }
  async  getNotificationsList() {
    this.setState({isLoading:true})
    var data = new FormData();
    data.append('user_id',this.state.user_id);

      const config = {
        method: 'POST',
        headers: {
          },
        body: '',
          }
      console.log(data)
      await fetch('http://ec2-52-207-124-182.compute-1.amazonaws.com:3333/api/v1/getNotificationsList?user_id=1',config).then(res => res.json())
        .then(res => {
        //  AsyncStorage.setItem('fullname', res.data[0].fullname);
          console.log(res);
          // this.props.navigation.navigate("ViewTicket",{data:res.data})
          this.setState({
            data:res.data
          })
       
        }).catch((error) => { 
          this.setState({isLoading:false})
          console.log(error);
        });
};

  NotificationDetail() {
    this.props.navigation.navigate('NotificationDetail');
    console.log('done');
  };

  //------exit app start------//
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}
componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}
handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
}
//------exit app end------//

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    return (
      <View style={styles.container}>

       <FlatList
          data={this.state.data}
          renderItem={({item}) => 
    
          <Card style={{
            flexDirection: 'row', height: 120, backgroundColor: '#fff',borderRadius:5,
            marginTop:10,width:"95%",alignSelf:'center',
          }}>

            <Image style={{ height: '100%', borderRightWidth:20,width: '40%', marginTop: 0 }}
              source={{uri: item.image_url}} />

            <View style={{
              marginLeft: 10,marginRight:10,width:"60%",marginTop:5
            }}>
              <Text style={{color: '#EF7953', fontSize: 16,}}>
                {item.title}</Text>

              <Text style={{ color: '#6E6E6E', fontSize: 13,marginRight:10}}>
              {item.vanue}</Text>  
                <Text style={{ color: '#6E6E6E', fontSize: 13,marginRight:10}}>
              {item.start_date}  {item.start_month}, {item.start_day}, {item.from_time}-{'\n'}{item.to_time}</Text>
                         
              <View style={{
                alignItems: 'center', flexDirection: 'row',marginTop:5
              }}>
              <TouchableOpacity onPress={() => this.openList(item)}>
                <Text style={{ color: '#8CBED5', fontSize: 12, }}>
                  More Details</Text>
              </TouchableOpacity>
                <Text style={{ color: 'gray', fontSize: 10, position: 'absolute', right: 10, }}>
                {item.from_time}</Text>
              </View>
            </View>
          </Card>
            }
              keyExtractor={(item, index) => index}
        />
          <View style={{height:60}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: '#F7F9F9',
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
