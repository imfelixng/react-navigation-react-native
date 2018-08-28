import React, { Component } from 'react'
import {View, Text} from 'react-native';

import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation';

import HomeScreen from '@home/HomeScreen';
import InfoScreen from '@info/InfoScreen';
import SettingScreen from '@setting/SettingScreen';
import CloudScreen from '@cloud/CloudScreen';


let routeConfigs = {
  Home: {
    screen: HomeScreen
  },
  Info: {
    screen: InfoScreen
  },
  Setting: {
    screen: SettingScreen
  },
  Cloud: {
    screen: CloudScreen
  },
}

let tabNavigatorConfig = {
  tabBarPosition: 'top',    
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: 'lightblue',
        marginTop: 20
      },
  }  
};

const TabBar = createMaterialTopTabNavigator(routeConfigs, tabNavigatorConfig);

export default class App extends Component {
  render() {
    return (
      <TabBar/>
    )
  }
}

