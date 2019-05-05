import React from "react"
import { connect } from "react-redux"

import Data from "../db/ProductsDB"
import { addCart, removeCart } from "../actions/cart"

const ProductList = (props) => {
    return Data.map(each => {
        return (
        <div key={each.id}>
            <img alt="motors" src={each.img} width="100"/>
            <h3>{each.name}</h3>
            <h5>Number of items {props.cart ? props.cart.filter(ele => ele.id === each.id).length : 0}</h5>
            <button onClick={() => props.dispatch(addCart(each.id))}>Purchase Now</button>
            <button onClick={() => props.dispatch(removeCart(each.id))}>Remove</button>
        </div>
        )
    })
}

const mapStateToProps = state => {
    return { cart: state }
}

export default connect(mapStateToProps)(ProductList)