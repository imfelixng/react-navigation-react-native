import React, { Component } from 'react'
import {View, Text,TouchableHighlight, Image} from 'react-native';
import Header from '@commons/Header';
export default class InfoScreen extends Component {

    static navigationOptions = ({navigation}) => {
        let drawerLabel = "Info";
        let drawerIcon = () => {
            return <Image
                source = {require('@assets/icons/ic_info.png')}
                style = {
                    {
                        width: 26,
                        height: 26,
                        tintColor: '#087256'
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
      <Text>Info Screen</Text>
      </View>
    )
  }
}
