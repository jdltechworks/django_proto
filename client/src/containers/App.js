import React, { cloneElement, Component, Children } from 'react'
import { connect } from 'react-redux'
import omit from 'lodash/omit'
import NavBar from '../components/NavBar'

const screens = {
    xs: 480,
    sm: 600,
    md: 960,
    xl: 1280,
    xxl: 1140
}


class App extends Component {
    render() {
        const { props } = this
        const noForm = omit(props, 'form')
        return(
            <div className="main">
                <NavBar />
                {Children.map(this.props.children, (child) => {
                    return cloneElement(child, { ...noForm, screens })
                })}
            </div>
        )
    }
}


export default connect(state => state)(App)
