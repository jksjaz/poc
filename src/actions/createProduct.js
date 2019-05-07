import db, { storageRef } from "../db/Firebase"

const dbRef = "products"

//export const createProduct = data => ({ type: "CREATE_PRODUCT", data })
export const removeProduct = id => ({ type: "REMOVE_PRODUCT", id })

export const productCreate = (action) => {
    return (dispatch) => {
        const uploadTask = storageRef.child(`images/${action.name}`).put(action.file)
        uploadTask.on('state_changed', snapshot => {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log("Uploading", progress)
        }, err => {
            console.log("Uploading Error", err)
        }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then(url => {
                const data = {
                    name: action.name,
                    url
                }
                db.ref(dbRef).push(data)
                //dispatch(createProduct(data))
            })
        })
    }
}

export const productRemove = ({ id }) => {
    return async dispatch => {
        return db.ref(id).remove().then(() => {
            dispatch(removeProduct(id))
        })
    }
}