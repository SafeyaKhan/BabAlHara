import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import WelcomeScreen from '../screens/authScreens/WelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import SignupScreen from '../screens/authScreens/SignupScreen'
import forgetPassword from '../screens/authScreens/forgetPassword'

const Stack = createStackNavigator();


const AuthNavigator = () => {
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
            <Stack.Screen name="forgetPassword" component={forgetPassword} options={{
                headerShown: false
               
            }} />
             
           
        </Stack.Navigator>

    )
}

export default AuthNavigator
