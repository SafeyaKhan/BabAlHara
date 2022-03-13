import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import AuthTabNavigators from './AuthTabNavigators';
import DetailsScreen from '../screens/DetailsScreen'
import cartScreen from '../screens/cartScreen';

const Stack = createStackNavigator();


const AppNavigator = () => {
    return (

        <Stack.Navigator>
           
            <Stack.Screen name="HomeScreen" component={AuthTabNavigators} options={{
                headerShown: false
            }}/>
              <Stack.Screen name="cartScreen" component={cartScreen} options={{
                headerShown: false
            }}/>
             
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{
                headerShown: false
            }}/>
           
           
        </Stack.Navigator>

    )
}

export default AppNavigator
