import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  ScrollView,
  ListView,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ActivityIndicator,
  AsyncStorage,
  TextInput,
  BackHandler,
  Platform,
  BackAndroid,
  Alert,
} from 'react-native';
import {
  Footer,
  Label,
  Header
} from 'native-base';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
var user_id , tempArray;

export default class Home extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      user_id:""
    };
  }
  async componentWillMount(){
    console.log("home")
    try {
      // var firstName = await AsyncStorage.getItem('firstName');
      // var lastName = await AsyncStorage.getItem('lastName');
      var firstName = await AsyncStorage.getItem('firstName');
      var lastName = await AsyncStorage.getItem('lastName');
      var tempArray = await AsyncStorage.getItem('tempArray');
      this.state.user_id = await AsyncStorage.getItem('id');
      this.setState({
        firstName: firstName,
        lastName: lastName,
        tempArry: tempArray
    })
    console.log(firstName,'123456789')
    console.log(tempArray,this.state.user_id )
    } catch (error) {
      console.log(error)
    }
  }
  //exit app start//
	onButtonPress = () => {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
		// then navigate
	}
	handleBackButton = () => {
		Alert.alert(
			'Apna-Desi',
			'Are you sure you want to exit from App?',
			[
				{ text: 'cancel', onPress: () => console.log('Cancel Pressed') },
				{ text: 'OK', onPress: () => BackHandler.exitApp() },
			],
			{ cancelable: false }
		)
		return true;
	}
	async componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
      //this.setState({isLoading: true})
      if(this.state.firstName != null && this.state.firstName != undefined  && this.state.firstName != ""){
      const config = {
        method: 'POST',
        headers: {},
        body: {}
      }
      await fetch('http://ec2-52-207-124-182.compute-1.amazonaws.com:3333/api/v1/addUserInterest?user_id='+user_id+'&cq1_ids='+this.state.tempArray, config)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          if (res.success == true) {
            this.setState({isLoading:false})
          } else {
            this.setState({isLoading: false});
          }})
        .catch((error) => {
          this.setState({isLoading: false})
          console.log(error);
        });
      }
    }
	back_componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
	}
	//exit app end//

  render() {
    return (
      <View style={styles.container}>
        <Header hasTabs
          style={{ backgroundColor: "transparent", height:0}}
          androidStatusBarColor="#D35400"
          iosBarStyle="dark-content">
        </Header>
        <ImageBackground
          style={{
          height: '46%',
          width: window.width,
        }}
          source={require('../Images/VolunteerBg.png')}>
          <View
            style={{
            marginTop: 40,
            flexDirection: 'row',
            justifyContent:'center'
          }}>
            <TouchableOpacity
              style={{
                position:'absolute',
                left:15
              }}
              onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Image
                style={{
                height: 30,
                width: 30,
              }}
                source={require('../Images/menu.png')}/>
            </TouchableOpacity>
            <Text
              style={{
              fontSize: 20,
              alignSelf: 'center',
              color: '#fff',
              marginTop:5
            }}>
              Home
            </Text>
          </View>
        </ImageBackground>
        <View
          style={{
          marginTop:-220,
          flex:1,
          justifyContent: 'center'
        }}>
          <Image
            style={{
            height: '43%',
            alignSelf: 'center'
          }}
            resizeMode="contain"
            source={require('../Images/logosecond.png')}/>

          { this.state.firstName == null &&
          <Text
            style={{
            fontSize: 16,
            alignSelf: 'center',
            color: '#585858',
            fontWeight: 'bold',
            marginTop: -30
          }}>
            Welcome</Text>
           }
         { this.state.firstName != null &&
          <Text
            style={{
            fontSize: 16,
            alignSelf: 'center',
            color: '#585858',
            fontWeight: 'bold',
            marginTop: -30
          }}>
            Welcome {this.state.firstName} {this.state.lastName}</Text>
           }

          <Text
            style={{
            fontSize: 18,
            textAlign: 'center',
            color: '#FE642E',
            marginTop: 10,
            // marginTop: 15,
            marginLeft: 20,
            marginRight: 20
          }}>
            Memorable experiences through creative event planning.</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Events")}>
            <View
              style={{
              height: 35,
              marginLeft: 35,
              marginRight: 35,
              marginTop: 10,
              // marginTop: 50,
              backgroundColor: '#FA8258',
              borderRadius: 25,
              justifyContent: 'center'
            }}>
              <Text
                style={{
                fontSize: 15,
                textAlign: 'center',
                color: '#fff'
              }}>
                Event</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate("NonProfit")}>
            <View
              style={{
              height: 35,
              marginLeft: 35,
              marginRight: 35,
              marginTop: 10,
            //  marginTop: 20,
              backgroundColor: '#FA8258',
              borderRadius: 25,
              justifyContent: 'center'
            }}>
              <Text
                style={{
                fontSize: 15,
                textAlign: 'center',
                color: '#fff'
              }}>
                Non-Profit Org</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('VolunteerFormDatenTime')}>
            <View
              style={{
              height: 35,
              marginLeft: 35,
              marginRight: 35,
              marginTop: 10,
              backgroundColor: '#FA8258',
              borderRadius: 25,
              justifyContent: 'center'
            }}>
              <Text
                style={{
                fontSize: 15,
                textAlign: 'center',
                color: '#fff'
              }}>
                Volunteers</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* <View style={{height:20}}/> */}

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
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
  }
});