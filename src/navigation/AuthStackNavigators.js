import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import WelcomeScreen from '../screens/authScreens/WelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import AuthTabNavigators from './AuthTabNavigators';
import DetailsScreen from '../screens/DetailsScreen'
import SignupScreen from '../screens/authScreens/SignupScreen'
import cartScreen from '../screens/cartScreen';

const Stack = createStackNavigator();


const AuthStackNavigators = () => {
    return (

        <Stack.Navigator>
           <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{
                headerShown: false
               
            }} />
                          
            <Stack.Screen name="SignInScreen" component={SignInScreen} options={{
                headerShown: false
               
            }} />
            
            <Stack.Screen name="SignupScreen" component={SignupScreen} options={{
                headerShown: false
               
            }} />
            <Stack.Screen name="HomeScreen" component={AuthTabNavigators} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{
                headerShown: false
            }}/>
             <Stack.Screen name="cartScreen" component={cartScreen} options={{
                headerShown: false
            }}/>
             
           
        </Stack.Navigator>

    )
}

export default AuthStackNavigators
