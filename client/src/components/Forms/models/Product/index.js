const Product = {
    title: {
        tag: 'input',
        type: 'text',
        label: 'title',
        validator: 'isAlpha'
    },
    description: {
        tag: 'textarea',
        type: null,
        label: 'description',
        validator: 'isAlpha',
    },
    categories: {
        tag: 'input',
        type: 'text',
        options: [
            'Select a category'
        ],
        label: 'categories',
        validator: 'isArray'
    }
}

export default Product
