import React from 'react'

import HeaderMenu from './HeaderMenu'
import Main from './Main'

const Layout = props => {
  return (
    <div>
      <HeaderMenu loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
      <Main content={props.children} />
    </div>
  )
}

export default Layout
