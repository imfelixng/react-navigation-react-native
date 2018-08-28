/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView, ScrollView,Image} from 'react-native';

import {createDrawerNavigator, DrawerItems} from 'react-navigation';

import HomeScreen from '@home/HomeScreen';
import InfoScreen from '@info/InfoScreen';
import SettingScreen from '@setting/SettingScreen';
import CloudScreen from '@cloud/CloudScreen';



const CustomDrawerComponent = (props) => {
  return (
    <SafeAreaView>
      <View
          style = {
            {
              height: 150,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff'
            }
          }
        >
        <Image
          source = {require('@assets/images/logo.png')}
          style = {
            {
              height: 120,
              width: 120,
            }
          }
        />
      </View>
      <ScrollView>
        <DrawerItems
          {...props}
        />
      </ScrollView>
    </SafeAreaView>

  )
}

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
  }
}

let drawerNavigatorConfig = {
  initialRouteName: "Home",
  drawerPosition: 'left',
  contentOptions: {
    activeBackgroundColor: 'purple'
  },
  contentComponent: CustomDrawerComponent

}

let Drawer = createDrawerNavigator(routeConfigs, drawerNavigatorConfig);

export default class App extends Component {
  render() {
    return (
        <Drawer/>
    );
  }
}


