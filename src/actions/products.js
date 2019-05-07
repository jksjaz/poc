import db from "../db/Firebase"

export const setProduct = data => ({ type: "SET_PRODUCT", data })

export const fetchProducts = () => {
    return async dispatch => {
        return db.ref("products").on("value", snapshot => {
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