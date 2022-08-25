import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';


const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('./projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    return (
        <section id="projects" className="md:container md:mx-auto lg:px-20 mx-5">
            <div className='md:my-32 my-16'>
                <p className='font_playfair text-5xl font-bold text-center mb-3'>Projects</p>
                <p className='text-[#ac6a37] text-center text-xl mb-2'>My project that I have done</p>
                <hr className=' mb-10' />
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                    {
                        projects.map(item => (
                            <ProjectCard
                                key={item.id}
                                item={item}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;