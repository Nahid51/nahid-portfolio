import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/navigation.css";

let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Blogs", link: "/blogs" },
    { name: "Contact", link: "/contact" },
];

const Navigation = () => {
    let [open, setOpen] = useState(false);
    return (
        <div>
            <div>
                <div className='md:flex items-center justify-between py-4'>
                    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]'>
                        <span className='text-3xl mt-2 font_kalam'>
                            Nahid Hasan
                        </span>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-4 top-5 cursor-pointer md:hidden'>
                        <i className={open ? "ri-close-fill" : "ri-menu-3-line"}></i>
                    </div>

                    <ul className={`md:flex md:items-center text-center absolute md:static md:bg-transparent bg-zinc-800 md:z-auto z-10 w-full md:w-auto transition-all duration-300 ease-in ${open ? 'top-20' : 'top-[-500px]'}`}>
                        {
                            Links.map((link, index) => (
                                <li key={index} className='md:mr-8 md:my-0 my-5'>
                                    <NavLink
                                        to={link.link}
                                        className='hover:text-[#AC6A37] text-base lg:text-lg duration-500'
                                        activeclassname='active'
                                    >{link.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                        <div className='md:ml-16 flex items-center justify-center gap-3 text-2xl'>
                            <a href="https://github.com/Nahid51" target="_blank" rel="noreferrer">
                                <i className="ri-github-fill"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/md-nahid-hasan-12a720199/" target="_blank" without rel="noreferrer">
                                <i className="ri-linkedin-fill"></i>
                            </a>

                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navigation;