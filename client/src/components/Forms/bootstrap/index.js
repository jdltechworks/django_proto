import { reduxForm } from 'redux-form'
import { validator } from './validator'
import { renderField } from './fields'
import React, { Component, Children, cloneElement } from 'react'

class ParentForm extends Component {
    render() {
        const { props } = this
        const { children, handleSubmit } = props
        return (
            <div className="container grid-xl">
                <form onSubmit={handleSubmit((values) => {
                    this.props.getFormValues(values)})
                }>
                    {Children.map(children, (child) =>
                        cloneElement(child, { ...props, renderField })
                    )}
                </form>
            </div>
        )
    }
}

const createForm = (name, ChildForm, model) => {

    const DecoratedForm = (props) => {

        const clonedProps = {
            ...props,
            fields: model
        }
        return(
            <ParentForm {...clonedProps}>
                <ChildForm />
            </ParentForm>
        )

    }

    return reduxForm({
        form: name,
        validate: validator(model)
    })(DecoratedForm)

}

export default createForm
