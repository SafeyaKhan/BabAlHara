import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import { colors } from '../global/styles';
import searchScreen from '../screens/searchScreen'
import cartScreen from '../screens/cartScreen'

const Tab = createBottomTabNavigator();

const AuthTabNavigators = () => {
  return (

    <Tab.Navigator screenOptions={{
      style: {
        height: 55, borderTopWidth: 0, elevation: 0,
      },
      showLabel: false,
      tabBarActiveTintColor: colors.primarydark
    }}>

      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Ionicons name="home" color={color} size={28} />),
      }} />

      <Tab.Screen name="Search" component={searchScreen} options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <View style={{
            width: 60,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            borderColor: colors.primarydark,
            borderWidth: 2,
            borderRadius: 30,
            top: -25,
            elevation: 5
          }}>
            <Ionicons name="search" color={colors.primarydark} size={28} />
          </View>)
      }} />

      <Tab.Screen name="Cart" component={cartScreen} options={{
        tabBarBadge: 0, headerShown: false,
        tabBarIcon: ({ color }) => (
          <Ionicons name="cart" color={color} size={28} />),
      }} />
    </Tab.Navigator>
  );
}
export default AuthTabNavigators
