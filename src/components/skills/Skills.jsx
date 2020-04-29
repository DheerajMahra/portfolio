import React from 'react'
import './Skills.css'

import SectionTitle from '../shared/section-title/SectionTitle'
import SkillList from './skill-list/SkillList' 

const Skills = () => {
    return (
        <div className="Section-skills" id="skills">
            <SectionTitle>Skills &amp; Tools</SectionTitle>
            <div className="Skill-container">
                <SkillList />
            </div>
        </div>
    )
}

export default Skills
