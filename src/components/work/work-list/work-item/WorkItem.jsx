import React from 'react'
import './WorkItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faTags } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import Button from '../../../shared/button/Button'

const WorkItem = props => {

    const { title, img, tags, live, github} = props

    return (
        <div className="Work-list__item">
            <div className="Work-item__img-box">
                <img  className="Work-item__img" src={img} alt={img} />
            </div>
            <div className="Work-item__content-box">
                <h3 className="Work-item__head">{title}</h3>
                <p className="Work-item__desc">{props.children}</p>
                <small className="Work-item__tags">
                    <FontAwesomeIcon className="Work-item__tag-icon" icon={faTags} /> 
                    <i>{tags}</i>
                </small>
                <div className="Work-item__btn-box">
                    <Button href={live} primary>
                        <FontAwesomeIcon className="Work-item__btn-icon" icon={faExternalLinkAlt} />
                        Live
                    </Button>
                    <Button href={github} tertiary>
                        <FontAwesomeIcon className="Work-item__btn-icon" icon={faGithub} />
                        Github
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default WorkItem
