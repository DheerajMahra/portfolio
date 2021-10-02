import React from 'react'
import './Work.css'

import SectionTitle from '../shared/section-title/SectionTitle'
import WorkList from './work-list/WorkList'

const Work = () => {
    return (
        <div className="Section-work" id="work">
            <SectionTitle>My Work</SectionTitle>
            <div className="Work-container">
                <WorkList />
                <div className="u-tc">
                    <a href="https://github.com/DheerajMahra" target="_blank" rel="noopener noreferrer">
                        <p className="Work__strong u-tc">
                            Still not impressed? Check GitHub
                            <span role="img" aria-label="go to github">🤘</span>
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Work
