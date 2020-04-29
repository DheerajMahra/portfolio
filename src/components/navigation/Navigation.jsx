import React from 'react'
import './Navigation.css'

import Toggler from './toggler/Toggler'
import NavList from './nav-list/NavList'

const Navigation = () => {
    return (
        <div className="Navigation">
            <Toggler />
            <div className="Navigation__background"></div>
            <nav className="Navigation__nav">
                <NavList />
            </nav>
        </div>
    )
}

export default Navigation
