import React from 'react';
import nahidPhoto from '../assets/save-removebg-preview.png';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <section className='md:my-40 my-10'>
            <div className='grid md:grid-cols-2 grid-cols-1'>

                <div>
                    <img src={nahidPhoto} className='md:w-72 w-52 mx-auto' alt="nahidPhoto" />
                </div>

                <div>
                    <p className='font_playfair text-4xl font-bold'>Md. Nahid Hasan</p>
                    <p className='text-[#ac6a37] mt-3 mb-5'>web developer</p>
                    <p className='mb-7 text-sm text-justify'>I have Skilled in front-end development technology such as Html5, CSS3, Bootstrap, Tailwind CSS, Material UI, Responsive Design, JavaScript, React JS, Redux-Toolkit, Firebase Authentication and backend development technology such as Node JS, Express JS, MongoDB, Mongoose, JWT, Stripe Payment Gateway, SSL Commerce Payment Gateway etc. Learning a variety of scripting language and multimedia tools is one of my strengths. I am also a hard worker and team player. I am looking for a challenging opportunity that will able me to use my skills and abilities to achieve a challenging goal.</p>
                    <button className="bg-[#ac6a37] p-3 rounded-lg uppercase font-bold hover:cursor-pointer">
                        <NavLink to="/contact">contact me</NavLink>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default About;