import React from 'react'

import { Link } from 'react-router-dom'

const Header = props => {
    return (
        <header>
            <nav>
                <Link to={'./Home'}>Math Board</Link>
            </nav>
        </header>
    )
}

export default Header
