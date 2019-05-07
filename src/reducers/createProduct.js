export default (state = {}, action) => {
    switch (action.type) {
        case "CREATE_PRODUCT":
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