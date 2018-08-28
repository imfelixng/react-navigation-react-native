import React, { Component } from 'react'
import {View, Text,TouchableHighlight, Image} from 'react-native';
import Header from '@commons/Header';
export default class SettingScreen extends Component {

    static navigationOptions = ({navigation}) => {
        let drawerLabel = "Setting";
        let drawerIcon = () => {
            return <Image
                source = {require('@assets/icons/ic_setting.png')}
                style = {
                    {
                        width: 26,
                        height: 26,
                        tintColor: '#e97600'
                    }
                }
                />
        }
        return {drawerLabel, drawerIcon};
    }

  render() {
    return (
      <View
        style = {
            {
                flex: 1,
                flexDirection:'column'
            }
        }
      >
      <Header
        {...this.props}
      />
      <Text>Setting Screen</Text>
      </View>
    )
  }
}
