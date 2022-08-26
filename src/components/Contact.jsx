import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d1rvb2h', 'template_1l8j40d', form.current, '4j40KM-ur9hc0v20S')
            .then((result) => {
                toast.success(result.text);
            }, (error) => {
                toast.error(error.text);
            });
        e.target.reset();
    };

    return (
        <section id="contact" className="md:container md:mx-auto lg:px-20 mx-5">
            <div className='md:my-32 my-20'>
                <div className='text-center '>
                    <p className='font_playfair text-5xl font-bold mb-3'>Contact Me</p>
                    <p className='text-[#ac6a37] text-xl mb-20'>Contact me to get your work done</p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-10'>
                    <div className='col-span-1'>
                        <div className='flex gap-5'>
                            <i className="ri-mail-line text-xl text-[#ac6a37]"></i>
                            <div>
                                <p className='text-xl'>Have a question?</p>
                                <p className='my-2'>I am here to help you.</p>
                                <p className='text-[#ac6a37]'>Email me at hasannahidnahid@gmai.com</p>
                            </div>
                        </div>
                        <div className='flex gap-5 mt-5'>
                            <i className="ri-map-pin-line text-xl text-[#ac6a37]"></i>
                            <div>
                                <p className='text-xl'>Current Location</p>
                                <p className='my-2'>Dhaka, Bangladesh</p>
                                <p className='text-[#ac6a37]'>Serving clients worldwide.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-2'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input w-full bg-gray-800"
                                    name='name'
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Your Email"
                                    className="input w-full bg-gray-800"
                                    name='email'
                                    required
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="input w-full bg-gray-800 my-2"
                                name='subject'
                                required
                            />
                            <textarea
                                className="textarea w-full bg-gray-800"
                                placeholder="Your Message"
                                name='message'
                                required
                            />
                            <button type='submit' className="bg-[#ac6a37] hover:bg-[#9b6033] duration-300 p-3 uppercase font-bold hover:cursor-pointer">Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;