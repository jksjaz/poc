import db from "../db/Firebase"

export const cartAdd = data => ({ type: "CART_ADD", data })
export const cartRemove = id => ({ type: "CART_REMOVE", id })
export const setData = data => ({ type: "SET_DATA", data })

export const addCart = (action) => {
    return (dispatch) => {
        const data = action.data
        db.ref().push({...data})
        dispatch(cartAdd(data))
    }
}

export const removeCart = ({ id }) => {
    return async dispatch => {
        return db.ref(id).remove().then(() => {
            dispatch(cartRemove(id))
        })
    }
}

export const fetchData = () => {
    return async dispatch => {
        return db.ref().once("value").then(snapshot => {
            const data = []
            snapshot.forEach(child => {
                data.push({
                    id: child.key,
                    ...child.val()
                })
            })
            dispatch(setData(data))
        })
    }
}