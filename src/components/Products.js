import React from "react"
import { connect } from "react-redux"

import ProductItem from "./ProductItem"

const Products = ({ products }) => {
    if (products.length > 0) {
        return <ProductItem {...products} />
    } else {
        return <div>Ok No Data</div>
    }
}

const mapStateToProps = state => ({ products: state.products })

export default connect(mapStateToProps)(Products)