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
            </div>
        </div>
    )
}

export default Work
