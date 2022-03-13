import React, { useState, useEffect, Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native'
import { colors, parameters, heading, text } from "../../global/styles"
import { Icon, SocialIcon, Button } from 'react-native-elements'
import Header from '../../components/Header'
import * as Animatable from 'react-native-animatable'
import Auth from '../../services/auth'
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk-next';
import { GoogleSignin, statusCodes, } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'
import AppContainer from '../../../src/navigation/index'
import HomeScreen from '../HomeScreen'

const SignInScreen = ({ navigation }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [textInput2Focussed, setTextInput2Focussed] = useState(false)
    // const textInput1 = useRef(1)
    // const textInput2 = useRef(2)
    useEffect(() => {
        GoogleSignin.configure();
    }, []);

    // const onFacebookButtonPress = async () => {

    //     // Attempt login with permissions
    //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    //     if (result.isCancelled) {
    //         throw 'User cancelled the login process';
    //     }

    //     // Once signed in, get the users AccesToken
    //     const data = await AccessToken.getCurrentAccessToken();

    //     if (!data) {
    //         throw 'Something went wrong obtaining access token';
    //     }

    //     // Create a Firebase credential with the AccessToken
    //     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    //     // Sign-in the user with the credential
    // return   auth().signInWithCredential(facebookCredential);
        
    // }
    const doUserLogInFacebook = async function () {
        try {
          // Login using the Facebook login dialog asking form email permission
          return await LoginManager.logInWithPermissions(['email']).then(
            (loginResult) => {
              if (loginResult.isCancelled) {
                console.log('Login cancelled');
                return false;
              } else {
                // Retrieve access token from FBSDK to be able to linkWith Parse
                AccessToken.getCurrentAccessToken().then((data) => {
                  const facebookAccessToken = data.accessToken;
                  // Callback that will be called after FBSDK successfuly retrieves user email and id from FB
                  const responseEmailCallback = async (
                    error,
                    emailResult,
                  ) => {
                    if (error) {
                      console.log('Error fetching data: ' + error.toString());
                    } else {
                      // Format authData to provide correctly for Facebook linkWith on Parse
                      const facebookId = emailResult.id;
                      const facebookEmail = emailResult.email;
                      const authData = {
                        id: facebookId,
                        access_token: facebookAccessToken,
                      };
                      let userToLogin = new Parse.User();
                      // Set username and email to match provider email
                      userToLogin.set('username', facebookEmail);
                      userToLogin.set('email', facebookEmail);
                      return await userToLogin
                        .linkWith('facebook', {
                          authData: authData,
                        })
                        .then(async (loggedInUser) => {
                          // logIn returns the corresponding ParseUser object
                          Alert.alert(
                            'Success!',
                            `User ${loggedInUser.get(
                              'username',
                            )} has successfully signed in!`,
                          );
                          // To verify that this is in fact the current user, currentAsync can be used
                          const currentUser = await Parse.User.currentAsync();
                          console.log(loggedInUser === currentUser);
                          // Navigation.navigate takes the user to the screen named after the one
                          // passed as parameter
                          navigation.navigate('HomeScreen');
                          return true;
                        })
                        .catch(async (error) => {
                          // Error can be caused by wrong parameters or lack of Internet connection
                          Alert.alert('Error!', error.message);
                          return false;
                        });
                    }
                  };
      
                  // Formats a FBSDK GraphRequest to retrieve user email and id
                  const emailRequest = new GraphRequest(
                    '/me',
                    {
                      accessToken: facebookAccessToken,
                      parameters: {
                        fields: {
                          string: 'email',
                        },
                      },
                    },
                    responseEmailCallback,
                  );
      
                  // Start the graph request, which will call the callback after finished
                  new GraphRequestManager().addRequest(emailRequest).start();
      
                  return true;
                });
            }
          },
          (error) => {
            console.log('Login fail with error: ' + error);
            return false;
          },
        );
      } catch (error) {
        Alert.alert('Error!', error.code);
        return false;
      }
    };
    const googleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log("user info", userInfo)
            // this.setState({ userInfo });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log(error)
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log(error)
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log(error)
                // play services not available or outdated
            } else {
                // some other error happened
                console.log(error)
            }
        }
    };



    return (
        <View style={styles.container}>
            <Header title="My Account" type="arrow-left" navigation={navigation} />
            <View style={styles.view}>
                <Text style={[styles.heading, { paddingTop: 20 }]}>Sign-In</Text>
            </View>
            <View>
                <Text style={styles.text1}>Please enter Email and Password registered with your account</Text>
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
                    // ref={textInput2}
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
                    onPress={() => Auth.signIn(email, password)}
                >
                    <Text style={{ color: "#ffffff" }}>Sign In</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.view}>
                <TouchableOpacity
                    style={{ textAlign: "center", textDecorationLine: "underline", color: colors.grey2 }}
                    onPress={() => navigation.navigate('forgetPassword')}
                >
                    <Text style={{ color: colors.gery1, textAlign: 'center', textDecorationLine: 'underline' }}>Forgot Password</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.view}>
                <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                    Or
                </Text>
            </View>

            <View style={styles.view}>
                <SocialIcon
                    title="Sign In With Facebook"
                    button
                    type="facebook"
                    iconSize={15}
                    style={styles.socialIcon}
                  //  onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}>
                  onPress={() => doUserLogInFacebook()}>
                </SocialIcon>
            </View>

            <View>
                <SocialIcon
                    title="Sign In With Google"
                    button
                    type="google"
                    iconSize={15}
                    style={styles.socialIcon}
                    onPress={() => googleLogin()}
                />

            </View>
            <View style={styles.view}>
                <Text style={{ fontSize: 14, marginHorizontal: 45, marginVertical: 5, paddingTop: 30, color: colors.grey2 }}>New on Bab Al Hara?</Text>
            </View>
            <View style={{ alignItems: "flex-end", marginHorizontal: 45, paddingTop: 20 }}>
                <Button
                    title="Create An Account"
                    buttonStyle={styles.createbutton}
                    titleStyle={styles.createbuttontitle}
                    onPress={() => navigation.navigate('SignupScreen')} />

            </View>
        </View >

    )
}

export default SignInScreen

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