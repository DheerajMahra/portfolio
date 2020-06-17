import React from 'react'
import './NavList.css'

import NavItem from './nav-item/NavItem'

const NavList = () => {
    return (
        <div className="Navigation__list">
            <NavItem href="#about">About</NavItem>
            <NavItem href="#skills">Skills &amp; TOOLS</NavItem>
            <NavItem href="#work">My Work</NavItem>
            <NavItem href="#blogs">Top Blogs</NavItem>
            <NavItem href="#contact">Contact</NavItem>
        </div>
    )
}

export default NavList
