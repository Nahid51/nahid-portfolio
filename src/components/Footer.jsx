import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="bg-gray-800">
            <div className='md:container md:mx-auto lg:px-20 mx-5 py-4'>
                <div className='md:flex items-center justify-between text-center'>
                    <div className=' flex items-center justify-center gap-3 text-2xl text-[#ac6a37]'>
                        <a href="https://github.com/Nahid51" target="_blank" rel="noreferrer">
                            <i className="ri-github-fill"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/md-nahid-hasan-12a720199/" target="_blank" rel="noreferrer">
                            <i className="ri-linkedin-fill"></i>
                        </a>

                    </div>
                    <div>
                        <NavLink to="/" className='text-3xl mt-2 font-bold font_kalam'>
                            Md. Nahid Hasan
                        </NavLink>
                    </div>

                    <div>
                        <span>&copy; 2022 Portfolio. All right reserved.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;