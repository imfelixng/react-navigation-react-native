import React, { Component } from 'react'
import {View, Text, Image} from 'react-native';
import Button from 'react-native-button';

export default class CloudScreen extends Component {
  
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let tabBarLabel = "Cloud";
        let tabBarIcon = () => {
            return <Image
                source = {require('@assets/icons/ic_cloud.png')}
                style = {
                    {
                        width: 26,
                        height: 26,
                        tintColor: '#964f8e' //mau cua icon
                    }
                }
            />;
        
        }

        return {tabBarLabel,tabBarIcon};
    }
  
    render() {
    return (
      <View
        style = {
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#964f8e'
            }
        }
      >
        <Text>
            This is Cloud Screen
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
