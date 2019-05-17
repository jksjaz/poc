import * as firebase from "firebase"

var firebaseConfig = {
    // Configuration Goes here
};

firebase.initializeApp(firebaseConfig)

const db = firebase.database()
const storageRef = firebase.storage().ref()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, storageRef, googleAuthProvider, db as default }
