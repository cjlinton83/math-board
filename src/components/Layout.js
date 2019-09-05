import React from 'react'

import Header from './Header'
import Main from './Main'
// import Footer from './Footer'

const Layout = props => {
    return(
        <div>
            <Header />
            <Main content={props.children}/>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout