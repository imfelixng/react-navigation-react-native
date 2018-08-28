import React, { Component } from 'react';
import {View, Image, TouchableHighlight,SafeAreaView} from 'react-native';
const Header = (props) => {
    console.log(props);
    return(
        <SafeAreaView>
            <View
                style = {
                    {
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        paddingLeft: 10
                    }
                }
            >
                <TouchableHighlight
                    onPress = {
                        () => {
                            props.navigation.openDrawer();
                        }
                    }
                >
                    <Image
                        source = {require('@assets/icons/ic_menu.png')}
                        style = {
                            {
                                width: 30,
                                height: 30
                            }
                        }
                    />
                </TouchableHighlight>

            </View>
        </SafeAreaView>
    )
} 

export default Header;