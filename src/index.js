import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import * as serviceWorker from './serviceWorker';

import store from "./store/configureStore"
import App from './components/App';

import { firebase } from "./db/Firebase"
import { fetchData } from "./actions/cart"

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(fetchData()).then(() => {
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