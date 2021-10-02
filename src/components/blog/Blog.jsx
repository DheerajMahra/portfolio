import React from 'react'
import { useMedium } from "react-use-medium";
import Slider from "react-slick";
import './Blog.css'
import SectionTitle from '../shared/section-title/SectionTitle'
import BlogItem from './blog-list/blog-item/BlogItem';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const Blog = () => {

    const { data, isFetched } = useMedium("dheerajmahra");
    console.log(data)
    const posts = !isFetched ? [] : data.items.map((post) => (
        <BlogItem
            key={post.guid}
            img={post.thumbnail}
            head={post.title}
            tags={post.categories.join(", ")}
            to={post.link}
        ></BlogItem>
    ));

    return (    
        <div className="Section-blog" id="blogs">
            <SectionTitle>Top Blogs</SectionTitle>
            <div className="Blog-container">
            	<Slider {...settings}>
                    {posts}
                </Slider>
            </div>
        </div>
    )
}

export default Blog
