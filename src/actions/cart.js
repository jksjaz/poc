export const cartAdd = ( id = 0) => ({
    type: "CART_ADD",
    id
})

export const cartRemove = ({ id }) => ({
    type: "CART_REMOVE",
    id
})