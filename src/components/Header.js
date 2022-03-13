import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { colors, parameters } from "../global/styles"
import { Icon } from 'react-native-elements'

const Header = ({title,type,navigation}) => {
    return (
        <View style={styles.header}>
            <Icon
                type="material-community"
                name={type}
                color={'black'}
                size={21}
                onPress={()=>{navigation.goBack()}}
            />
            <View>
                <Text style={styles.headertext}>{title}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        //backgroundColor: colors.primarydark,
        height: parameters.headerHeight,
        alignItems:"center",
        paddingTop:40,
        paddingLeft:10
    },
    headertext:{
        color: "#000",
        fontSize: 18,
        fontWeight:"bold",
        paddingLeft:5

    }

})