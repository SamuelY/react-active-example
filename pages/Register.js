//This is an example code for NavigationDrawer//
import React, { Component} from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

 
export default class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Sae
          label={'姓名'}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          iconColor={'#FF9800'}
          inputStyle={{ color: '#91627b' }}
          inputPadding={16}
          labelHeight={24}
          // active border height
          borderHeight={2}
          // TextInput props
          autoCapitalize={'none'}
          autoCorrect={false}
        />
        <Sae
          label={'電話'}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          iconColor={'#FF9800'}
          inputStyle={{ color: '#91627b' }}
          inputPadding={16}
          labelHeight={24}
          // active border height
          borderHeight={2}
          // TextInput props
          autoCapitalize={'none'}
          autoCorrect={false}
        />
        <View style={{flexDirection:'row', justifyContent:'center', margin : 20}}>
          <View style={{flex : 1, flexDirection : 'row', justifyContent : 'space-around', padding : 20}}>
            <Button title="註冊"/>
            <Button title="取消"/>
          </View>  
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});