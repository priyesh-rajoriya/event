import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  AlertIOS,
  ToastAndroid,
  Modal,
  Alert,
  BackHandler,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import { Header } from "native-base";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

import AllAPI from "../Apis/AllAPI";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      email: "",
      password: "",
      mobile: "",
      firstname: "",
      lastname: "",
      user_role: "1",
      Conpassword: "",
      LoadingDialog: false
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  validate() {
    if (this.state.email == "") {
      Platform.select({
        ios: () => {
          AlertIOS.alert("Please enter email");
        },
        android: () => {
          ToastAndroid.show("Please enter email", ToastAndroid.SHORT);
        }
      })();
      return false;
    }
    var text = this.state.email;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      Platform.select({
        ios: () => {
          AlertIOS.alert("Email is Not Correct");
        },
        android: () => {
          ToastAndroid.show("Email is Not Correct", ToastAndroid.SHORT);
        }
      })();
      return false;
    } else {
      this.Registration();
    }
  }

  async Registration() {
    if (this.state.email != "") {
      if (this.state.firstname == "") {
        Platform.select({
          ios: () => {
            AlertIOS.alert("Please enter firstname");
          },
          android: () => {
            ToastAndroid.show("Please enter firstname", ToastAndroid.SHORT);
          }
        })();
        return false;
      }
      if (this.state.lastname == "") {
        Platform.select({
          ios: () => {
            AlertIOS.alert("Please enter lastname");
          },
          android: () => {
            ToastAndroid.show("Please enter lastname", ToastAndroid.SHORT);
          }
        })();
        return false;
      }
      var val = this.state.mobile;
      if (/^\d{10}$/.test(val)) {
        // value is ok, use it
      } else {
        Platform.select({
          ios: () => {
            AlertIOS.alert("Please enter correct number");
          },
          android: () => {
            ToastAndroid.show(
              "Please enter correct number",
              ToastAndroid.SHORT
            );
          }
        })();
        number.focus();
        return false;
      }
      if (this.state.password.length >= 8) {
        if (this.state.Conpassword != "") {
          if (this.state.password == this.state.Conpassword) {
            this.setState({ LoadingDialog: true });
            const config = {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                email: this.state.email,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                mobile: this.state.mobile,
                user_role: "1",
                password: this.state.password
              })
            };
            console.log(config);
            await fetch(AllAPI.registration, config)
              .then(res => res.json())
              .then(res => {
                console.log(res);
                if (res.success == true) {
                  this.setState({ LoadingDialog: false });
                  AsyncStorage.setItem("email", res.data.email);
                  AsyncStorage.setItem("firstName", res.data.firstname);
                  AsyncStorage.setItem("lastName", res.data.lastname);
                  AsyncStorage.setItem("mobile", res.data.mobile);
                  AsyncStorage.setItem("id", res.data.id.toString()); // Store the id in string using .toString() method
                  AsyncStorage.setItem(
                    "password",
                    this.state.password.toString()
                  );
                  AsyncStorage.setItem(
                    "categoty",
                    JSON.stringify(res.data.category_selected)
                  );
                  this.props.navigation.navigate("categories");
                } else {
                  this.setState({ LoadingDialog: false });
                  Alert.alert("", "Error in SignUp", [
                    { text: "ok", onPress: () => console.log("ok pressed") }
                  ]);
                }
              })
              .catch(error => {
                this.setState({ LoadingDialog: false });
                console.log(error);
                Platform.select({
                  ios: () => {
                    AlertIOS.alert("Error, please try again later.");
                  },
                  android: () => {
                    ToastAndroid.show(
                      "Error, please try again later.",
                      ToastAndroid.SHORT
                    );
                  }
                })();
              });
          } else {
            Platform.select({
              ios: () => {
                AlertIOS.alert("Password and confirm password is not same");
              },
              android: () => {
                ToastAndroid.show(
                  "Password and confirm password is not same",
                  ToastAndroid.SHORT
                );
              }
            })();
          }
        } else {
          Platform.select({
            ios: () => {
              AlertIOS.alert("Please enter confirm password");
            },
            android: () => {
              ToastAndroid.show(
                "Please enter confirm password",
                ToastAndroid.SHORT
              );
            }
          })();
        }
      } else {
        Platform.select({
          ios: () => {
            AlertIOS.alert("Password should 8 digits long");
          },
          android: () => {
            ToastAndroid.show(
              "Password should 8 digits long",
              ToastAndroid.SHORT
            );
          }
        })();
      }
    }
  }

  //------exit app start------//
  componentWillMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }
  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }
  //------exit app end------//

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.container}>
          <Header
            hasTabs
            style={{ backgroundColor: "transparent", justifyContent: "center" }}
            androidStatusBarColor="#D35400"
            iosBarStyle="light-content"
          >
            <View
              style={{
                width: width,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={{ marginLeft: 10, position: "absolute", left: 0 }}
              >
                <Image
                  source={require("../Images/Icons/keyboard-backspace.png")}
                  style={{ width: 35, height: 35, tintColor: "#000" }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#000",
                  fontSize: 20,
                  position: "absolute"
                }}
              >
                Sign Up
              </Text>
            </View>
          </Header>

          <ScrollView>
            <View>
              <View style={{ marginLeft: 20, marginRight: 20, marginTop: 40 }}>
                <Text style={{ fontSize: 15, color: "black" }}>Email</Text>
                <TextInput
                  style={{ fontSize: 15, height: 40 }}
                  placeholder="Enter email address"
                  keyboardType="email-address"
                  placeholderTextColor="grey"
                  underlineColorAndroid="transparent"
                  onChangeText={text => this.setState({ email: text })}
                  value={this.state.email}
                />
                <View style={{ height: 1, backgroundColor: "#4D4C4C" }} />
              </View>

              <View
                style={{
                  marginTop: 30,
                  flexDirection: "row",
                  width: "105%",
                  marginLeft: 20,
                  marginRight: 20
                }}
              >
                <View style={{ width: "40%" }}>
                  <Text style={{ fontSize: 17, color: "black" }}>
                    First Name
                  </Text>
                  <TextInput
                    style={{ fontSize: 15, height: 40 }}
                    placeholder="Enter first name"
                    placeholderTextColor="grey"
                    underlineColorAndroid="transparent"
                    onChangeText={text => this.setState({ firstname: text })}
                    value={this.state.firstname}
                  />
                  <View style={{ height: 1, backgroundColor: "#4D4C4C" }} />
                </View>

                <View style={{ width: "40%", marginLeft: 10 }}>
                  <Text style={{ fontSize: 17, color: "black" }}>
                    Last Name
                  </Text>
                  <TextInput
                    style={{ fontSize: 15, height: 40 }}
                    placeholder="Enter last name"
                    placeholderTextColor="grey"
                    underlineColorAndroid="transparent"
                    onChangeText={text => this.setState({ lastname: text })}
                    value={this.state.lastname}
                  />
                  <View style={{ height: 1, backgroundColor: "#4D4C4C" }} />
                </View>
              </View>

              <View
                style={{
                  padding: 1,
                  marginTop: 30,
                  marginLeft: 20,
                  marginRight: 20
                }}
              >
                <Text style={{ fontSize: 17, color: "black" }}>Contact </Text>
                <TextInput
                  style={{ fontSize: 16, height: 40 }}
                  placeholder="Enter mobile number"
                  placeholderTextColor="grey"
                  underlineColorAndroid="transparent"
                  onChangeText={text => this.setState({ mobile: text })}
                  value={this.state.mobile}
                  maxLength={10}
                  keyboardType="numeric"
                />
                <View style={{ height: 1, backgroundColor: "#4D4C4C" }} />
              </View>

              <View
                style={{
                  padding: 1,
                  marginTop: 30,
                  marginLeft: 20,
                  marginRight: 20
                }}
              >
                <Text style={{ fontSize: 17, color: "black" }}>Password</Text>
                <TextInput
                  style={{ fontSize: 16, height: 40 }}
                  placeholder="Create password"
                  secureTextEntry={true}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="grey"
                  onChangeText={text => this.setState({ password: text })}
                  value={this.state.password}
                />
                <View style={{ height: 1, backgroundColor: "#4D4C4C" }} />
              </View>

              <View
                style={{
                  padding: 1,
                  marginTop: 30,
                  marginLeft: 20,
                  marginRight: 20
                }}
              >
                <Text style={{ fontSize: 17, color: "black" }}>
                  Confirm Password
                </Text>
                <TextInput
                  style={{ fontSize: 16, height: 40 }}
                  placeholder="Confirm password"
                  secureTextEntry={true}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="grey"
                  onChangeText={text => this.setState({ Conpassword: text })}
                  value={this.state.Conpassword}
                />
                <View style={{ height: 1, backgroundColor: "#4D4C4C" }} />
              </View>

              <View
                style={{
                  alignContent: "center",
                  alignItems: "center",
                  marginTop: 30
                }}
              >
                <Text>By signing up, I agree to company's</Text>

                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity>
                    <Text
                      style={{ fontSize: 16, color: "skyblue", marginRight: 5 }}
                    >
                      terms of service, privacy policy
                    </Text>
                  </TouchableOpacity>
                  <Text>and</Text>
                </View>
                <TouchableOpacity>
                  <Text style={{ fontSize: 16, color: "skyblue" }}>
                    community guidelines
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => this.validate()}>
                <ImageBackground
                  resizeMode="contain"
                  style={{
                    height: 50,
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 30,
                    justifyContent: "center"
                  }}
                  source={require("../Images/btn.png")}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#fff",
                      textAlign: "center",
                      backgroundColor: "transparent"
                    }}
                  >
                    SIGN UP
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
              <View style={{ height: 40 }} />
            </View>
          </ScrollView>

          <Modal
            transparent={true}
            supportedOrientations={["portrait", "landscape"]}
            visible={this.state.LoadingDialog}
            onRequestClose={() => console.log("sdfdf")}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-around",
                backgroundColor: "#00000040"
              }}
            >
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around"
                }}
              >
                <ActivityIndicator color={"white"} size="large" />
              </View>
            </View>
          </Modal>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
