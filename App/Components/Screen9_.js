import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text, ListView, Dimensions, DatePickerIOS, DatePickerAndroid,
    View, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView, backgroundColor
} from 'react-native';
import {
    Container, Content, Badge, Row, Header, Title, Button, Tabs, Tab, Fab, Footer, FooterTab,
    Right, Left, Body, TabHeading, Radio, Card, Picker, Item
} from 'native-base';
import CheckBox from 'react-native-check-box';
import LinearGradient from 'react-native-linear-gradient';
import { Dropdown } from 'react-native-material-dropdown';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';



var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const pic = require('../Images/tickets.png');
const pic2 = require('../Images/hart2.png');
const datas = [
    {
        pic: pic,
        item1: "Entre La Sombra | Life along the",
        item2: "Set, 20 Jan - 9:00 AM-5:00AM",
        item3: "Redisson Blu Hotel, Indore",
        pic2: pic2
    },
    {
        pic: pic,
        item1: "Entre La Sombra | Life along the",
        item2: "Set, 20 Jan - 9:00 AM-5:00AM",
        item3: "Redisson Blu Hotel, Indore",
        pic2: pic2
    },
    {
        pic: pic,
        item1: "Entre La Sombra | Life along the",
        item2: "Set, 20 Jan - 9:00 AM-5:00AM",
        item3: "Redisson Blu Hotel, Indore",
        pic2: pic2
    },
    {
        pic: pic,
        item1: "Entre La Sombra | Life along the",
        item2: "Set, 20 Jan - 9:00 AM-5:00AM",
        item3: "Redisson Blu Hotel, Indore",
        pic2: pic2
    },
    {
        pic: pic,
        item1: "Entre La Sombra | Life along the",
        item2: "Set, 20 Jan - 9:00 AM-5:00AM",
        item3: "Redisson Blu Hotel, Indore",
        pic2: pic2
    },
    {
        pic: pic,
        item1: "Entre La Sombra | Life along the",
        item2: "Set, 20 Jan - 9:00 AM-5:00AM",
        item3: "Redisson Blu Hotel, Indore",
        pic2: pic2
    },
];
let data = [{
    value: 'Anytime',
  }, {
    value: '12-10-2018',
  }, {
    value: '18-12-2018',
  }];

  let data1 = [{
    value: 'Indore',
  }, {
    value: 'Bhopal',
  }, {
    value: 'Ujjain',
  }];

  let data2 = [{
    value: 'Anytime',
  }, {
    value: 'Anytime',
  }, {
    value: 'Anytime',
  }];
  var radio_props = [
    {label: '', value: 0},
    {label: '', value: 1}
  ];
export default class Screen9_ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '', selected1: "key0", selected2: "key0", radio1: true, data, data1,data2,
            radio2: false,checkbox1: false, check:false,toggleLeft5: false,toggleLeft2: false,
            value: 0,
        };
    }
    toggleRadio1() {
        this.setState({
            radio1: true,
            radio2: false,
        });
    }
    toggleCheckbox1() {
		this.setState({
			checkbox1: !this.state.checkbox1,
		});
	}
    toggleRadio2() {
        this.setState({
            radio1: false,
            radio2: true,
        });
    }
    onValueChange(value: string) {
        this.setState({
            selected1: value
        });
    }
    onValueChange2(value: string) {
        this.setState({
            selected2: value
        });
    }
    datePicker() {
        try {
            Platform.select({
                ios: () => {
                    <DatePickerIOS
                        date={this.state.chosenDate}
                        onDateChange={this.setDate}
                    />
                },
                android: () => {
                    this.showPicker();
                }
            })();

        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }

    }

    showPicker = async (stateKey, options) => {
        try {
            var newState = {};
            const { action, year, month, day } = await DatePickerAndroid.open(options);
            if (action === DatePickerAndroid.dismissedAction) {
                newState[stateKey + 'Text'] = 'dismissed';
            } else {
                // <<<< Newly selected date >>>>
                var date = new Date(year, month, day);
                newState[stateKey + 'Text'] = date.toLocaleDateString();
                newState[stateKey + 'Date'] = date;
            }
            this.setState({ selectedDate: newState });
        } catch ({ code, message }) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
        console.warn(this.state.selectedDate)
    };
    Screen17() {
        this.props.navigation.navigate('Screen17');
        console.log('done');
    };
    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        return (
            <View style={styles.container}>

                <Header hasTabs
                    style={{ backgroundColor: "transparent", justifyContent: 'center', }}
                    androidStatusBarColor="#000"
                    iosBarStyle="light-content">

                    <View style={{ width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>

                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}
                            style={{ marginLeft: 10, position: 'absolute', left: 0, }}>
                            <Image source={require('../Images/cross.png')}
                                style={{ width: 30, height: 30, }} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ marginRight: 10, position: 'absolute', right: 10, }}>
                            <Image
                                style={{ height: 30, width: 35, tintColor: 'gray' }}
                                source={require('../Images/right.png')}
                            />
                        </TouchableOpacity>

                    </View>
                </Header>

                <View>
                    <ScrollView>
                        <View style={{ marginLeft: 25, }}>
                            <View style={{ marginTop: 25 }}>
                                <Text style={{ color: "#000", fontSize: 20, }}>
                                    Date</Text>

                                <TouchableOpacity  style={{ marginTop: 20, width:'100%',flexDirection: 'row' }} onPress={() => this.datePicker()}>

                                  
                                        <Image
                                            style={{ height: 24, width: 24, tintColor: 'gray' }}
                                            source={require('../Images/clock.png')}
                                        />
                                        <View style={{marginTop:-35,marginLeft:20,width:'80%'}}>
                                        <Dropdown 
                                        style={{marginLeft:40,marginRight:40,fontSize:18,textAlign:'center'}}
                                            //label='Anytime'
                                            value='Anytime'
                                            data={data}
                                            baseColor='transparent'   
                                            itemColor='gray'                                        
                                        //  textColor='gray' 
                                                                             />
                                    </View>
                                </TouchableOpacity>

                            </View>
                            <View style={{ height: 1, backgroundColor: '#4D4C4C', marginRight: 25, marginTop: 10 }} />

                            <View style={{
                                marginTop: 25
                            }}>
                                <Text style={{ color: "#000", fontSize: 20, }}>
                                    Location</Text>

                                <View style={{ marginLeft: -8, marginTop:20 ,flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        style={{ height: 24, width: 24, tintColor: 'gray', marginTop:-10}}
                                        source={require('../Images/location1.png')}
                                    />
                                    <View style={{marginTop:-35,marginLeft:20,width:'80%'}}>
                                        <Dropdown 
                                        style={{marginLeft:40,marginRight:40,fontSize:18,textAlign:'center'}}
                                            //label='Indore'
                                            value='Indore'
                                            data={data1}
                                            baseColor='transparent'   
                                            itemColor='gray'
                                            
                                        />
                                    </View>
                                    {/* <View style={{ width: 130, }}>
                                        <Picker
                                            style={{ justifyContent: 'center' }}
                                            mode="dropdown"
                                            selectedValue={this.state.selected1}
                                            onValueChange={this.onValueChange.bind(this)}>
                                            <Item color="gray" label="Indore" value="key0" />
                                            <Item color="gray" label="Bhopal" value="key1" />
                                            <Item color="gray" label="Mumbai" value="key2" />
                                        </Picker>
                                    </View> */}
                                </View>
                            </View>
                            <View style={{ height: 1, backgroundColor: '#4D4C4C', marginRight: 25, marginTop: 10 }} />

                            <View style={{
                                marginTop: 25
                            }}>
                                <Text style={{ color: "#000", fontSize: 20, }}>
                                    Category</Text>

                                <View style={{ marginLeft: -8, marginTop:20,flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        style={{ height: 24, width: 24, tintColor: 'gray',  marginTop:-10 }}
                                        source={require('../Images/star-outline.png')}
                                    />
                                    <View style={{marginTop:-35,marginLeft:20,width:'80%'}}>
                                        <Dropdown 
                                        style={{marginLeft:40,marginRight:40,fontSize:18,textAlign:'center'}}
                                            //label='Anything'
                                            value='Anything'
                                            data={data2}
                                            baseColor='transparent'   
                                            itemColor='gray'
                                        />
                                    </View>
                                    {/* <View style={{ width: 130, }}>
                                        <Picker
                                            style={{ justifyContent: 'center' }}
                                            mode="dropdown"
                                            selectedValue={this.state.selected2}
                                            onValueChange={this.onValueChange2.bind(this)}>
                                            <Item color="gray" label="Anything" value="key0" />
                                            <Item color="gray" label="Music" value="key1" />
                                            <Item color="gray" label="Event" value="key2" />
                                        </Picker>
                                    </View> */}
                                </View>
                            </View>
                            <View style={{ height: 1, backgroundColor: '#4D4C4C', marginRight: 25, marginTop: 10 }} />

                            <View style={{ marginTop: 25 }}>
                                <Text style={{ color: "#000", fontSize: 20, }}>
                                    Price</Text>

                                <View style={{ marginTop: 20, flexDirection: 'row' }}>

                                     <Text style={{ color: '#000', fontSize: 16, }}>
                                        Free stuff only</Text> 
                                    {/* <View
                                        style={{ marginTop: 1, flexDirection: 'row', position: 'absolute', right: 40 }}>
                                       <CheckBox checked={this.state.checkbox1} onPress={() => this.toggleCheckbox1()} />
                                    </View> */}
                                 <View style={{marginTop:-10,position:'absolute',right:20}}>
                                    <CheckBox
                                        style={{flex: 1, padding: 10,marginLeft:20}}
                                        onClick={()=>this.setState({checked:!this.state.checked})}
                                        isChecked={this.state.checked}
                                        //rightText={"Ability to write"}
                                    />
                                </View>
                                </View>
                            </View>
                            <View style={{ height: 1, backgroundColor: '#4D4C4C', marginRight: 25, marginTop: 25 }} />

                            <View style={{ marginTop: 25 }}>
                                <Text style={{ color: "#000", fontSize: 20, }}>
                                    Sort by</Text>

                                <View style={{ marginTop: 20, flexDirection: 'row' }}>
                                    <Text style={{ color: '#000', fontSize: 16, }}>
                                        Relevance</Text>

                                        <View style={{position:'absolute',right:10}}>   
                                        <TouchableOpacity
                                          onPress={() => this.setState({ toggleLeft5: !this.state.toggleLeft5 })}
                                          style={[styles.leftTab, this.state.toggleLeft5 && styles.leftTabChange]}>
                                        </TouchableOpacity>    
                                         </View>                             
                                            {/* <View
                                        style={{ marginTop: 5,position: 'absolute', right: 25, }}>
                                        <RadioForm
                                            radio_props={radio_props}
                                            //initial={0}
                                            onPress={(value) => {this.setState({value:value})}}
                                        /> 
                                      
                                    </View> */}
                                </View>
                               
                                <View style={{ marginTop: 20,flexDirection: 'row'}}>
                                    <Text style={{ color: '#000', fontSize: 16, }}>
                                        Date</Text>
                                   <View style={{position:'absolute',right:10}}>     
                                  <TouchableOpacity
                                    onPress={() => this.setState({ toggleLeft2: !this.state.toggleLeft2 })}
                                    style={[styles.leftTab, this.state.toggleLeft2 && styles.leftTabChange]}>
                                  </TouchableOpacity>   
                                    </View>    
                                </View>

                     
                            </View>

                            <View style={{ height: 100 }}></View>
                        </View>
                    </ScrollView>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: window.height + 200,

        backgroundColor: '#fff',
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