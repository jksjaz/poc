import React from "react"
import { Route, Router } from "react-router-dom"

import history from "../helpers/history"

import App from '../components/App'
import Products from "../components/Products"
import Cart from "../components/Cart"
import CreateProduct from "../components/CreateProduct"

const AppRouter = () => {
    return (
        <Router history={history}>
            <Route path="/" component={App} exact={true}/>
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
            <Route path="/create-product" component={CreateProduct} />
        </Router>
    )
}

export default AppRouter