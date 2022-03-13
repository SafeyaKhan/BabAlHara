
   
import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { colors, parameters, heading, text } from "../../global/styles"
import Header from '../../components/Header'

// services
import Auth from '../../services/auth'

const {width, height} = Dimensions.get('window');

export default forgetPassword = ({navigation}) => {

    const [email, setEmail] = useState()

    return(
        <View style={styles.container}>
            <Header title="My Account" type="arrow-left" navigation={navigation}/>
            <View style={styles.view}>
                <Text style={[styles.heading,{paddingTop:20}]}>Password Recovery</Text>
            </View>
            <View>
                <Text style={styles.text1}>Please enter Email registered with your account</Text>
            </View>
            <View style={styles.view}>
                <TextInput
                value={email}
                onChangeText={e => setEmail(e)}
                style={styles.textinput1}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
             //   ref={textInput1}
                />
            </View>
           
            <View style={styles.view}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#5b0010' }]}
                    onPress={()=> {
                        alert('Email sent Succesfully')
                         Auth.forgetPassword(email)
                    }}
                >
                    <Text style={{ color: "#ffffff" }}>Forget Password</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.view}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#5b0010' }]}
                   onPress={() => navigation.navigate('SignInScreen')}
                    >                
                    <Text style={{ color: "#ffffff" }}>Back to Sign In</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

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
    createbuttontitle:{
        color: colors.primarydark,
        fontSize:13,
        fontWeight:"bold"
    }
})
