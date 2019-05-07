import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import * as serviceWorker from './serviceWorker';

import store from "./store/configureStore"
import AppRoutes from "./router/AppRoutes"

import { firebase } from "./db/Firebase"
import { fetchProducts } from "./actions/products"

const jsx = (
    <Provider store={store}>
        <AppRoutes/>
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(fetchProducts()).then(() => {
    ReactDOM.render(jsx, document.getElementById('root'));
})

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log("log in")
    } else {
        console.log("log out")
    }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();