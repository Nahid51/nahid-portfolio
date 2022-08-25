import React from 'react';

const BlogCard = ({ item }) => {
    const { photo, name, date, link } = item;

    return (
        <div className="card bg-base-100 shadow-xl image-full">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{date}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary rounded-lg uppercase">
                        <a href={link} target="_blank" rel="noreferrer">Details</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;