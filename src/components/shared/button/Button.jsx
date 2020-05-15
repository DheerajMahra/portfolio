import React from 'react'
import './Button.css'

const Button = props => {

    const { primary, tertiary, href } = props

    let classes = "Button "
    classes += primary ? "Button--primary" : ""
    classes += tertiary ? "Button--tertiary" : ""

    return (
        <a className={classes} href={href} target="_blank">
        {props.children}
        </a>
    )
}

export default Button
