import React from "react"
import { connect } from "react-redux"

import { addCart, removeCart } from "../actions/cart"

const Cart = (props) => {
    return props.cart.map(each => {
        return (
        <div key={each.id}>
            <img alt="motors" src={each.img} width="100"/>
            <h3>{each.name}</h3>
            <h5>Number of items {props.cart ? props.cart.filter(ele => ele.id === each.id).length : 0}</h5>
            <button onClick={() => props.dispatch(addCart(each))}>Purchase Now</button>
            <button onClick={() => props.dispatch(removeCart(each))}>Remove</button>
        </div>
        )
    })
}

const mapStateToProps = state => ({ cart: state })

export default connect(mapStateToProps)(Cart)