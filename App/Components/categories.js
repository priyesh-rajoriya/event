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
  AlertIOS,
  FlatList, ToastAndroid,
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
  Label,
  CheckBox
} from 'native-base';
//import CheckBox from 'react-native-check-box';
import AllAPI from "../Apis/AllAPI";
import Spinner from './Spinner';


var value = false;
var user_id;
var tempArray = [];
var tempArray1 = [];
let selectedCat = []
export default class categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLots: [],
      ischeckedcat: false,
      isLoading: true,
      text: '',
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
      checkbox1: false,
      checked1: false,
      sunday_morning: false,
      newArray: dataarr,
      tempArray: [],
      user_id: '',
      category_ids: [
        1, 4, 3, 2
      ],
      array: []
    };
    //this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.allCategory();
  }

  async GetId() {
    try {
      userInfo = await AsyncStorage.getItem('userinfo');

      this.setState({ isLoading: true })
      this.allevent();
    } catch (error) {
      // Error retrieving data
    }
  }

  sunday_morning() {
    if (this.state.checked1 == false) {

      this.setState({
        checked1: true,
        toggleLeft: true,
        toggleLeft1: true,
        toggleLeft2: true,
        toggleLeft3: true,
        toggleLeft4: true,
        toggleLeft5: true,
        toggleLeft6: true,
        toggleLeft7: true,
        toggleLeft8: true,
        toggleLeft9: true,
        toggleLeft10: true,
        toggleLeft11: true,
        toggleLeft12: true,
        toggleLeft13: true
      });
    } else {
      this.setState({
        checked1: false,
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
        toggleLeft13: false
      });
    }
  }

  toggleCheckbox1() { 
    console.log("assas")
    console.log("assas", this.state.checkbox1)
    this.setState({ isLoading: true });
    var tempArray = []
    if (this.state.checkbox1 == false) {
      for (let items of this.state.tempArray) {
        items.Checked = true;
        tempArray.push(items);
      }
      console.log("false");

    } else {
      console.log("tru");
      for (let items of this.state.tempArray) {
        items.Checked = false;
        tempArray.push(items);
      }
    } 
    try {
      var categotyArry = JSON.stringify(tempArray)
      AsyncStorage.setItem('tempArray', categotyArry);
    }
    catch (error) {
      console.log(error, 'Error saving data');
    }
    this.setState({ isLoading: false, tempArray: tempArray, checkbox1: !this.state.checkbox1, checked1: !this.state.checked1, })
  }

  async componentWillMount() {
    console.log(this.state.tempArray);
    user_id = await AsyncStorage.getItem('id');
    console.log(user_id + 'id');
    if (user_id != undefined) {
      this.setState({ user_id: user_id, tempArray: [] });
      console.log(user_id + 'id');
    }
  };
  componentWillUnmount() {
    this.setState({ tempArray: [] })
  }

  async allCategory() {
    let id, name;
    await fetch(AllAPI.eventCategory)
      .then(res => res.json())
      .then(res => {
        for (let items of res.data) {
          this.state.tempArray.push({
            "id": items.id,
            "name": items.name,
            "Checked": false
          });
        }
        this.setState({ isLoading: false, tempArray: this.state.tempArray })
      })
      .catch((error) => {
        this.setState({ isLoading: false })
        console.log(error);
      });
    console.log(this.state.tempArray)
  };

  async eventCategory(status) {
    for (let items of this.state.tempArray) {
      if (items.Checked == true) {
        selectedCat.push(items.id);
      }
    }
    var tempvalue = selectedCat.join()
    var temp = {}
    temp = tempvalue
    this.props.navigation.navigate("Home")

  };

  Home() {
    this
      .props
      .navigation
      .navigate('Home');
    console.log('done');
  };

  selectedListItem(item) {
    this.setState({
      isLoading: true
    })

    if (item.Checked == true) {
      item.Checked = false
    } else {
      item.Checked = true;
    }
    this.setState({
      isLoading: false
    })

    var tmp = [];
    var tmp_id = [];
    var tmpCatArray = [];

    for (let i = 0; i < this.state.tempArray.length; i++) {
      if (this.state.tempArray[i]) {
        tmpCatArray.push(
          this.state.tempArray[i],
        );
      }
    } 
    try {
      var categotyArry = JSON.stringify(tmpCatArray)
      AsyncStorage.setItem('tempArray', categotyArry);
    }
    catch (error) {
      console.log(error, 'Error saving data');
    }

  }

  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    if (this.state.isLoading && this.state.ischeckedcat) {
      this.setState({
        isLoading: false,
        ischeckedcat: false
      });
    };
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text
            style={{
              fontSize: 35,
              color: '#FA8258',
              marginTop: 15,
              textAlign: 'center'
            }}>
            What are you{'\n'}
            into?
          </Text>
          <Text
            style={{
              marginTop: 12,
              fontSize: 16,
              textAlign: 'center',
              marginLeft: 30,
              marginRight: 30,
              color: '#2E2E2E'
            }}>
            Tell us what you like, and we will tell you where to go
          </Text>

          <View
            style={{
              marginTop: 13,
              flexDirection: 'row'
            }}>

            <CheckBox
              style={{
                margin: 5,
                marginLeft: 10,
                height: 20,
                width: 20,
                borderRadius: 3
              }}
              color="#FA8258"
              onPress={() => this.toggleCheckbox1()}
              checked={this.state.checked1} />
            <Text
              style={{
                fontSize: 18,
                marginLeft: 20,
                color: '#2E2E2E',
                marginTop: 5
              }}>Select All</Text>
          </View>


          {this.state.tempArray != "[]" &&
            <View
              style={{
                marginTop: 15, width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <FlatList
                style={{ alignSelf: 'center', }}
                data={this.state.tempArray}
                renderItem={({ item }) => (
                  <View>

                    {item.Checked == true &&
                      <TouchableOpacity onPress={() => this.selectedListItem(item)}
                        style={styles.itemContainer1}
                      >
                        <Text style={styles.item1}
                        >{item.name} {this.state.isLoading}</Text>
                      </TouchableOpacity>
                    }
                    {item.Checked == false &&
                      <TouchableOpacity onPress={() => this.selectedListItem(item)}
                        style={styles.itemContainer}
                      >
                        <Text style={styles.item}
                        >{item.name} {this.state.isLoading}</Text>
                      </TouchableOpacity>
                    }
                  </View>
                )}
                numColumns={numColumns}
              />
            </View>
          }


          <View style={{
            width: "100%", marginTop: 50
          }}>
            <TouchableOpacity onPress={() => this.eventCategory(true)}>
              <ImageBackground
                style={{
                  height: 50,
                  justifyContent: 'center',
                  marginRight: 20,
                  marginLeft: 20
                }}
                resizeMode="contain"
                source={require('../Images/btn.png')}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                    textAlign: 'center',
                    backgroundColor: 'transparent'
                  }}>Next
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.Home()}>
              <Text
                style={{
                  fontSize: 20,
                  marginTop: 2,
                  color: '#2E2E2E',
                  textAlign: 'center'
                }}>Skip
              </Text>
            </TouchableOpacity>

          </View>
        </ScrollView>

        {this.state.isLoading &&
          < Spinner />
        }
      </View>

    );
  }
}
let dataarr = [{
  id: 1,
  name: 'Today',
  Checked: true
},
{
  id: 2,
  name: 'Anytime',
  Checked: true
},
{
  id: 3,
  name: 'Tomorrow',
  Checked: false
},
{
  id: 3,
  name: 'Today',
  Checked: false
},
{
  id: 3,
  name: 'Anytime',
  Checked: false
},
{
  id: 4,
  name: 'Weekend',
  Checked: false
}];

const numColumns = 3;
const styles = StyleSheet.create({
  container: {
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
  leftTab: {
    marginLeft: 10,
    marginRight: 10,
    minWidth: 80,
    maxWidth: 70,
    height: 80,
    borderRadius: 90,
    borderColor: "#FA8258",
    borderWidth: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  leftTab1: {
    color: '#EB984E',
    textAlign: 'center'
  },
  leftTabsmall: {
    marginLeft: 10,
    marginRight: 10,
    minWidth: 60,
    maxWidth: 70,
    height: 60,
    borderRadius: 60,
    borderColor: "#FA8258",
    borderWidth: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },

  leftTabbig: {
    marginLeft: 10,
    marginRight: 10,
    minWidth: 90,
    maxWidth: 90,
    height: 90,
    borderRadius: 90,
    borderColor: "#FA8258",
    borderWidth: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  leftTabChange: {
    backgroundColor: '#F79F81'
  },
  leftTabChange1: {
    color: '#fff'
  }
});
