import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Image, TextInput,TouchableOpacity,ImageBackground, ScrollView,backgroundColor, KeyboardAvoidingView
} from 'react-native';
import { Container, Header, Content,Button,Footer, FooterTab, Icon, Badge } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from 'react-native-check-box';

var leftText;
var minus = "-";
var plus = "+";


export default class Screen23 extends Component {
  constructor(props) {
    super(props);
    this.state = {text:'',toggleLeft: false,
      toggleLeft1: false,
      toggleLeft2: false,
      toggleLeft3: false,
      toggleLeft4: false,
      toggleLeft5: false,
      leftText:'',
      checked:false,
      checked1:false,
      checked2:false,
      checked3:false,
      interest:false,
      computerSkill:false,
      communicationSkill:false,
      interestSign:plus,
      computerSkillSign:plus,
      communicationSkillSign:plus,
    };
  }
  Screen22(){
    this.props.navigation.navigate('Screen22');
    console.log('done');
  };
  screen25(){
    this.props.navigation.navigate('screen25');
    console.log('done');
  };
  render() {
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      >
      <View style={styles.container}>
        <ImageBackground style={{height:100,width:window.width}} 
          source={require('../Images/VolunteerBg.png')}>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>      
              <Image style={{height:30,width:40,marginTop:40,marginLeft:20}} 
              source={require('../Images/wright.png')} />
            </TouchableOpacity>
            <Text style={{fontSize:22,color:'#fff',alignSelf:'center',backgroundColor:'transparent',marginTop:40,marginLeft:30}}>Volunteer Form</Text>
          </View> 
        </ImageBackground>
        <ScrollView style={{height:'100%'}}>
       <Text style={{marginTop:20,fontSize:20,textAlign:'center',color:'#EB984E'}}> Activities of Interest </Text>
     
       <TouchableOpacity onPress={()=>this.setState({interest:!this.state.interest, interestSign: (this.state.interestSign== "+" && minus)||(this.state.interestSign== "-" && plus)  })}>
        <View style={{height:45,marginTop:10,marginLeft:20,marginRight:20,flexDirection:'row',justifyContent:'center',backgroundColor:'#E5E7E9'}}>
          <Text style={{fontSize:19,marginLeft:10,position:'absolute',alignSelf:'center',left:10,}}>Interest </Text>
          <Text style={{fontSize:19,marginLeft:10,position:'absolute',alignSelf:'center',right:10,}}>{this.state.interestSign}</Text>
        </View>
      </TouchableOpacity>
        { this.state.interest &&
        <View style={{margin:15}}>
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Accounting/Bookkeeping"}
          />
          </View>
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Arts/Crafts"}
          />
          </View>
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Clerical/Secretary"}
          />
          </View>
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Customer Service"}
          />
          </View>
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Graphics"}
          />
          </View>
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Library Services"}
          />
          </View>
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Mentoring/Tutoring/Instruction"}
          />
          </View>
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Photography/Video"}
          />
          </View>
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Special Events"}
          />
          </View>
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Administrative"}
          />
          </View>
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Athletics"}
          />
          </View>
           <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Construction/Carpentry"}
          />
          </View> 
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Environmental"}
          />
          </View> 
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Handy Man"}
          />
          </View>
           <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Machine/Engine Repair"}
          />
          </View>
           <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Music/Entertainment"}
          />
          </View> 
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Public Relations"}
          />
          </View>
           <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Social Work"}
          />
          </View>
        </View>
        
        }
        <TouchableOpacity onPress={()=>this.setState({computerSkill:!this.state.computerSkill, computerSkillSign: (this.state.computerSkillSign== "+" && minus)||(this.state.computerSkillSign== "-" && plus)  })}>
          <View style={{height:45,marginTop:10,marginLeft:20,marginRight:20,flexDirection:'row',justifyContent:'center',backgroundColor:'#E5E7E9'}}>
            <Text style={{fontSize:19,marginLeft:10,position:'absolute',alignSelf:'center',left:10,}}>Computer Skills </Text>
            <Text style={{fontSize:19,marginLeft:10,position:'absolute',alignSelf:'center',right:10,}}>{this.state.computerSkillSign}</Text>
          </View>
        </TouchableOpacity>
        { this.state.computerSkill &&
        <View style={{margin:15}}>
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Data Entry"}
          />
          </View>
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Desktop Publishing"}
          />
          </View>
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Internet"}
          />
          </View>
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Word Processing"}
          />
          </View>
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Spreadsheets"}
          />
          </View>
        </View>
        }
         <TouchableOpacity onPress={()=>this.setState({communicationSkill:!this.state.communicationSkill, communicationSkillSign: (this.state.communicationSkillSign== "+" && minus)||(this.state.communicationSkillSign== "-" && plus)  })}>
          <View style={{height:45,marginTop:10,marginLeft:20,marginRight:20,flexDirection:'row',justifyContent:'center',backgroundColor:'#E5E7E9'}}>
            <Text style={{fontSize:19,marginLeft:10,position:'absolute',alignSelf:'center',left:10,}}>Communication Skills</Text>
            <Text style={{fontSize:19,marginLeft:10,position:'absolute',alignSelf:'center',right:10,}}>{this.state.communicationSkillSign}</Text>
          </View>
        </TouchableOpacity>
        { this.state.communicationSkill &&
        <View style={{marginTop:10}}>
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Ability to read"}
          />
          </View>
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Ability to write"}
          />
          </View>
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Effective writing"}
          />
          </View>
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Public Speaking"}
          />
          </View>
          <View style={{flexDirection:'row'}}> 
          <CheckBox
            style={{flex: 1, padding: 10,marginLeft:20}}
            onClick={()=>this.setState({checked:!this.state.checked})}
            isChecked={this.state.checked}
            rightText={"Customer service"}
          />
          </View>
        </View>
        }
        <Text style={{fontSize:17,marginLeft:20,marginRight:20,marginTop:10,color:'#EB984E'}}>Are there any medical problems or issues of which we should be aware of in the event of an emergency ? </Text> 
          <TextInput
              style={{fontSize:17,marginTop:15,marginBottom:5,marginLeft:20,marginRight:20,height:38,borderWidth:1,borderColor:'#B2BABB',borderRadius:5,paddingLeft:5}}
              //placeholder="David"
              placeholderTextColor="gray"
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({text})}
          /> 
        <Text style={{fontSize:17,marginTop:20,marginLeft:20,color:'#EB984E'}}>How did you find us?</Text>

       <View style={{marginTop:15,flexDirection:'row',justifyContent:"center"}}>
        <View style={{flexDirection:'row',position:'absolute',left:20}}>
        <TouchableOpacity
                onPress={() => this.setState({ toggleLeft: !this.state.toggleLeft})}
                style={[styles.leftTab, this.state.toggleLeft && styles.leftTabChange]}>
       </TouchableOpacity>
       <Text style={{  marginLeft:5,textAlign: 'center', fontSize: 15, marginTop:2 }}>Newspaper</Text>
       </View>

       <View style={{marginLeft:10,flexDirection:'row',alignSelf:'center'}}>
       <TouchableOpacity
          onPress={() => this.setState({ toggleLeft1: !this.state.toggleLeft1 })}
          style={[styles.leftTab, this.state.toggleLeft1 && styles.leftTabChange]}>
       </TouchableOpacity>
       <Text style={{ marginLeft:5, textAlign: 'center', fontSize: 15, marginTop:2  }}>Booth</Text>
       </View>
       <View style={{marginLeft:10,flexDirection:'row',position:'absolute',right:50}}>
       <TouchableOpacity
                onPress={() => this.setState({ toggleLeft2: !this.state.toggleLeft2 })}
                style={[styles.leftTab, this.state.toggleLeft2 && styles.leftTabChange]}>
       </TouchableOpacity>
       <Text style={{ marginLeft:5, textAlign: 'center', fontSize: 15, marginTop:2 }}>TV</Text>
       </View>
      </View>

      <View style={{marginTop:15,flexDirection:'row',justifyContent:"center"}}>
      <View style={{flexDirection:'row',position:'absolute',left:20}}>
        <TouchableOpacity
                onPress={() => this.setState({ toggleLeft3: !this.state.toggleLeft3})}
                style={[styles.leftTab, this.state.toggleLeft3 && styles.leftTabChange]}>
       </TouchableOpacity>
       <Text style={{ marginLeft:5, textAlign: 'center', fontSize: 15,marginTop:2 }}>Flyer</Text>
      </View>

       <View style={{marginLeft:5,flexDirection:'row'}}>
       <TouchableOpacity
                onPress={() => this.setState({ toggleLeft4: !this.state.toggleLeft4 })}
                style={[styles.leftTab, this.state.toggleLeft4 && styles.leftTabChange]}>
       </TouchableOpacity>
       <Text style={{  textAlign: 'center', fontSize: 15,marginLeft:5,marginTop:2 }}>Email</Text>
       </View>

     <View style={{marginLeft:5,flexDirection:'row',position:'absolute',right:30}}>
     <TouchableOpacity
                onPress={() => this.setState({ toggleLeft5: !this.state.toggleLeft5 })}
                style={[styles.leftTab, this.state.toggleLeft5 && styles.leftTabChange]}>
     </TouchableOpacity>
       <Text style={{  textAlign: 'center',marginLeft:5 ,fontSize: 15,marginTop:2 }}>Other</Text>
       </View>
      </View>
 
      

        <TouchableOpacity  onPress={() => this.props.navigation.navigate("Screen25")}>      
   <LinearGradient colors={['#F1948A', '#F0B27A', ]} style={styles.linearGradient}>
        <Text style={styles.buttonText}>
           SUBMIT
        </Text>
   </LinearGradient>
  <View style={{height:10}}></View>
        </TouchableOpacity>
  </ScrollView> 
  </View>
  </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height:"100%",
    //height:window.height+200,
   
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
  linearGradient: {
    flex: 1,
    height:45,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginLeft:20,
    marginRight:20,
    borderRadius:20,
    marginTop:20
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
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