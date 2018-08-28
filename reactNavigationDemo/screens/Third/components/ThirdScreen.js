import React, { Component } from 'react'
import {View, Text, Button} from 'react-native';
export default class ThirdScreen extends Component {
  render() {
    return (
      <View
        style = {
            {
                flex: 1,
                backgroundColor: 'tomato',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }
      >
        <Text
            style = {
                {
                    fontWeight: 'bold',
                    color: '#fff',
                    fontSize: 20
                }
            }
        >
            This is third screen
        </Text>        
      </View>
    )
  }
}
