import React, { Component } from 'react'
import ProductForm from '../components/Forms/ProductForm'
import map from 'lodash/map'
import toPlainObject from 'lodash/toPlainObject'

class Product extends Component {
    render() {
        const { props } = this
        const { actions } = props
        const { Product: { create }} = actions
        return(
            <div className="product-content">
                <ProductForm csrf_token={props.token} getFormValues={(values) => {
                    create(values)
                }}/>
            </div>
        )
    }
}


export default Product
