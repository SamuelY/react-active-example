//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
// import all basic components
import { Input, CheckBox, Button } from 'react-native-elements';
 
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      service1 : { isChecked : false},
      service2 : { isChecked : false},
      service3 : { isChecked : false},
      service4 : { isChecked : false},
    };
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Input
            containerStyle={{marginVertical: 10}}
            overflow="hidden"
            inputStyle={{ 
                borderStyle: 'solid',
                overflow: 'hidden',
                marginHorizontal: -8,
                borderWidth: 1, 
                borderColor: 'lightgrey', 
                borderRadius: 10,
                height: 100
              }}
            inputContainerStyle={{
              borderBottomWidth: 0
            }}
            autoCorrect={false}
            placeholder='請輸入收件地址...'/>

        <Text style={{ margin : 10}}>預約洗衣烘托價格</Text>
        <CheckBox
          title='折衣服務單件5元/以量計價'
          checked={this.state.service1.isChecked}
          onPress={() => this.setState({service1: {isChecked : !this.state.service1.isChecked}})}
        />
        <CheckBox
          title='燙衣服務單件40元(備註)'
          checked={this.state.service2.isChecked}
          onPress={() => this.setState({service2: {isChecked : !this.state.service2.isChecked}})}
        />
        <CheckBox
          title='我只想洗衣服'
          checked={this.state.service3.isChecked}
          onPress={() => this.setState({service3: {isChecked : !this.state.service3.isChecked}})}
        />
         <CheckBox
          title='我只想烘衣服'
          checked={this.state.service4.isChecked}
          onPress={() => this.setState({service4: {isChecked : !this.state.service4.isChecked}})}
        />
        <View style={{flex:1, flexDirection:'row', justifyContent:'center', margin : 20}}>
          <View style={{flex : 1, flexDirection : 'row', justifyContent : 'space-around', padding : 20}}>
            <Button title="2hr快送" onPress={() => this.props.navigation.navigate('PaymentPage', {
              tableHead: ['項目', '價格'],
              tableData: [
                ['標準15KG洗脫烘', this.state.service3.isChecked ? 120 : 0],
                ['折衣服務預估', this.state.service1.isChecked ? '5元/每件' : 0],
                ['燙衣服務', , this.state.service2.isChecked ? '40元/每件' : 0],
                ['烘衣服務', , this.state.service4.isChecked ? 60 : 0],
                ['運費', 60],
                ['2hr快送加成', 60]
              ]})
              }/>
            <Button title="隔日送" onPress={() => this.props.navigation.navigate('PaymentPage', {
              tableHead: ['項目', '價格'],
              tableData: [
                ['標準15KG洗脫烘', this.state.service3.isChecked ? 120 : 0],
                ['折衣服務預估', this.state.service1.isChecked ? '5元/每件' : 0],
                ['燙衣服務', , this.state.service2.isChecked ? '40元/每件' : 0],
                ['烘衣服務', , this.state.service4.isChecked ? 60 : 0],
                ['運費', 60],
              ]})
              }/>
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