import React, {Component} from "react";
import {
    AppRegistry,
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';
import Splash from './Components/Splash';
import EnterPassword from './Components/EnterPassword';
//1
import PickLocation from './Components/PickLocation';
//2
import EnterLocation from './Components/EnterLocation';
//3
import categories from './Components/categories';
//4
import Login from './Components/Login';
//5
import Register from './Components/Register';
import Events from './Components/Events';
import Search from './Components/Search';
import SearchResult from './Components/SearchResult';
import Screen10 from './Components/Screen10';
import SearchResultDetail from './Components/SearchResultDetail';
import TicketDetails from './Components/TicketDetails';
import TicketRegistrationForm from './Components/TicketRegistrationForm';
import UserPro from './Components/UserPro';
import ViewTicket from './Components/ViewTicket';
import userProfile from './Components/userProfile';
import editUserProfile from './Components/editUserProfile';
import Settings from './Components/Settings';
import PushNotifications from './Components/PushNotifications';
import Legal from './Components/Legal';
import VolunteerFormDatenTime from './Components/VolunteerFormDatenTime';
import VolunteerFormNextStep from './Components/VolunteerFormNextStep';
import VolunteeringEvents from './Components/VolunteeringEvents';
import VolunteerWall from './Components/VolunteerWall';
import Event from './Components/Event';
import AddHours from './Components/AddHours';
import SearchFilter from './Components/SearchFilter';
import GetCurrentLocation from './Components/GetCurrentLocation';
import NonProfit from './Components/NonProfit';
import Home from './Components/Home';
import OTP from './Components/OTP';
import ForgotPassword from './Components/ForgotPassword';
import SideMenu from './Components/SideMenu';
import QrCode from './Components/QrCode';
import NonProfitEventDetails from './Components/NonProfitEventDetails';
import NotificationDetail from './Components/NotificationDetail';
import Calender from './Components/Calender';
import BecomeaMemberform from './Components/BecomeaMemberform';
import temp from './Components/temp';


import {DrawerNavigator, StackNavigator, NavigationActions} from "react-navigation";

const HomeDrawer = DrawerNavigator({
    Main: {
      screen: Home,
        screenProps :{
          name: 'Home',
      }
    },
},
{
    Name: 'Main',
   contentComponent : props => <SideMenu {...props} />,
   header: null,
   headerMode: 'none'
  }
 );

const Newproject = StackNavigator({
    Splash: {
        screen: Splash
    },
    OTP: {
        screen: OTP
    },
    PickLocation: {
        screen: PickLocation
    },
    EnterLocation: {
        screen: EnterLocation
    },
    categories: {
        screen: categories
    },
    Login: {
        screen: Login
    },
    EnterPassword: {
        screen: EnterPassword
    },
    Register: {
        screen: Register
    },
    Events: {
        screen: Events
    },
    Search: {
        screen: Search
    },
    SearchResult: {
        screen: SearchResult
    },
    SearchResultDetail: {
        screen: SearchResultDetail
    },
    TicketDetails: {
        screen: TicketDetails
    },
    TicketRegistrationForm: {
        screen: TicketRegistrationForm
    },
    UserPro: {
        screen: UserPro
    },
    ViewTicket: {
        screen: ViewTicket
    },
    userProfile: {
        screen: userProfile
    },
    editUserProfile: {
        screen: editUserProfile
    },
    Settings: {
        screen: Settings
    },
    PushNotifications: {
        screen: PushNotifications
    },
    Legal: {
        screen: Legal
    },
    VolunteerFormDatenTime: {
        screen: VolunteerFormDatenTime
    },
    VolunteerFormNextStep: {
        screen: VolunteerFormNextStep
    },
    VolunteeringEvents: {
        screen: VolunteeringEvents
    },
    VolunteerWall: {
        screen: VolunteerWall
    },
    Event: {
        screen: Event
    },
    AddHours: {
        screen: AddHours
    },
    SearchFilter: {
        screen: SearchFilter
    },
    GetCurrentLocation: {
        screen: GetCurrentLocation
    },
    Home: {
        screen: HomeDrawer
    },
    NonProfit:{
        screen: NonProfit
    },
    NonProfitEventDetails:{
        screen: NonProfitEventDetails
    },
    ForgotPassword:{
        screen: ForgotPassword
    },
    QrCode:{
        screen: QrCode
    },
    NotificationDetail:{
        screen: NotificationDetail
    },
    Calender:{
        screen: Calender
    },
    BecomeaMemberform:{
        screen: BecomeaMemberform
    },temp:{
        screen: temp
    },
 },{
    initialRouteName: 'Splash',
    headerMode: 'none'
});
export default Newproject
console.disableYellowBox = true;