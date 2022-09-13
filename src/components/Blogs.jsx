import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <section id="blogs" className="md:container md:mx-auto lg:px-20 mx-5">
            <div className='md:my-32 my-20'>
                <p className='font_playfair text-4xl font-bold text-center mb-3'>My blogs</p>
                <p className='text-[#ac6a37] text-center text-xl mb-2'>My blog that I have done</p>
                <hr className=' mb-10' />
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                    {
                        blogs.map(item => (
                            <BlogCard
                                key={item.id}
                                item={item}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;