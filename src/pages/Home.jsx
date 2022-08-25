import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import About from '../components/About';
import SkillImages from '../components/SkillImages';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <Hero />
            <About />
            <SkillImages />
            <Projects />
            <Blogs />
            <Contact />
        </div>
    );
};

export default Home;