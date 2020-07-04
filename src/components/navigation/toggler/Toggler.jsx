import React from 'react'
import './Toggler.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Toggler = () => {
    return (
        <>
        <input className="Navigation__checkbox" type="checkbox" id="nav-toggler" />
        <label className="Navigation__toggler" htmlFor="nav-toggler">
            <FontAwesomeIcon className="Navigation__icon" icon={faBars} /> 
        </label>
        </>
    )
}

export default Toggler
