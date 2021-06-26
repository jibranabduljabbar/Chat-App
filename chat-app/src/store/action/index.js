import { Firebase } from '../../config/firebase'
import firebase from 'firebase'
import { useHistory } from 'react-router-dom'

function facebooklogin(history){
   return (dispatch) => {
     var provider = new firebase.auth.FacebookAuthProvider();
     firebase.auth().signInWithPopup(provider)
     .then((result) => {
      var token = result.credential.accessToken; 
      var user = result.user;
      let create_user = {
        name: user.displayName,
        email: user.email,
        profile: user.photoURL,
        uid: user.uid
      }
     firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
     .then(() => {
       dispatch({type: "SETUSER",payload: create_user})
       alert("User Login Succesfully...!")
       history.push('/chat')
     }) 
    })
     .catch((error) => {
       var errorCode = error.code;
       var errorMessage = error.message;
       console.log("ErrorMessage =>>>", errorMessage)
     });
   
 }
}

const get_users = () => {
  return (dispatch) => {
    let users = []
    firebase.database().ref("/").child('users').on("child_added",(data) => {
       users.push(data.val())
       
    dispatch({type: "SETFIREBASEUSERS", payload: users})
  })
}
  }

export {
    facebooklogin,
    get_users
}