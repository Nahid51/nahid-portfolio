import React from 'react';
import Hero from '../components/Hero';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Projects from '../components/Projects';
import About from '../components/About';

const Home = () => {
    return (
        <div className="md:container md:mx-auto lg:px-20 mx-5">
            <Navigation />
            <Hero />
            <About />
            <Projects />
            <Blogs />
            <Contact />
        </div>
    );
};

export default Home;