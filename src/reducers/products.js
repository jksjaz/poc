export default (state = {}, action) => {
    switch (action.type) {
        case "SET_PRODUCT":
            return action.data
        default:
            return state
    }
}