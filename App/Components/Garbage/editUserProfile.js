import React, { Component } from 'react';
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
  AlertIOS, FlatList,
} from 'react-native';
import {
  Container,
  Content,
  Row,
  Header,
  Title,
  Button,
  Fab,
  Right,
  Left,
  Tabs,
  Tab,
  TabHeading,
  Card,
  Body,
  CardItem,
  Item,
  Input,
  Label, Footer
} from 'native-base';
var ImagePicker = require('react-native-image-picker');

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

import AllAPI from "../Apis/AllAPI"

var email;
var firstName;
var lastName;
var mobile;
var qr_code_image;
var updated_at;
var user_role;
var idm;
var tempArray = [];
var user_id;

var options = {
  title: '',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

export default class editUserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      contact: '',
      user_id: '',
      toggleLeft: false,
      toggleLeft1: false,
      toggleLeft2: false,
      toggleLeft3: false,
      toggleLeft4: false,
      toggleLeft5: false,
      toggleLeft6: false,
      toggleLeft7: false,
      toggleLeft8: false,
      toggleLeft9: false,
      toggleLeft10: false,
      toggleLeft11: false,
      toggleLeft12: false,
      toggleLeft13: false,
      toggleLeft14: false,
      isLoading: false,
      avatarSource: "http://via.placeholder.com/140x140",
      category_ids: [
        1, 4, 3, 2
      ],
      array: []
    };
    //this.setUserProfileDetails();
    this.handleChange = this.handleChange.bind(this)

    // this.eventCategory();
    // this.allCategory();
  }
  // async GetId(){
  //   try {
  //      user_id = await AsyncStorage.getItem('id',);

  //     this.setState({isLoading:true})
  //   this.allevent();
  //   } catch (error) {
  //     // Error retrieving data
  //   }
  // }

  async componentWillMount() {
    console.log(user_id + 'id');
    user_id = await AsyncStorage.getItem('id');
    if (user_id != undefined) {
      this.setState({ user_id: user_id });
      console.log(user_id + 'id');
    }
    console.log(user_id + 'id');
    this.setUserProfileDetails();
  };
  pickImage(){
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        this.setState({
          avatarSource: source.uri
        });
      }
    });
  }
  async  setUserProfileDetails() {
    this.setState({ isLoading: true })
    var data = new FormData();
    data.append('user_id', user_id);

    const config = {
      method: 'POST',
      headers: {
      },
      body: '',
    }
    console.log(config)
    await fetch('http://ec2-52-207-124-182.compute-1.amazonaws.com:3333/api/v1/setUserProfileDetails?user_id=' + this.state.user_id, config).then(res => res.json())
      // await fetch('http://ec2-52-207-124-182.compute-1.amazonaws.com:3333/api/v1/setUserProfileDetails?user_id='+user_id, config).then(res => res.json())
      .then(res => {

        console.log('res')
        console.log(res)
        if (res.success == true) {
          this.setState({ firstname: res.data[0].firstname });
          this.setState({ lastname: res.data[0].lastname });
          this.setState({ mobile: res.data[0].mobile });
          this.setState({ email: res.data[0].email });
          this.setState({ password: res.data[0].password });
          this.setState({data: res.data, listData: res.data[0].interest})
          // this.setState({ category_name: res.data[0].category_name });
          // this.setState({ category_id: res.data[0].interest[0].category_id });
          // this.setState({ category_name: res.data[0].interest[0].category_name });

        }
        //console.log(res.data[0].interest);
        // this.props.navigation.navigate("ViewTicket",{data:res.data})
        

        this.setState({ isLoading: false })

      }).catch((error) => {
        this.setState({ isLoading: false })
        console.log(error);
      });
  };
  
  async  updateUserProfile() {
    this.setState({ isLoading: true })

    var data = new FormData();
    data.append('user_id', this.state.user_id);
    data.append('firstname', this.state.firstName);
    data.append('lastname', this.state.lastName);
    data.append('mobile', this.state.mobile);
    data.append('email', this.state.email);
    data.append('password', this.state.password);
    console.log(firstname)
    const config = {
      method: 'POST',
      headers: {
      },
      body: '',
    }
    console.log(config)
    await fetch("http://ec2-52-207-124-182.compute-1.amazonaws.com:3333/api/v1/updateUserProfile?user_id=" + user_id + "&firstname=" + this.state.firstName + "&lastname=test&mobile=" + this.state.lastName + "&email=" + this.state.mobile + "&password=" + this.state.password + "&interest=[2,4,3]", config).then(res => res.json())
      .then(res => {
        if (res.success == true) {
          this.setState({ firstname: res.data[0].firstname });
          this.setState({ lastname: res.data[0].lastname });
          this.setState({ mobile: res.data[0].mobile });
          this.setState({ email: res.data[0].email });
          this.setState({ password: res.data[0].password });
          this.props.navigation.navigate("userProfile")
        }
        console.log(res);
        this.setState({ isLoading: false })
        this.setState({
          data: res.data
        })

      }).catch((error) => {
        this.setState({ isLoading: false })
        console.log(error);
      });
  };


  async getdata() {
    var email = await AsyncStorage.getItem('email');
    if (email !== "") {
      this.setState({ email: email });
      console.log(email + 'email');
    };
  };

  toggleCheckbox1() {
    console.log("assas")
    console.log("assas", this.state.checkbox1)
    this.setState({ isLoading: true });
    var tempArray = []
    if (this.state.checkbox1 == false) {
      for (let i = 0; i < this.state.tempArray.length; ++i) {
        tempArray.push({
          "id": this.state.tempArray[i].id,
          "name": this.state.tempArray[i].name,
          "Checked": true
        });

      }
      console.log("false");
      setTimeout(() => {
        this.setState({ isLoading: false, tempArray: tempArray, checkbox1: !this.state.checkbox1, checked1: !this.state.checked1, })
      }, 100);
    } else {
      console.log("tru");
      for (let i = 0; i < this.state.tempArray.length; ++i) {
        tempArray.push({
          "id": this.state.tempArray[i].id,
          "name": this.state.tempArray[i].name,
          "Checked": false
        });

      }
      setTimeout(() => {
        this.setState({ isLoading: false, tempArray: tempArray, checkbox1: !this.state.checkbox1, checked1: !this.state.checked1, })
      }, 100);
    }
  }

  Events() {
    this.props.navigation.navigate('Events');
    console.log('done');
  };
  NonProfit() {
    this.props.navigation.navigate('NonProfit');
    console.log('done');
  };
  Search() {
    this.props.navigation.navigate('Search');
    console.log('done');
  };
  Event() {
    this.props.navigation.navigate('Event');
    console.log('done');
  };
  userProfile() {
    this.props.navigation.navigate('userProfile');
    console.log('done');
  };
  Screen16() {
    this.props.navigation.navigate('Screen16');
    console.log('done');
  };
  openList(item) {
    this.props.navigation.navigate(
      'ViewTicket',
      {
        title: item.title,
        firstname: item.firstname,
        lastname: item.lastname,
        vaemailnue: item.email,
        vaemailnue: item.email,
      },
    );
  }
  changeStatus(item) {
    this.setState({ isLoading: true })
    console.log(item)
    let id = item.id;
    let name = item.name;
    let tmp = tempArray;
    let count = 0;
    for (var i = 0; i < tmp.length; i++) {
      if (tmp[i].id == id) {
        if (tmp[i].Checked == true) {
          tmp[i].Checked = false
        } else {
          tmp[i].Checked = true
        }
        console.log(tmp)
        this.setState({ isLoading: false })
        setTimeout(() => {
          this.setState({ isLoading: false, tempArray: tmp })
        }, 100);
        return tmp[i].Checked;
      }
    }
  }

  handleChange(items) {
    // let selectedCat=[];
    this.setState({ isLoading: true });
    if (items.isselected_category == true) {
      items.selected_category = false;
    } else {
      items.selected_category = true;
    }
    this.setState({ isLoading: false })

  }

  render() {
    console.log(this.state.isselected_category)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
   if(this.state.isLoading && this.state.isselected_category){
      this.setState({
        isLoading:false,
        ischeckedcat:false
      });
    };

    return (
      <View style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
          >
            <ImageBackground style={{ height: 200, width: window.width }}
              source={require('../Images/bg2.png')}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                  <Image style={{ height: 35, width: 45, marginTop: 40, marginLeft: 20 }}
                    source={require('../Images/wright.png')} />
                </TouchableOpacity>
                <View style={{ position: "absolute", right: 20 }}>
                  <TouchableOpacity onPress={() => this.pickImage()}>
                    <Image style={{ height: 35, width: 45, marginTop: 40, }}
                      source={require('../Images/capture.png')} />
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
            <TouchableOpacity style={{ height: 140, width: 140, marginTop: -80, alignSelf: 'center', marginLeft: 160, marginRight: 160 }}onPress={() => this.pickImage()}>
            <Image style={{ height: 140, width: 140, borderRadius:70}}
              source={require('../Images/profilepic.png')}/>
              </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 20, width: "80%", marginTop:20 }}>
              <View style={{ width: "50%", marginLeft: 20, marginRight: 20 }}>

                <Text style={{ fontSize: 15, color: "grey" }}>First Name</Text>
                <TextInput
                  style={{ fontSize: 17, }}
                  placeholder={this.state.firstname}
                  onChangeText={(text) => this.setState({ firstname: text })}
                  placeholderTextColor="black"
                  underlineColorAndroid='transparent'
                  value={this.state.firstname}
                />

                <View style={{ height: 1, backgroundColor: "grey", }} />
              </View>
              <View style={{ width: "50%", marginLeft: 20, marginRight: 20 }}>
                <Text style={{ fontSize: 15, color: "grey" }}>Last Name</Text>
                <TextInput
                  style={{ fontSize: 17, }}
                  placeholder={this.state.lastname}
                  placeholderTextColor="black"
                  underlineColorAndroid='transparent'
                  onChangeText={(text) => this.setState({ lastname: text })}
                  value={this.state.lastname}
                />
                <View style={{ height: 1, backgroundColor: "grey",}} />
              </View>
            </View>
            <View style={{ width: "90%", marginTop: 30, margin: 20 }}>
              <Text style={{ fontSize: 15, color: "grey" }}>Email</Text>
              <TextInput
                style={{ fontSize: 17, }}
                placeholder={this.state.email}
                underlineColorAndroid='transparent'
                placeholderTextColor="black"
                onChangeText={(text) => this.setState({ email: email })}
                value={this.state.email}
              />
              <View style={{ height: 1, backgroundColor: "grey", }} />
            </View>
            <View style={{ width: "90%", margin: 20 }}>
              <Text style={{ fontSize: 15, color: "grey" }}>Contact</Text>
              <TextInput
                style={{ fontSize: 17, }}
                placeholder={this.state.mobile}
                underlineColorAndroid='transparent'
                placeholderTextColor="black"
                onChangeText={(text) => this.setState({ mobile: text })}
                value={this.state.mobile}
              />
              <View style={{ height: 1, backgroundColor: "grey", }} />
            </View>
            <View style={{ width: "90%", margin: 20 }}>
              <Text style={{ fontSize: 14, color: "lightgrey" }}>Password</Text>
              <TextInput
                style={{ fontSize: 17, }}
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                placeholder={this.state.password}
                placeholderTextColor="black"
                onChangeText={(text) => this.setState({ password: text })}
                value={this.state.password}
              />
              <View style={{ height: 1, backgroundColor: "grey", }} />
            </View>
            <Text style={{ fontSize: 17, marginLeft: 20, marginTop: 20 }}>Your interests</Text>
            <View style={{ marginLeft: 25, marginRight: 25, alignSelf: 'center', marginBottom: 65 }}>


              <FlatList
                data={this.state.listData}
                renderItem={({ item }) => (

                  <View>
                    {item.selected_category == true &&
                      <TouchableOpacity onPress={() => this.handleChange(item)}
                        style={styles.itemContainer1}
                      >
                        <Text style={styles.item1}
                        >{item.category_name}</Text>
                      </TouchableOpacity>
                    }

                    {item.selected_category == false &&
                      <TouchableOpacity onPress={() => this.handleChange(item)}
                        style={styles.itemContainer}
                      >
                        <Text style={styles.item}
                        >{item.category_name} </Text>
                      </TouchableOpacity>
                    }
                  </View>
                  // <View>
                  //   <TouchableOpacity onPress={() => this.changeStatus(item)}
                  //     style={styles.itemContainer}
                  //   >
                  //     <Text style={styles.item}
                  //     >{item.category_name}</Text>
                  //   </TouchableOpacity>
                  // </View>
                )}
                keyExtractor={item => item.id}
                numColumns={3}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <Footer style={styles.footer}>
          <View style={{
            width: width, justifyContent: 'space-around', backgroundColor: "#fff",
            flexDirection: 'row', alignItems: "center"
          }}>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.Events()}>
                <Image source={require('../Images/Home.png')}
                  style={{ width: 30, height: 30, }} />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.Event()}>
                <Image resizeMode='contain'
                  source={require('../Images/star-icon.png')}
                  style={{ width: 30, height: 30, }} />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity
                onPress={() => this.Search()}>
                <Image source={require('../Images/search-icon-black.png')}
                  style={{ width: 30, height: 30, }} />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("NonProfit")}
                style={{ marginRight: 0, }}>
                <Image resizeMode='contain'
                  source={require('../Images/handseak-icon.png')}
                  style={{ width: 30, height: 30, }} />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("userProfile")}
                style={{ marginRight: 0, }}>
                <Image source={require('../Images/User12.png')}
                  style={{ width: 30, height: 30, }} />
              </TouchableOpacity>
            </View>
          </View>
        </Footer>
      </View>
    );
  }
}
const numColumns = 3;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#F5FCFF'
  },
  itemContainer: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 20,
    backgroundColor: 'lightgray'
  },
  itemContainer1: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 20,
    backgroundColor: '#FA8258'
  },
  item: {
    margin: 8,
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  item1: {
    margin: 8,
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: '#FFFFFF'
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
    height: 35, borderRadius: 20, alignItems: 'center', minWidth: 90, maxWidth: 200,
    borderColor: '#bbaa64', justifyContent: 'center', backgroundColor: '#E6E6E6'
  },
  leftTab1: {
    height: 35, borderRadius: 20, alignItems: 'center', minWidth: 80, maxWidth: 250,
    borderColor: '#bbaa64', justifyContent: 'center', backgroundColor: '#E6E6E6'
  },
  leftTab2: {
    height: 35, borderRadius: 20, alignItems: 'center', minWidth: 50, maxWidth: 250,
    borderColor: '#bbaa64', justifyContent: 'center', backgroundColor: '#E6E6E6'
  },
  leftTabChange: {
    backgroundColor: '#F79F81',
  },
});
//marginLeft:20,width:140,height:40,borderRadius:20,borderColor:"#FA8258",borderWidth:1,backgroundColor:'transparent',justifyContent:'center'