import React, { Component } from 'react'
import {View, Text,TouchableHighlight, Image} from 'react-native';
import Header from '@commons/Header';
export default class CloudScreen extends Component {

    static navigationOptions = ({navigation}) => {
        let drawerLabel = "Cloud";
        let drawerIcon = () => {
            return <Image
                source = {require('@assets/icons/ic_cloud.png')}
                style = {
                    {
                        width: 26,
                        height: 26,
                        tintColor: 'purple'
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
      <Text>Cloud Screen</Text>
      </View>
    )
  }
}
