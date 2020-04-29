import React from 'react'
import './SkillItem.css'

const SkillItem = props => {
    return (
        <li className="Skill-list__item" title={props.skill}>
        {props.children}
        </li>
    )
}

export default SkillItem
