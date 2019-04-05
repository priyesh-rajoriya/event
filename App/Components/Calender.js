// import React, { Component } from "react";
// import {
//   Text,
//   StyleSheet,
//   ScrollView,
//   View,
//   Dimensions,
//   TouchableOpacity,
//   Image,
//   StatusBar,
//   ImageBackground
// } from "react-native";


// import { Calendar, LocaleConfig } from "react-native-calendars";

// var width = Dimensions.get("window").width; //full width
// var height = Dimensions.get("window").height; //full height
// // const backgroundimage = require("../../Images/tut1_bg.png");

// export default class Calender extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.onDayPress = this.onDayPress.bind(this);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <StatusBar backgroundColor="#000" barStyle="light-content" />
//          <View style={{height:50,backgroundColor:'#fff'}}>
//          <TouchableOpacity onPress={() => this.props.navigation.goBack()}
//               style={{ marginLeft: 10, position: 'absolute', marginTop:5 }}>
//               <Image source={require('../Images/back.png')}
//                 style={{ width: 35, height: 35, }} />
//             </TouchableOpacity>
//          </View>
//             <ScrollView
//               style={{
//                 height: window.height,
//                 backgroundColor: "rgba(0,0,0,0.3)"
//               }}
//             >
//               <View
//               style={{
//                 marginTop:42
//               }}>
//                 <Calendar
//                   onDayPress={this.onDayPress}
//                   style={styles.calendar}
//                   theme={{
//                     //calendarBackground: '#ffffff',
//                     textSectionTitleColor: '#ffffff',
//                     selectedDayBackgroundColor: '#bbaa64',
//                     selectedDayTextColor: '#ffffff',
//                     todayTextColor: '#bbaa64',
//                     dayTextColor: '#000',
//                     textDisabledColor: 'grey',
//                     arrowColor: '#ffffff',
//                     monthTextColor: '#ffffff'
//                   }}
//                   //hideExtraDays
//                   markedDates={{
//                     [this.state.selected]: {
//                       selected: true
//                     }
//                   }}
//                 />

//                 <View
//                   style={{
//                     flexDirection: "row",
//                     marginTop: 25,
//                     justifyContent: "center"
//                   }}
//                 >
//                   <Text
//                     style={{
//                       backgroundColor: "transparent",
//                       color: "#BBAA64",
//                       fontSize: 18,
//                       position: "absolute",
//                       marginTop: 60
//                     }}
//                   >
          
//                   </Text>
//                 </View>


//                 <View
//                   style={{
//                     height: 135
//                   }}
//                 />
//               </View>
//             </ScrollView>
       
//       </View>
//     );
//   }
//   onDayPress(day) {
//     this.setState({ selected: day.dateString });
//   }
// }

// LocaleConfig.locales['us'] = {
//   monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
//   dayNamesShort: ['S','M','T','W','T','F','S']
// };

// LocaleConfig.defaultLocale = 'us';

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#3B3A3A",
//     //borderRadius: 8,
//     height: window.height,
//   },
//   coverImage: {
//     width: window.width,
//     height: window.height,
//   },
//   calendar: {
//     marginTop:30,
//     marginTop: 20,
//     //borderTopWidth: 1,
//     paddingTop: 5,
//     height: 350,
//     color: "#fff",
//     backgroundColor: 'transparent',
//   }
// });
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,BackHandler
} from 'react-native';
import {Calendar} from 'react-native-calendars';

export default class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  render() {
    return (
      <ScrollView style={styles.container}>

       <View style={{justifyContent:'center',marginTop:50}}>
       <TouchableOpacity onPress={() => this.props.navigation.goBack()}
       style={{ marginLeft: 10, position: 'absolute', left: 0, }}>
       <Image source={require('../Images/Icons/keyboard-backspace.png')}
         style={{ width: 35, height: 35, tintColor: '#000' }} />
     </TouchableOpacity>
        <Text style={styles.text}>Calendar with selectable date and arrows</Text>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
        />
        </View>

      </ScrollView>
    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});