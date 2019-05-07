import React from "react"

import { addCart, removeCart } from "../actions/cart"

const ProductItem = (props) => {
    return props.products.map(each => {
        return (
        <div key={each.id}>
            <img alt="motors" src={each.url} width="100"/>
            <h3>{each.name}</h3>
            <h5>Number of items {props.cart ? props.cart.filter(ele => ele.id === each.id).length : 0}</h5>
            <button onClick={() => props.dispatch(addCart(each))}>Purchase Now</button>
            <button onClick={() => props.dispatch(removeCart(each))}>Remove</button>
        </div>
        )
    })
}

export default ProductItem