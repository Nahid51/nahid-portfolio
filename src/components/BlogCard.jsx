import React from 'react';
import "../styles/blogCard.css";

const BlogCard = ({ item }) => {
    const { photo, name, date, link } = item;

    return (
        <div className="card image-full hovereffect2">
            <img src={photo} alt="Shoes" />
            <div className="card-body overlay2">
                <h2>{name}</h2>
                <p className='blogDate'>{date}</p>
                <a href={link} target="_blank" rel="noreferrer">Details</a>
            </div>
        </div>
    );
};

export default BlogCard;