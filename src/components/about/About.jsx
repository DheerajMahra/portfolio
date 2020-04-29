import React from 'react'
import './About.css'

import SectionTitle from '../shared/section-title/SectionTitle'

const About = () => {
    return (
        <div className="Section-about" id="about">
            <SectionTitle>Introduction</SectionTitle>
            <p className="About__text">I am a Front End Developer having a good understanding of design and layouts. I try to keep myself updated with the latest trends in the web world. I code meaningful markups and web applications.</p>
            <div className="u-tc">
                <p className="About__strong u-tc">I play with Front End Everyday</p>
            </div>
        </div>
    )
}

export default About
