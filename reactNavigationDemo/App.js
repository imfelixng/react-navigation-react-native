/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import MainScreen from '@main/MainScreen';
import DetailScreen from '@detail/DetailScreen';
import ThirdScreen from '@third/ThirdScreen';
import {
  Main,
  Detail,
  Third
} from './screenNames';

const Stack = createStackNavigator({
  Main: {
    screen: MainScreen,
  },
  Detail: {
    screen: DetailScreen,
  },
  Third: {
    screen: ThirdScreen,
    navigationOptions: {
      headerTitle: 'Third'
    }
  }
});

export default class App extends Component {
  render() {
    return (
      <Stack />
    );
  }
}


