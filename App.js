import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, parameters } from "./src/global/styles"
import RootNavigator from './src/navigation/RootNavigator'
import HomeScreen from './src/screens/HomeScreen'
import AppContainer from './src/navigation/index'
import CatDemo from './src/screens/CatDemo'

const App = () => {
  return (
    <View style={styles.container}>    
      <StatusBar translucent barStyle="dark-content" />   
      <AppContainer/>
     {/* <RootNavigator /> */}
     {/* <HomeScreen /> */}
    </View>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1 
   }

})