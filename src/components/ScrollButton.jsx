import React, { useState } from 'react';

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div>
            <button onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} className='btn rounded fixed md:right-8 right-3 bottom-20 md:text-2xl text-xl z-50 cursor-pointer text-red-200'>
                <i className="ri-arrow-up-line"></i>
            </button>
        </div>
    );
};

export default ScrollButton;