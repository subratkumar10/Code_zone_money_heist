import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyDSTmB28cRy_UVLZWxHKrtClThd963DdzY",
    authDomain: "messanger-app-59f60.firebaseapp.com",
    databaseURL: "https://messanger-app-59f60-default-rtdb.firebaseio.com",
    projectId: "messanger-app-59f60",
    storageBucket: "messanger-app-59f60.appspot.com",
    messagingSenderId: "401770513136",
    appId: "1:401770513136:web:e78beb51df07a773ccb835",
    measurementId: "G-G9SJG22720"
  

});

const db=firebaseApp.firestore();
export default db;