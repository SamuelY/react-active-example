//This is an example code for NavigationDrawer//
import React, { Component} from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
// import all basic components
import { Input, CheckBox, Button } from 'react-native-elements';

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
 
export default class Payment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const state = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text style={{marginBottom:10, marginTop:5}}>預估時間：21:00~21:20</Text>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
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
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});