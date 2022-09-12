import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/home#about" },
    { name: "Projects", link: "/home#projects" },
    { name: "Blogs", link: "/home#blogs" },
    { name: "Services", link: "/home#services" },
    { name: "Contact", link: "/home#contact" },
];

const Navigation = () => {
    let [open, setOpen] = useState(false);
    return (
        <section className="md:container md:mx-auto lg:px-20 mx-5">
            <div className='md:flex items-center justify-between py-4'>
                <NavLink to="/" className='text-3xl mt-2 font-bold font_kalam'>
                    Nahid Hasan
                </NavLink>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-4 top-5 cursor-pointer md:hidden'>
                    <i className={open ? "ri-close-fill" : "ri-menu-3-line"}></i>
                </div>

                <ul className={`md:flex md:items-center text-center absolute md:static md:bg-transparent bg-zinc-800 md:z-auto z-10 w-full md:w-auto transition-all duration-300 ease-in ${open ? 'top-20' : 'top-[-500px]'}`}>
                    {
                        Links.map((link, index) => (
                            <li key={index} className='xl:mr-8 mr-4 md:my-0 my-5'>
                                <HashLink
                                    to={link.link}
                                    className='hover:text-[#AC6A37] text-base lg:text-lg duration-500'
                                >{link.name}
                                </HashLink>
                            </li>
                        ))
                    }
                    <div className='md:ml-16 flex items-center justify-center gap-3 text-2xl text-[#ac6a37]'>
                        <a href="https://github.com/Nahid51" target="_blank" rel="noreferrer">
                            <i className="ri-github-fill"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/md-nahid-hasan-12a720199/" target="_blank" rel="noreferrer">
                            <i className="ri-linkedin-fill"></i>
                        </a>

                    </div>
                </ul>
            </div>
        </section>
    );
};

export default Navigation;