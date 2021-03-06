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
    Alert
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

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class Splash extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            alreadyExit: "",
            isLoading: false
        };
    };

    // async componentDidMount() {
    //     try {
    //         setTimeout(() => {
    //             this.props.navigation.navigate('PickLocation');
    //         }, 2000);
    //     }
    //     catch (error) {
    //         console.log('error' + error)
    //     }
    // };
    async componentWillMount() {
        var userid = await AsyncStorage.getItem('id');
        console.log(userid, 'id');
        try {
            setTimeout(() => {
                if (userid !== null && userid !== "" && userid !== undefined) {
                    this.props.navigation.navigate('Home');
                } else {
                    this.props.navigation.navigate('Login');
                }
            }, 1500);
        }
        catch (error) {
            console.log('error' + error)
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Image style={{ height: '100%', width: '100%' }}
                    source={require('../Images/logo.png')} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: window.height / 2,
        width: window.width / 2
    },
    logo: {
        marginLeft: 20,
        marginRight: 20,
        width: 400,
        height: 200,
    },
})