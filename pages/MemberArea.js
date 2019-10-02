//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View} from 'react-native';
import { Text, Button } from 'react-native-elements';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';

const fumiInput = (
  <Fumi
    label={'帳號'}
    iconClass={FontAwesomeIcon}
    iconName={'user'}
    iconColor={'#f95a25'}
    inputPadding={16}
  />
);
export default class MemberArea extends Component {
  render() {
    return (
      <View style={{ margin : 20, flexDirection : 'column', justifyContent : 'center'}}>
        <Text h3 style={{alignSelf: 'center', margin : 20}}>幫你送洗衣店</Text>
        <Fumi
          label={'帳號'}
          iconClass={FontAwesomeIcon}
          iconName={'user'}
          iconColor={'#f95a25'}
          inputPadding={16}
        />
        <Fumi
          label={'密碼'}
          iconClass={FontAwesomeIcon}
          iconName={'key'}
          iconColor={'#f95a25'}
          inputPadding={16}
        />
        <View style={{flexDirection:'row', justifyContent:'center', margin : 20}}>
        <View style={{flex : 1, flexDirection : 'row', justifyContent : 'space-around', padding : 20}}>
          <Button title="註冊" onPress={() => this.props.navigation.navigate('RegisterPage', {})}/>
          <Button title="登入"/>
        </View>  
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});