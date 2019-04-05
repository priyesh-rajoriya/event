import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, Image, AppRegistry, TextInput, TouchableOpacity
} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Header, Content, Card, CardItem, Body, } from 'native-base';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import RNGooglePlaces from 'react-native-google-places';
import CountDown from 'react-native-countdown-component';
let data = [{
  value: '1',
}, {
  value: '2',
}, {
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
}, {
  value: '7',
}];
export default class TicketDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: '',
      value: '',
      priceSales: false,
      hideButtonText:'Less info',
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.eventTypeRef = this.updateRef.bind(this, 'eventType');
  }

  onChangeText(text) {
    ['eventType']
      .map((name) => ({ name, ref: this[name] }))
      .filter(({ ref }) => ref && ref.isFocused())
      .forEach(({ name, ref }) => {
        this.setState({ [name]: text });
      });
  }
  updateRef(name, ref) {
    this[name] = ref;
  }

  openList(params) {
    let { eventType } = this.state;
    var params = this.props.navigation.state.params
    this.props.navigation.navigate(
      'TicketRegistrationForm',
      {
        title: params.title,
        description: params.description,
        organizer_name: params.organizer_name,
        quantity: params.quantity,
        updated_at: params.updated_at,
        start_time: params.start_time,
        from_time: params.from_time,
        to_time: params.to_time,
        start_day: params.start_day,
        start_month: params.start_month,
        end_day: params.end_day,
        end_date: params.end_date,
        value: eventType,
        start_year: params.start_year,
        vanue: params.vanue
      },
    )
  }
  TicketRegistrationForm() {
    this.props.navigation.navigate('TicketRegistrationForm');
    console.log('done');
  };
  SearchResultDetail() {
    this.props.navigation.navigate('SearchResultDetail');
    console.log('done');
  };

  priceSales() {
    if (this.state.priceSales == false) {
      this.setState({ priceSales: true, hideButtonText:'Less info', })
    } else if (this.state.priceSales == true) {
      this.setState({ priceSales: false, hideButtonText:'More info', })
    }
  }
  render() {
    var params = this.props.navigation.state.params
    console.log(this.state.value, 'Value Check')
    let { eventType } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10, }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image style={{ height: 30, width: 35, marginLeft: 5, tintColor: 'black' }}
              source={require('../Images/Icons/keyboard-backspace.png')} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: '#1C1C1C', marginLeft: 70 }}>Ticket Details
         </Text>
        </View>
        <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 20, color: '#1C1C1C' }}>{params.title}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 17, marginLeft: 20, marginTop: 5, }}>by
         </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 17, marginLeft: 5, marginTop: 5, color: '#81BEF7' }}>{params.organizer_name}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontSize: 14, marginLeft: 20, marginTop: 20, color: "red" }}>{params.start_day}, {params.start_month}, {params.end_date}, {params.start_year} from {params.from_time} to{'\n'} {params.to_time}
          </Text>
        </View>

        <View style={{ marginRight: 20, marginLeft: 20, marginTop: 25, height: 10 }}>
          <View style={{ flexDirection: 'row', height: 50, backgroundColor: '#D8D8D8', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 14, position: 'absolute', left: 10 }}> Ticket Type</Text>
            <Text style={{ fontSize: 14, textAlign: "center", marginLeft: 35 }}> Price</Text>
            <Text style={{ fontSize: 14, position: 'absolute', right: 20 }}> Qty</Text>
          </View>
          <View style={{ flexDirection: 'row', height: 50, backgroundColor: '#F8F8FF', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ position: 'absolute', left: 5 }}>
              <Text style={{ fontSize: 13, color: 'black' }}>IPSUM-2018,indore</Text>
              <TouchableOpacity
              onPress={() => this.priceSales()}>
                <Text style={{ fontSize: 10, color: '#81BEF7', }}> ({this.state.hideButtonText}) </Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 15, marginLeft: 40, color: 'red' }}> Free</Text>
            <View style={{ height: 30, width: 60, justifyContent: "center", backgroundColor: 'lightgray', position: 'absolute', right: 10 }}>

              <Dropdown
                label='1'
                ref={this.eventTypeRef}
                containerStyle={{ marginTop: -20, marginLeft: 5 }}
                value={eventType}
                onChangeText={this.onChangeText}
                data={eventTypeData}
                labelFontSize={1}
              />

            </View>
          </View>

          {this.state.priceSales &&
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'black' }}>Price: Free</Text><Text style={{ position: 'absolute', right: 10, color: "black" }}>Sales End: {params.start_month}, {params.end_date}, {params.start_year} </Text>
            </View>
          }

        </View>
        <TouchableOpacity style={{ marginLeft: 30, marginRight: 30, marginTop: 150 }} onPress={() => this.openList(params)}>
          <View style={{ height: 50, borderRadius: 3, justifyContent: 'center', alignItems: 'center', backgroundColor: '#6AD218' }}>
            <Text style={{ fontSize: 20, color: '#fff', }}>Register </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const eventTypeData = [
  {
    value: '1',
  }, {
    value: '2',
  }, {
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
  }, {
    value: '7',
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
