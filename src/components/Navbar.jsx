import React, { useContext, useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/Context';


const Navbar = () => {
    const [isSticky, setSticky] = useState(false);

    const [isMobile, setIsMobile] = useState();

    const { mobileMenu, setMobileMenu } = useContext(DataContext)

    console.log(isMobile);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const handleResponsive = () => {
        if (window.innerWidth < 1280) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        // Add event listener on component mount
        window.addEventListener('resize', handleResponsive);

        // Call handleResponsive once on component mount
        handleResponsive();

        return () => {
            // Clean up on component unmount
            window.removeEventListener('resize', handleResponsive);
        };
    }, []);


    return (
        <>
            <div className={`xl:container w-full ${isSticky && "backdrop-blur-sm bg-gray-200"} ${isMobile && "backdrop-blur-sm bg-gray-200"} xl:rounded-3xl xl:bg-opacity-40 mx-auto inset-x-0 xl:my-4 my-0 py-5 px-8 grid grid-cols-10 transition-all transform fixed z-50`}>
                <div className='xl:col-span-7 col-span-3 flex items-center'>
                    <Link to="/">
                        <img src={Logo} className='md:w-60 w-52 mr-3' alt="" />
                    </Link>
                    <ul className='xl:flex hidden'>
                        <li className='mx-3'>
                            <Link to="/how-we-work" className='pb-0.5 menu-anime' style={{ fontFamily: 'Lato', }}>How we work</Link>
                        </li>
                        <li className='mx-3'>
                            <Link to="/about" className='pb-0.5 menu-anime' style={{ fontFamily: 'Lato', }}>About Us</Link>
                        </li>
                        <li className='mx-3'>
                            <Link to="/pricing" className='pb-0.5 menu-anime' style={{ fontFamily: 'Lato', }}>Pricing</Link>
                        </li>
                        <li className='mx-3'>
                            <Link to="/case-studies" className='pb-0.5 menu-anime' style={{ fontFamily: 'Lato', }}>Case Studies</Link>
                        </li>
                        <li className='mx-3'>
                            <Link to="/linkbuilding-blog" className='pb-0.5 menu-anime' style={{ fontFamily: 'Lato', }}>Link Building Blog</Link>
                        </li>
                    </ul>
                </div>

                {
                    isSticky ?
                        <div className='xl:col-span-3 col-span-7 flex gap-3 justify-end'>
                            <Link to='/contact' className="button-one capitalize py-1.5 px-4 !font-semibold md:flex hidden items-center">
                                👉 Message Us
                            </Link>

                            <button className="button-two capitalize py-1.5 px-4 !font-semibold md:flex hidden items-center">
                                📞 Book a call
                            </button>


                            <button className="xl:hidden block">
                                <label className="swap swap-rotate">

                                    <input type="checkbox" checked={mobileMenu} onChange={() => setMobileMenu(!mobileMenu)} />

                                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                                </label>
                            </button>

                        </div> : isMobile && <div className='xl:col-span-3 col-span-7 flex gap-3 justify-end'>
                            
                                <Link to='/contact' className="button-one capitalize py-1.5 px-4 !font-semibold flex items-center">
                                    👉 Message Us
                                </Link>


                            <button className="button-two capitalize py-1.5 px-4 !font-semibold flex items-center">
                                📞 Book a call
                            </button>


                            <button className="xl:hidden block">
                                <label className="swap swap-rotate">

                                    <input type="checkbox" checked={mobileMenu} onChange={() => setMobileMenu(!mobileMenu)} />

                                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                                </label>
                            </button>

                        </div>
                }

            </div>
        </>
    )
}

export default Navbar