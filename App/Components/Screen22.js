import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  backgroundColor
} from 'react-native';
import CheckBox1 from 'react-native-check-box';
import {
  Container,
  Header,
  Content,
  Button,
  Footer,
  FooterTab,
  Icon,
  Badge,
  CheckBox
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

var minus = "-";
var plus = "+";

export default class Screen22 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      toggleLeft: false,
      toggleLeft1: false,
      toggleLeft2: false,
      toggleLeft3: false,
      toggleLeft4: false,
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,

      checked7: false,
      checked8: false,
      checked9: false,
      checked10: false,
      checked11: false,
      checked12: false,

      checked13: false,
      checked14: false,
      checked15: false,
      checked16: false,
      checked17: false,
      checked18: false,

      checked19: false,
      checked20: false,
      checked21: false,

      checked22: false,
      checkbox1: '',
      checkedz: false,
      afterAll: false,

      sunday: false,
      monday: false,
      tuesday: false,
      wednesday: false,
      thrusday: false,
      friday: false,
      saturday: false,
      sundaySign: plus,
      mondaySign: plus,
      tuesdaySign: plus,
      wednesdaySign: plus,
      thrusdaySign: plus,
      fridaySign: plus,
      saturdaySign: plus,
      sunday_morning: false,
      sunday_afternoon: false,
      sunday_evening: false,
      monday_morning: false,
      monday_afternoon: false,
      monday_evening: false,
      tuesday_morning:false,
      tuesday_afternoon: false,
      tuesday_evening: false,
      wednesday_morning: false,
      wednesday_afternoon: false,
      wednesday_evening: false,
      thursday_morning: false,
      thursday_afternoon: false,
      thursday_evening: false,
      friday_morning: false,
      friday_afternoon: false,
      friday_evening: false,
      saturday_morning: false,
      saturday_afternoon: false,
      saturday_evening: false,


    };
  }
  // toggleCheckbox1() { 	this.setState({ 		checkbox1: !this.state.checkbox1, 	});
  // }
  sunday_morning() {
    console.log("sunday_morning");
    
    if (this.state.checked1 == false) {
      this.setState({checked1: true});
    } else {
      this.setState({checked1: false});
    }

  }
  sunday_afternoon() {
    if (this.state.checked2 == false) {
      this.setState({checked2: true});
    } else {
      this.setState({checked2: false});
    }

  }
  sunday_evening() {
    if (this.state.checked3 == false) {
      this.setState({checked3: true});
    } else {
      this.setState({checked3: false});
    }

  }

  monday_morning() {
    if (this.state.checked4 == false) {
      this.setState({checked4: true});
    } else {
      this.setState({checked4: false});
    }

  }
  monday_afternoon() {
    if (this.state.checked5 == false) {
      this.setState({checked5: true});
    } else {
      this.setState({checked5: false});
    }

  }
  monday_evening() {
    if (this.state.checked6 == false) {
      this.setState({checked6: true});
    } else {
      this.setState({checked6: false});
    }

  }

  tuesday_morning() {
    if (this.state.checked7 == false) {
      this.setState({checked7: true});
    } else {
      this.setState({checked7: false});
    }

  }
  tuesday_afternoon() {
    if (this.state.checked8 == false) {
      this.setState({checked8: true});
    } else {
      this.setState({checked8: false});
    }

  }
  tuesday_evening() {
    if (this.state.checked9 == false) {
      this.setState({checked9: true});
    } else {
      this.setState({checked9: false});
    }

  }

  wednesday_morning() {
    if (this.state.checked10 == false) {
      this.setState({checked10: true});
    } else {
      this.setState({checked10: false});
    }

  }
  wednesday_afternoon() {
    if (this.state.checked11 == false) {
      this.setState({checked11: true});
    } else {
      this.setState({checked11: false});
    }

  }
  wednesday_evening() {
    if (this.state.checked12 == false) {
      this.setState({checked12: true});
    } else {
      this.setState({checked12: false});
    }

  }

  thursday_morning() {
    if (this.state.checked13 == false) {
      this.setState({checked13: true});
    } else {
      this.setState({checked13: false});
    }

  }
  thursday_afternoon() {
    if (this.state.checked14 == false) {
      this.setState({checked14: true});
    } else {
      this.setState({checked14: false});
    }

  }
  thursday_evening() {
    if (this.state.checked15 == false) {
      this.setState({checked15: true});
    } else {
      this.setState({checked15: false});
    }

  }

  friday_morning() {
    if (this.state.checked16 == false) {
      this.setState({checked16: true});
    } else {
      this.setState({checked16: false});
    }

  }
  friday_afternoon() {
    if (this.state.checked17 == false) {
      this.setState({checked17: true});
    } else {
      this.setState({checked17: false});
    }

  }
  friday_evening() {
    if (this.state.checked18 == false) {
      this.setState({checked18: true});
    } else {
      this.setState({checked18: false});
    }

  }

  saturday_morning() {
    if (this.state.checked19 == false) {
      this.setState({checked19: true});
    } else {
      this.setState({checked19: false});
    }

  }
  saturday_afternoon() {
    if (this.state.checked20 == false) {
      this.setState({checked20: true});
    } else {
      this.setState({checked20: false});
    }

  }
  saturday_evening() {
    if (this.state.checked21 == false) {
      this.setState({checked21: true});
    } else {
      this.setState({checked21: false});
    }

  }

  select() {
    if (this.state.toggleLeft == false) {
      this.setState({toggleLeft: true});
      this.setState({toggleLeft1: false})
      this.setState({toggleLeft2: false})
      this.setState({toggleLeft3: false})
      this.setState({toggleLeft4: false})
    } else {
      this.setState({toggleLeft: false});
      this.setState({toggleLeft1: false})
      this.setState({toggleLeft2: false})
      this.setState({toggleLeft3: false})
      this.setState({toggleLeft4: false})
    }
  };
  select1() {
    if (this.state.toggleLeft1 == false) {
      this.setState({toggleLeft: false});
      this.setState({toggleLeft1: true})
      this.setState({toggleLeft2: false})
      this.setState({toggleLeft3: false})
      this.setState({toggleLeft4: false})
    } else {
      this.setState({toggleLeft: false});
      this.setState({toggleLeft1: false})
      this.setState({toggleLeft2: false})
      this.setState({toggleLeft3: false})
      this.setState({toggleLeft4: false})
    }
  }
  select2() {
    if (this.state.toggleLeft2 == false) {
      this.setState({toggleLeft: false});
      this.setState({toggleLeft1: false})
      this.setState({toggleLeft2: true})
      this.setState({toggleLeft3: false})
      this.setState({toggleLeft4: false})
    } else {
      this.setState({toggleLeft: false});
      this.setState({toggleLeft1: false})
      this.setState({toggleLeft2: false})
      this.setState({toggleLeft3: false})
      this.setState({toggleLeft4: false})
    }
  }
  select3() {
    if (this.state.toggleLeft3 == false) {
      this.setState({toggleLeft: false});
      this.setState({toggleLeft1: false})
      this.setState({toggleLeft2: false})
      this.setState({toggleLeft3: true})
      this.setState({toggleLeft4: false})
    } else {
      this.setState({toggleLeft: false});
      this.setState({toggleLeft1: false})
      this.setState({toggleLeft2: false})
      this.setState({toggleLeft3: false})
      this.setState({toggleLeft4: false})
    }
  }
  select4() {
    if (this.state.toggleLeft1 == false) {
      this.setState({toggleLeft: false});
      this.setState({toggleLeft1: false})
      this.setState({toggleLeft2: false})
      this.setState({toggleLeft3: false})
      this.setState({toggleLeft4: true})
    } else {
      this.setState({toggleLeft: false});
      this.setState({toggleLeft1: false})
      this.setState({toggleLeft2: false})
      this.setState({toggleLeft3: false})
      this.setState({toggleLeft4: false})
    }
  }
  afterAll() {
    if (this.state.checkedz == false) {
      console.log("true");
      this.sunday_morning()
      this.setState({checkedz: true,
        sunday_morning: true,
        sunday_afternoon: true,
        sunday_evening: true,
        checked: true,
        checked1: true,
        checked2: true,
        checked3: true,
        checked4: true,
        checked5: true,
        checked6: true,
        checked7: true,
        checked8: true,
        checked9: true,
        checked10: true,
        checked11: true,
        checked12: true,
        checked13: true,
        checked14: true,
        checked15: true,
        checked16: true,
        checked17: true,
        checked18: true,
        checked19: true,
        checked20: true,
        checked21: true,
        sunday_morning: true,
        sunday_afternoon: true,
        sunday_evening: true,
        monday_morning: true,
        monday_afternoon: true,
        monday_evening: true,
        tuesday_morning:true,
        tuesday_afternoon: true,
        tuesday_evening: true,
        wednesday_morning: true,
        wednesday_afternoon: true,
        wednesday_evening: true,
        thursday_morning: true,
        thursday_afternoon: true,
        thursday_evening: true,
        friday_morning: true,
        friday_afternoon: true,
        friday_evening: true,
        saturday_morning: true,
        saturday_afternoon: true,
        saturday_evening: true,});
        this.setState({checked: !this.state.checked})
        this.moring1();
    } else {
      if (this.state.checkedz == true) {
        console.log("false");
      this.sunday_morning()
      this.setState({checkedz: false,
        checked: false,
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
        checked6: false,
        checked7: false,
        checked8: false,
        checked9: false,
        checked10: false,
        checked11: false,
        checked12: false,
        checked13: false,
        checked14: false,
        checked15: false,
        checked16: false,
        checked17: false,
        checked18: false,
        checked19: false,
        checked20: false,
        checked21: false,
        sunday_morning: false,
        sunday_afternoon: false,
        sunday_evening: false,
        monday_morning: false,
        monday_afternoon: false,
        monday_evening: false,
        tuesday_morning:false,
        tuesday_afternoon: false,
        tuesday_evening: false,
        wednesday_morning: false,
        wednesday_afternoon: false,
        wednesday_evening: false,
        thursday_morning: false,
        thursday_afternoon: false,
        thursday_evening: false,
        friday_morning: false,
        friday_afternoon: false,
        friday_evening: false,
        saturday_morning: false,
        saturday_afternoon: false,
        saturday_evening: false,
      });
      this.setState({checked: !this.state.checked})
      this.moring1();
    }
   }
  }
  Screen23() {
    this
      .props
      .navigation
      .navigate('Screen23');
    console.log('done');
  };
  Screen22() {
    this
      .props
      .navigation
      .navigate('Screen14');
    console.log('done');
  };
  moring1(){
    console.log("moring1")
    this.setState({
      checked1: !this.state.checked1,
    })
      this.setState({
        sunday:false,
        monday:false,
        tuesday:false,
        wednesday:false,
        thursday:false,
        friday:false,
        saturday:false,
      })
  }

  render() {
    return (
      <View style={styles.container}>

        <ImageBackground
          style={{
          height: 100,
          width: window.width
        }}
          source={require('../Images/VolunteerBg.png')}>
          <View
            style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: "100%"
          }}>
            <TouchableOpacity
              style={{
              height: 40,
              width: 40,
              marginTop: 40,
              position: 'absolute',
              left: 10
            }}
              onPress={() => this.props.navigation.goBack()}>
              <Image
                style={{
                height: 30,
                width: 35
              }}
                source={require('../Images/wright.png')}/>
            </TouchableOpacity>
            <Text
              style={{
              fontSize: 23,
              color: '#fff',
              textAlign: 'center',
              backgroundColor: 'transparent',
              marginTop: 40,
              alignSelf: 'center'
            }}>Volunteer Form</Text>
          </View>
        </ImageBackground>
        <ScrollView style={{
          height: '100%'
        }}>
          <Text
            style={{
            marginTop: 20,
            fontSize: 20,
            textAlign: 'center',
            color: '#EB984E'
          }}>
            Date and Time Availability</Text>
          <TouchableOpacity
            onPress={() => this.setState({
            sunday: !this.state.sunday,
            sign: (this.state.sign == "+" && minus) || (this.state.sign == "-" && plus)
          })}>
            <View
              style={{
              height: 45,
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: '#E5E7E9'
            }}>
              <Text
                style={{
                fontSize: 19,
                marginLeft: 10,
                position: 'absolute',
                alignSelf: 'center',
                left: 10
              }}>Sunday
              </Text>
              <Text
                style={{
                fontSize: 19,
                marginLeft: 10,
                position: 'absolute',
                alignSelf: 'center',
                right: 10
              }}>{this.state.sundaySign}</Text>
            </View>
          </TouchableOpacity>

          {this.state.sunday && <View
            style={{
            flexDirection: 'row',
            alignSelf:'center',
            maxWidth:"80%",
            marginLeft:-20
          }}>
            <View style={{
              flexDirection: 'row'
            }}>
              <CheckBox1
                style={{
                margin: 5,
              }}
                color="red"
                isChecked={this.state.checked1}
                onClick={() => this.moring1()}
                //onPress={() => this.sunday_morning()}
                />
              <Text
                style={{
                margin: 5,

              }}>
                Morning</Text>
            </View>
            <View style={{
              flexDirection: 'row'
            }}>
              <CheckBox1
                style={{
                margin: 5,
              }}
                color="red"
                isChecked={this.state.checked2}
                onClick={() => this.setState({checked2: !this.state.checked2})}
                onPress={() => this.sunday_afternoon()}/>
              <Text
                style={{
                margin: 5,
                marginLeft: 10
              }}>
                Afternoon</Text>
            </View>
            <View style={{
              flexDirection: 'row'
            }}>
              <CheckBox1
                style={{
                margin: 5,
                marginLeft: 8
              }}
                color="red"
                isChecked={this.state.checked3}
                onClick={() => this.setState({checked3: !this.state.checked3})}
                onPress={() => this.sunday_evening()}/>
              <Text
                style={{
                margin: 7,
                marginLeft: 10
              }}>
                Evening</Text>
            </View>
          </View>
}
          <TouchableOpacity
            onPress={() => this.setState({
            monday: !this.state.monday,
            sign: (this.state.sign == "+" && minus) || (this.state.sign == "-" && plus)
          })}>
            <View
              style={{
              height: 45,
              marginTop: 2,
              marginLeft: 20,
              marginRight: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: '#E5E7E9'
            }}>
              <Text
                style={{
                fontSize: 19,
                marginLeft: 10,
                position: 'absolute',
                alignSelf: 'center',
                left: 10
              }}>Monday
              </Text>
              <Text
                style={{
                fontSize: 19,
                marginLeft: 10,
                position: 'absolute',
                alignSelf: 'center',
                right: 10
              }}>{this.state.mondaySign}</Text>
            </View>
          </TouchableOpacity>

          {this.state.monday && <View
            style={{
            flexDirection: 'row',
            alignSelf:'center',
            maxWidth:"80%",
            marginLeft:-20
          }}>
            <View style={{
              flexDirection: 'row'
            }}>
              <CheckBox1
                style={{
                margin: 5,
              }}
                color="red"
                isChecked={this.state.checked4}
                onClick={() => this.setState({checked: !this.state.checked})}
                onPress={() => this.monday_morning()}/>
              <Text
                style={{
                margin: 7,
              }}>
                Morning</Text>
            </View>
            <View style={{
              flexDirection: 'row'
            }}>
              <CheckBox1
                style={{
                margin: 5,
              }}
                color="red"
                isChecked={this.state.checked5}
                onClick={() => this.setState({checked: !this.state.checked})}
                onPress={() => this.monday_afternoon()}/>
              <Text
                style={{
                margin: 7,
              }}>
                Afternoon</Text>
            </View>
            <View style={{
              flexDirection: 'row'
            }}>
              <CheckBox1
                style={{
                margin: 5,
              }}
                color="red"
                isChecked={this.state.checked6}
                onClick={() => this.setState({checked: !this.state.checked})}
                onPress={() => this.monday_evening()}/>
              <Text
                style={{
                margin: 7,
              }}>
                Evening</Text>
            </View>
          </View>
}
          <TouchableOpacity
            onPress={() => this.setState({
            tuesday: !this.state.tuesday,
            sign: (this.state.sign == "+" && minus) || (this.state.sign == "-" && plus)
          })}>
            <View
              style={{
              height: 45,
              marginTop: 2,
              marginLeft: 20,
              marginRight: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: '#E5E7E9'
              }}>
              <Text
                style={{
                fontSize: 19,
                marginLeft: 10,
                position: 'absolute',
                alignSelf: 'center',
                left: 10
              }}>Tuesday
              </Text>
              <Text
                style={{
                fontSize: 19,
                marginLeft: 10,
                position: 'absolute',
                alignSelf: 'center',
                right: 10
              }}>{this.state.tuesdaySign}</Text>
            </View>
          </TouchableOpacity>
          {this.state.tuesday && <View
            style={{
              flexDirection: 'row',
              alignSelf:'center',
              maxWidth:"80%",
              marginLeft:-20
          }}>
            <View style={{
              flexDirection: 'row'
            }}>
              <CheckBox1
                style={{
                margin: 5,
              }}
                color="red"
                isChecked={this.state.checked7}
                onClick={() => this.setState({checked: !this.state.checked})}
                onPress={() => this.tuesday_morning()}/>
              <Text
                style={{
                margin: 7,
              }}>
                Morning</Text>
            </View>
            <View style={{
              flexDirection: 'row'
            }}>
              <CheckBox1
                style={{
                margin: 5,
              }}
                color="red"
                isChecked={this.state.checked8}
                onClick={() => this.setState({checked: !this.state.checked})}
                onPress={() => this.tuesday_afternoon()}/>
              <Text
                style={{
                margin: 7,
              }}>
                Afternoon</Text>
            </View>
            <View style={{
              flexDirection: 'row'
            }}>
              <CheckBox1
                style={{
                margin: 5,
              }}
                color="red"
                isChecked={this.state.checked9}
                onClick={() => this.setState({checked: !this.state.checked})}
                onPress={() => this.tuesday_evening()}/>
              <Text
                style={{
                margin: 7,
              }}>
                Evening</Text>
            </View>
          </View>
}
          <TouchableOpacity
            onPress={() => this.setState({
            wednesday: !this.state.wednesday,
            sign: (this.state.sign == "+" && minus) || (this.state.sign == "-" && plus)
          })}>
            <View
              style={{
              height: 45,
              marginTop: 2,
              marginLeft: 20,
              marginRight: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: '#E5E7E9'
            }}>
              <Text
                style={{
                fontSize: 19,
                marginLeft: 10,
                position: 'absolute',
                alignSelf: 'center',
                left: 10
              }}>Wednesday
              </Text>
              <Text
                style={{
                fontSize: 19,
                marginLeft: 10,
                position: 'absolute',
                alignSelf: 'center',
                right: 10
              }}>{this.state.wednesdaySign}</Text>
            </View>
          </TouchableOpacity>
          {this.state.wednesday && <View
            style={{
            flexDirection: 'row',
            alignSelf:'center',
            maxWidth:"80%",
            marginLeft:-20
          }}>
            <View style={{
              flexDirection: 'row'
            }}>
              <CheckBox1
                style={{
                margin: 5,
              }}
                color="red"
                isChecked={this.state.checked10}
                onClick={() => this.setState({checked: !this.state.checked})}
                onPress={() => this.wednesday_morning()}/>
              <Text
                style={{
                margin: 5,
              }}>
                Morning</Text>
            </View>
            <View style={{
              flexDirection: 'row'
            }}>
              <CheckBox1
                style={{
                margin: 5,
              }}
                color="red"
                isChecked={this.state.checked11}
                onClick={() => this.setState({checked: !this.state.checked})}
                onPress={() => this.wednesday_afternoon()}/>
              <Text
                style={{
                margin: 7,
              }}>
                Afternoon</Text>
            </View>
            <View style={{
              flexDirection: 'row'
            }}>
              <CheckBox1
                style={{
                margin: 5,
              }}
                color="red"
                isChecked={this.state.checked12}
                onClick={() => this.setState({checked: !this.state.checked})}
                onPress={() => this.wednesday_evening()}/>
              <Text
                style={{
                margin: 5,
              }}>
                Evening</Text>
            </View>
          </View>
}
          <TouchableOpacity
            onPress={() => this.setState({
            thursday: !this.state.thursday,
            sign: (this.state.sign == "+" && minus) || (this.state.sign == "-" && plus)
            })}>
            <View
              style={{
              height: 45,
              marginTop: 2,
              marginLeft: 20,
              marginRight: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: '#E5E7E9'
            }}>
              <Text
                style={{
                fontSize: 19,
                marginLeft: 10,
                position: 'absolute',
                alignSelf: 'center',
                left: 10
              }}>Thursday
              </Text>
              <Text
                style={{
                fontSize: 19,
                marginLeft: 10,
                position: 'absolute',
                alignSelf: 'center',
                right: 10
              }}>{this.state.thrusdaySign}</Text>
            </View>
          </TouchableOpacity>
          {this.state.thursday && <View
            style={{
            flexDirection: 'row',
            alignSelf:'center',
            maxWidth:"80%",
            marginLeft:-20
          }}>
            <View style={{
              flexDirection: 'row'
            }}>
              <CheckBox1
                style={{
                margin: 5,
              }}
                color="red"
                isChecked={this.state.checked13}
                onClick={() => this.setState({checked: !this.state.checked})}
                onPress={() => this.thursday_morning()}/>
              <Text
                style={{
                margin: 7,
              }}>
                Morning</Text>
            </View>
            <View style={{
              flexDirection: 'row'
            }}>
              <CheckBox1
                style={{
                margin: 5,
              }}
                color="red"
                isChecked={this.state.checked14}
                onClick={() => this.setState({checked: !this.state.checked})}
                onPress={() => this.thursday_afternoon()}/>
              <Text
                style={{
                margin: 7,
              }}>
                Afternoon</Text>
            </View>
            <View style={{
              flexDirection: 'row'
            }}>
              <CheckBox1
                style={{
                margin: 5,
              }}
                color="red"
                isChecked={this.state.checked15}
                onClick={() => this.setState({checked: !this.state.checked})}
                onPress={() => this.thursday_evening()}/>
              <Text
                style={{
                margin: 5,
              }}>
                Evening</Text>
            </View>
          </View>
}
          <TouchableOpacity
            onPress={() => this.setState({
            friday: !this.state.friday,
            sign: (this.state.sign == "+" && minus) || (this.state.sign == "-" && plus)
          })}>
            <View
              style={{
              height: 45,
              marginTop: 2,
              marginLeft: 20,
              marginRight: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: '#E5E7E9'
            }}>
              <Text
                style={{
                fontSize: 19,
                marginLeft: 10,
                position: 'absolute',
                alignSelf: 'center',
                left: 10
              }}>Friday
              </Text>
              <Text
                style={{
                fontSize: 19,
                marginLeft: 10,
                position: 'absolute',
                alignSelf: 'center',
                right: 10
              }}>{this.state.fridaySign}</Text>
            </View>
          </TouchableOpacity>
          {this.state.friday && <View
            style={{
            flexDirection: 'row',
            alignSelf:'center',
            maxWidth:"80%",
            marginLeft:-20
          }}>
            <View style={{
              flexDirection: 'row'
            }}>
              <CheckBox1
                style={{
                margin: 5,
              }}
                isChecked={this.state.checked16}
                onClick={() => this.setState({checked: !this.state.checked})}
                onPress={() => this.friday_morning()}color="red"/>
              <Text
                style={{
                margin: 5,
              }}>
                Morning</Text>
            </View>
            <View style={{
              flexDirection: 'row'
            }}>
              <CheckBox1
                style={{
                margin: 5,
              }}
                color="red"
                isChecked={this.state.checked17}
                onClick={() => this.setState({checked: !this.state.checked})}
                onPress={() => this.friday_afternoon()}/>
              <Text
                style={{
                margin: 5,
              }}>
                Afternoon</Text>
            </View>
            <View style={{
              flexDirection: 'row'
            }}>
              <CheckBox1
                style={{
                margin: 5,
              }}
                color="red"
                isChecked={this.state.checked18}
                onClick={() => this.setState({checked: !this.state.checked})}
                onPress={() => this.friday_evening()}/>
              <Text
                style={{
                margin: 7,
              }}>
                Evening</Text>
            </View>
          </View>
        }
          <TouchableOpacity
            onPress={() => this.setState({
            saturday: !this.state.saturday,
            sign: (this.state.sign == "+" && minus) || (this.state.sign == "-" && plus)
          })}>
            <View
              style={{
              height: 45,
              marginTop: 2,
              marginLeft: 20,
              marginRight: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: '#E5E7E9'
            }}>
              <Text
                style={{
                fontSize: 19,
                marginLeft: 10,
                position: 'absolute',
                alignSelf: 'center',
                left: 10
              }}>Saturday
              </Text>
              <Text
                style={{
                fontSize: 19,
                marginLeft: 10,
                position: 'absolute',
                alignSelf: 'center',
                right: 10
              }}>{this.state.saturdaySign}</Text>
            </View>
          </TouchableOpacity>
          {this.state.saturday && <View
            style={{
            flexDirection: 'row',
            alignSelf:'center',
            maxWidth:"80%",
            marginLeft:-20
          }}>
            <View style={{
              flexDirection: 'row'
            }}>
              <CheckBox1
                style={{
                margin: 5,
              }}
                //color="red"
                isChecked={this.state.checked19}
                onClick={() => this.setState({checked: !this.state.checked})}
                onPress={() => this.saturday_morning()}/>
              <Text
                style={{
                margin: 5,
              }}>
                Morning</Text>
            </View>
            <View style={{
              flexDirection: 'row'
            }}>
              <CheckBox1
                style={{
                margin: 5,
              }}
                //color="red"
                isChecked={this.state.checked20}
                onClick={() => this.setState({checked: !this.state.checked})}
                onPress={() => this.saturday_afternoon()}/>
              <Text
                style={{
                margin: 5,
              }}>
                Afternoon</Text>
            </View>
            <View style={{
              flexDirection: 'row'
            }}>
              <CheckBox1
                style={{
                margin: 5,
              }}
                //color="red"
                isChecked={this.state.checked21}
                onClick={() => this.setState({checked: !this.state.checked})}
                onPress={() => this.saturday_evening()}
                />
              <Text
                style={{
                margin: 5,
              }}>
                Evening</Text>
            </View>
          </View>
}
          <View
            style={{
            flexDirection: 'row',
            marginTop: 30
          }}>
            <CheckBox1
            //checked={this.state.checked22}
              //onPress={() => this.checkBox22()}
              style={{
              marginLeft: 40 }}
              checked={this.state.checkedz}
//              checked={()=>this.state.checkedz}
              onClick={() => this.afterAll()}
             // checked={this.state.checked1}
          />
            <Text
              style={{
              fontSize: 15,
              marginLeft: 20
            }}>Available any day and time</Text>
          </View>
          <Text
            style={{
            fontSize: 15,
            marginTop: 10,
            marginLeft: 20
          }}>Number of hours available per week</Text>
          <View
            style={{
            flexDirection: 'row',
            marginTop: 15
          }}>
            <Text
              style={{
              fontSize: 15,
              marginLeft: 20
            }}>T-shirt size</Text>
            <Text
              style={{
              fontSize: 15,
              position: 'absolute',
              right: 25,
              color: '#E67E22'
            }}>Size Chart</Text>
          </View>
          <View
            style={{
            marginTop: 10,
            flexDirection: 'row',
            marginLeft: 20,
            marginRight: 20,
            justifyContent: 'center'
          }}>
            <View>
              <TouchableOpacity
                onPress={() => this.select()}
                style={[
                styles.leftTab, this.state.toggleLeft && styles.leftTabChange
              ]}>
                <Text
                  style={{
                  color: '#6E6E6E',
                  textAlign: 'center',
                  fontSize: 18
                }}>S</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              marginLeft: 6
            }}>
              <TouchableOpacity
                onPress={() => this.select1()}
                style={[
                styles.leftTab, this.state.toggleLeft1 && styles.leftTabChange
              ]}>
                <Text
                  style={{
                  color: '#6E6E6E',
                  textAlign: 'center',
                  fontSize: 18,
                  margin: 5
                }}>M</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              marginLeft: 6
            }}>
              <TouchableOpacity
                onPress={() => this.select2()}
                style={[
                styles.leftTab, this.state.toggleLeft2 && styles.leftTabChange
              ]}>
                <Text
                  style={{
                  color: '#6E6E6E',
                  textAlign: 'center',
                  fontSize: 18,
                  margin: 5
                }}>L</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              marginLeft: 6
            }}>
              <TouchableOpacity
                onPress={() => this.select3()}
                style={[
                styles.leftTab, this.state.toggleLeft3 && styles.leftTabChange
              ]}>
                <Text
                  style={{
                  color: '#6E6E6E',
                  textAlign: 'center',
                  fontSize: 18,
                  margin: 5
                }}>XL</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
              marginLeft: 6,
              marginRight: 10
            }}>
              <TouchableOpacity
                onPress={() => this.select4()}
                style={[
                styles.leftTab, this.state.toggleLeft4 && styles.leftTabChange
              ]}>
                <Text
                  style={{
                  color: '#6E6E6E',
                  textAlign: 'center',
                  fontSize: 18,
                  margin: 5
                }}>2XL</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={() => this.Screen23()}>
            <LinearGradient colors={['#F1948A', '#F0B27A']} style={styles.linearGradient}>
              <Text style={styles.buttonText}>
                NEXT
              </Text>
            </LinearGradient>
            <View style={{
              height: 10
            }}></View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    //height:window.height+200,

    backgroundColor: '#fff'
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
    flex: 1,
    height: 45,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    marginTop: 20
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent'
  },
  leftTab: {
    minWidth: 50,
    margin: 2,
    maxWidth: 60,
    height: 35,
    borderRadius: 1,
    borderColor: "#FA8258",
    borderWidth: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  leftTabChange: {
    backgroundColor: '#F79F81'
  }
});