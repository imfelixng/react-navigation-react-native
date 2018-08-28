import React, { Component } from 'react'
import {View, Text,TouchableHighlight, Image} from 'react-native';
import Header from '@commons/Header';
export default class HomeScreen extends Component {

    static navigationOptions = ({navigation}) => {
        let drawerLabel = "Home";
        let drawerIcon = () => {
            return <Image
                source = {require('@assets/icons/ic_home.png')}
                style = {
                    {
                        width: 26,
                        height: 26,
                        tintColor: '#0067a7'
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
      <Text>Home Screen</Text>
      <TouchableHighlight
        style = {
            {
                backgroundColor: 'purple',
                padding: 20
            }
        }
        onPress = {
            () => {
                this.props.navigation.navigate('Info');
            }
        }
      >
        <Text>Navigate to Info</Text>
      </TouchableHighlight>
      </View>
    )
  }
}
