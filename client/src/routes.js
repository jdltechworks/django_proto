import App from './containers/App'
import Home from './containers/Home'
import NotFound from './containers/404'
import Product from './containers/Product'

import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/product/create" component={Product} />
        <Route path="*" component={NotFound} />
    </Route>
)

export default routes
