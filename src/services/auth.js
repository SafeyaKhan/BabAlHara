import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

const signUp = (fullname, email , password) => {
    if(!fullname || !email || !password){
        Alert.alert('Error','Please Enter All Fields')
    }
 return auth().createUserWithEmailAndPassword(email,password)
 .then( cred => {
     const{uId} = cred.user;

     auth().currentUser.updateProfile({
         displayName: fullname
     })
     return uId
 })
 //.then( uid => createUserInDb(uid, fullname, email))

 .catch(
     err => Alert.alert(err.code,err.message)
 )
}
const signIn = (email , password) => {
    if(!email || !password){
        Alert.alert('Error','Please Enter All Fields') 
    }
    return auth().signInWithEmailAndPassword(email,password)
    .then( ()=>{})
    .catch(
        err => Alert.alert(err.code,err.message)
    )
   }

const forgetPassword = (email) =>{
    if(!email){
        Alert.alert('Error','Please enter Email')
    }
    return auth().sendPasswordResetEmail(email)
}

const signOut = () => {
    return auth().signOut()
}

const Auth = {
    signUp,
    signIn,
    forgetPassword,
    signOut
}

export default Auth