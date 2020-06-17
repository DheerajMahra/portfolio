import React from 'react'
import './Blog.css'
import SectionTitle from '../shared/section-title/SectionTitle'
import BlogList from './blog-list/BlogList'

const Blog = () => {
    return (
        <div className="Section-blog" id="blogs">
            <SectionTitle>Top Blogs</SectionTitle>
            <div className="Blog-container">
                <BlogList />
            </div>
        </div>
    )
}

export default Blog
