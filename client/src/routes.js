import { Route, IndexRoute } from 'react-router'
import React, { Component } from 'react'
import App from './containers/App'
import Home from './containers/Home'
import NotFound from './containers/404'
const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="*" component={NotFound} />
    </Route>
)

export default routes
