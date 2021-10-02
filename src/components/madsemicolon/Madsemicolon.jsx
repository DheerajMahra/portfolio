import React from 'react'
import './Madsemicolon.css'
import madsemicolon from '../../assets/madsemicolon.png'

const Madsemicolon = () => {
    return (
        <span className="Madsemicolon">
            <a href={"https://www.instagram.com/madsemicolon/"} target="_blank" rel="noopener noreferrer">
                <img src={madsemicolon} alt="Madsemicolon Instagram page" />
            </a>
        </span>
    )
}

export default Madsemicolon
