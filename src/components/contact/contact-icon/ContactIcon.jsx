import React from 'react'
import './ContactIcon.css'

const ContactIcon = props => {
    return (
        <a
        className="Icon-box"
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        >
        {props.children}
        </a>
    )
}

export default ContactIcon
