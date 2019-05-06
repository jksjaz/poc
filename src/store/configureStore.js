import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import cart from "../reducers/cart"

const store = createStore(
    cart,
    compose(applyMiddleware(thunk))
)

export default store