import React from 'react'
import './Button.css'

const Button = props => {

    let classes = "Button "
    classes += props.inverted ? "Button--inverted" : null

    return (
        <a className={classes}>
        {props.children}
        </a>
    )
}

export default Button
