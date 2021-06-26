import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyAojFhhAWkpXtjPEhqS3BO45lIH1LimOaM",
    authDomain: "chat-app-auth0.firebaseapp.com",
    projectId: "chat-app-auth0",
    storageBucket: "chat-app-auth0.appspot.com",
    messagingSenderId: "159924078046",
    appId: "1:159924078046:web:5711587f351ce96f61094f",
    measurementId: "G-2V3RL4156F"
  };
 
 
 let Firebase = firebase.initializeApp(firebaseConfig);

 export default Firebase