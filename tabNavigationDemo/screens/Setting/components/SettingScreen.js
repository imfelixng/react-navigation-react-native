import React, { Component } from 'react'
import {View, Text, Image} from 'react-native';
import Button from 'react-native-button';

export default class SettingScreen extends Component {
  
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let tabBarLabel = "Setting";
        let tabBarIcon = () => (
            <Image
                source = {require('@assets/icons/ic_setting.png')}
                style = {
                    {
                        width: 26,
                        height: 26,
                        tintColor: '#e97600' //mau cua icon
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
                backgroundColor: '#e97600'
            }
        }
      >
        <Text>
            This is Setting Screen
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
