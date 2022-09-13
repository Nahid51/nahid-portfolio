import React from 'react';
import design from "../assets/images/web design.png";
import development from "../assets/images/full stack.jpg";
import fullStack from "../assets/images/full stack 2.jpg";

const Services = () => {
    return (
        <section id="services" className="md:container md:mx-auto lg:px-20 mx-5">
            <div className='md:my-32 my-16'>
                <p className='font_playfair text-4xl font-bold text-center mb-3'>What I do for clients</p>
                <p className='text-[#ac6a37] text-center text-xl mb-2'>The services I provide</p>
                <hr className=' mb-10' />
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                    <div className="card bg-gray-800">
                        <div className="card-body">
                            <div className='flex items-center gap-5 mb-3'>
                                <img className='h-14 w-14 rounded-full' src={design} alt="" />
                                <h2 className="card-title">Frontend Development</h2>
                            </div>
                            <p>Build functional and attractive web applications based on usability.</p>
                            <p>Provide website maintenance and improvement.</p>
                            <p>Use a combination of markup languages to write web pages.</p>
                            <p>Write functional requirements documents and specifications.</p>
                        </div>
                    </div>
                    <div className="card bg-gray-800">
                        <div className="card-body">
                            <div className='flex items-center gap-5 mb-3'>
                                <img className='h-14 w-14 rounded-full' src={development} alt="" />
                                <h2 className="card-title">Backend Development</h2>
                            </div>
                            <p>Database creation, integration, and management.</p>
                            <p>Maintain data storage, security, and other server-side functions.</p>

                            <p>API integration.</p>
                            <p>Backing up and restoring technologies for a website's files and DB</p>
                        </div>
                    </div>
                    <div className="card bg-gray-800">
                        <div className="card-body">
                            <div className='flex items-center gap-5 mb-3'>
                                <img className='h-14 w-14 rounded-full' src={fullStack} alt="" />
                                <h2 className="card-title">Full Stack Development</h2>
                            </div>
                            <p>Build functional and attractive web applications based on usability.</p>
                            <p>Database creation, integration, and management.</p>
                            <p>Write functional requirements documents and specifications.</p>
                            <p>Maintain data storage, security, and other server-side functions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;