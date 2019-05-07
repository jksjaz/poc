import React from "react"
import { connect } from "react-redux"

import { productCreate } from "../actions/createProduct"
class CreateProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            extention: null
        }
    }
    
    handleImage = e => {
        const file = e.target.files[0]
        const extention = file.name.slice(-4)
        this.setState({ file, extention })
    }

    handleSubmit = e => {
        e.preventDefault()

        const name = e.target.product_name.value.trim()
        const obj = {
            name,
            ...this.state
        }

        this.props.productCreate(obj)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" name="product_name" className="form-control" placeholder="Enter Name"/>
                        <small className="form-text text-muted">Name Of The Product.</small>
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input type="file" accept="image/*" onChange={this.handleImage} className="form-control-file" placeholder="Enter Name"/>
                        <small className="form-text text-muted">Upload The Product Image.</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                {this.state.url ? <img src={this.state.url} alt="upload"/> : undefined}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return { productCreate: data => dispatch(productCreate(data)) }
}

export default connect(null, mapDispatchToProps)(CreateProduct)