import React from 'react'
import './Hero.css'
import Picture from '../../assets/profile.jpg'

const Hero = () => {
    return (
        <div className="Section-hero">
            <i className="devicon-react-plain Hero__react-bg"></i>
            <div className="Section-hero__text-box">
                <div className="u-tc">
                    <img className="Hero__pic" src={Picture} alt="dheeraj mahra"/>
                </div>
                <h1 className="Heading-primary">
                    <span className="Heading-primary--main">Dheeraj Mahra</span>
                    <span className="Heading-primary--sub">&lt; Front End Web Developer /&gt;</span>
                </h1>
            </div>
        </div>
    )
}

export default Hero
