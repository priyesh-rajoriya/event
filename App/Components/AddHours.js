import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,AsyncStorage,
    Text, ListView, Dimensions, DatePickerIOS, DatePickerAndroid, KeyboardAvoidingView,
    View, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView, backgroundColor, ToastAndroid,BackHandler
} from 'react-native';
import {
    Container, Content, Badge, Row, Header, Title, Button, Tabs, Tab, Fab, Footer, FooterTab,
    Right, Left, Body, TabHeading, Radio, Card, Picker, Item
} from 'native-base';

import AllAPI from "../Apis/AllAPI"

import { Dropdown } from 'react-native-material-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const pic = require('../Images/tickets.png');
const pic2 = require('../Images/hart2.png');

let data = [{
    value: 'Rock Band',
}, {
    value: 'Rock Band1',
}, {
    value: 'Rock Band2',
}];

let data1 = [{
    value: 'Hours',
}, {
    value: '1',
}, {
    value: '2',
},
{
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
},
{
    value: '7',
},
{
    value: '8',
}, {
    value: '9',
},
{
    value: '10',
}
];

let data2 = [{
    value: 'Minutes',
}, {
    value: '30',
}, {
    value: '45',
},
{
    value: '50',
}];
var user_id;
export default class AddHours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id:'',
            text: '', selected1: "key0", selected2: "key0", selectedDate: '', data: '', data1: '', data2: '',
            isDateTimePickerVisible: false, date: null, volunteer_id: '1', organization: '', event_name: '', supervisor: '', volunteering_date: '',
            volunteering_hours: '', feedback: '', isVisible: false, showLabel: false,value:''
        };
        //this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = { date: "" }
    }

    async componentWillMount() {
        user_id = await AsyncStorage.getItem('id');
        console.log(user_id + 'id');
        if (user_id != undefined) {
          this.setState({ user_id: user_id });
          console.log(user_id + 'id');
        }
    };

    async  addVolunteeringHours() {
        if(this.state.email !=""){
            if(this.state.feedback !=""){
                if(this.state.volunteering_hours !=""){
                    if(this.state.volunteering_date !=""){
                      if(this.state.supervisor !=""){
                        if(this.state.event_name !=""){
                            if(this.state.organization !=""){
                  this.setState({isLoading:true})

                    const config = {
                      method: 'POST',
                      headers: {
                        },
                      body: '',
                        }
                    console.log(config)
                    await fetch('http://ec2-52-207-124-182.compute-1.amazonaws.com:3333/api/v1/addVolunteeringHours?user_id=5&organization=test&event_name=rockband&supervisor=xyz&volunteering_date=2018-02-19&volunteering_hours=4&feedback=hdogh', config).then(res => res.json())
                      .then(res => {
                        console.log(res);
                        // onPress: () =>  this.props.navigation.navigate("VolunteerWall")
                        if(res.success==true){
                          Platform.select({
                            ios: () => { AlertIOS.alert(
                                '',
                              'EventHours Add Successfull',
                                [
                                  {text: 'OK', onPress: () =>  this.props.navigation.navigate("VolunteerWall")},
                                ]
                              )
                            },
                            android: () => {
                              ToastAndroid.show('EventHours Add Successfull, Welcome.', ToastAndroid.SHORT);
                              this.props.navigation.navigate("VolunteerWall");
                            }
                          })();
                        }else{
                          this.setState({isLoading:false});
                          Alert.alert(

                            [
                              {text: 'ok', onPress: () => console.log('ok pressed')},
                            ],)
                          }
                      }).catch((error) => {
                        this.setState({isLoading:false})
                        console.log(error);
                        Platform.select({
                          ios: () => { AlertIOS.alert('Error, please try again later.'); },
                          android: () => { ToastAndroid.show('Error, please try again later.', ToastAndroid.SHORT); }
                        })();
                      });
                    }else{
                        Platform.select({
                          ios: () => { AlertIOS.alert('organization does not match'); },
                          android: () => { ToastAndroid.show('organization cannot be Empty', ToastAndroid.SHORT); }
                        })();
                      }
                    }else{
                        Platform.select({
                          ios: () => { AlertIOS.alert('event_name does not match'); },
                          android: () => { ToastAndroid.show('event_name cannot be Empty', ToastAndroid.SHORT); }
                        })();
                      }
                    }else{
                        Platform.select({
                          ios: () => { AlertIOS.alert('supervisor does not match'); },
                          android: () => { ToastAndroid.show('supervisor cannot be Empty', ToastAndroid.SHORT); }
                        })();
                      }
                    }else{
                        Platform.select({
                          ios: () => { AlertIOS.alert('volunteering_date does not match'); },
                          android: () => { ToastAndroid.show('volunteering_date cannot be Empty', ToastAndroid.SHORT); }
                        })();
                      }
                    }else{
                        Platform.select({
                          ios: () => { AlertIOS.alert('volunteering_hours does not match'); },
                          android: () => { ToastAndroid.show('volunteering_hours cannot be Empty', ToastAndroid.SHORT); }
                        })();
                      }
                    }else{
                        Platform.select({
                          ios: () => { AlertIOS.alert('feedback does not match'); },
                          android: () => { ToastAndroid.show('feedback cannot be Empty', ToastAndroid.SHORT); }
                        })();
                      }
                    }
        };

        VolunteerWall() {
        this.props.navigation.navigate('VolunteerWall');
        console.log('done');
    };
    Events() {
        this.props.navigation.navigate('Events');
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
    NonProfit() {
        this.props.navigation.navigate('NonProfit');
        console.log('done');
    };
    Search() {
        this.props.navigation.navigate('Search');
        console.log('done');
    };
    NonProfitEventDetails() {
        this.props.navigation.navigate('NonProfitEventDetails');
        console.log('done');
    };
    userProfile() {
        this.props.navigation.navigate('userProfile');
        console.log('done');
    };
    toggle1() {
        if (this.state.isVisible1) {
            this.setState({
                isVisible1: false
            });
        } else {
            this.setState({
                isVisible1: true
            });
        }
    }
    toggle2() {
        if (this.state.isVisible2) {
            this.setState({
                isVisible2: false
            });
        } else {
            this.setState({
                isVisible2: true
            });
        }
    }
    toggle3() {
        if (this.state.isVisible3) {
            this.setState({
                isVisible3: false
            });
        } else {
            this.setState({
                isVisible3: true
            });
        }
    }
    toggle4() {
        if (this.state.isVisible4) {
            this.setState({
                isVisible4: false
            });
        } else {
            this.setState({
                isVisible4: true
            });
        }
    }
    toggle5() {
        if (this.state.isVisible5) {
            this.setState({
                isVisible5: false
            });
        } else {
            this.setState({
                isVisible5: true
            });
        }
    }

    onShow1 = () => {
        this.toggle1()
        if (this.state.show1 == false) {
            this.setState({
                show1: true
            })
        } else {
            this.setState({
                show1: false
            })
        }
    }

    onShow5 = () => {
        this.toggle5()
        if (this.state.show5 == false) {
            this.setState({
                show5: true
            })
        } else {
            this.setState({
                show5: false
            })
        }
    }
    onShow2 = () => {
        this.toggle2()
        if (this.state.show2 == false) {
            this.setState({
                show2: true
            })
        } else {
            this.setState({
                show2: false
            })
        }
    }
    onShow3 = () => {
        this.toggle3()
        if (this.state.show3 == false) {
            this.setState({
                show3: true
            })
        } else {
            this.setState({
                show3: false
            })
        }
    }
    onShow4 = () => {
        this.toggle4()
        if (this.state.show4 == false) {
            this.setState({
                show4: true
            })
        } else {
            this.setState({
                show4: false
            })
        }
    }
    cancelbtn(){
        this.setState({feedback:""});
        this.props.navigation.goBack()
    }
    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        return (
                <View style={{ height: '100%' }}>
                    <LinearGradient start={{ x: 1, y: 1 }} end={{ x: 0, y: 1 }}
                        colors={['#F27A50', '#EE6E61']}>
                        <Header hasTabs
                            style={{ backgroundColor: 'transparent', justifyContent: 'center', }}
                            androidStatusBarColor="#D35400"
                            iosBarStyle="light-content">

                            <View style={{ width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>

                                <TouchableOpacity onPress={() => this.props.navigation.goBack()}
                                    style={{ marginLeft: 10, position: 'absolute', left: 0, }}>
                                    <Image source={require('../Images/Icons/keyboard-backspace.png')}
                                        style={{ width: 35, height: 35, tintColor: '#fff' }} />
                                </TouchableOpacity>
                                <Text style={{ fontWeight: 'bold', color: "#FFF", fontSize: 18, position: 'absolute', }}>
                                    Add Hours</Text>
                                <TouchableOpacity
                                    style={{ marginRight: 10, position: 'absolute', right: 0, }}>
                                    <Image
                                        style={{ height: 25, width: 20, }}
                                        source={require('../Images/bot1.png')}
                                    />
                                </TouchableOpacity>

                            </View>
                          </Header>
                       </LinearGradient>
                    <View>
                    <KeyboardAvoidingView
                      style={styles.container}
                    >
                        <ScrollView>

                            <View style={{ marginLeft: 20, marginRight: 20 }}>


                                <View style={{ marginTop: 15 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: "#000", fontSize: 16, }}>
                                            What organization did you volunteer for?</Text>
                                        <Text style={{ color: "#EE6E61", fontSize: 16, }}>
                                            *</Text>
                                    </View>
                                    <TextInput
                                    style={{ fontSize: 15, marginTop: 10 }}
                                    placeholder="Organization Name"
                                    placeholderTextColor="#BDBDBD"
                                    //onChangeText={(text) => this.setState({ event_name: text })}
                                    //value={this.state.event_name}
                                />

                                </View>


                                <View style={{ marginTop: 25, }}>
                                    <Text style={{ color: '#000', fontSize: 16 }}>
                                        Event:</Text>
                                    <TextInput
                                        style={{ fontSize: 15, marginTop: 10 }}
                                        placeholder="Event name"
                                        placeholderTextColor="#BDBDBD"
                                       // underlineColorAndroid='transparent'
                                        onChangeText={(text) => this.setState({ event_name: text })}
                                        value={this.state.event_name}
                                    />
                                </View>
                                {/* <View style={{ height: 1, backgroundColor: "gray", marginTop: 10 }} /> */}
                                <View style={{
                                    marginTop: 25,
                                }}>
                                    <Text style={{ color: '#000', fontSize: 16 }}>
                                        Supervisor:</Text>
                                    <TextInput
                                        style={{ fontSize: 15, marginTop: 10 }}
                                        placeholder="Supervisor name"
                                        placeholderTextColor="#BDBDBD"
                                        // underlineColorAndroid='transparent'
                                        onChangeText={(text) => this.setState({ supervisor: text })}
                                        value={this.state.supervisor}
                                    />
                                </View>
                                {/* <View style={{ height: 1, backgroundColor: "gray", marginTop: 10 }} /> */}

                                <View style={{ marginTop: 25 }}>
                                    <Text style={{ color: "#000", fontSize: 16, }}>
                                        Date you volunteered</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                        <DatePicker
                                            style={{ width: '100%', marginLeft: 10, }}
                                            date={this.state.date}
                                            mode="date"
                                            placeholder="06-02-2018"
                                            format="YYYY-MM-DD"
                                            confirmBtnText="Confirm"
                                            cancelBtnText="Cancel"
                                            customStyles={{
                                                dateIcon: {
                                                    height: 0,
                                                    width: 0,
                                                    // position: 'absolute',
                                                    left: 0,
                                                    //top: 4,
                                                    marginLeft: 0
                                                },
                                                dateInput: {
                                                    position: 'absolute', left: 0,
                                                }
                                                // ... You can check the source to find the other keys.
                                            }}
                                            onDateChange={(date) => { this.setState({ date: date }) }}
                                            value={this.state.volunteering_date}
                                        />
                                        {/* <DateTimePicker  style={{ width:'100%' }}
                                            isVisible={this.state.isDateTimePickerVisible}
                                            onConfirm={this._handleDatePicked}
                                            onCancel={this._hideDateTimePicker}
                                            value={this.state.isDateTimePickerVisible}
                                            // date={this.state.str_dob}
                                            // mode="date"
                                            onDateChange={(isDateTimePickerVisible) => { this.setState({ isDateTimePickerVisible: isDateTimePickerVisible }) }}

                                        /> */}

                                        <View
                                            style={{ position: 'absolute', right: 5 }}>
                                            <Image style={{ height: 24, width: 24, tintColor: 'gray' }}
                                                source={require('../Images/menu-down.png')} />
                                        </View>
                                    </View>
                                  <View style={{height:1,backgroundColor:'gray',marginLeft:5,marginRight:5}}/>
                                </View>

                                <View style={{
                                    marginTop: 25
                                }}>
                                    <Text style={{ color: "#000", fontSize: 16, }}>
                                        Number of Hours</Text>

                                    <View style={{ marginLeft: 20, flexDirection: 'row' }}>
                                        <View style={{ width: '40%', }}>
                                            {/* <Picker
                                            style={{ justifyContent: 'center' }}
                                            mode="dropdown"
                                            selectedValue={this.state.selected1}
                                            value={this.state.volunteering_hours}
                                            onValueChange={this.onValueChange.bind(this)}>
                                            <Item color="gray" label="Hours" value="key0" />
                                            <Item color="gray" label="1" value="1" />
                                            <Item color="gray" label="2" value="2" />
                                            <Item color="gray" label="3" value="3" />
                                            <Item color="gray" label="4" value="4" />
                                            <Item color="gray" label="5" value="5" />
                                            <Item color="gray" label="6" value="6" />
                                            <Item color="gray" label="7" value="7" />
                                            <Item color="gray" label="8" value="8" />
                                            <Item color="gray" label="9" value="9" />
                                            <Item color="gray" label="10" value="10" />
                                        </Picker> */}
                                            <Dropdown
                                                style={{  textAlign: 'center' }}
                                                label='Hours'
                                                // value='Hours'
                                                data={data1}
                                                value={this.state.volunteering_hours}
                                            />
                                        </View>
                                        <View style={{ width: '40%', marginLeft: 20 }}>
                                            {/* <Picker
                                            style={{ justifyContent: 'center' }}
                                            mode="dropdown"
                                            selectedValue={this.state.selected2}
                                            onValueChange={this.onValueChange2.bind(this)}>
                                            <Item color="gray" label="Minutes" value="key0" />
                                            <Item color="gray" label="30" value="30" />
                                            <Item color="gray" label="45" value="45" />
                                            <Item color="gray" label="50" value="50" />
                                        </Picker> */}
                                            <Dropdown
                                                style={{  textAlign: 'center' }}
                                                label='Minutes'
                                                //value='Minutes'
                                                data={data2}
                                            />
                                        </View>
                                    </View>

                                </View>

                                <View style={{ marginTop: 40 }}>

                                    <Text style={{ color: "#000", fontSize: 16, marginRight: 20 }}>
                                        You feedback (optional)</Text>
                                    {/* <View style={{ height: 90, backgroundColor: 'transparent', marginTop: 10, borderWidth: 1, }}> */}
                                        <TextInput
                                            style={{ fontSize: 20, borderWidth: 1, marginTop:10, paddingLeft:5 }}
                                            placeholder="name"
                                            placeholderTextColor="transparent"
                                            underlineColorAndroid='transparent'
                                            multiline={true}
                                            onChangeText={(text) => this.setState({ feedback: text })}
                                            value={this.state.feedback}
                                        />
                                    {/* </View> */}
                                    <View style={{ height: 10, }} />
                                    <View style={{ marginTop: 10, justifyContent: "center", flexDirection: 'row' }}>

                                        <Button
                                         onPress={() => this.addVolunteeringHours()}
                                          style={{ backgroundColor: '#30BB1A', height: 40, marginRight: 10, width: 120, alignItems: 'center', justifyContent: 'center' }} >
                                            <Text style={{ color: '#fff', fontSize: 18, }}>
                                                Save
                                   </Text>
                                        </Button>

                                        <Button onPress={() =>  this.VolunteerWall()} style={{ backgroundColor: '#fff', height: 40, borderWidth:1, borderColor:'gray',width: 120, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: '#000', fontSize: 18, }}>
                                                Cancel</Text>
                                        </Button>
                                    </View>
                                </View>
                            <View style={{ height:130, }}/>
                            </View>

                        </ScrollView>
                        </KeyboardAvoidingView>
                    </View>
                    <Footer style={styles.footer}>
                        <View style={{
                            width: '100%', justifyContent: 'space-around', backgroundColor: "#fff",
                            flexDirection: 'row', alignItems: "center"
                        }}>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => this.Events()} >
                                    <Image source={require('../Images/Home.png')}
                                        style={{ width: 35, height: 35, }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => this.Event()} >
                                    <Image resizeMode={'contain'}
                                        source={require('../Images/Event.png')}
                                        style={{ width: 35, height: 35, }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => this.Search()}
                                >
                                    <Image source={require('../Images/Search.png')}
                                        style={{ width: 30, height: 35, }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => this.addVolunteeringHours()}
                                    style={{ marginRight: 0, }}>
                                    <Image resizeMode={'contain'}
                                        source={require('../Images/Non-profit.png')}
                                        style={{ width: 35, height: 35, }} />
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

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: '#F7F9F9',
    },
    footer: {
        position: 'absolute',
        height: 50,
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
    linearGradient: {
        height: 70,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },
    form: {
        flex: 1,
        justifyContent: 'space-between',
      },
});

