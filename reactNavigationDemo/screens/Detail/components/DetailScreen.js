import React, { Component } from 'react'
import {View, Text, Button} from 'react-native';
export default class DetailScreen extends Component {
  
    static navigationOptions = ({navigation}) => {
        
        let headerStyle = {
            backgroundColor: 'tomato',
        }

        let headerTitle = "Detail";

        let headerTitleStyle = {
            color: '#fff'
        }
        
        let headerTintColor = "#fff";

        return {headerStyle, 
            headerTitleStyle,
            headerTitle, 
            headerTintColor}
    }
  
    render() {
    let data = this.props.navigation.state.params;
    return (
      <View
        style = {
            {
                flex: 1,
                backgroundColor: 'purple',
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
            This is detail screen
        </Text>
        <Text
            style = {
                {
                    fontWeight: 'bold',
                    color: '#fff',
                    fontSize: 20
                }
            }
        >
            {data.name + " - " + data.releaseYear}
        </Text>
      </View>
    )
  }
}
