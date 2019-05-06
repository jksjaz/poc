const cartReducerDefaultState = []

export default (state = cartReducerDefaultState, action) => {
    switch (action.type) {
        case "CART_ADD":
            return [
                ...state,
                action.data
            ]
        case "CART_REMOVE":
            return state.filter(each => each.id !== action.id)
        case "SET_DATA":
            return action.data
        default:
            return state
    }
}