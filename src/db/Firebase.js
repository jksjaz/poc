import * as firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyAbhlR_-Ll89r-BPpyshB3fbF34yIjw-Zw",
    authDomain: "ecommerce-f48be.firebaseapp.com",
    databaseURL: "https://ecommerce-f48be.firebaseio.com",
    projectId: "ecommerce-f48be",
    storageBucket: "ecommerce-f48be.appspot.com",
    messagingSenderId: "496785036623",
    appId: "1:496785036623:web:48ba9888489408a1"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.database()
const storageRef = firebase.storage().ref()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, storageRef, googleAuthProvider, db as default }