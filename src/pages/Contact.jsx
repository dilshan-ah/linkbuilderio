import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import { FaCheck } from 'react-icons/fa6'
import Footer from '../components/Footer'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_vxotkvs', 'template_13wy31g', form.current, {
          publicKey: 'lwvBJV_2Oe6d70C4o',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return (
        <div className='relative'>
            <Navbar />

            <div className='container mx-auto px-16 py-48'>
                <div className='grid grid-cols-12 lg:gap-20'>
                    <div className='xl:col-span-4 lg:col-span-5 col-span-12'>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl green-highlight-two tracking-tighter font-medium !leading-snug">
                            Let's <strong className='bg-[#00DA90] px-4 pb-1 rounded-xl font-medium'>Skyrocket</strong> your SEO performance
                        </h1>

                        <p className='font-semibold text-lg mt-10'>We’d love to learn more about your project. Please fill out the form, and we’ll send over some ideas and schedule a call.</p>

                        <ul className='mt-10'>
                            <li className='flex items-center text-base font-semibold mb-2'>
                                <div className='rounded-full bg-[#00DA90] p-1 mr-4'>
                                    <FaCheck className='text-sm text-black' />
                                </div>

                                Authentic Outreach
                            </li>
                            <li className='flex items-center text-base font-semibold mb-2'>
                                <div className='rounded-full bg-[#00DA90] p-1 mr-4'>
                                    <FaCheck className='text-sm text-black' />
                                </div>

                                Insanely High Quality
                            </li>
                            <li className='flex items-center text-base font-semibold mb-2'>
                                <div className='rounded-full bg-[#00DA90] p-1 mr-4'>
                                    <FaCheck className='text-sm text-black' />
                                </div>

                                Deep Analysis
                            </li>
                            <li className='flex items-center text-base font-semibold mb-2'>
                                <div className='rounded-full bg-[#00DA90] p-1 mr-4'>
                                    <FaCheck className='text-sm text-black' />
                                </div>

                                Trusted by the Best
                            </li>
                        </ul>
                    </div>
                    
                        <div className='xl:col-span-8 lg:col-span-7 col-span-12'>
                        <form ref={form} onSubmit={sendEmail} className='w-full'>
                            <div className="wave-group mb-5">
                                <input required type="text" name='first-name' className="input" />
                                <span className="bar" />
                                <label className="label">
                                    <span className="label-char" style={{ index: 0 }}>F</span>
                                    <span className="label-char" style={{ index: 1 }}>i</span>
                                    <span className="label-char" style={{ index: 2 }}>r</span>
                                    <span className="label-char" style={{ index: 3 }}>s</span>
                                    <span className="label-char" style={{ index: 4 }}>t </span>

                                    <span className="label-char ml-1" style={{ index: 5 }}>N</span>
                                    <span className="label-char" style={{ index: 6 }}>a</span>
                                    <span className="label-char" style={{ index: 7 }}>m</span>
                                    <span className="label-char" style={{ index: 8 }}>e</span>
                                </label>
                            </div>

                            <div className="wave-group mb-5">
                                <input required type="text" name='last-name' className="input" />
                                <span className="bar" />
                                <label className="label">
                                    <span className="label-char" style={{ index: 0 }}>L</span>
                                    <span className="label-char" style={{ index: 1 }}>a</span>
                                    <span className="label-char" style={{ index: 2 }}>s</span>
                                    <span className="label-char" style={{ index: 3 }}>t </span>

                                    <span className="label-char ml-1" style={{ index: 4 }}>N</span>
                                    <span className="label-char" style={{ index: 5 }}>a</span>
                                    <span className="label-char" style={{ index: 6 }}>m</span>
                                    <span className="label-char" style={{ index: 7 }}>e</span>
                                </label>
                            </div>

                            <div className="wave-group mb-5">
                                <input required type="email" name='email' className="input" />
                                <span className="bar" />
                                <label className="label">
                                    <span className="label-char" style={{ index: 0 }}>E</span>
                                    <span className="label-char" style={{ index: 1 }}>m</span>
                                    <span className="label-char" style={{ index: 2 }}>a</span>
                                    <span className="label-char" style={{ index: 3 }}>i </span>
                                    <span className="label-char" style={{ index: 4 }}>l </span>

                                    <span className="label-char ml-1" style={{ index: 5 }}>A</span>
                                    <span className="label-char" style={{ index: 6 }}>d</span>
                                    <span className="label-char" style={{ index: 7 }}>d</span>
                                    <span className="label-char" style={{ index: 8 }}>r</span>
                                    <span className="label-char" style={{ index: 9 }}>e</span>
                                    <span className="label-char" style={{ index: 10 }}>s</span>
                                    <span className="label-char" style={{ index: 11 }}>s</span>
                                </label>
                            </div>

                            <div className="wave-group mb-5">
                                <input required type="text" name='website' className="input" />
                                <span className="bar" />
                                <label className="label">
                                    <span className="label-char" style={{ index: 0 }}>Y</span>
                                    <span className="label-char" style={{ index: 1 }}>o</span>
                                    <span className="label-char" style={{ index: 2 }}>u</span>
                                    <span className="label-char" style={{ index: 3 }}>r</span>

                                    <span className="label-char ml-1" style={{ index: 4 }}>W</span>
                                    <span className="label-char" style={{ index: 5 }}>e</span>
                                    <span className="label-char" style={{ index: 6 }}>b</span>
                                    <span className="label-char" style={{ index: 7 }}>s</span>
                                    <span className="label-char" style={{ index: 8 }}>i</span>
                                    <span className="label-char" style={{ index: 9 }}>t</span>
                                    <span className="label-char" style={{ index: 10 }}>e</span>
                                </label>
                            </div>

                            <div className="wave-group mb-10">

                                <input required type="text" name='message' className="input" />
                                <span className="bar" />
                                <label className="label">
                                    <span className="label-char" style={{ index: 0 }}>M</span>
                                    <span className="label-char" style={{ index: 1 }}>e</span>
                                    <span className="label-char" style={{ index: 2 }}>s</span>
                                    <span className="label-char" style={{ index: 3 }}>s </span>
                                    <span className="label-char" style={{ index: 4 }}>a</span>
                                    <span className="label-char" style={{ index: 5 }}>g</span>
                                    <span className="label-char" style={{ index: 6 }}>e</span>
                                </label>
                            </div>

                            <button className="button-two capitalize py-1.5 px-4 !font-semibold flex items-center">
                                Send message
                            </button>

                            </form>
                        </div>

                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Contact