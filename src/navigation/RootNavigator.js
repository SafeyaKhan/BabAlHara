import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import AuthStackNavigators from './AuthStackNavigators';
import AuthTabNavigators from './AuthTabNavigators';
import React, {useContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

const MyTheme = {
    ...DefaultTheme,
    //dark: false,
  colors: {
    backgroundColor: 'white'}
  };

const RootNavigator = () => {


    return (
        
            <NavigationContainer theme={MyTheme}>
                <AuthStackNavigators />
                {/* <AuthTabNavigators /> */}
            </NavigationContainer>
          
            
    )
}

export default RootNavigator
