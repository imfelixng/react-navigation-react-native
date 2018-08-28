import React, { Component } from 'react'
import {View, Text, Button, ActivityIndicator} from 'react-native';
export default class MainScreen extends Component {
  
    static navigationOptions = ({navigation}) => {
        let headerTitle = "Main";
        let headerTitleStyle = {
            color: '#fff'
        };

        let headerRight = <Button 
            title = "Save"
            onPress = {navigation.getParam('onSave')}
            />
        let headerStyle = {
            backgroundColor: 'purple'
        }

        let headerBackTitle = "Back"; //custom cho nut back man hinh detail
        return {headerTitle, 
            headerTitleStyle, 
            headerRight,
            headerStyle,
            headerBackTitle
        };
    }

    _onSave = () => {
        if(this.props.navigation.state.params.isSaving === true){
            return;
        }
        this.props.navigation.setParams({isSaving: true});

        setInterval(() => {

            this.props.navigation.setParams({isSaving: false});
        },3000);
    }

    componentDidMount() {
        this.props.navigation.setParams({
            onSave: this._onSave, isSaving: false
        }); //set params de trong navigation goi lai
    }

    render() {
    let {navigation} = this.props;
    let dataSendToDetail = {
        name: "Tay Du Ki",
        releaseYear: 1986
    }
    let mainView = navigation.state.params && navigation.state.params.isSaving === true ? <ActivityIndicator /> :
    <View
    style = {
        {
            flex: 1,
            backgroundColor: 'dodgerblue',
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
        This is main screen
    </Text>
    <Button
        title = "Navigate to Detail"
        onPress = {() => {
            this.props.navigation.navigate('Detail',dataSendToDetail); //truyen du lieu sang man hinh khac
        }}
    />
    <Button
        title = "Navigate to Third"
        onPress = {() => {
            this.props.navigation.navigate('Third')
        }}
    />
  </View>;
    return mainView;
  }
}
