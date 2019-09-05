import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './components/Home'
import List from './components/List'
import Layout from './components/Layout'

const App = props => {
    return (
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/list' component={List} />
                <Redirect to="/" />
            </Switch>
        </Layout>
    )
}

export default App
