import React, { Component } from 'react'
import ProductForm from '../components/Forms/ProductForm'

class Product extends Component {
    render() {
        const { props } = this
        return(
            <div className="product-content">
                <ProductForm getFormValues={(values) => {
                    console.log(values)
                }}/>
            </div>
        )
    }
}


export default Product
