import { createStore, combineReducers } from "redux"
import cartReducer from "../reducers/cart"

export default () => {
    const store = createStore(
        combineReducers({
            cart: cartReducer
        })
    )

    return store
}