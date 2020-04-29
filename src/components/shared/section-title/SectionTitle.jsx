import React from 'react'
import './SectionTitle.css'

const SectionTitle = props => {
    return (
        <div className="Section-title">
            <h2
            className="Section-title__text u-tc u-mb-lg"
            style={props.white ? {color: "var(--text-primary)"} : null}
            >
            {props.children}
            </h2>
        </div>
    )
}

export default SectionTitle
