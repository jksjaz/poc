import React from "react"
import { connect } from "react-redux"

class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: 0
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.cart.length !== this.props.cart.length) {
            this.setState({items: this.props.cart.length})
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.items} x of {this.props.cart ? this.props.cart.map(each => each.name) : "No Item"}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({ cart: state })

export default connect(mapStateToProps)(Cart)