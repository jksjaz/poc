import db from "../db/Firebase"

export const createProduct = data => ({ type: "CREATE_PRODUCT", data })
export const removeProduct = id => ({ type: "REMOVE_PRODUCT", id })
export const setProduct = data => ({ type: "SET_PRODUCT", data })

export const productCreate = (action) => {
    return (dispatch) => {
        const data = action.data
        db.ref().push({...data})
        dispatch(createProduct(data))
    }
}

export const productRemove = ({ id }) => {
    return async dispatch => {
        return db.ref(id).remove().then(() => {
            dispatch(removeProduct(id))
        })
    }
}

export const fetchProducts = () => {
    return async dispatch => {
        return db.ref("Products").once("value").then(snapshot => {
            const data = []
            snapshot.forEach(child => {
                data.push({
                    id: child.key,
                    ...child.val()
                })
            })
            dispatch(setProduct(data))
        })
    }
}