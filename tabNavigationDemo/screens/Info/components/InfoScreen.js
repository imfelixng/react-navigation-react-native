import React, { Component } from 'react'
import {View, Text, Image} from 'react-native';
import Button from 'react-native-button';

export default class InfoScreen extends Component {
  
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let tabBarLabel = "Info";
        let tabBarIcon = () => (
            <Image
                source = {require('@assets/icons/ic_info.png')}
                style = {
                    {
                        width: 26,
                        height: 26,
                        tintColor: '#007256' //mau cua icon
                    }
                }
            />
        )
        return {tabBarLabel, tabBarIcon};
    }
  
    render() {
    return (
      <View
        style = {
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#007256'
            }
        }
      >
        <Text>
            This is Info Screen
        </Text>
        <Button
            style = {
                {
                    color: '#fff'
                }
            }

            containerStyle = {
                {
                   backgroundColor: 'purple' 
                }
            }
        >
            Back to Home
        </Button>
      </View>
    )
  }
}
