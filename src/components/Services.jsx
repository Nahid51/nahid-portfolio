import React from 'react';

const Services = () => {
    return (
        <section id="services" className="md:container md:mx-auto lg:px-20 mx-5">
            <div className='md:my-32 my-16'>
                <p className='font_playfair text-5xl font-bold text-center mb-3'>Services</p>
                <p className='text-[#ac6a37] text-center text-xl mb-2'>The services I provide</p>
                <hr className=' mb-10' />
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Frontend Developer</h2>
                            <p>Build functional and attractive web applications based on usability.</p>
                            <p>Provide website maintenance and improvement.</p>
                            <p>Use a combination of markup languages to write web pages.</p>
                            <p>Write functional requirements documents and specifications.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Backend Developer</h2>
                            <p>Database creation, integration, and management.</p>
                            <p>Maintain data storage, security, and other server-side functions.</p>

                            <p>API integration.</p>
                            <p>Backing up and restoring technologies for a website's files and DB</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Full Stack Developer</h2>
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