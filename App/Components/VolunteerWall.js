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
  AlertIOS
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
  Label,Footer
} from 'native-base';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

import LinearGradient from 'react-native-linear-gradient';

import Tab1 from './DetailsTab';
import Tab2 from './NotificationTab';

export default class VolunteerWall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }
    Events() {
        this
            .props
            .navigation
            .navigate('Events');
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
      userProfile() {
        this.props.navigation.navigate('userProfile');
        console.log('done');
      };
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    start={{
                    x: 1,
                    y: 1
                }}
                    end={{
                    x: 0,
                    y: 1
                }}
                    colors={['#F27A50', '#EE6E61']}>
                    <Header
                        hasTabs
                        style={{
                        backgroundColor: "transparent",
                        justifyContent: 'center'
                    }}
                        androidStatusBarColor="#D35400"
                        iosBarStyle="light-content">

                        <View
                            style={{
                            width: width,
                            flexDirection: "row",
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>

                            <TouchableOpacity
                                onPress={() => this.props.navigation.goBack()}
                                style={{
                                marginLeft: 10,
                                position: 'absolute',
                                left: 0
                            }}>
                                <Image
                                    source={require('../Images/Icons/keyboard-backspace.png')}
                                    style={{
                                    width: 35,
                                    height: 35,
                                    tintColor: '#fff'
                                }}/>
                            </TouchableOpacity>
                            <Text
                                style={{
                                fontWeight: 'bold',
                                color: "#FFF",
                                fontSize: 18,
                                position: 'absolute'
                            }}>
                                Volunteering</Text>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("AddHours")}
                                style={{
                               
                                position: 'absolute',
                                right: 10
                            }}>
                                <Image
                                    style={{
                                    height: 25,
                                    width: 25
                                }}
                                    source={require('../Images/Plusicon2.png')}/>
                            </TouchableOpacity>

                        </View>
                    </Header>
                </LinearGradient>

                <Tabs
                    tabBarUnderlineStyle={{
                    backgroundColor: '#EB6F5F'
                }}>
                    <Tab
                        heading="Details"
                        activeTextStyle={{
                        color: '#EB6F5F',
                        fontWeight: 'bold'
                    }}
                        textStyle={{
                        color: '#000',
                        fontWeight: 'bold'
                    }}
                        tabStyle={{
                        backgroundColor: "#fff"
                    }}
                        activeTabStyle={{
                        backgroundColor: "#fff"
                    }}>
                        <Tab1 navigation={this.props.navigation}/>
                    </Tab>
                    <Tab
                        heading="Notifications"
                        activeTextStyle={{
                        color: '#EB6F5F',
                        fontWeight: 'bold'
                    }}
                        textStyle={{
                        color: '#000',
                        fontWeight: 'bold'
                    }}
                        tabStyle={{
                        backgroundColor: "#fff"
                    }}
                        activeTabStyle={{
                        backgroundColor: "#fff"
                    }}>
                        <Tab2 navigation={this.props.navigation}/>
                    </Tab>
                </Tabs>
        <Footer style={styles.footer}>
        <View style={{ width: width, justifyContent: 'space-around', backgroundColor: "#fff",
            flexDirection: 'row', alignItems: "center"}}>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.Events()}>
                    <Image source={require('../Images/Home.png')}
                        style={{ width: 35, height: 35, }} />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity  onPress={() => this.Event()} >
                    <Image resizeMode={'contain'}
                        source={require('../Images/Event.png')}
                        style={{ width: 35, height: 35, }} />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                 onPress={() => this.Search()} >
                    <Image source={require('../Images/Search.png')}
                        style={{ width: 35, height: 35, }} />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("NonProfit")}
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
        flex: 1,
        height: window.height + 200,
        backgroundColor: '#F7F9F9'
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
        alignItems: 'center'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    linearGradient: {

        height: 70,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    }
});
