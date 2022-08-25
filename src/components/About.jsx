import React from 'react';
import nahidPhoto from '../assets/images/save-removebg-preview.png';
import { HashLink } from 'react-router-hash-link';

const About = () => {
    return (
        <section id="about" className="bg-gray-800">
            <div className='md:container md:mx-auto lg:px-20 mx-5 py-10'>
                <div className='grid md:grid-cols-2 grid-cols-1'>

                    <div className='md:order-1 order-2'>
                        <img src={nahidPhoto} className='md:w-72 w-52 mx-auto' alt="nahidPhoto" />
                    </div>

                    <div className='md:order-2 order-1'>
                        <p className='font_playfair text-4xl font-bold'>Md. Nahid Hasan</p>
                        <p className='text-[#ac6a37] mt-3 mb-5'>Full-Stack Web Developer</p>
                        <p className='mb-7 text-sm text-justify'>I have Skilled in front-end development technology such as Html5, CSS3, Bootstrap, Tailwind CSS, Material UI, Responsive Design, JavaScript, React JS, Redux-Toolkit, Firebase Authentication and backend development technology such as Node JS, Express JS, MongoDB, Mongoose, JWT, Stripe Payment Gateway, SSL Commerce Payment Gateway etc. Learning a variety of scripting language and multimedia tools is one of my strengths. I am also a hard worker and team player. I am looking for a challenging opportunity that will able me to use my skills and abilities to achieve a challenging goal.</p>
                        <button className="bg-[#ac6a37] hover:bg-[#9b6033] duration-300 p-3 rounded-lg uppercase font-bold hover:cursor-pointer">
                            <HashLink to="#contact">contact me</HashLink>
                        </button>
                    </div>
                    {/* <button className="btn text-slate-700 absolute md:right-8 md:block hidden  text-7xl uppercase" disabled="disabled">About</button> */}
                </div>
            </div>

        </section>
    );
};

export default About;