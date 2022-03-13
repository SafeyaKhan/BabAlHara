import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native'
import { colors, parameters, heading, text } from "../../global/styles"
import { Icon, SocialIcon, Button } from 'react-native-elements'
import Header from '../../components/Header'
import * as Animatable from 'react-native-animatable'

const WelcomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={[styles.imgshadow]}>
                <Image
                    style={styles.homeimage}
                    source={require('../../../assets/home.png')}
                    resizeMode={'cover'}
                // source={{
                //     uri: 'assets/Cicken-Shawarma.jpeg',
                //   }}
                />
            </View>

            <View style={{ alignItems: "center", paddingTop: 30 }}>
                <Text style={styles.heading}>Bab Al Hara</Text>
            </View>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.text1}>We help you find best and delicious Food</Text>
            </View>
            <View style={[styles.view, { paddingTop: 50 }]}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#5b0010' }]}
                onPress={()=>{navigation.navigate("SignInScreen")}}
                >
                    <Text style={{ color: "#ffffff" }}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.createbutton}
                    onPress={()=>{navigation.navigate("SignupScreen")}}
                    >
                    <Text style={{ color: colors.primarydark }}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WelcomeScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80
    },
    view: {
        paddingTop: 20,
        marginHorizontal: 45,
        marginVertical: 5
    },
    heading: {

        fontSize: 25,
        fontWeight: 'bold',
        marginHorizontal: 45,
        marginVertical: 5
    },
    text1: {
        color: colors.grey2,
        fontSize: text.fontSize,
        marginHorizontal: 45,
        marginVertical: 5,
        alignItems: "center"
    },

    button: {
        borderRadius: 12,
        marginHorizontal: 45,
        marginVertical: 5,
        padding: 10,
        fontSize: 13,
        alignItems: "center",
        // backgroundColor: colors.primarydark
    },
    homeimage: {
        width: 350,
        height: 350,
    },
    createbutton: {
        backgroundColor: "white",
        alignItems: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.primarydark,
        fontSize: 13,
        padding: 10,

        marginHorizontal: 45,
        marginVertical: 5
    },
    imgshadow: {
        shadowColor: "black",
        shadowOffset: { height: 12 },
        shadowOpacity: 0.1,
        paddingLeft: 80

    }
})