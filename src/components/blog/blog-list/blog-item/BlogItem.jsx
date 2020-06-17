import React from 'react'
import './BlogItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faTags } from '@fortawesome/free-solid-svg-icons'
import Button from '../../../shared/button/Button'

const BlogItem = props => {

    let { img, head, to, tags } = props

    return (
        <div className="Blog__Item">
            <div className="ImgBox">
                <img className="ImgBox__Img" src={img} alt=""/>
            </div>
            <h3 className="Item__Head">{head}</h3>
            <small className="Item__tags">
                <FontAwesomeIcon className="Item__tag-icon" icon={faTags} /> 
                <i>{tags}</i>
            </small>
            <Button href={to} primary>
                <FontAwesomeIcon className="Blog-item__btn-icon" icon={faExternalLinkAlt} />
                Read on Medium
            </Button>
        </div>
    )
}

export default BlogItem