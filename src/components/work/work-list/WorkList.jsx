import React from 'react'
import './WorkList.css'
import Colorful from '../../../assets/colorful.png'
import Goalpost from '../../../assets/goalpost.png'
import Gifractor from '../../../assets/gifractor.png'
import Riocart from '../../../assets/riocart.png'
import Emojix from '../../../assets/emojix.png'
import WorkItem from './work-item/WorkItem'

const WorkList = props => {
    return (
        <div className="Work-list">

            <WorkItem
                title="Colorful"
                img={Colorful}
                live="https://colorful.now.sh"
                github="https://github.com/DheerajMahra/colorful"
                tags="React, Firebase, Productivity"
            >Colorful is an app that helps designers and developers to choose color palettes for their next successful project. It has a collection of fresh palettes created by people everyday.</WorkItem>

            <WorkItem
                title="Goalpost"
                img={Goalpost}
                live="https://goalpost.now.sh"
                github="https://github.com/DheerajMahra/goalpost"
                tags="React, Firebase, Productivity"
            >Goalpost tracks your goal for the day so that people can see what you are working on and get motivation from you. Become more productive and have a clear vision of what you want to achieve today.
            </WorkItem>

            <WorkItem
                title="Emojix"
                img={Emojix}
                live="https://emojix.vercel.app"
                github="https://github.com/DheerajMahra/emojix"
                tags="React, Styled-components, Just for Fun"
            >Emojix is an Instagram-live inspired emoji reaction app that fires floating emojies across the screen on clicking on the emoji buttons. Beware! People say it's an addictive app.</WorkItem>

            <WorkItem
                title="Gifractor"
                img={Gifractor}
                live="https://gifractor.now.sh"
                github="https://github.com/DheerajMahra/gifractor"
                tags="React, Just for Fun"
            >Record yourself and create custom meme gifs. This app lets you to create two second gifs using your front camera. Download, share the gif and let the meme gif war begin!</WorkItem>

            <WorkItem
                title="Riocart"
                img={Riocart}
                live="https://riocart.now.sh"
                github="https://github.com/DheerajMahra/riocart-redux"
                tags="React, Redux, Functionality"
            >Riocart is an e-commerce mobile store that mocks the functionality of a real-world shopping app. It allows you to add a product to cart, wishlist a product and checkout.</WorkItem>

        </div>
    )
}

export default WorkList
