//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
 
import Home from './pages/Home';
import MemberArea from './pages/MemberArea';
import News from './pages/News';
import OrderHistory from './pages/OrderHistory';
import QA from './pages/QA';
import Rewards from './pages/Rewards';
import StoresInfo from './pages/StoresInfo';
import Payment from './pages/Payment';
import Register from './pages/Register';
 
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  //
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const HomePage = createStackNavigator({
  HomePage: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: '預約洗衣',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  PaymentPage: {
    screen: Payment,
    navigationOptions: ({ navigation }) => ({
      title: '付款資訊',
      //eaderLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  }
});
const MemberAreaPage = createStackNavigator({
  MemberAreaPage: {
    screen: MemberArea,
    navigationOptions: ({ navigation }) => ({
      title: '會員專區',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  RegisterPage: {
    screen: Register,
    navigationOptions: ({ navigation }) => ({
      title: '註冊',
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  }
});
const NewsPage = createStackNavigator({
  NewsPage: {
    screen: News,
    navigationOptions: ({ navigation }) => ({
      title: '最新消息',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
const OrderHistoryPage = createStackNavigator({
  OrderHistoryPage: {
    screen: OrderHistory,
    navigationOptions: ({ navigation }) => ({
      title: '訂單記錄',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
const QAPage = createStackNavigator({
  QAPage: {
    screen: QA,
    navigationOptions: ({ navigation }) => ({
      title: '問與答',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
const RewardsPage = createStackNavigator({
  RewardsPage: {
    screen: Rewards,
    navigationOptions: ({ navigation }) => ({
      title: '咖啡免費喝',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
const StoresInfoPage = createStackNavigator({
  StoresInfoPage: {
    screen: StoresInfo,
    navigationOptions: ({ navigation }) => ({
      title: '商家資訊',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      drawerLabel: '預約洗衣',
    },
  },
  MemberAreaPage: {
    screen: MemberAreaPage,
    navigationOptions: {
      drawerLabel: '會員專區',
    },
  },
  NewsPage: {
    screen: NewsPage,
    navigationOptions: {
      drawerLabel: '最新消息',
    },
  },
  OrderHistoryPage: {
    screen: OrderHistoryPage,
    navigationOptions: {
      drawerLabel: '訂單記錄',
    },
  },
  QAPage: {
    screen: QAPage,
    navigationOptions: {
      drawerLabel: '問與答',
    },
  },
  RewardsPage: {
    screen: RewardsPage,
    navigationOptions: {
      drawerLabel: '咖啡免費喝',
    },
  },
  StoresInfoPage: {
    screen: StoresInfoPage,
    navigationOptions: {
      drawerLabel: '商家資訊',
    },
  },
});
 
export default createAppContainer(DrawerNavigatorExample);