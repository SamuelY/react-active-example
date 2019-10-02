//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { ListItem, Icon, colors } from 'react-native-elements'
 
const items = [
  {
    title: '消息1',
    content: '這裡是內容這裡是內容這裡是內容這裡是內容這裡是內容這裡是內容這裡是內容這裡是內容',
    icon: <Icon name='new-releases'></Icon>,
    created_at : '2019-08-08 12:00:00',
  },
  {
    title: '消息2',
    content: '這裡是內容這裡是內容這裡是內容這裡是內容這裡是內容這裡是內容這裡是內容這裡是內容',
    icon: <Icon name='new-releases'></Icon>,
    created_at : '2019-08-09 16:00:00',
  },
]

export default class News extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={items}
          keyExtractor={(item, index) => item.created_at}
          renderItem={
            ({item}) => 
            <View style={{flex : 1, flexDirection : 'row', margin : 5}}>
              <View style={{flex : 2, alignItems : 'center', justifyContent:'center'}}><Icon name='new-releases'/></View>
              <View style={{flex : 8}}>
                <View style={{flex : 2}}><Text style={styles.title}>{item.title}</Text></View>
                <View style={{flex : 7}}><Text style={styles.content}>{item.content}</Text></View>
                <View style={{flex : 1}}></View><Text style={styles.created_at}>{item.created_at}</Text>
              </View>
            </View>
          }
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  title: {
    fontSize:14,
  },
  content: {
    color:'grey',
    marginTop:5
  },
  created_at : {
    fontSize:10,
    color:'grey',
    marginTop:5
  }
})