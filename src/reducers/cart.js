import Data from "../db/ProductsDB"

const cartReducerDefaultState = []

export default (state = cartReducerDefaultState, action) => {
    switch (action.type) {
        case "CART_ADD":
            const product = Data.filter(each => each.key === action.id)
            const cart = product.map(each => {return {key: each.key, img: each.img, name: each.name}})
            return [
                ...state,
                ...cart
            ]
        case "CART_REMOVE":
            return state.filter(id => id !== action.id)
        default:
            return state
    }
}