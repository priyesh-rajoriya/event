import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text, ListView, Dimensions, FlatList,
    View, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView, backgroundColor, AsyncStorage
} from 'react-native';
import { Container, Header, Content, Button, Footer, FooterTab, Icon, Card, Tab, Tabs, Badge } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Spinner from './Spinner';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            isVisible: false,
            isVisible1: false,
            isVisible2: false,
            isVisible3: false,
            isVisible4: false, isLoading: true
        };
    }

    async componentWillMount() {
        var user_id = await AsyncStorage.getItem('id');
        this.setState({ user_id: user_id });
        this.getEvents();
    };

    async  getEvents() {
        this.setState({ isLoading: true })
        const config = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "user_id": this.state.user_id
            }),
        }
        console.log(config, 'priyesh')
        await fetch('http://ec2-52-207-124-182.compute-1.amazonaws.com:3333/api/v1/likeEventListOfUser', config).then(res => res.json())
            .then(res => {

                console.log(res);
                // this.props.navigation.navigate("ViewTicket",{data:res.data})
                this.setState({
                    data: res.data
                })
                this.setState({ isLoading: false })

            }).catch((error) => {
                this.setState({ isLoading: false })
                console.log(error);
            });
    };
    async likeAndUnlike(value, value1) {
        var temp;
        if (value1 == "0") {
            temp = true
        } else {
            temp = false
        }
        // console.log(AllAPI.like+"?"+"event_id="+value.id +"&user_id="+"&is_like="+temp)
        await fetch(AllAPI.like + "?" + "event_id=" + value.id + "&user_id=" + this.state.user_id + "&is_like=" + temp)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.getEvents();
            })
            .catch((error) => {
                this.setState({ isLoading: false })
                // this.hart();
                // console.log(error);
            });
    }


    openList(item) {
        console.log(item,'item.from_time');
        this.props.navigation.navigate(
            'SearchResultDetail',
            {
                title: item.title,
                description: item.description,
                quantity: item.quantity,
                updated_at: item.updated_at,
                start_time: item.start_time,
                from_time: item.from_time,
                to_time: item.to_time,
                vanue_lat: item.vanue_lat,
                vanue_lng: item.vanue_lng,
                start_day: item.start_day,
                start_month: item.start_month,
                is_like: item.is_like,
                end_day: item.end_day,
                end_date: item.end_date,
                start_year: item.start_year,
                image_url: item.image_url,
                vanue1: item.vanue1,
                vanue2: item.vanue2
            },
        );
    }

    Events() {
        this.props.navigation.navigate('Events');
        console.log('done');
    };
    Home() {
        this.props.navigation.navigate('Home');
        console.log('done');
    };
    Search() {
        this.props.navigation.navigate('Search');
        console.log('done');
    };
    userProfile() {
        this.props.navigation.navigate('userProfile');
        console.log('done');
    };
    NonProfit() {
        this.props.navigation.navigate('NonProfit');
        console.log('done');
    };
    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        return (
            <View style={styles.container}>
                <LinearGradient start={{ x: 1, y: 1 }} end={{ x: 0, y: 1 }}
                    colors={['#F27A50', '#EE6E61']}>
                    <Header hasTabs
                        style={{ backgroundColor: "transparent", justifyContent: 'center', }}
                        androidStatusBarColor="#D35400"
                        iosBarStyle="light-content">

                        <View style={{ width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>

                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}
                                style={{ marginLeft: 10, position: 'absolute', left: 0, }}>
                                <Image source={require('../Images/Icons/keyboard-backspace.png')}
                                    style={{ width: 30, height: 35, tintColor: '#fff' }} />
                            </TouchableOpacity>
                            <Text style={{ fontWeight: 'bold', color: "#FFF", fontSize: 18, position: 'absolute', }}>
                                Events</Text>
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

                <ScrollView>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => this.openList(item)}>
                                <View style={{
                                    flexDirection: 'row', maxHeight: 100,
                                    marginTop: 30, marginLeft: 10, marginRight: 10, width: "100%",
                                }}>
                                    <Image style={{ height: 70, width: 100, marginLeft: 5, borderRadius: 5, }}
                                        source={{ uri: item.image_url }} />

                                    <View style={{
                                        marginLeft: 10, width: 230
                                    }}>
                                        <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 14, marginTop: 1 }}>
                                            {item.title}</Text>
                                        <View style={{
                                            flexDirection: 'row', width: 170
                                        }}>
                                            <View>
                                                <Text style={{ color: 'gray', fontSize: 12, marginTop: 1 }}>
                                                    set, {item.end_date}{item.end_month}-{item.from_time}-{item.to_time},{item.vanue}</Text>

                                            </View>
                                        </View>
                                        <View style={{ position: 'absolute', right: 5, marginTop: 40 }}>
                                            <TouchableOpacity onPress={() => this.likeAndUnlike(item, "0")}>
                                                <View>
                                                    {item.is_like == false && <Image
                                                        style={{
                                                            height: 22,
                                                            width: 22,
                                                        }}
                                                        source={require('../Images/hart.png')} />}
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => this.likeAndUnlike(item, "1")}>
                                                <View>
                                                    {item.is_like == true && <Image
                                                        style={{
                                                            height: 22,
                                                            width: 22,
                                                        }}
                                                        source={require('../Images/Heart-Button.png')} />}
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        }
                        keyExtractor={(item, index) => index}
                    />
                </ScrollView>
                <Footer style={styles.footer} >

                    <View style={{
                        width: width, justifyContent: 'space-around', backgroundColor: "#fff",
                        flexDirection: 'row', alignItems: "center"
                    }}>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                                <Image source={require('../Images/Home.png')}
                                    style={{ width: 35, height: 35, }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity >
                                <Image resizeMode={'contain'}
                                    source={require('../Images/star-icon-active.png')}
                                    style={{ width: 30, height: 30, }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Search")}
                            >
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
                                <Image source={require('../Images/User.png')}
                                    style={{ width: 35, height: 35, }} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </Footer>

                {this.state.isLoading &&
                    <Spinner />
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: '100%',
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
});
