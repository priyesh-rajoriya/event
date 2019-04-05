const pic = require('../Images/tickets.png');
const pic2 = require('../Images/hart2.png');
const datas = [
    {
        pic: pic,
        item1: "Entre La Sombra | Life along the",
        item2: "Set, 20 Jan - 9:00 AM-5:00om",
        item3: "Redisson Blu Hotel,Indore",
        pic2: pic2
    },
    {
        pic: pic,
        item1: "Health and Wealth Expo",
        item2: "Fir, 04 Feb - Sat, 05eb",
        item3: "Redisson Blu Hotel,Indore",
        pic2: pic2
    },
    {
        pic: pic,
        item1: "International Student Education",
        item2: "Set, 20 Jan - 9:00 AM-5:00AM",
        item3: "Redisson Blu Hotel,Indore",
        pic2: pic2
    },
    {
        pic: pic,
        item1: "The Rock concert",
        item2: "Set, 20 Jan - 9:00 AM-5:00pm",
        item3: "Redisson Blu Hotel,Indore",
        pic2: pic2
    },
    {
        pic: pic,
        item1: "Kite Festival",
        item2: "Set, 20 Jan - 9:00 AM-5:00pm",
        item3: "Redisson Blu Hotel,Indore",
        pic2: pic2
    },

];

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
View tickit
  {/* <View style={{marginLeft:30}}>
        <View
            style={{
            height: '100%',
            backgroundColor: '#fff',
            marginTop: 10,
            marginLeft: 15,
            marginRight: 15
          }}>

            <Image
              style={{
              height: 100,
              width: 110,
              marginTop: 20,
              alignSelf: 'center'
            }}
              source={require('../Images/images.png')}/>

            <Text
              style={{
              fontSize: 16,
              marginTop: 20,
              color: '#A6ACAF',
              width: '100%',
              textAlign: "center"
            }}>----------- Ticket 1 of 2 -----------</Text>
            <Text
              style={{
              marginTop: 20,
              marginLeft: 10,
              fontSize: 15,
              color: '#A6ACAF'
            }}>Name</Text>
            <Text
              style={{
              fontSize: 18,
              marginLeft: 10,
              marginTop: 5
            }}>Devid Roy</Text>

            <Text
              style={{
              marginTop: 10,
              marginLeft: 10,
              fontSize: 15,
              color: '#A6ACAF'
            }}>Ticket/ seat</Text>
            <Text
              style={{
              fontSize: 16,
              marginLeft: 10,
              marginTop: 5
            }}>Free The Rock Connect</Text>

            <Text
              style={{
              marginTop: 10,
              marginLeft: 10,
              fontSize: 15,
              color: '#A6ACAF'
            }}>Event</Text>
            <Text
              style={{
              fontSize: 16,
              marginLeft: 10,
              marginTop: 5
            }}>Free The Rock Connect</Text>

            <View
              style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              width: '90%'
            }}>
              <View
                style={{
                margin: 10,
                width: "50%"
              }}>
                <Text
                  style={{
                  marginTop: 20,
                  marginLeft: 10,
                  fontSize: 15,
                  color: '#A6ACAF'
                }}>Date</Text>
                <Text
                  style={{
                  fontSize: 14,
                  marginLeft: 10,
                  marginTop: 5
                }}>Sat, Jan 20, 9:00 AM - 5:00 PM GMT +05:30</Text>
                <TouchableOpacity>
                  <Text
                    style={{
                    marginTop: 5,
                    marginLeft: 10,
                    fontSize: 14,
                    color: '#DC7633'
                  }}>Add to calender</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                margin: 10,
                maxWidth: "50%"
              }}>
                <Text
                  style={{
                  marginTop: 20,
                  fontSize: 14,
                  color: '#A6ACAF'
                }}>Location</Text>
                <Text
                  style={{
                  fontSize: 14,
                  marginTop: 5
                }}>Radisson Blu Hotel, Indore, M.P. 452100</Text>
                <TouchableOpacity>
                  <Text
                    style={{
                    marginTop: 5,
                    fontSize: 14,
                    color: '#DC7633'
                  }}>See Map</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text
              style={{
              fontSize: 16,
              marginTop: 20,
              color: '#A6ACAF',
              textAlign: 'center'
            }}>-----------------------------------</Text>

            <Text
              style={{
              marginTop: 20,
              marginLeft: 10,
              fontSize: 15,
              color: '#A6ACAF'
            }}>Order Number</Text>
            <Text
              style={{
              fontSize: 16,
              marginLeft: 10,
              marginTop: 5
            }}>7012345678</Text>

            <Text
              style={{
              marginTop: 20,
              marginLeft: 10,
              fontSize: 15,
              color: '#A6ACAF'
            }}>Event Summary</Text>
            <Text
              style={{
              fontSize: 14,
              marginLeft: 10,
              marginTop: 5
            }}>Lorem Ipsum is simply dummy text of the printing and typesetting industy.</Text>
            <TouchableOpacity>
              <Text
                style={{
                marginTop: 10,
                marginLeft: 10,
                fontSize: 16,
                color: '#DC7633'
              }}>Event details</Text>
            </TouchableOpacity>

            <Text
              style={{
              marginTop: 20,
              marginLeft: 10,
              fontSize: 15,
              color: '#A6ACAF'
            }}>Event host</Text>
            <Text
              style={{
              fontSize: 16,
              marginLeft: 10,
              marginTop: 5
            }}>Rockstar Bands</Text>
            <View style={{
              height: 20
            }}>
            </View>
          </View>
        </View>

        </ScrollView> */}
