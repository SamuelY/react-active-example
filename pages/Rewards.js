//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View} from 'react-native';
import { Text} from 'react-native-elements';
import QRCode from 'react-native-qrcode';
 
export default class Rewards extends Component {
  coffee = {
    url: 'http://www.google.com/',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex : 1, justifyContent : 'center'}}>
          <Text h3 >天天一杯咖啡</Text>
        </View>
        <View style={{flex : 2, justifyContent : 'center'}}>
          <Text>月消費滿600元即可獲得免費咖啡</Text>
        </View>
        <View style={{flex : 7, justifyContent : 'center'}}>
          <QRCode
            value={this.coffee.url}
            size={200}
            fgColor='white'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  }
})