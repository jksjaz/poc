import React from "react"
import { connect } from "react-redux"

import Data from "../db/ProductsDB"
import { cartAdd, cartRemove } from "../actions/cart"

const ProductList = (props) => {
    return Data.map(each => {
        return (
        <div key={each.key}>
            <img alt="motors" src={each.img} width="100"/>
            <h3>{each.name}</h3>
            <h5>Number of items {props.cart.length}</h5>
            <button onClick={() => props.dispatch(cartAdd(each.key))}>Purchase Now</button>
            <button onClick={() => props.dispatch(cartRemove(each.key))}>Remove</button>
        </div>
        )
    })
}

const mapStateToProps = state => {
    return { cart: state.cart }
}

export default connect(mapStateToProps)(ProductList)