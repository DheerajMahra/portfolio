import React from 'react'
import './WorkList.css'
import Gifractor from '../../../assets/gifractor.png'
import Riocart from '../../../assets/riocart.png'

import WorkItem from './work-item/WorkItem'

const WorkList = props => {
    return (
        <div className="Work-list">

            <WorkItem
                title="Gifractor"
                img={Gifractor}
                live="https://gifractor.now.sh"
                github="https://github.com/DheerajMahra/gifractor"
                borderYellow
            >Record yourself and create custom meme gifs. This app lets you to create two second gifs using your front camera. Download and share the gif and let the meme gif war begin!</WorkItem>

            <WorkItem
                title="Riocart"
                img={Riocart}
                live="https://riocart.now.sh"
                github="https://github.com/DheerajMahra/riocart-redux"
                borderOrange
            >Riocart is an e-commerce mobile store that mocks the functionality of a real-world shopping app. It allows you to add a product to cart, wishlist a product and checkout.</WorkItem>

        </div>
    )
}

export default WorkList
