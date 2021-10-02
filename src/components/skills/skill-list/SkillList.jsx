import React from 'react'
import './SkillList.css'

import SkillItem from './skill-item/SkillItem'

const SkillList = () => {
    return (
        <ul className="Skill-list">
            <SkillItem skill="html5">
                <i className="devicon-html5-plain-wordmark colored Skill-icon"></i>
            </SkillItem>

            <SkillItem skill="css3">
                <i className="devicon-css3-plain-wordmark colored Skill-icon"></i>
            </SkillItem>

            <SkillItem skill="Tailwind">
                <i className="devicon-tailwindcss-plain colored Skill-icon"></i>
            </SkillItem>

            <SkillItem skill="JavaScript">
                <i className="devicon-javascript-plain colored Skill-icon"></i>
            </SkillItem>

            <SkillItem skill="Webpack">
                <i className="devicon-webpack-plain-wordmark colored Skill-icon"></i>
            </SkillItem>

            <SkillItem skill="ReactJS">
                <i className="devicon-react-plain-wordmark colored Skill-icon"></i>
            </SkillItem>

            <SkillItem skill="Redux">
                <i className="devicon-redux-original colored Skill-icon"></i>
            </SkillItem>

            <SkillItem skill="Gatsby">
                <i className="devicon-gatsby-plain-wordmark colored Skill-icon"></i>
            </SkillItem>

            <SkillItem skill="Firebase">
                <i className="devicon-firebase-plain-wordmark colored Skill-icon"></i>
            </SkillItem>

            <SkillItem skill="Git version control">
                <i className="devicon-git-plain-wordmark colored Skill-icon"></i>
            </SkillItem>
            
        </ul>
    )
}

export default SkillList
