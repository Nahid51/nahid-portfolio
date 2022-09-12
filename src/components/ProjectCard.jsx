import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/projectCard.css";

const ProjectCard = ({ item }) => {
    const { id, photo, name, date } = item;

    return (
        <div className="card image-full hovereffect">
            <figure><img className='projectPhoto' src={photo} alt="Shoes" /></figure>
            <div className="card-body overlay">
                <h2 className="ProjectTitle">{name}</h2>
                <p className='projectDate'>{date}</p>
                <NavLink className="ProjectDetail" to={`/singleProject/${id}`} >Details</NavLink>
            </div>
        </div>
    );
};

export default ProjectCard;