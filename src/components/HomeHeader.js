import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import { colors, parameters } from "../global/styles"
import { Icon } from 'react-native-elements'

const HomeHeader = ({ type, title, navigation }) => {
    return (
        <View style={styles.container}>
       

            <Icon
                type="material-community"
                name={type}
                color={'black'}
                size={21}
                onPress={()=>{navigation.navigate('SignInScreen')}}
            />
          <Text style={styles.headertext}>{title}</Text>
        
            <Image
                style={styles.homeimage}
                source={require('../../assets/homeScreenpic.jpeg')}
                resizeMode={'contain'}
            />
</View>
    
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        // justifyContent: "space",
        alignItems: "center",
        marginLeft:25

    },
    headertext: {
        color: "#000",
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft:5,
        paddingRight: 200
    },
    homeimage: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginRight: 25
    }

})