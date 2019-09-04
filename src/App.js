import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './components/Home'
import List from './components/List'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/list' component={List} />
                <Redirect to="/" />
            </Switch>
        )
    }
}

export default App
