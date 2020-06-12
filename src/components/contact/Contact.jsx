import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faMedium, faInstagram }
from "@fortawesome/free-brands-svg-icons"

import SectionTitle from '../shared/section-title/SectionTitle'
import ContactIcon from './contact-icon/ContactIcon'

const Contact = () => {
    return (
        <div className="Section-contact" id="contact">

            <SectionTitle white>Get IN TOUCH</SectionTitle>

            <div className="u-tc">
                <h3 className="Contact__mail">dheerajmahra873@gmail.com</h3>
            </div>

            <div className="Contact__social">

                <ContactIcon href="https://www.linkedin.com/in/dheerajmahra">
                    <FontAwesomeIcon className="Contact__icon" icon={faLinkedin} />
                </ContactIcon>

                <ContactIcon href="https://www.github.com/dheerajmahra">
                    <FontAwesomeIcon className="Contact__icon" icon={faGithub} />
                </ContactIcon>

                <ContactIcon href="https://medium.com/@dheerajmahra/">
                    <FontAwesomeIcon className="Contact__icon" icon={faMedium} />
                </ContactIcon>

                <ContactIcon href="https://instagram.com/dheeraj_mahra">
                    <FontAwesomeIcon className="Contact__icon" icon={faInstagram} />
                </ContactIcon>
            
            </div>
        </div>
    )
}

export default Contact
