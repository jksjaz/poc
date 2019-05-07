import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk"

import products from "../reducers/products"
import cart from "../reducers/cart"
import createProduct from "../reducers/createProduct"

const store = createStore(
    combineReducers({
        products,
        cart,
        createProduct
    }),
    compose(applyMiddleware(thunk))
)

export default store