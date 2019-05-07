import React from "react"

import { firebase, googleAuthProvider } from "../db/Firebase"

const Login = () => {

    const handleLogin = () => {
        firebase.auth().signInWithPopup(googleAuthProvider).then(result => {
            console.log(result.user)
        })
    }

    return (
        <div>
            <button type="button" onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login