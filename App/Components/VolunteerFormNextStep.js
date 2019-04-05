import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Image, TextInput,TouchableOpacity,ImageBackground,AsyncStorage, ScrollView,backgroundColor, KeyboardAvoidingView
} from 'react-native';
import { Container, Header, Content,Button,Footer, FooterTab, Icon, Badge } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from 'react-native-check-box';

var leftText;
var minus = "-";
var plus = "+";


export default class VolunteerFormNextStep extends Component {
  constructor(props) {
    super(props);
    this.state = {text:'',toggleLeft: false,
      toggleLeft1: false,
      toggleLeft2: false,
      toggleLeft3: false,
      toggleLeft4: false,
      toggleLeft5: false,
      leftText:'',
      checked:false,
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
      checked23: false,
      checked24: false,
      checked25: false,
      checked26: false,
      checked27: false,
      Accounting: false,
      Arts: false,
      Clerical: false,
      Customer_Service: false,
      Graphics: false,
      Library_Service: false,
      Mentoring: false,
      Photography: false,
      Special_Events: false,
      Administrative: false,
      Athletics: false,
      Construction: false,
      Environmental: false,
      Handy_Man: false,
      Machine: false,
      Music: false,
      Public: false,
      Social_Work: false,
      Data_Entry: false,
      Desktop_Publishing: false,
      Internet: false,
      Word_Processing: false,
      Spreadsheets: false,
      Ability_to_read: false,
      Ability_to_write: false,
      Effective_Writing: false,
      Public_Speaking: false,
      Customer_Service1: false,
      interest:false,
      computerSkill:false,
      communicationSkill:false,
      interestSign:plus,
      computerSkillSign:plus,
      communicationSkillSign:plus,
    };
  }

  async days() {
    var days = await AsyncStorage.getItem('daysArray');
    var days = await AsyncStorage.getItem('monday_morning');
    var days = await AsyncStorage.getItem('monday_afternoon');
    var days = await AsyncStorage.getItem('monday_evening');
    var days = await AsyncStorage.getItem('tuesday_morning');
    var days = await AsyncStorage.getItem('tuesday_afternoon');
    var days = await AsyncStorage.getItem('tuesday_evening');
    var days = await AsyncStorage.getItem('wednesday_morning');
    var days = await AsyncStorage.getItem('wednesday_afternoon');
    var days = await AsyncStorage.getItem('wednesday_evening');
    var days = await AsyncStorage.getItem('thursday_morning');
    var days = await AsyncStorage.getItem('thursday_afternoon');
    var days = await AsyncStorage.getItem('thursday_evening');
    var days = await AsyncStorage.getItem('friday_morning');
    var days = await AsyncStorage.getItem('friday_afternoon');
    var days = await AsyncStorage.getItem('friday_afternoon');
    var days = await AsyncStorage.getItem('saturday_morning');
    var days = await AsyncStorage.getItem('saturday_afternoon');
    var days = await AsyncStorage.getItem('saturday_evening');
    var days = await AsyncStorage.getItem('select');
    var days = await AsyncStorage.getItem('select1');
    var days = await AsyncStorage.getItem('select2');
    var days = await AsyncStorage.getItem('select3');
    var days = await AsyncStorage.getItem('select4');
    user_id = await AsyncStorage.getItem('id');
    console.log(user_id + 'id');
    if (user_id != undefined) {
      this.setState({ user_id: user_id });
      console.log(user_id + 'id');
    }
  }

  VolunteerFormDatenTime(){
    this.props.navigation.navigate('VolunteerFormDatenTime');
    console.log('done');
  };
  VolunteerWall(){
    this.props.navigation.navigate('VolunteerWall');
    console.log('done');
  };
  Accounting() {
    console.log("Accounting");
    if (this.state.checked == false) {
      this.setState({checked: true });
    } else {
      this.setState({checked: false});
    }

  }
  Arts() {
    console.log("Arts");
    if (this.state.checked1 == false) {
      this.setState({checked1: true });
    } else {
      this.setState({checked1: false});
    }

  }
  Clerical() {
    console.log("Clerical");
    if (this.state.checked2 == false) {
      this.setState({checked2: true });
    } else {
      this.setState({checked2: false});
    }

  }
  Customer_Service() {
    console.log("Customer_Service");
    if (this.state.checked3 == false) {
      this.setState({checked3: true });
    } else {
      this.setState({checked3: false});
    }

  }
  Graphics() {
    console.log("Graphics");
    if (this.state.checked4 == false) {
      this.setState({checked4: true });
    } else {
      this.setState({checked4: false});
    }

  }
  Library_Service() {
    console.log("Library_Service");
    if (this.state.checked5 == false) {
      this.setState({checked5: true });
    } else {
      this.setState({checked5: false});
    }

  }
  Mentoring() {
    console.log("Mentoring");
    if (this.state.checked6 == false) {
      this.setState({checked6: true });
    } else {
      this.setState({checked6: false});
    }

  }
  Photography() {
    console.log("Photography");
    if (this.state.checked7 == false) {
      this.setState({checked7: true });
    } else {
      this.setState({checked7: false});
    }

  }
  Special_Events() {
    console.log("Special_Events");
    if (this.state.checked8 == false) {
      this.setState({checked8: true });
    } else {
      this.setState({checked8: false});
    }

  }
  Administrative() {
    console.log("Administrative");
    if (this.state.checked9 == false) {
      this.setState({checked9: true });
    } else {
      this.setState({checked9: false});
    }

  }
  Athletics() {
    console.log("Athletics");
    if (this.state.checked10 == false) {
      this.setState({checked10: true });
    } else {
      this.setState({checked10: false});
    }

  }
  Construction() {
    console.log("Construction");
    if (this.state.checked11 == false) {
      this.setState({checked11: true });
    } else {
      this.setState({checked11: false});
    }

  }
  Environmental() {
    console.log("Environmental");
    if (this.state.checked12 == false) {
      this.setState({checked12: true });
    } else {
      this.setState({checked12: false});
    }

  }
  Handy_Man() {
    console.log("Handy_Man");
    if (this.state.checked13 == false) {
      this.setState({checked13: true });
    } else {
      this.setState({checked13: false});
    }

  }
  Machine() {
    console.log("Machine");
    if (this.state.checked14 == false) {
      this.setState({checked14: true });
    } else {
      this.setState({checked14: false});
    }

  }
  Music() {
    console.log("Music");
    if (this.state.checked15 == false) {
      this.setState({checked15: true });
    } else {
      this.setState({checked15: false});
    }

  }
  Public() {
    console.log("Public");
    if (this.state.checked16 == false) {
      this.setState({checked16: true });
    } else {
      this.setState({checked16: false});
    }

  }
  Social_Work() {
    console.log("Social_Work");
    if (this.state.checked17 == false) {
      this.setState({checked17: true });
    } else {
      this.setState({checked17: false});
    }

  }
  Data_Entry() {
    console.log("Data_Entry");
    if (this.state.checked18 == false) {
      this.setState({checked18: true });
    } else {
      this.setState({checked18: false});
    }

  }
  Desktop_Publishing() {
    console.log("Desktop_Publishing");
    if (this.state.checked19 == false) {
      this.setState({checked19: true });
    } else {
      this.setState({checked19: false});
    }

  }
  Internet() {
    console.log("Internet");
    if (this.state.checked20 == false) {
      this.setState({checked20: true });
    } else {
      this.setState({checked20: false});
    }
  }

    Word_Processing() {
      console.log("Word_Processing");
      if (this.state.checked21 == false) {
        this.setState({checked21: true });
      } else {
        this.setState({checked21: false});
      }
  
    }
    Spreadsheets() {
      console.log("Spreadsheets");
      if (this.state.checked22 == false) {
        this.setState({checked22: true });
      } else {
        this.setState({checked22: false});
      }
  
    }
    Ability_to_read() {
      console.log("Ability_to_read");
      if (this.state.checked23 == false) {
        this.setState({checked23: true });
      } else {
        this.setState({checked23: false});
      }
  
    }
    Ability_to_write() {
      console.log("Ability_to_write");
      if (this.state.checked24 == false) {
        this.setState({checked24: true });
      } else {
        this.setState({checked24: false});
      }
  
    }
    Effective_Writing() {
      console.log("Effective_Writing");
      if (this.state.checked25 == false) {
        this.setState({checked25: true });
      } else {
        this.setState({checked25: false});
      }
  
    }
    Public_Speaking() {
      console.log("Public_Speaking");
      if (this.state.checked26 == false) {
        this.setState({checked26: true });
      } else {
        this.setState({checked26: false});
      }
  
    }
    Customer_Service1() {
      console.log("Customer_Service1");
      if (this.state.checked27 == false) {
        this.setState({checked27: true });
      } else {
        this.setState({checked27: false});
      }
  
    }

    async  volunteerSignup() { 
      var interest = []
      interest.push({
        'Accounting':'Accounting','Arts':'Arts','Clerical':'Clerical','Customer_Service':'Customer_Service',
        'Graphics':'Graphics','Library_Service':'Library_Service','Mentoring':'Mentoring','Photography':'Photography',
        'Special_Events':'Special_Events','Administrative':'Administrative','Athletics':'Athletics','Construction':'Construction',
        'Enviromental':'Enviromental','Handy_Man':'Handy_Man','Machine':'Machine','Music':'Music','Public':'Public',
        'Social_Work':'Social_Work'
      })
      var computerSkill = []
      computerSkill.push({
        'Data_Entry':'Data_Entry','Desktop_Publishing':'Desktop_Publishing','Internet':'Internet',
        'Word_Processing':'Word_Processing','Spreadsheets':'Spreadsheets'
      })
      var communicationSkill = []
      communicationSkill.push({
        'Ability_to_read':'Ability_to_read','Ability_to_write':'Ability_to_write',
        'Effective_Writing':'Effective_Writing','Public_Speaking':'Public_Speaking',
        'Customer_Service1':'Customer_Service1'
      })
    
      this.setState({ isLoading: true });
      console.log(this.state.email, this.state.password);
      var data = new FormData();
      data.append('user_id', this.state.user_id);
      data.append('interest', this.state.interest);
      data.append('computerSkill', this.state.computerSkill);
      data.append('communicationSkill', this.state.communicationSkill);
  
      const config = {
        method: 'POST',
        headers: {
        },
        body: data,
      }
      console.log(data);
      await fetch(AllAPI.volunteerSignup, config).then(res => res.json())
        .then(res => {
          console.log(res);
          if (res.success == true) {
            AsyncStorage.setItem('email', this.state.email);
            // AsyncStorage.setItem('firstName', this.state.firstname);
            // AsyncStorage.setItem('lastName', this.state.lastname);
            // //AsyncStorage.setItem('interest', res.data[0].interest);
            // //AsyncStorage.setItem('membership_id', res.data[0].membership_id);
            // AsyncStorage.setItem('mobile', this.state.mobile);
            // AsyncStorage.setItem('password', this.state.password);
            // AsyncStorage.setItem('qr_code_image', this.state.qr_code_image);
            // AsyncStorage.setItem('updated_at', this.state.updated_at);
            Platform.select({
              ios: () => { AlertIOS.alert('Update Successful'); },
              android: () => { ToastAndroid.show('Update Successful', ToastAndroid.SHORT); }
            })();
            this.setState({ isLoading: false });
          } else {
            this.setState({ isLoading: false });
          }
        }).catch((error) => {
          this.setState({ isLoading: false })
          console.log(error);
        }
        )
    }

    onPressAccounting() {
      if (this.state.Accounting == false) {
        this.setState({ Accounting: true })
      } else if (this.state.Accounting == true) {
        this.setState({ Accounting: false })
      }
    }
    onPressArts() {
      if (this.state.Arts == false) {
        this.setState({ Arts: true })
      } else if (this.state.Arts == true) {
        this.setState({ Arts: false })
      }
    }
    onPressClerical() {
      if (this.state.Clerical == false) {
        this.setState({ Clerical: true })
      } else if (this.state.Clerical == true) {
        this.setState({ Clerical: false })
      }
    }
    onPressCustomer() {
      if (this.state.Customer_Service == false) {
        this.setState({ Customer_Service: true })
      } else if (this.state.Customer_Service == true) {
        this.setState({ Customer_Service: false })
      }
    }
    onPressGraphics() {
      if (this.state.Graphics == false) {
        this.setState({ Graphics: true })
      } else if (this.state.Graphics == true) {
        this.setState({ Graphics: false })
      }
    }
    onPressLibrary() {
      if (this.state.Library_Service == false) {
        this.setState({ Library_Service: true })
      } else if (this.state.Library_Service == true) {
        this.setState({ Library_Service: false })
      }
    }
    onPressMontoring() {
      if (this.state.Mentoring == false) {
        this.setState({ Mentoring: true })
      } else if (this.state.Mentoring == true) {
        this.setState({ Mentoring: false })
      }
    }
    onPressPhotography() {
      if (this.state.Photography == false) {
        this.setState({ Photography: true })
      } else if (this.state.Photography == true) {
        this.setState({ Photography: false })
      }
    }
    onPressSpecial() {
      if (this.state.Special_Events == false) {
        this.setState({ Special_Events: true })
      } else if (this.state.Special_Events == true) {
        this.setState({ Special_Events: false })
      }
    }
    onPressAdministative() {
      if (this.state.Administrative == false) {
        this.setState({ Administrative: true })
      } else if (this.state.Administrative == true) {
        this.setState({ Administrative: false })
      }
    }
    onPressAthletics() {
      if (this.state.Athletics == false) {
        this.setState({ Athletics: true })
      } else if (this.state.Athletics == true) {
        this.setState({ Athletics: false })
      }
    }
    onPressConstruction() {
      if (this.state.Construction == false) {
        this.setState({ Construction: true })
      } else if (this.state.Construction == true) {
        this.setState({ Construction: false })
      }
    }
    onPressEnviromental() {
      if (this.state.Environmental == false) {
        this.setState({ Environmental: true })
      } else if (this.state.Environmental == true) {
        this.setState({ Environmental: false })
      }
    }
    onPressHandy() {
      if (this.state.Handy_Man == false) {
        this.setState({ Handy_Man: true })
      } else if (this.state.Handy_Man == true) {
        this.setState({ Handy_Man: false })
      }
    }
    onPressMachine() {
      if (this.state.Machine == false) {
        this.setState({ Machine: true })
      } else if (this.state.Machine == true) {
        this.setState({ Machine: false })
      }
    }
    onPressMusic() {
      if (this.state.Music == false) {
        this.setState({ Music: true })
      } else if (this.state.Music == true) {
        this.setState({ Music: false })
      }
    }
    onPressPublic() {
      if (this.state.Public == false) {
        this.setState({ Public: true })
      } else if (this.state.Public == true) {
        this.setState({ Public: false })
      }
    }
    onPressSocial() {
      if (this.state.Social_Work == false) {
        this.setState({ Social_Work: true })
      } else if (this.state.Social_Work == true) {
        this.setState({ Social_Work: false })
      }
    }
    onPressData() {
      if (this.state. Data_Entry == false) {
        this.setState({  Data_Entry: true })
      } else if (this.state. Data_Entry == true) {
        this.setState({  Data_Entry: false })
      }
    }
    onPressDesktop() {
      if (this.state. Desktop_Publishing == false) {
        this.setState({  Desktop_Publishing: true })
      } else if (this.state. Desktop_Publishing == true) {
        this.setState({  Desktop_Publishing: false })
      }
    }
    onPressInternet() {
      if (this.state. Internet == false) {
        this.setState({  Internet: true })
      } else if (this.state. Internet == true) {
        this.setState({  Internet: false })
      }
    }
    onPressWord() {
      if (this.state. Word_Processing == false) {
        this.setState({  Word_Processing: true })
      } else if (this.state. Word_Processing == true) {
        this.setState({  Word_Processing: false })
      }
    }
    onPressSpreadsheets() {
      if (this.state. Spreadsheets == false) {
        this.setState({  Spreadsheets: true })
      } else if (this.state. Spreadsheets == true) {
        this.setState({  Spreadsheets: false })
      }
    }
    onPressRead() {
      if (this.state. Ability_to_read == false) {
        this.setState({  Ability_to_read: true })
      } else if (this.state. Ability_to_read == true) {
        this.setState({  Ability_to_read: false })
      }
    }
    onPressWrite() {
      if (this.state. Ability_to_write == false) {
        this.setState({  Ability_to_write: true })
      } else if (this.state. Ability_to_write == true) {
        this.setState({  Ability_to_write: false })
      }
    }
    onPressEffective() {
      if (this.state. Effective_Writing == false) {
        this.setState({  Effective_Writing: true })
      } else if (this.state. Effective_Writing == true) {
        this.setState({  Effective_Writing: false })
      }
    }
    onPressPublicSpeaking() {
      if (this.state. Public_Speaking == false) {
        this.setState({  Public_Speaking: true })
      } else if (this.state. Public_Speaking == true) {
        this.setState({  Public_Speaking: false })
      }
    }
    onPressCustomerService() {
      if (this.state. Customer_Service1 == false) {
        this.setState({  Customer_Service1: true })
      } else if (this.state. Customer_Service1 == true) {
        this.setState({  Customer_Service1: false })
      }
    }
 
  render() {
    const Accounting = this.state.Accounting == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Arts = this.state.Arts == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Clerical = this.state.Clerical == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Customer_Service = this.state.Customer_Service == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Graphics = this.state.Graphics == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Library_Service = this.state.Library_Service == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Mentoring = this.state.Mentoring == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Photography = this.state.Photography == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Special_Events = this.state.Special_Events == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Administrative = this.state.Administrative == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Athletics = this.state.Athletics == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Construction = this.state.Construction == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Environmental = this.state.Environmental == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Handy_Man = this.state.Handy_Man == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Machine = this.state.Machine == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Music = this.state.Music == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Public = this.state.Public == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Social_Work = this.state.Social_Work == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Data_Entry = this.state.Data_Entry == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Desktop_Publishing = this.state.Desktop_Publishing == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Internet = this.state.Internet == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Word_Processing = this.state.Word_Processing == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Spreadsheets = this.state.Spreadsheets == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Ability_to_read = this.state.Ability_to_read == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Ability_to_write = this.state.Ability_to_write == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Effective_Writing = this.state.Effective_Writing == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Public_Speaking = this.state.Public_Speaking == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    const Customer_Service1 = this.state.Customer_Service1 == true ? require('../Images/Icons/checkbox-marked.png') : require('../Images/Icons/checkbox-blank.png')
    return (
      <KeyboardAvoidingView
      style={styles.container}
      // behavior="padding"
      >
      <View style={styles.container}>
        <ImageBackground style={{height:100,width:window.width}} 
          source={require('../Images/VolunteerBg.png')}>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>      
              <Image style={{height:30,width:40,marginTop:40,marginLeft:20}} 
              source={require('../Images/wright.png')} />
            </TouchableOpacity>
            <Text style={{fontSize:22,color:'#fff',alignSelf:'center',backgroundColor:'transparent',marginTop:40,marginLeft:30}}>Volunteer Form</Text>
          </View> 
        </ImageBackground>
        <ScrollView style={{height:'100%'}}>
       <Text style={{marginTop:20,fontSize:20,textAlign:'center',color:'#EB984E'}}> Activities of Interest </Text>
     
       <TouchableOpacity onPress={()=>this.setState({interest:!this.state.interest, interestSign: (this.state.interestSign== "+" && minus)||(this.state.interestSign== "-" && plus)  })}>
        <View style={{height:45,marginTop:10,marginLeft:20,marginRight:20,flexDirection:'row',justifyContent:'center',backgroundColor:'#E5E7E9'}}>
          <Text style={{fontSize:19,marginLeft:10,position:'absolute',alignSelf:'center',left:10,}}>Interest </Text>
          <Text style={{fontSize:19,marginLeft:10,position:'absolute',alignSelf:'center',right:10,}}>{this.state.interestSign}</Text>
        </View>
      </TouchableOpacity>
        { this.state.interest &&
        <View style={{margin:15}}>
        <TouchableOpacity style={{
          flexDirection: 'row'
        }}
          onPress={() => this.onPressAccounting()}>
          <Image source={Accounting} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
          <Text
            style={{
              margin: 7,
            }}>
            Accounting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          flexDirection: 'row'
        }}
          onPress={() => this.onPressArts()}>
          <Image source={Arts} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
          <Text
            style={{
              margin: 7,
            }}>
            Arts/Crafts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          flexDirection: 'row'
        }}
          onPress={() => this.onPressClerical()}>
          <Image source={Clerical} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
          <Text
            style={{
              margin: 7,
            }}>
            Clerical/Secretary</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          flexDirection: 'row'
        }}
          onPress={() => this.onPressCustomer()}>
          <Image source={Customer_Service} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
          <Text
            style={{
              margin: 7,
            }}>
            Customer Service</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          flexDirection: 'row'
        }}
          onPress={() => this.onPressGraphics()}>
          <Image source={Graphics} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
          <Text
            style={{
              margin: 7,
            }}>
           Graphics</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          flexDirection: 'row'
        }}
          onPress={() => this.onPressLibrary()}>
          <Image source={Library_Service} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
          <Text
            style={{
              margin: 7,
            }}>
            Library Service</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          flexDirection: 'row'
        }}
          onPress={() => this.onPressMontoring()}>
          <Image source={Mentoring} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
          <Text
            style={{
              margin: 7,
            }}>
            Montoring</Text>
        </TouchableOpacity>

           <TouchableOpacity style={{
            flexDirection: 'row'
          }}
            onPress={() => this.onPressPhotography()}>
            <Image source={Photography} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
            <Text
              style={{
                margin: 7,
              }}>
              Photography</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={{
            flexDirection: 'row'
          }}
            onPress={() => this.onPressSpecial()}>
            <Image source={Special_Events} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
            <Text
              style={{
                margin: 7,
              }}>
              Special Events</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            flexDirection: 'row'
          }}
            onPress={() => this.onPressAdministative()}>
            <Image source={Administrative} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
            <Text
              style={{
                margin: 7,
              }}>
              Administrative</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            flexDirection: 'row'
          }}
            onPress={() => this.onPressAthletics()}>
            <Image source={Athletics} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
            <Text
              style={{
                margin: 7,
              }}>
              Athletics</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            flexDirection: 'row'
          }}
            onPress={() => this.onPressConstruction()}>
            <Image source={Construction} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
            <Text
              style={{
                margin: 7,
              }}>
              Construction</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            flexDirection: 'row'
          }}
            onPress={() => this.onPressEnviromental()}>
            <Image source={Environmental} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
            <Text
              style={{
                margin: 7,
              }}>
              Environmental</Text>
          </TouchableOpacity>


          <TouchableOpacity style={{
            flexDirection: 'row'
          }}
            onPress={() => this.onPressHandy()}>
            <Image source={Handy_Man} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
            <Text
              style={{
                margin: 7,
              }}>
              Handy Man</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            flexDirection: 'row'
          }}
            onPress={() => this.onPressMachine()}>
            <Image source={Machine} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
            <Text
              style={{
                margin: 7,
              }}>
              Machine</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            flexDirection: 'row'
          }}
            onPress={() => this.onPressMusic()}>
            <Image source={Music} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
            <Text
              style={{
                margin: 7,
              }}>
              Music</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            flexDirection: 'row'
          }}
            onPress={() => this.onPressPublic()}>
            <Image source={Public} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
            <Text
              style={{
                margin: 7,
              }}>
              Public</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            flexDirection: 'row'
          }}
            onPress={() => this.onPressSocial()}>
            <Image source={Social_Work} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
            <Text
              style={{
                margin: 7,
              }}>
              Social Work</Text>
          </TouchableOpacity>
        </View>
        
        }
        <TouchableOpacity onPress={()=>this.setState({computerSkill:!this.state.computerSkill, computerSkillSign: (this.state.computerSkillSign== "+" && minus)||(this.state.computerSkillSign== "-" && plus)  })}>
          <View style={{height:45,marginTop:10,marginLeft:20,marginRight:20,flexDirection:'row',justifyContent:'center',backgroundColor:'#E5E7E9'}}>
            <Text style={{fontSize:19,marginLeft:10,position:'absolute',alignSelf:'center',left:10,}}>Computer Skills </Text>
            <Text style={{fontSize:19,marginLeft:10,position:'absolute',alignSelf:'center',right:10,}}>{this.state.computerSkillSign}</Text>
          </View>
        </TouchableOpacity>
        { this.state.computerSkill &&
        <View style={{margin:15}}>

        <TouchableOpacity style={{
          flexDirection: 'row'
        }}
          onPress={() => this.onPressData()}>
          <Image source={Data_Entry} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
          <Text
            style={{
              margin: 7,
            }}>
            Data Entry</Text>
        </TouchableOpacity>
        
         <TouchableOpacity style={{
          flexDirection: 'row'
        }}
          onPress={() => this.onPressDesktop()}>
          <Image source={Desktop_Publishing} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
          <Text
            style={{
              margin: 7,
            }}>
            Desktop Publishing</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          flexDirection: 'row'
        }}
          onPress={() => this.onPressInternet()}>
          <Image source={Internet} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
          <Text
            style={{
              margin: 7,
            }}>
            Internet</Text>
        </TouchableOpacity>

          <TouchableOpacity style={{
          flexDirection: 'row'
        }}
          onPress={() => this.onPressWord()}>
          <Image source={Word_Processing} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
          <Text
            style={{
              margin: 7,
            }}>
            Word Processing</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
        flexDirection: 'row'
      }}
        onPress={() => this.onPressSpreadsheets()}>
        <Image source={Spreadsheets} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
        <Text
          style={{
            margin: 7,
          }}>
          Spreadsheets</Text>
      </TouchableOpacity>

        </View>
        }
         <TouchableOpacity onPress={()=>this.setState({communicationSkill:!this.state.communicationSkill, communicationSkillSign: (this.state.communicationSkillSign== "+" && minus)||(this.state.communicationSkillSign== "-" && plus)  })}>
          <View style={{height:45,marginTop:10,marginLeft:20,marginRight:20,flexDirection:'row',justifyContent:'center',backgroundColor:'#E5E7E9'}}>
            <Text style={{fontSize:19,marginLeft:10,position:'absolute',alignSelf:'center',left:10,}}>Communication Skills</Text>
            <Text style={{fontSize:19,marginLeft:10,position:'absolute',alignSelf:'center',right:10,}}>{this.state.communicationSkillSign}</Text>
          </View>
        </TouchableOpacity>
        { this.state.communicationSkill &&
        <View style={{margin:15}}>

        <TouchableOpacity style={{
          flexDirection: 'row'
        }}
          onPress={() => this.onPressRead()}>
          <Image source={Ability_to_read} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
          <Text
            style={{
              margin: 7,
            }}>
            Ability to read</Text>
        </TouchableOpacity>
          
        <TouchableOpacity style={{
          flexDirection: 'row'
        }}
          onPress={() => this.onPressWrite()}>
          <Image source={Ability_to_write} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
          <Text
            style={{
              margin: 7,
            }}>
            Ability to write</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          flexDirection: 'row'
        }}
          onPress={() => this.onPressEffective()}>
          <Image source={Effective_Writing} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
          <Text
            style={{
              margin: 7,
            }}>
            Effective Writing</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          flexDirection: 'row'
        }}
          onPress={() => this.onPressPublicSpeaking()}>
          <Image source={Public_Speaking} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
          <Text
            style={{
              margin: 7,
            }}>
            Public Speaking</Text>
        </TouchableOpacity>

         
        <TouchableOpacity style={{
          flexDirection: 'row'
        }}
          onPress={() => this.onPressCustomerService()}>
          <Image source={Customer_Service1} style={{ width: 25, height: 25,marginLeft:30, marginTop: 4, tintColor: '#EE7855' }} />
          <Text
            style={{
              margin: 7,
            }}>
            Customer Service</Text>
        </TouchableOpacity>

        </View>
        }
        <Text style={{fontSize:17,marginLeft:20,marginRight:20,marginTop:10,color:'#EB984E'}}>Are there any medical problems or issues of which we should be aware of in the event of an emergency ? </Text> 
          <TextInput
              style={{fontSize:17,marginTop:15,marginBottom:5,marginLeft:20,marginRight:20,height:38,borderWidth:1,borderColor:'#B2BABB',borderRadius:5,paddingLeft:5}}
              //placeholder="David"
              placeholderTextColor="gray"
              underlineColorAndroid='transparent'
              multiline={true}
              onChangeText={(text) => this.setState({text})}
          /> 
        <Text style={{fontSize:17,marginTop:20,marginLeft:20,color:'#EB984E'}}>How did you find us?</Text>

       <View style={{marginTop:15,flexDirection:'row',justifyContent:"center"}}>
        <View style={{flexDirection:'row',position:'absolute',left:20}}>
        <TouchableOpacity
                onPress={() => this.setState({ toggleLeft: !this.state.toggleLeft})}
                style={[styles.leftTab, this.state.toggleLeft && styles.leftTabChange]}>
       </TouchableOpacity>
       <Text style={{  marginLeft:5,textAlign: 'center', fontSize: 15, marginTop:2 }}>Newspaper</Text>
       </View>

       <View style={{marginLeft:10,flexDirection:'row',alignSelf:'center'}}>
       <TouchableOpacity
          onPress={() => this.setState({ toggleLeft1: !this.state.toggleLeft1 })}
          style={[styles.leftTab, this.state.toggleLeft1 && styles.leftTabChange]}>
       </TouchableOpacity>
       <Text style={{ marginLeft:5, textAlign: 'center', fontSize: 15, marginTop:2  }}>Booth</Text>
       </View>
       <View style={{marginLeft:10,flexDirection:'row',position:'absolute',right:50}}>
       <TouchableOpacity
                onPress={() => this.setState({ toggleLeft2: !this.state.toggleLeft2 })}
                style={[styles.leftTab, this.state.toggleLeft2 && styles.leftTabChange]}>
       </TouchableOpacity>
       <Text style={{ marginLeft:5, textAlign: 'center', fontSize: 15, marginTop:2 }}>TV</Text>
       </View>
      </View>

      <View style={{marginTop:15,flexDirection:'row',justifyContent:"center"}}>
      <View style={{flexDirection:'row',position:'absolute',left:20}}>
        <TouchableOpacity
                onPress={() => this.setState({ toggleLeft3: !this.state.toggleLeft3})}
                style={[styles.leftTab, this.state.toggleLeft3 && styles.leftTabChange]}>
       </TouchableOpacity>
       <Text style={{ marginLeft:5, textAlign: 'center', fontSize: 15,marginTop:2 }}>Flyer</Text>
      </View>

       <View style={{marginLeft:5,flexDirection:'row'}}>
       <TouchableOpacity
                onPress={() => this.setState({ toggleLeft4: !this.state.toggleLeft4 })}
                style={[styles.leftTab, this.state.toggleLeft4 && styles.leftTabChange]}>
       </TouchableOpacity>
       <Text style={{  textAlign: 'center', fontSize: 15,marginLeft:5,marginTop:2 }}>Email</Text>
       </View>

     <View style={{marginLeft:5,flexDirection:'row',position:'absolute',right:30}}>
     <TouchableOpacity
                onPress={() => this.setState({ toggleLeft5: !this.state.toggleLeft5 })}
                style={[styles.leftTab, this.state.toggleLeft5 && styles.leftTabChange]}>
     </TouchableOpacity>
       <Text style={{  textAlign: 'center',marginLeft:5 ,fontSize: 15,marginTop:2 }}>Other</Text>
       </View>
      </View>



      <TouchableOpacity  onPress={() => this.props.navigation.navigate("VolunteerWall")}>
      <LinearGradient colors={['#F1948A', '#F0B27A', ]} style={styles.linearGradient}>
           <Text style={styles.buttonText}>
              SUBMIT
           </Text>
      </LinearGradient>
     <View style={{height:10}}></View>
           </TouchableOpacity>
  </ScrollView>
  </View>
  </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height:"100%",
    //height:window.height+200,

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
    flex: 1,
    height:45,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginLeft:20,
    marginRight:20,
    borderRadius:20,
    marginTop:20
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  leftTab: {
    margin:3,
   width:20,
   height:20,
   borderRadius:18,
   borderColor:"gray",
   borderWidth:1,
   backgroundColor:'transparent',
   justifyContent:'center'
  },
  leftTabChange: {
    backgroundColor: '#F79F81',
  },
});