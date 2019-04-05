import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView, AsyncStorage,
  backgroundColor
} from 'react-native';
import CheckBox1 from 'react-native-check-box';
import {
  Container,
  Header,
  Content,
  Button,
  Footer,
  FooterTab,
  Icon,
  Badge,
  CheckBox
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

var minus = "-";
var plus = "+";
var temparray = [];
export default class VolunteerFormDatenTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      temparray: [],
      toggleLeft: false,
      toggleLeft1: false,
      toggleLeft2: false,
      toggleLeft3: false,
      toggleLeft4: false,
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,

      checked7: false,
      checked8: false,
      checked9: false,
      checked10: false,
      checked11: false,
      checked12: false,

      checked13: false,
      checked14: false,
      checked15: false,
      checked16: false,
      checked17: false,
      checked18: false,

      checked19: false,
      checked20: false,
      checked21: false,

      checked22: false,
      checkbox1: '',
      checkedz: false,
      afterAll: false,

      sunday: false,
      monday: false,
      tuesday: false,
      wednesday: false,
      thrusday: false,
      friday: false,
      saturday: false,
      sundaySign: plus,
      mondaySign: plus,
      tuesdaySign: plus,
      wednesdaySign: plus,
      thrusdaySign: plus,
      fridaySign: plus,
      saturdaySign: plus,
      sunday_morning: false,
      sunday_afternoon: false,
      sunday_evening: false,
      monday_morning: false,
      monday_afternoon: false,
      monday_evening: false,
      tuesday_morning: false,
      tuesday_afternoon: false,
      tuesday_evening: false,
      wednesday_morning: false,
      wednesday_afternoon: false,
      wednesday_evening: false,
      thursday_morning: false,
      thursday_afternoon: false,
      thursday_evening: false,
      friday_morning: false,
      friday_afternoon: false,
      friday_evening: false,
      saturday_morning: false,
      saturday_afternoon: false,
      saturday_evening: false,

      sundayPic1: false, sundayPic2: false, sundayPic3: false,
      mondayPic1: false, mondayPic2: false, mondayPic3: false,
      tuesdayPic1: false, tuesdayPic2: false, tuesdayPic3: false,
      wednesdayPic1: false, wednesdayPic2: false, wednesdayPic3: false,
      thursdayPic1: false, thursdayPic2: false, thursdayPic3: false,
      fridayPic1: false, fridayPic2: false, fridayPic3: false,
      saturdayPic1: false, saturdayPic2: false, saturdayPic3: false,

      selectAll: false,

    };
  }
  // toggleCheckbox1() { 	this.setState({ 		checkbox1: !this.state.checkbox1, 	});
  // }
  sunday_morning() {
    console.log("sunday_morning");
    if (this.state.checked1 == false) {
      this.setState({ checked1: true });
    } else {
      this.setState({ checked1: false });
    }

  }
  sunday_afternoon() {
    if (this.state.checked2 == false) {
      this.setState({ checked2: true });
    } else {
      this.setState({ checked2: false });
    }

  }
  sunday_evening() {
    if (this.state.checked3 == false) {
      this.setState({ checked3: true });
    } else {
      this.setState({ checked3: false });
    }

  }

  monday_morning() {
    if (this.state.checked4 == false) {
      this.setState({ checked4: true });
    } else {
      this.setState({ checked4: false });
    }

  }
  monday_afternoon() {
    if (this.state.checked5 == false) {
      this.setState({ checked5: true });
    } else {
      this.setState({ checked5: false });
    }

  }
  monday_evening() {
    if (this.state.checked6 == false) {
      this.setState({ checked6: true });
    } else {
      this.setState({ checked6: false });
    }

  }

  tuesday_morning() {
    if (this.state.checked7 == false) {
      this.setState({ checked7: true });
    } else {
      this.setState({ checked7: false });
    }

  }
  tuesday_afternoon() {
    if (this.state.checked8 == false) {
      this.setState({ checked8: true });
    } else {
      this.setState({ checked8: false });
    }

  }
  tuesday_evening() {
    if (this.state.checked9 == false) {
      this.setState({ checked9: true });
    } else {
      this.setState({ checked9: false });
    }

  }

  wednesday_morning() {
    if (this.state.checked10 == false) {
      this.setState({ checked10: true });
    } else {
      this.setState({ checked10: false });
    }

  }
  wednesday_afternoon() {
    if (this.state.checked11 == false) {
      this.setState({ checked11: true });
    } else {
      this.setState({ checked11: false });
    }

  }
  wednesday_evening() {
    if (this.state.checked12 == false) {
      this.setState({ checked12: true });
    } else {
      this.setState({ checked12: false });
    }

  }

  thursday_morning() {
    if (this.state.checked13 == false) {
      this.setState({ checked13: true });
    } else {
      this.setState({ checked13: false });
    }

  }
  thursday_afternoon() {
    if (this.state.checked14 == false) {
      this.setState({ checked14: true });
    } else {
      this.setState({ checked14: false });
    }

  }
  thursday_evening() {
    if (this.state.checked15 == false) {
      this.setState({ checked15: true });
    } else {
      this.setState({ checked15: false });
    }

  }

  friday_morning() {
    if (this.state.checked16 == false) {
      this.setState({ checked16: true });
    } else {
      this.setState({ checked16: false });
    }

  }
  friday_afternoon() {
    if (this.state.checked17 == false) {
      this.setState({ checked17: true });
    } else {
      this.setState({ checked17: false });
    }

  }
  friday_evening() {
    if (this.state.checked18 == false) {
      this.setState({ checked18: true });
    } else {
      this.setState({ checked18: false });
    }

  }

  saturday_morning() {
    if (this.state.checked19 == false) {
      this.setState({ checked19: true });
    } else {
      this.setState({ checked19: false });
    }

  }
  saturday_afternoon() {
    if (this.state.checked20 == false) {
      this.setState({ checked20: true });
    } else {
      this.setState({ checked20: false });
    }

  }
  saturday_evening() {
    if (this.state.checked21 == false) {
      this.setState({ checked21: true });
    } else {
      this.setState({ checked21: false });
    }

  }

  select() {
    if (this.state.toggleLeft == false) {
      this.setState({ toggleLeft: true });
      this.setState({ toggleLeft1: false })
      this.setState({ toggleLeft2: false })
      this.setState({ toggleLeft3: false })
      this.setState({ toggleLeft4: false })
    } else {
      this.setState({ toggleLeft: false });
      this.setState({ toggleLeft1: false })
      this.setState({ toggleLeft2: false })
      this.setState({ toggleLeft3: false })
      this.setState({ toggleLeft4: false })
    }
  };
  select1() {
    if (this.state.toggleLeft1 == false) {
      this.setState({ toggleLeft: false });
      this.setState({ toggleLeft1: true })
      this.setState({ toggleLeft2: false })
      this.setState({ toggleLeft3: false })
      this.setState({ toggleLeft4: false })
    } else {
      this.setState({ toggleLeft: false });
      this.setState({ toggleLeft1: false })
      this.setState({ toggleLeft2: false })
      this.setState({ toggleLeft3: false })
      this.setState({ toggleLeft4: false })
    }
  }
  select2() {
    if (this.state.toggleLeft2 == false) {
      this.setState({ toggleLeft: false });
      this.setState({ toggleLeft1: false })
      this.setState({ toggleLeft2: true })
      this.setState({ toggleLeft3: false })
      this.setState({ toggleLeft4: false })
    } else {
      this.setState({ toggleLeft: false });
      this.setState({ toggleLeft1: false })
      this.setState({ toggleLeft2: false })
      this.setState({ toggleLeft3: false })
      this.setState({ toggleLeft4: false })
    }
  }
  select3() {
    if (this.state.toggleLeft3 == false) {
      this.setState({ toggleLeft: false });
      this.setState({ toggleLeft1: false })
      this.setState({ toggleLeft2: false })
      this.setState({ toggleLeft3: true })
      this.setState({ toggleLeft4: false })
    } else {
      this.setState({ toggleLeft: false });
      this.setState({ toggleLeft1: false })
      this.setState({ toggleLeft2: false })
      this.setState({ toggleLeft3: false })
      this.setState({ toggleLeft4: false })
    }
  }
  select4() {
    if (this.state.toggleLeft1 == false) {
      this.setState({ toggleLeft: false });
      this.setState({ toggleLeft1: false })
      this.setState({ toggleLeft2: false })
      this.setState({ toggleLeft3: false })
      this.setState({ toggleLeft4: true })
    } else {
      this.setState({ toggleLeft: false });
      this.setState({ toggleLeft1: false })
      this.setState({ toggleLeft2: false })
      this.setState({ toggleLeft3: false })
      this.setState({ toggleLeft4: false })
    }
  }
  afterAll() {
    if (this.state.checkedz == true) {
      this.setState({ checked1: true, });
      this.setState({ checked2: true, });
      this.setState({ checked3: true, });
      this.setState({ checked4: true, });
      this.setState({ checked5: true, });
      this.setState({ checked6: true, });
      this.setState({ checked7: true, });
      this.setState({ checked8: true, });
      this.setState({ checked9: true, });
      this.setState({ checked10: true, });
      this.setState({ checked11: true, });
      this.setState({ checked12: true, });
      this.setState({ checked13: true, });
      this.setState({ checked14: true, });
      this.setState({ checked15: true, });
      this.setState({ checked16: true, });
      this.setState({ checked17: true, });
      this.setState({ checked18: true, });
      this.setState({ checked19: true, });
      this.setState({ checked20: true, });
      this.setState({ checked21: true, });
      this.setState({ checkedz: true, });
      //this.setState({checked: !this.state.checked})
    } else {
      if (this.state.checkedz == false) {
        this.setState({ checked1: false, });
        this.setState({ checked2: false, });
        this.setState({ checked3: false, });
        this.setState({ checked4: false, });
        this.setState({ checked5: false, });
        this.setState({ checked6: false, });
        this.setState({ checked7: false, });
        this.setState({ checked8: false, });
        this.setState({ checked9: false, });
        this.setState({ checked10: false, });
        this.setState({ checked11: false, });
        this.setState({ checked12: false, });
        this.setState({ checked13: false, });
        this.setState({ checked14: false, });
        this.setState({ checked15: false, });
        this.setState({ checked16: false, });
        this.setState({ checked17: false, });
        this.setState({ checked18: false, });
        this.setState({ checked19: false, });
        this.setState({ checked20: false, });
        this.setState({ checked21: false, });
        this.setState({ checkedz: false, });

        //this.setState({checked: !this.state.checked})
      }
    }
  }
  VolunteerFormNextStep() {
    this
      .props
      .navigation
      .navigate('VolunteerFormNextStep');
    console.log('done');
  };
  Screen22() {
    this
      .props
      .navigation
      .navigate('Screen14');
    console.log('done');
  };

  days() {

  }
  async moring1(value) {
    console.log(value);
    console.log("moring1")
    var tempvalue
    if (value == "1") {
      tempvalue = "Monday"
    }
    if (value == "2") {
      tempvalue = "Afternoon"
    }
    if (value == "3") {
      tempvalue = "Evening"
    }
    temparray.push(tempvalue)
    this.setState({
      checked1: !this.state.checked1, temparray: temparray
    })
    this.setState({
      checked2: !this.state.checked2,
    })
    this.setState({
      checked3: !this.state.checked3,
    })
    console.log(temparray, 'temp')
    AsyncStorage.setItem('daysArray', JSON.stringify(temparray))
    AsyncStorage.setItem('daysArray', JSON.stringify(monday_morning))
    AsyncStorage.setItem('daysArray', JSON.stringify(monday_afternoon))
    AsyncStorage.setItem('daysArray', JSON.stringify(monday_evening))
    AsyncStorage.setItem('daysArray', JSON.stringify(tuesday_morning))
    AsyncStorage.setItem('daysArray', JSON.stringify(tuesday_afternoon))
    AsyncStorage.setItem('daysArray', JSON.stringify(tuesday_evening))
    AsyncStorage.setItem('daysArray', JSON.stringify(wednesday_morning))
    AsyncStorage.setItem('daysArray', JSON.stringify(wednesday_afternoon))
    AsyncStorage.setItem('daysArray', JSON.stringify(wednesday_evening))
    AsyncStorage.setItem('daysArray', JSON.stringify(thursday_morning))
    AsyncStorage.setItem('daysArray', JSON.stringify(thursday_afternoon))
    AsyncStorage.setItem('daysArray', JSON.stringify(thursday_evening))
    AsyncStorage.setItem('daysArray', JSON.stringify(friday_morning))
    AsyncStorage.setItem('daysArray', JSON.stringify(friday_afternoon))
    AsyncStorage.setItem('daysArray', JSON.stringify(friday_evening))
    AsyncStorage.setItem('daysArray', JSON.stringify(saturday_morning))
    AsyncStorage.setItem('daysArray', JSON.stringify(saturday_afternoon))
    AsyncStorage.setItem('daysArray', JSON.stringify(saturday_evening))
    AsyncStorage.setItem('daysArray', JSON.stringify(select))
    AsyncStorage.setItem('daysArray', JSON.stringify(select1))
    AsyncStorage.setItem('daysArray', JSON.stringify(select2))
    AsyncStorage.setItem('daysArray', JSON.stringify(select3))
    AsyncStorage.setItem('daysArray', JSON.stringify(select4))

    //  var days = await AsyncStorage.getItem('daysArray');
  }

  onPressSelectAll() {
    if (this.state.selectAll == false) {
      this.setState({
        selectAll: true,
        sundayPic1: true,
        sundayPic2: true,
        sundayPic3: true,
        mondayPic1: true,
        mondayPic2: true,
        mondayPic3: true,
        tuesdayPic1: true,
        tuesdayPic2: true,
        tuesdayPic3: true,
        wednesdayPic1: true,
        wednesdayPic2: true,
        wednesdayPic3: true,
        thursdayPic1: true,
        thursdayPic2: true,
        thursdayPic3: true,
        fridayPic1: true,
        fridayPic2: true,
        fridayPic3: true,
        saturdayPic1: true,
        saturdayPic2: true,
        saturdayPic3: true,
      })
    } else if (this.state.selectAll == true) {
      this.setState({
        selectAll: false,
        sundayPic1: false,
        sundayPic2: false,
        sundayPic3: false,
        mondayPic1: false,
        mondayPic2: false,
        mondayPic3: false,
        tuesdayPic1: false,
        tuesdayPic2: false,
        tuesdayPic3: false,
        wednesdayPic1: false,
        wednesdayPic2: false,
        wednesdayPic3: false,
        thursdayPic1: false,
        thursdayPic2: false,
        thursdayPic3: false,
        fridayPic1: false,
        fridayPic2: false,
        fridayPic3: false,
        saturdayPic1: false,
        saturdayPic2: false,
        saturdayPic3: false,
      })
    }
  }

  onPressSundayPic1() {
    if (this.state.sundayPic1 == false) {
      this.setState({ sundayPic1: true })
    } else if (this.state.sundayPic1 == true) {
      this.setState({ sundayPic1: false })
    }
  }
  onPressSundayPic2() {
    if (this.state.sundayPic2 == false) {
      this.setState({ sundayPic2: true })
    } else if (this.state.sundayPic2 == true) {
      this.setState({ sundayPic2: false })
    }

  }
  onPressSundayPic3() {
    if (this.state.sundayPic3 == false) {
      this.setState({ sundayPic3: true })
    } else if (this.state.sundayPic3 == true) {
      this.setState({ sundayPic3: false })
    }

  }

  onPressMondayPic1() {
    if (this.state.mondayPic1 == false) {
      this.setState({ mondayPic1: true })
    } else if (this.state.mondayPic1 == true) {
      this.setState({ mondayPic1: false })
    }

  }
  onPressMondayPic2() {
    if (this.state.mondayPic2 == false) {
      this.setState({ mondayPic2: true })
    } else if (this.state.mondayPic2 == true) {
      this.setState({ mondayPic2: false })
    }

  }
  onPressMondayPic3() {
    if (this.state.mondayPic3 == false) {
      this.setState({ mondayPic3: true })
    } else if (this.state.mondayPic3 == true) {
      this.setState({ mondayPic3: false })
    }

  }
  onPressTuesdayPic1() {
    if (this.state.tuesdayPic1 == false) {
      this.setState({ tuesdayPic1: true })
    } else if (this.state.tuesdayPic1 == true) {
      this.setState({ tuesdayPic1: false })
    }
  }
  onPressTuesdayPic2() {
    if (this.state.tuesdayPic2 == false) {
      this.setState({ tuesdayPic2: true })
    } else if (this.state.tuesdayPic2 == true) {
      this.setState({ tuesdayPic2: false })
    }
  }
  onPressTuesdayPic3() {
    if (this.state.tuesdayPic3 == false) {
      this.setState({ tuesdayPic3: true })
    } else if (this.state.tuesdayPic3 == true) {
      this.setState({ tuesdayPic3: false })
    }
  }
  onPressWednesdayPic1() {
    if (this.state.wednesdayPic1 == false) {
      this.setState({ wednesdayPic1: true })
    } else if (this.state.wednesdayPic1 == true) {
      this.setState({ wednesdayPic1: false })
    }
  }
  onPressWednesdayPic2() {
    if (this.state.wednesdayPic2 == false) {
      this.setState({ wednesdayPic2: true })
    } else if (this.state.wednesdayPic2 == true) {
      this.setState({ wednesdayPic2: false })
    }
  }
  onPressWednesdayPic3() {
    if (this.state.wednesdayPic3 == false) {
      this.setState({ wednesdayPic3: true })
    } else if (this.state.wednesdayPic3 == true) {
      this.setState({ wednesdayPic3: false })
    }
  }
  onPressThursdayPic1() {
    if (this.state.thursdayPic1 == false) {
      this.setState({ thursdayPic1: true })
    } else if (this.state.thursdayPic1 == true) {
      this.setState({ thursdayPic1: false })
    }
  }
  onPressThursdayPic2() {
    if (this.state.thursdayPic2 == false) {
      this.setState({ thursdayPic2: true })
    } else if (this.state.thursdayPic2 == true) {
      this.setState({ thursdayPic2: false })
    }
  }
  onPressThursdayPic3() {
    if (this.state.thursdayPic3 == false) {
      this.setState({ thursdayPic3: true })
    } else if (this.state.thursdayPic3 == true) {
      this.setState({ thursdayPic3: false })
    }
  }
  onPressFridayPic1() {
    if (this.state.fridayPic1 == false) {
      this.setState({ fridayPic1: true })
    } else if (this.state.fridayPic1 == true) {
      this.setState({ fridayPic1: false })
    }
  }
  onPressFridayPic2() {
    if (this.state.fridayPic2 == false) {
      this.setState({ fridayPic2: true })
    } else if (this.state.fridayPic2 == true) {
      this.setState({ fridayPic2: false })
    }
  }
  onPressFridayPic3() {
    if (this.state.fridayPic3 == false) {
      this.setState({ fridayPic3: true })
    } else if (this.state.fridayPic3 == true) {
      this.setState({ fridayPic3: false })
    }
  }
  onPressSaturdayPic1() {
    if (this.state.saturdayPic1 == false) {
      this.setState({ saturdayPic1: true })
    } else if (this.state.saturdayPic1 == true) {
      this.setState({ saturdayPic1: false })
    }
  }
  onPressSaturdayPic2() {
    if (this.state.saturdayPic2 == false) {
      this.setState({ saturdayPic2: true })
    } else if (this.state.saturdayPic2 == true) {
      this.setState({ saturdayPic2: false })
    }
  }
  onPressSaturdayPic3() {
    if (this.state.saturdayPic3 == false) {
      this.setState({ saturdayPic3: true })
    } else if (this.state.saturdayPic3 == true) {
      this.setState({ saturdayPic3: false })
    }
  }
  render() {
    const sundayPic1 = this.state.sundayPic1 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const sundayPic2 = this.state.sundayPic2 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const sundayPic3 = this.state.sundayPic3 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const mondayPic1 = this.state.mondayPic1 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const mondayPic2 = this.state.mondayPic2 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const mondayPic3 = this.state.mondayPic3 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const tuesdayPic1 = this.state.tuesdayPic1 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const tuesdayPic2 = this.state.tuesdayPic2 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const tuesdayPic3 = this.state.tuesdayPic3 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const wednesdayPic1 = this.state.wednesdayPic1 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const wednesdayPic2 = this.state.wednesdayPic2 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const wednesdayPic3 = this.state.wednesdayPic3 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const thursdayPic1 = this.state.thursdayPic1 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const thursdayPic2 = this.state.thursdayPic2 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const thursdayPic3 = this.state.thursdayPic3 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const fridayPic1 = this.state.fridayPic1 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const fridayPic2 = this.state.fridayPic2 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const fridayPic3 = this.state.fridayPic3 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const saturdayPic1 = this.state.saturdayPic1 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const saturdayPic2 = this.state.saturdayPic2 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const saturdayPic3 = this.state.saturdayPic3 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const selectAll = this.state.selectAll == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    return (
      <View style={styles.container}>
       
        <ImageBackground
          style={{
            height: 100,
            width: window.width
          }}
          source={require('../Images/VolunteerBg.png')}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                marginTop: 40,
                position: 'absolute',
                left: 10
              }}
              onPress={() => this.props.navigation.goBack()}>
              <Image
                style={{
                  height: 30,
                  width: 35
                }}
                source={require('../Images/wright.png')} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 23,
                color: '#fff',
                textAlign: 'center',
                backgroundColor: 'transparent',
                marginTop: 40,
                alignSelf: 'center'
              }}>Volunteer Form</Text>
          </View>
        </ImageBackground>
        <ScrollView style={{
          height: '100%'
        }}>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              textAlign: 'center',
              color: '#EB984E'
            }}>
            Date and Time Availability</Text>
          <TouchableOpacity
            onPress={() => this.setState({
              sunday: !this.state.sunday,
              sign: (this.state.sign == "+" && minus) || (this.state.sign == "-" && plus)
            })}>
            <View
              style={{
                height: 45,
                marginTop: 20,
                marginLeft: 20,
                marginRight: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: '#E5E7E9'
              }}>
              <Text
                style={{
                  fontSize: 19,
                  marginLeft: 10,
                  position: 'absolute',
                  alignSelf: 'center',
                  left: 10
                }}>Sunday
              </Text>
              <Text
                style={{
                  fontSize: 19,
                  marginLeft: 10,
                  position: 'absolute',
                  alignSelf: 'center',
                  right: 10
                }}>{this.state.sundaySign}</Text>
            </View>
          </TouchableOpacity>
          {this.state.sunday &&
            <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{
              flexDirection: 'row'
            }}
              onPress={() => this.onPressSundayPic1()}>
              <Image source={sundayPic1} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
              <Text
                style={{
                  margin: 7,
                }}>
                Morning</Text>
            </TouchableOpacity>

              <TouchableOpacity style={{
                flexDirection: 'row'
              }}
                onPress={() => this.onPressSundayPic2()}>
                <Image source={sundayPic2} style={{ width: 25, height: 25, marginTop: 4, tintColor: '#EE7855' }} />
                <Text
                  style={{
                    margin: 7,
                  }}>
                  Afternoon</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{
                flexDirection: 'row'
              }}
                onPress={() => this.onPressSundayPic3()}>
                <Image source={sundayPic3} style={{ width: 25, height: 25, marginTop: 4, tintColor: '#EE7855' }} />
                <Text
                  style={{
                    margin: 7,
                  }}>
                  Evening</Text>
              </TouchableOpacity>
            </View>
          }

          <TouchableOpacity
            onPress={() => this.setState({
              monday: !this.state.monday,
              sign: (this.state.sign == "+" && minus) || (this.state.sign == "-" && plus)
            })}>
            <View
              style={{
                height: 45,
                marginTop: 2,
                marginLeft: 20,
                marginRight: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: '#E5E7E9'
              }}>
              <Text
                style={{
                  fontSize: 19,
                  marginLeft: 10,
                  position: 'absolute',
                  alignSelf: 'center',
                  left: 10
                }}>Monday
              </Text>
              <Text
                style={{
                  fontSize: 19,
                  marginLeft: 10,
                  position: 'absolute',
                  alignSelf: 'center',
                  right: 10
                }}>{this.state.mondaySign}</Text>
            </View>
          </TouchableOpacity>
          {this.state.monday &&
            <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{
              flexDirection: 'row'
            }}
              onPress={() => this.onPressMondayPic1()}>
              <Image source={mondayPic1} style={{ width: 25, height: 25,marginLeft:30,  marginTop: 4, tintColor: '#EE7855' }} />
              <Text
                style={{
                  margin: 7,
                }}>
                Morning</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              flexDirection: 'row'
            }}
              onPress={() => this.onPressMondayPic2()}>
              <Image source={mondayPic2} style={{ width: 25, height: 25,  marginTop: 4, tintColor: '#EE7855' }} />
              <Text
                style={{
                  margin: 7,
                }}>
                Afternoon</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              flexDirection: 'row'
            }}
              onPress={() => this.onPressMondayPic3()}>
              <Image source={mondayPic3} style={{ width: 25, height: 25, marginTop: 4, tintColor: '#EE7855' }} />
              <Text
                style={{
                  margin: 7,
                }}>
                Morning</Text>
            </TouchableOpacity>

            </View>
          }

          <TouchableOpacity
            onPress={() => this.setState({
              tuesday: !this.state.tuesday,
              sign: (this.state.sign == "+" && minus) || (this.state.sign == "-" && plus)
            })}>
            <View
              style={{
                height: 45,
                marginTop: 2,
                marginLeft: 20,
                marginRight: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: '#E5E7E9'
              }}>
              <Text
                style={{
                  fontSize: 19,
                  marginLeft: 10,
                  position: 'absolute',
                  alignSelf: 'center',
                  left: 10
                }}>Tuesday
              </Text>
              <Text
                style={{
                  fontSize: 19,
                  marginLeft: 10,
                  position: 'absolute',
                  alignSelf: 'center',
                  right: 10
                }}>{this.state.tuesdaySign}</Text>
            </View>
          </TouchableOpacity>
          {this.state.tuesday &&
            <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{
              flexDirection: 'row'
            }}
              onPress={() => this.onPressTuesdayPic1()}>
              <Image source={tuesdayPic1} style={{ width: 25, height: 25,marginLeft:30,  marginTop: 4, tintColor: '#EE7855' }} />
              <Text
                style={{
                  margin: 7,
                }}>
                Morning</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              flexDirection: 'row'
            }}
              onPress={() => this.onPressTuesdayPic2()}>
              <Image source={tuesdayPic2} style={{ width: 25, height: 25,marginTop: 4, tintColor: '#EE7855' }} />
              <Text
                style={{
                  margin: 7,
                }}>
                Afternoon</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              flexDirection: 'row'
            }}
              onPress={() => this.onPressTuesdayPic3()}>
              <Image source={tuesdayPic3} style={{ width: 25, height: 25,marginTop: 4, tintColor: '#EE7855' }} />
              <Text
                style={{
                  margin: 7,
                }}>
                Evening</Text>
            </TouchableOpacity>
            </View>
          }
          <TouchableOpacity
            onPress={() => this.setState({
              wednesday: !this.state.wednesday,
              sign: (this.state.sign == "+" && minus) || (this.state.sign == "-" && plus)
            })}>
            <View
              style={{
                height: 45,
                marginTop: 2,
                marginLeft: 20,
                marginRight: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: '#E5E7E9'
              }}>
              <Text
                style={{
                  fontSize: 19,
                  marginLeft: 10,
                  position: 'absolute',
                  alignSelf: 'center',
                  left: 10
                }}>Wednesday
              </Text>
              <Text
                style={{
                  fontSize: 19,
                  marginLeft: 10,
                  position: 'absolute',
                  alignSelf: 'center',
                  right: 10
                }}>{this.state.wednesdaySign}</Text>
            </View>
          </TouchableOpacity>
          {this.state.wednesday &&
            <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{
              flexDirection: 'row'
            }}
              onPress={() => this.onPressWednesdayPic1()}>
              <Image source={wednesdayPic1} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
              <Text
                style={{
                  margin: 7,
                }}>
                Morning</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              flexDirection: 'row'
            }}
              onPress={() => this.onPressWednesdayPic2()}>
              <Image source={wednesdayPic2} style={{ width: 25, height: 25, marginTop: 4, tintColor: '#EE7855' }} />
              <Text
                style={{
                  margin: 7,
                }}>
                Afternoon</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              flexDirection: 'row'
            }}
              onPress={() => this.onPressWednesdayPic3()}>
              <Image source={wednesdayPic3} style={{ width: 25, height: 25,marginTop: 4, tintColor: '#EE7855' }} />
              <Text
                style={{
                  margin: 7,
                }}>
                Evening</Text>
            </TouchableOpacity>
            </View>
          }
          <TouchableOpacity
            onPress={() => this.setState({
              thursday: !this.state.thursday,
              sign: (this.state.sign == "+" && minus) || (this.state.sign == "-" && plus)
            })}>
            <View
              style={{
                height: 45,
                marginTop: 2,
                marginLeft: 20,
                marginRight: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: '#E5E7E9'
              }}>
              <Text
                style={{
                  fontSize: 19,
                  marginLeft: 10,
                  position: 'absolute',
                  alignSelf: 'center',
                  left: 10
                }}>Thursday
              </Text>
              <Text
                style={{
                  fontSize: 19,
                  marginLeft: 10,
                  position: 'absolute',
                  alignSelf: 'center',
                  right: 10
                }}>{this.state.thrusdaySign}</Text>
            </View>
          </TouchableOpacity>
          {this.state.thursday &&
            <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{
              flexDirection: 'row'
            }}
              onPress={() => this.onPressThursdayPic1()}>
              <Image source={thursdayPic1} style={{ width: 25, height: 25,marginTop: 4,marginLeft:30, tintColor: '#EE7855' }} />
              <Text
                style={{
                  margin: 7,
                }}>
                Morning</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              flexDirection: 'row'
            }}
              onPress={() => this.onPressThursdayPic2()}>
              <Image source={thursdayPic2} style={{ width: 25, height: 25, marginTop: 4, tintColor: '#EE7855' }} />
              <Text
                style={{
                  margin: 7,
                }}>
                Afternoon</Text>
            </TouchableOpacity>

             <TouchableOpacity style={{
              flexDirection: 'row'
            }}
              onPress={() => this.onPressThursdayPic3()}>
              <Image source={thursdayPic3} style={{ width: 25, height: 25,marginTop: 4, tintColor: '#EE7855' }} />
              <Text
                style={{
                  margin: 7,
                }}>
                Evening</Text>
            </TouchableOpacity>
            </View>
          }
          <TouchableOpacity
            onPress={() => this.setState({
              friday: !this.state.friday,
              sign: (this.state.sign == "+" && minus) || (this.state.sign == "-" && plus)
            })}>
            <View
              style={{
                height: 45,
                marginTop: 2,
                marginLeft: 20,
                marginRight: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: '#E5E7E9'
              }}>
              <Text
                style={{
                  fontSize: 19,
                  marginLeft: 10,
                  position: 'absolute',
                  alignSelf: 'center',
                  left: 10
                }}>Friday
              </Text>
              <Text
                style={{
                  fontSize: 19,
                  marginLeft: 10,
                  position: 'absolute',
                  alignSelf: 'center',
                  right: 10
                }}>{this.state.fridaySign}</Text>
            </View>
          </TouchableOpacity>
          {this.state.friday &&
            <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{
              flexDirection: 'row'
            }}
              onPress={() => this.onPressFridayPic1()}>
              <Image source={fridayPic1} style={{ width: 25, height: 25,marginLeft:30,marginTop: 4, tintColor: '#EE7855' }} />
              <Text
                style={{
                  margin: 7,
                }}>
                Morning</Text>
            </TouchableOpacity>

              <TouchableOpacity style={{
              flexDirection: 'row'
            }}
              onPress={() => this.onPressFridayPic2()}>
              <Image source={fridayPic2} style={{ width: 25, height: 25,marginTop: 4, tintColor: '#EE7855' }} />
              <Text
                style={{
                  margin: 7,
                }}>
                Afternoon</Text>
            </TouchableOpacity>

         <TouchableOpacity style={{
              flexDirection: 'row'
            }}
              onPress={() => this.onPressFridayPic3()}>
              <Image source={fridayPic3} style={{ width: 25, height: 25,marginTop: 4, tintColor: '#EE7855' }} />
              <Text
                style={{
                  margin: 7,
                }}>
                Evening</Text>
            </TouchableOpacity>

            </View>
          }
          <TouchableOpacity
            onPress={() => this.setState({
              saturday: !this.state.saturday,
              sign: (this.state.sign == "+" && minus) || (this.state.sign == "-" && plus)
            })}>
            <View
              style={{
                height: 45,
                marginTop: 2,
                marginLeft: 20,
                marginRight: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: '#E5E7E9'
              }}>
              <Text
                style={{
                  fontSize: 19,
                  marginLeft: 10,
                  position: 'absolute',
                  alignSelf: 'center',
                  left: 10
                }}>Saturday
              </Text>
              <Text
                style={{
                  fontSize: 19,
                  marginLeft: 10,
                  position: 'absolute',
                  alignSelf: 'center',
                  right: 10
                }}>{this.state.saturdaySign}</Text>
            </View>
          </TouchableOpacity>
          {this.state.saturday &&
            <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{
              flexDirection: 'row'
            }}
              onPress={() => this.onPressSaturdayPic1()}>
              <Image source={saturdayPic1} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
              <Text
                style={{
                  margin: 7,
                }}>
                Morning</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              flexDirection: 'row'
            }}
              onPress={() => this.onPressSaturdayPic2()}>
              <Image source={saturdayPic2} style={{ width: 25, height: 25,marginTop: 4, tintColor: '#EE7855' }} />
              <Text
                style={{
                  margin: 7,
                }}>
                Afternoon</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              flexDirection: 'row'
            }}
              onPress={() => this.onPressSaturdayPic3()}>
              <Image source={saturdayPic3} style={{ width: 25, height: 25, marginTop: 4, tintColor: '#EE7855' }} />
              <Text
                style={{
                  margin: 7,
                }}>
                Evening</Text>
            </TouchableOpacity>
            </View>
          }
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30
            }}>
            <TouchableOpacity
              onPress={() => this.onPressSelectAll()}>
              <Image source={selectAll} style={{ width: 25, height: 25,marginLeft:35, tintColor: '#EE7855' }} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 20
              }}>Available any day and time</Text>
          </View>

          <View style={{ flexDirection: 'row', }}>
            <Text
              style={{
                fontSize: 15,
                marginTop: 10,
                marginLeft: 20
              }}>Number of hours available per week</Text>
            <TextInput
              style={{ fontSize: 14, width: 60, marginLeft: 5, marginTop: -5, }}
              placeholder="max 160"
              placeholderTextColor="grey"
              //underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ mobile: text })}
              value={this.state.mobile}
              maxLength={3}
              keyboardType="numeric"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 15
            }}>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 20
              }}>T-shirt size</Text>
            <Text
              style={{
                fontSize: 15,
                position: 'absolute',
                right: 25,
                color: '#E67E22'
              }}>Size Chart</Text>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              marginLeft: 20,
              marginRight: 20,
              justifyContent: 'center'
            }}>
            <View>
              <TouchableOpacity
                onPress={() => this.select()}
                style={[
                  styles.leftTab, this.state.toggleLeft && styles.leftTabChange
                ]}>
                <Text
                  style={{
                    color: '#6E6E6E',
                    textAlign: 'center',
                    fontSize: 18
                  }}>S</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              marginLeft: 6
            }}>
              <TouchableOpacity
                onPress={() => this.select1()}
                style={[
                  styles.leftTab, this.state.toggleLeft1 && styles.leftTabChange
                ]}>
                <Text
                  style={{
                    color: '#6E6E6E',
                    textAlign: 'center',
                    fontSize: 18,
                    margin: 5
                  }}>M</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              marginLeft: 6
            }}>
              <TouchableOpacity
                onPress={() => this.select2()}
                style={[
                  styles.leftTab, this.state.toggleLeft2 && styles.leftTabChange
                ]}>
                <Text
                  style={{
                    color: '#6E6E6E',
                    textAlign: 'center',
                    fontSize: 18,
                    margin: 5
                  }}>L</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              marginLeft: 6
            }}>
              <TouchableOpacity
                onPress={() => this.select3()}
                style={[
                  styles.leftTab, this.state.toggleLeft3 && styles.leftTabChange
                ]}>
                <Text
                  style={{
                    color: '#6E6E6E',
                    textAlign: 'center',
                    fontSize: 18,
                    margin: 5
                  }}>XL</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginLeft: 6,
                marginRight: 10
              }}>
              <TouchableOpacity
                onPress={() => this.select4()}
                style={[
                  styles.leftTab, this.state.toggleLeft4 && styles.leftTabChange
                ]}>
                <Text
                  style={{
                    color: '#6E6E6E',
                    textAlign: 'center',
                    fontSize: 18,
                    margin: 5
                  }}>2XL</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={() => this.VolunteerFormNextStep()}>
            <LinearGradient colors={['#F1948A', '#F0B27A']} style={styles.linearGradient}>
              <Text style={styles.buttonText}>
                NEXT
              </Text>
            </LinearGradient>
            <View style={{
              height: 10
            }}></View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    //height:window.height+200,

    backgroundColor: '#fff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  linearGradient: {
    flex: 1,
    height: 45,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    marginTop: 20
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent'
  },
  leftTab: {
    minWidth: 50,
    margin: 2,
    maxWidth: 60,
    height: 35,
    borderRadius: 1,
    borderColor: "#FA8258",
    borderWidth: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  leftTabChange: {
    backgroundColor: '#F79F81'
  }
});