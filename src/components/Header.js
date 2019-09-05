import React from 'react'

import { Link } from 'react-router-dom'

const Header = props => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link to={'./Home'}>Math Board</Link>
            </nav>
        </header>
    )
}

export default Header