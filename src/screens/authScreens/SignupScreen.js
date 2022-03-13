import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { colors, parameters, heading, text } from "../../global/styles"
import { Icon, SocialIcon, Button } from 'react-native-elements'
import Header from '../../components/Header'
import * as Animatable from 'react-native-animatable'

// services
import  Auth  from '../../services/auth'


const SignupScreen = ({ navigation }) => {
    const [textInput2Focussed, setTextInput2Focussed] = useState(false)
    // const textInput1 = useRef(1)
    // const textInput2 = useRef(2)
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    return (
        <View style={styles.container}>
            <Header title="My Account" type="arrow-left" navigation={navigation} />
            <View style={styles.view}>
                <Text style={[styles.heading, { paddingTop: 20 }]}>Sign-Up</Text>
            </View>
            <View>
                <Text style={styles.text1}>Please enter Email and Password that you want to register with your account</Text>
            </View>
            <View style={styles.view}>
                <TextInput
                    value={userName}
                    onChangeText={e => setUserName(e)}
                    style={styles.textinput1}
                    placeholder="Full Name"
                    autoCorrect={false}
                />
                <TextInput
                    value={email}
                    onChangeText={e => setEmail(e)}
                    style={styles.textinput1}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                   // ref={textInput1}
                />
            </View>
            <View style={styles.textinput2}>
                <Animatable.View animation={textInput2Focussed ? " " : "fadeInUp"} duration={800}>
                    <Icon
                        type="material"
                        name="lock"
                        size={18}
                        iconStyle={{ color: colors.grey5 }}
                    />
                </Animatable.View>
                <TextInput
                    style={{
                        width: "80%", fontSize: 13
                    }}
                    value={password}
                    placeholder="Password"
                    onChangeText={e => setPassword(e)}
                    secureTextEntry={true}
                    //  ref={textInput2}
                    onFocus={() => { setTextInput2Focussed(false) }}
                    onBlur={() => { setTextInput2Focussed(true) }}
                />
                <Animatable.View animation={textInput2Focussed ? " " : "fadeInUp"} duration={800}>
                    <Icon
                        type="material"
                        name="visibility-off"
                        size={18}
                        iconStyle={{ color: colors.grey5 }}
                    />
                </Animatable.View>
            </View>
           

            <View style={styles.view}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#5b0010' }]}
                    onPress={() => Auth.signUp( userName,email, password)}
                >
                    <Text style={{ color: "#ffffff" }}>Create Account</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity
                    onPress={() => navigation.navigate('SignInScreen') }
                >
                    <Text style={{ color: colors.grey1,textAlign:'center',textDecorationLine:'underline' }}>Already have an Account? Sign In</Text>
                </TouchableOpacity>
            </View>
        </View >

    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        paddingTop: 20
    },
    heading: {
        color: colors.primarydark,
        fontSize: heading.fontSize,
        fontWeight: 'bold',
        marginHorizontal: 45,
        marginVertical: 5
    },
    text1: {
        color: colors.grey2,
        fontSize: text.fontSize,
        marginHorizontal: 45,
        marginVertical: 5
    },
    textinput1: {
        borderWidth: 1,
        borderColor: "#e1e8ee",
        borderRadius: 12,
        marginHorizontal: 45,
        marginVertical: 5,
        padding: 10,
        fontSize: 13

    },
    textinput2: {
        borderWidth: 1,
        borderColor: "#e1e8ee",
        borderRadius: 12,
        marginHorizontal: 45,
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        padding: 10

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
    socialIcon: {
        height: 50,
        marginHorizontal: 45,
        marginVertical: 5,
        borderRadius: 12,
        fontSize: 10
    },
    createbutton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.primarydark,
        fontSize: 13,
    },
    createbuttontitle: {
        color: colors.primarydark,
        fontSize: 13,
        fontWeight: "bold"
    }
})