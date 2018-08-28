import {createBottomTabNavigator} from 'react-navigation';

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
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true
}

const TabBar = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);