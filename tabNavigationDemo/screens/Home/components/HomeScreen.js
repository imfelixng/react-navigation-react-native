import React, { Component } from 'react'
import {View, Text, Image} from 'react-native';
import Button from 'react-native-button';

export default class HomeScreen extends Component {
  
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let tabBarLabel = "Home";
        let tabBarIcon = ({tintColor}) => (
            <Image
                source = {require('@assets/icons/ic_home.png')}
                style = {
                    {
                        width: 26,
                        height: 26,
                        tintColor: '#0067a7' //mau cua icon
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
                backgroundColor: '#0067a7'
            }
        }
      >
        <Text>
            This is Home Screen
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
            Navigate to Detail
        </Button>
      </View>
    )
  }
}
