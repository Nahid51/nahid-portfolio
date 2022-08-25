import React from 'react';
import { skills } from '../assets/data/skills';

const SkillImages = () => {
    return (
        <section className='bg-slate-900'>
            <div className="md:container md:mx-auto lg:px-20 mx-5">
                <div className='grid grid-cols-7 gap-3 py-4'>
                    {skills.map((skill, index) => (
                        <div
                            className='flex items-center justify-center'
                            key={index}
                        >
                            <img className='w-12' src={skill.image} alt='' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillImages;