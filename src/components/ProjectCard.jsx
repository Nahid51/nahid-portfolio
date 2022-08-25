import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectCard = ({ item }) => {
    const { id, photo, name, date } = item;

    return (
        <div className="card bg-base-100 shadow-xl image-full">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{date}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary rounded-lg uppercase">
                        <NavLink to={`/singleProject/${id}`} className='ProjectDetail'>Details</NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;