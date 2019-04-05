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
    Alert, FlatList,
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
    Label
} from 'native-base';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            toggleLeft: false,
            toggleLeft1: false,
            toggleLeft2: false,
            toggleLeft3: false,
            toggleLeft4: false,
            toggleLeft5: false,
            toggleLeft6: false,
            toggleLeft7: false,
            isVisible: false,
            isVisible1: false,
            isVisible2: false,
            isVisible3: false,
            isVisible4: false,
            isVisible5: false,
            empty: false,
            number: 0
        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    async componentWillMount() {
        var params = this.props.navigation.state.params
        if (params.array.length != 0) {
            this.setState({
                data: params.array,
                number: params.array.length
            })
        } else {
            this.setState({
                empty: true
            })
        }
    }
    async  getEvents() {
        this.setState({ isLoading: true });
        const config = {
            method: 'POST',
            headers: {
            },
            body: '',
        }
        console.log(config)
        await fetch('http://ec2-52-207-124-182.compute-1.amazonaws.com:3333/api/v1/getEvents?user_id=2&lat=22.7196&lng=75.8577', config).then(res => res.json())
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
    openList(item) {
        this.props.navigation.navigate(
            'SearchResultDetail',
            {
                title: item.title,
                description: item.description,
                quantity: item.quantity,
                organizer_name: item.organizer_name,
                description: item.description,
                vanue1: item.vanue1,
                vanue2: item.vanue2,
                updated_at: item.updated_at,
                start_time: item.start_time,
                from_time: item.from_time,
                to_time: item.to_time,
                end_time: item.end_time,
                end_date: item.end_date,
                end_month: item.end_month,
                end_year: item.end_year,
                start_date: item.start_date,
                start_day: item.start_day,
                start_month: item.start_month,
                start_year: item.start_year,
                vanue_lat: item.vanue_lat,
                image_url: item.image_url,
                vanue_lng: item.vanue_lng,
            },
        );
    }

    onShow = () => {
        this.toggle()
        if (this.state.show == false) {
            this.setState({
                show: true
            })
        } else {
            this.setState({
                show: false
            })
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
    onShow2 = () => {
        this.toggle2()
        if (this.state.show == false) {
            this.setState({
                show1: true
            })
        } else {
            this.setState({
                show1: false
            })
        }
    }
    onShow3 = () => {
        this.toggle3()
        if (this.state.show == false) {
            this.setState({
                show2: true
            })
        } else {
            this.setState({
                show2: false
            })
        }
    }
    onShow4 = () => {
        this.toggle4()
        if (this.state.show == false) {
            this.setState({
                show2: true
            })
        } else {
            this.setState({
                show2: false
            })
        }
    }
    onShow5 = () => {
        this.toggle5()
        if (this.state.show == false) {
            this.setState({
                show2: true
            })
        } else {
            this.setState({
                show2: false
            })
        }
    }

    toggle() {
        if (this.state.isVisible) {
            this.setState({
                isVisible: false,
            });
        } else {
            this.setState({
                isVisible: true,
            });
        }
    }
    toggle1() {
        if (this.state.isVisible1) {
            this.setState({
                isVisible1: false,
            });
        } else {
            this.setState({
                isVisible1: true,
            });
        }
    }
    toggle2() {
        if (this.state.isVisible2) {
            this.setState({
                isVisible2: false,
            });
        } else {
            this.setState({
                isVisible2: true,
            });
        }
    }
    toggle3() {
        if (this.state.isVisible3) {
            this.setState({
                isVisible3: false,
            });
        } else {
            this.setState({
                isVisible3: true,
            });
        }
    }
    toggle4() {
        if (this.state.isVisible4) {
            this.setState({
                isVisible4: false,
            });
        } else {
            this.setState({
                isVisible4: true,
            });
        }
    }
    toggle5() {
        if (this.state.isVisible5) {
            this.setState({
                isVisible5: false,
            });
        } else {
            this.setState({
                isVisible5: true,
            });
        }
    }

    SearchResultDetail() {
        this.props.navigation.navigate('SearchResultDetail');
        console.log('done');
    };
    SearchFilter() {
        this.props.navigation.navigate('SearchFilter');
        console.log('done');
    };
    Search() {
        this.props.navigation.navigate('Search');
        console.log('done');
    };

    //------exit app start------//
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }
    //------exit app end------//

    render() {
        return (
            <View style={styles.container}>
                <Header
                    hasTabs
                    style={{
                        backgroundColor: "transparent",
                        justifyContent: 'center', marginTop: 20
                    }}
                    androidStatusBarColor="#D35400"
                    iosBarStyle="dark-content">
                    <View
                        style={{
                            width: width,
                            flexDirection: "row"
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
                                    tintColor: '#000'
                                }} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("SearchFilter")}
                            style={{ position: "absolute", right: 20 }}>
                            <Image
                                resizeMode='contain'
                                style={{ height: 25, width: 30, marginTop: 10 }}
                                source={require('../Images/Filter.png')} />
                        </TouchableOpacity>
                    </View>
                </Header>
                <ScrollView style={{ height: '100%' }}>
                    <Text style={{ fontSize: 25, marginLeft: 20, marginTop: 15, color: '#E6E6E6' }}>Search for...</Text>
                    <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: 'center', marginLeft: 20, marginRight: 20 }}>
                        <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false} >
                            <View>
                                <TouchableOpacity
                                    onPress={() => this.setState({ toggleLeft: !this.state.toggleLeft })}
                                    style={[styles.leftTab, this.state.toggleLeft && styles.leftTabChange]}>
                                    <Text style={{ fontSize: 14, color: '#848484', margin: 10 }}>This month
            </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => this.setState({ toggleLeft1: !this.state.toggleLeft1 })}
                                    style={[styles.leftTab, this.state.toggleLeft1 && styles.leftTabChange]}>
                                    <Text style={{ fontSize: 14, color: '#848484', margin: 10 }}>DIY
            </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => this.setState({ toggleLeft2: !this.state.toggleLeft2 })}
                                    style={[styles.leftTab, this.state.toggleLeft2 && styles.leftTabChange]}>
                                    <Text style={{ fontSize: 14, color: '#848484', margin: 10 }}>Party
            </Text>
                                </TouchableOpacity>
                            </View>
                            <View >
                                <TouchableOpacity
                                    onPress={() => this.setState({ toggleLeft3: !this.state.toggleLeft3 })}
                                    style={[styles.leftTab, this.state.toggleLeft3 && styles.leftTabChange]}>
                                    <Text style={{ fontSize: 14, color: '#848484', margin: 10 }}>Business
            </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => this.setState({ toggleLeft4: !this.state.toggleLeft4 })}
                                    style={[styles.leftTab, this.state.toggleLeft4 && styles.leftTabChange]}>
                                    <Text style={{ fontSize: 14, color: '#848484', margin: 10 }}>This month
            </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => this.setState({ toggleLeft5: !this.state.toggleLeft5 })}
                                    style={[styles.leftTab, this.state.toggleLeft5 && styles.leftTabChange]}>
                                    <Text style={{ fontSize: 14, color: '#848484', margin: 10 }}>DIY
            </Text>
                                </TouchableOpacity>
                            </View>
                            <View >
                                <TouchableOpacity
                                    onPress={() => this.setState({ toggleLeft6: !this.state.toggleLeft6 })}
                                    style={[styles.leftTab, this.state.toggleLeft6 && styles.leftTabChange]}>
                                    <Text style={{ fontSize: 14, color: '#848484', margin: 10 }}>Party
            </Text>
                                </TouchableOpacity>
                            </View>
                            <View >
                                <TouchableOpacity
                                    onPress={() => this.setState({ toggleLeft7: !this.state.toggleLeft7 })}
                                    style={[styles.leftTab, this.state.toggleLeft7 && styles.leftTabChange]}>
                                    <Text style={{ fontSize: 14, color: '#848484', margin: 10 }}>Business
            </Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>

                    <Text style={{ fontSize: 20, marginTop: 30, marginLeft: 20, color: '#848484' }}>
                        {this.state.number} Results
          </Text>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => this.openList(item)}>
                                <View style={{
                                    flexDirection: 'row', maxHeight: 125,
                                    marginTop: 30, marginLeft: 10, marginRight: 10, width: "100%",
                                }}>
                                    <Image style={{ height: 70, width: 100, marginLeft: 5, borderRadius: 5, }}
                                        source={{ uri: item.image_url }} />
                                    <View style={{
                                        marginLeft: 10, width: 230
                                    }}>
                                        <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 14, marginTop: 1 }}>
                                            {item.title},{item.organizer_name}</Text>
                                        <View style={{
                                            flexDirection: 'row', width: 170, height: 50
                                        }}>
                                            <View>
                                                <Text style={{ color: 'gray', fontSize: 12, marginTop: 1 }}>
                                                    set, {item.end_date}{item.end_month}-{item.from_time}-{item.to_time},{item.vanue1},{item.vanue2}</Text>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
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
    leftTab: {
        height: 35, backgroundColor: '#F2F2F2', justifyContent: 'center', borderRadius: 15, margin: 5
    },
    leftTabChange: {
        backgroundColor: '#F79F81',
    },
});
//marginLeft:20,width:140,height:40,borderRadius:20,borderColor:"#FA8258",borderWidth:1,backgroundColor:'transparent',justifyContent:'center'