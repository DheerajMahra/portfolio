import React from 'react'
import './BlogList.css'
import BlogItem from './blog-item/BlogItem'
import Blog1 from '../../../assets/blog1.jpg'
import Blog2 from '../../../assets/blog2.jpg'
import Blog3 from '../../../assets/blog3.jpg'

const BlogList = props => {
    return (
        <div className="Blog-list">
            <BlogItem
                img={Blog1}
                head="The Best approach to design React component hierarchy"
                tags="React, Components, Hierarchy"
                to="https://medium.com/@dheerajmahra/the-best-approach-to-design-react-component-hierarchy-978bb152dbb2?source=friends_link&sk=6eca1f7fe716c2b3858e53f14556ae5d"
            ></BlogItem>

            <BlogItem
                img={Blog2}
                head="Avoid pixels. Start using rem unit the right way in css"
                tags="CSS, Rem, Responsive"
                to="https://medium.com/@dheerajmahra/start-using-rem-unit-the-right-way-3993b97bc3cb?source=friends_link&sk=73ec119c6818847c26839b46e44f04b4"
            ></BlogItem>

            <BlogItem
                img={Blog3}
                head="Fetch initial data on page load in react-redux application"
                tags="React, Redux, Data fetching"
                to="https://medium.com/@dheerajmahra/fetch-initial-data-on-page-load-in-react-redux-application-16f4d8228543?source=friends_link&sk=093e37f46a05a752744db89a33e4225c"
            ></BlogItem>
        </div>
    )
}

export default BlogList
