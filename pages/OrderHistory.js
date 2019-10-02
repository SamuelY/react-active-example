//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
// import all basic components

import { ListItem, Overlay } from 'react-native-elements'

const items = [
  {
    created_at: '2019-08-08 12:00:00',
    title: '標準15KG洗脫烘'
  },
  {
    created_at: '2019-08-09 16:00:00',
    title: '標準15KG洗脫烘'
  },
]
 
export default class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOverlayVisible : false,
      overlayContent : {
        created_at : "無",
        title : "無"
      }
    };
  }

  showOverlay = (item) => {
    //console.log(item);
    this.setState({ 
      isOverlayVisible: true,
      overlayContent : {
        created_at : item.created_at,
        title : item.title
      }
     });
  };

  render() {
    return (
      <View>
        {
          items.map((item, index) => (
            <ListItem
              key={index}
              title={item.created_at}
              subtitle={item.title}
              onPress={() => {
                this.showOverlay(item);
              }}
            />
          ))
        }
        <Overlay isVisible={this.state.isOverlayVisible} onBackdropPress={() => this.setState({ isOverlayVisible: false })}>
          <View>
            <Text>建立時間 : {this.state.overlayContent.created_at}</Text>
            <Text>服務項目 : {this.state.overlayContent.title}</Text>
          </View>
        </Overlay>
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