import React from 'react';
import nahidPhoto from '../assets/Nahid-removebg-preview.png';

const Hero = () => {
    return (
        <section className='md:my-28 my-10'>
            <div className='grid md:grid-cols-2 grid-cols-1'>

                <div>
                    <p className='text-[#ac6a37]'>Hey, I'm Nahid 👋</p>
                    <p className='font_playfair text-5xl font-bold mt-5 mb-10'>I Build & Design <br /> Web Interfaces.</p>
                    <p className='mb-7 text-sm text-justify'>A junior full-stack web developer which is able to build a full web application using different types of web concepts and tools, navigation, layout, and programming. Using my nearly 2 years of experience, I have made many projects.</p>
                    <button className="bg-[#ac6a37] p-3 rounded-lg uppercase font-bold hover:cursor-pointer">
                        <a href="https://drive.google.com/file/d/1i4D8TI4j7zeb4ZOP_IBrZmaJPng1XKXy/view?usp=sharing" target="_blank" rel="noreferrer" >My Resume</a>
                    </button>
                </div>

                <div>
                    <img src={nahidPhoto} className='md:w-72 w-52 mx-auto' alt="nahidPhoto" />
                </div>

            </div>
        </section>
    );
};

export default Hero;