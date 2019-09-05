import React from 'react'

import Header from './Header'
import Main from './Main'

const Layout = props => {
    return(
        <div>
            <Header />
            <Main content={props.children}/>
        </div>
    )
}

export default Layout
