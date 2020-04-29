import React from 'react'
import './SkillList.css'

import SkillItem from './skill-item/SkillItem'

const SkillList = () => {
    return (
        <ul className="Skill-list">
            <SkillItem skill="html5">
                <i className="devicon-html5-plain colored Skill-icon"></i>
            </SkillItem>

            <SkillItem skill="css3">
                <i className="devicon-css3-plain colored Skill-icon"></i>
            </SkillItem>

            <SkillItem skill="Sass">
                <i className="devicon-sass-plain colored Skill-icon"></i>
            </SkillItem>

            <SkillItem skill="JavaScript">
                <i className="devicon-javascript-plain colored Skill-icon"></i>
            </SkillItem>

            <SkillItem skill="ReactJS">
                <i className="devicon-react-plain colored Skill-icon"></i>
            </SkillItem>

            <SkillItem skill="Webpack">
                <i className="devicon-webpack-plain colored Skill-icon"></i>
            </SkillItem>

            <SkillItem skill="PHP">
                <i className="devicon-php-plain colored Skill-icon"></i>
            </SkillItem>

            <SkillItem skill="MySql">
                <i className="devicon-mysql-plain colored Skill-icon"></i>
            </SkillItem>

            <SkillItem skill="Git version control">
                <i className="devicon-git-plain colored Skill-icon"></i>
            </SkillItem>
            
            <SkillItem skill="Github">
                <i className="devicon-github-plain colored Skill-icon"></i>
            </SkillItem>
        </ul>
    )
}

export default SkillList
