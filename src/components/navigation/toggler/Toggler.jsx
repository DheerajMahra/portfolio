import React from 'react'
import './Toggler.css'

const Toggler = () => {
    return (
        <>
        <input className="Navigation__checkbox" type="checkbox" id="nav-toggler" />
        <label className="Navigation__toggler" htmlFor="nav-toggler">+</label>
        </>
    )
}

export default Toggler
