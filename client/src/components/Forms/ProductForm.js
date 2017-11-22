import React, { Component } from 'react'
import createForm from './bootstrap'
import model from './models/Product'
import map from 'lodash/map'


class ProductForm extends Component {
    render() {
        const { props } = this
        const { renderField, fields } = this.props
        return(
            <div className="product-form container grid-xl">
                {map(fields, renderField.bind(this))}
                <button className="btn btn-primary">Submit</button>
                <button className="btn">Cancel</button>
            </div>
        )
    }
}

export default createForm('product-shit', ProductForm, model)
