import React from 'react'
import footerImage from '../assets/footer-3D.webp'
import logo from '../assets/logo.png'
import clutch from '../assets/clutch.webp'
import { Link } from 'react-router-dom'

const Footer = () => {
    const scrollToTop = () => {
        // Scroll to the top of the page
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Add smooth scrolling
        });
      };
    return (
        <>
            <div className='container mx-auto px-8'>
                <div className='flex rounded-3xl overflow-hidden relative'>
                    <div className='lg:w-5/12 w-4/12 flex items-end'>
                        <img src={footerImage} alt="" />
                    </div>

                    <div className='lg:w-7/12 w-8/12 lg:px-10 lg:py-16 md:pr-8 md:pl-0 md:py-8 pr-6 py-6 flex items-center'>
                        <div>

                            <h2 className="text-3xl md:text-4xl xl:text-5xl green-highlight tracking-tighter font-medium mb-5 | lg:mb-8 leading-none">Curious?<br />Let’s talk link building</h2>

                            <div className="redactor text-gray-800 mb-8">
                                We love talking link building. Let us know about your project and we'll send you a free proposal
                            </div>

                            <div className="flex md:flex-row flex-col">
                                <button className="button-two capitalize py-1.5 px-4 !font-semibold flex items-center justify-center w-max md:mb-0 mb-5">👉 Get in Touch</button>

                                <div className="flex items-center ml-6">
                                    <img src="/src/assets/benji.webp" className="w-11 rounded-2xl md:mr-4 mr-3" />
                                    <div>

                                        <p className="leading-tight font-medium text-lg mb-0 | md:text-lg | xl:text-xl">Stewart</p>

                                        <p className="text-gray-900 font-medium">Chief Link Building Strategist</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='w-full lg:h-[90%] h-full bg-[#00DA90] absolute bottom-0 left-0 -z-10 rounded-3xl'></div>
                </div>
            </div>

            <div className='py-12 container mx-auto px-8 grid grid-cols-4 relative'>
                <div className='xl:col-span-1 col-span-4'>
                    <img src={logo} alt="" />

                    <div className="text-gray-500 mt-6">
                        <div className="redactor text-gray-800">
                            <p className="mb-5 text-base">We’re a bespoke link building agency that delivers outstanding results globally. Our focus is on building white hat links for ambitious brands &amp; agencies. We serve clients internationally, including the USA.</p>

                            <p className="mb-5 text-base"><strong className="font-bold text-black">US Office Address: </strong> 600 California St, San Francisco, CA 94108</p>

                            <p className="mb-5 text-base">
                                <strong className="font-bold text-black">
                                    <strong className="font-bold text-black">UK Office Address: </strong>

                                </strong>40 March Road, Edinburgh, EH4 3SZ
                            </p>

                            <p className="mb-5 text-base">
                                <strong className="font-bold text-black">Email: </strong>
                                <a href="mailto:stewart@linkbuilder.io" className="link text-[#00DA90]">stewart@linkbuilder.io</a>
                            </p>
                            
                            <p className="mb-5 text-base">
                                <strong className="font-bold text-black">Phone: </strong>
                                
                                <a href="tel:+447814402277" className="link text-[#00DA90]">+44 7814402277</a>
                            </p>
                        </div>
                    </div>

                    <img src={clutch} className='my-5 w-48' alt="" />

                    <p class="text-xs">Copyright © <time datetime="2024">2024</time> LinkBuilder.io. All rights reserved.</p>
                </div>

                <div className='xl:col-span-2 col-span-4 grid grid-cols-3 xl:py-0 py-10'>
                    <div className='xl:px-10 pb-3'>
                        <ul>
                            <li>
                                <Link to="/how-we-work" className='pb-0.5 menu-anime text-2xl mb-3' style={{ fontFamily: 'Lato', }}>How we work</Link>
                            </li>

                            <li>
                                <Link to="/case-studies" className='pb-0.5 menu-anime text-2xl mb-3' style={{ fontFamily: 'Lato', }}>Case Studies</Link>
                            </li>

                            <li>
                                <Link to="/contact" className='pb-0.5 menu-anime text-2xl mb-3' style={{ fontFamily: 'Lato', }}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='xl:px-10 pb-3'>
                        <ul>
                            <li>
                                <Link to='/about' href="#" className='pb-0.5 menu-anime text-2xl mb-3' style={{ fontFamily: 'Lato', }}>About Us</Link>
                            </li>

                            <li>
                                <Link to="/pricing" className='pb-0.5 menu-anime text-2xl mb-3' style={{ fontFamily: 'Lato', }}>Pricing</Link>
                            </li>

                            <li>
                                <Link to="/linkbuilding-blog" className='pb-0.5 menu-anime text-2xl mb-3' style={{ fontFamily: 'Lato', }}>Link Building Blog</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='xl:px-10 pb-3'>
                        <ul>
                            <li>
                                <a href="#" className='pb-0.5 menu-anime text-2xl mb-3' style={{ fontFamily: 'Lato', }}>Reviews</a>
                            </li>

                            <li>
                                <a href="#" className='pb-0.5 menu-anime text-2xl mb-3' style={{ fontFamily: 'Lato', }}>LinkedIn</a>
                            </li>

                            <li>
                                <a href="#" className='pb-0.5 menu-anime text-2xl mb-3' style={{ fontFamily: 'Lato', }}>YouTube</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='xl:col-span-1 col-span-4'>
                    <ul className='flex xl:justify-end justify-start gap-3'>
                        <li>
                            <a href="#" className='pb-0.5 menu-anime'>Privacy Policy</a>
                        </li>

                        <li>
                            <a href="#" className='pb-0.5 menu-anime'>Cookie Policy</a>
                        </li>

                        <li>
                            <a href="#" className='pb-0.5 menu-anime'>Terms</a>
                        </li>
                    </ul>
                </div>

                <button onClick={scrollToTop} className="button-one capitalize py-1.5 px-4 !font-semibold flex items-center w-max !absolute right-8 bottom-8">
                    ☝️ Back to top
                </button>
            </div>
        </>
    )
}

export default Footer