import React, { useContext } from 'react'
import { DataContext } from '../context/Context'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileMenu from '../components/MobileMenu'
import { GoArrowRight } from 'react-icons/go'
import { FaArrowUp } from 'react-icons/fa6'
import pdfImage from '../assets/pdf-simpli.webp'
import machinery from '../assets/machinery.webp'
import ucourse from '../assets/Online-Courses-Site.webp'
import snack from '../assets/snack-nation.webp'
import identityG from '../assets/Identity-Guard.webp'

const CaseStudies = () => {
    const { mobileMenu } = useContext(DataContext)
    return (
        <div className='relative'>
            <Helmet>
                <title>LinkBuilder.io | Link Building Case Studies</title>
            </Helmet>

            <Navbar />

            <div className='container mx-auto h-screen flex flex-col justify-center items-center'>
                <h2 class="mb-10 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl tracking-tighter font-medium !leading-normal	 green-highlight">
                    Link Building <strong className='inline-block font-medium px-3 relative'>Case Studies</strong></h2>

                <p className="mb-5 text-lg text-center">Our detailed case studies show exactly how we generated increased rankings and traffic to <br /> websites through link building.</p>
            </div>

            <div className='w-full bg-gray-50'>
                <div className='container mx-auto px-8 overflow-hidden py-12 md:py-24 xl:py-32'>


                    <div className='w-11/12 mx-auto bg-white overflow-x-scroll rounded-3xl'>
                        <table>
                            <thead>
                                <tr>
                                    <th className='text-left font-semibold border-b border-black border-opacity-10 pt-10 pb-6 px-20 leading-none text-sm truncate md:text-base' style={{ fontFamily: 'Lato', }}>Client</th>
                                    <th className='text-left font-semibold border-b border-black border-opacity-10 pt-10 pb-6 px-20 leading-none text-sm truncate md:text-base' style={{ fontFamily: 'Lato', }}>Traffic Increase</th>
                                    <th className='text-left font-semibold border-b border-black border-opacity-10 pt-10 pb-6 px-20 leading-none text-sm truncate md:text-base' style={{ fontFamily: 'Lato', }}>Links Built</th>
                                    <th className='text-left font-semibold border-b border-black border-opacity-10 pt-10 pb-6 px-20 leading-none text-sm truncate md:text-base' style={{ fontFamily: 'Lato', }}>Time Span</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className='py-6 px-20 truncate'>
                                        <a href="#" className='flex items-center transform transition-all duration-500 hover:translate-x-2'>
                                            <img src={pdfImage} alt="" className='mr-4 w-11 shadow-xl rounded-md' />

                                            <span className="text-xs sm:text-sm lg:text-md xl:text-lg green-highlight tracking-tighter font-medium leading-none">
                                                PDF Simpli
                                            </span>

                                        </a>
                                    </td>

                                    <td className='py-6 px-20 truncate'>
                                        <div className='flex'>
                                            <div className='bg-[#00DA90] rounded-md text-black fill-current text-xs w-4 h-4 flex items-center justify-center mt-1.5 mr-2 lg:w-5 lg:h-5'>
                                                <FaArrowUp />
                                            </div>

                                            <span>
                                                <p className='text-base sm:text-md lg:text-lg 2xl:text-xl tracking-tighter font-medium leading-none'>5329%</p>

                                                <p className="font-regular flex items-center text-gray-500 text-sm leading-none lg:text-base">
                                                    <span>4.9k</span>
                                                    <GoArrowRight />
                                                    <span>226k</span>
                                                </p>
                                            </span>
                                        </div>
                                    </td>

                                    <td className='py-6 px-20 truncate'>
                                        <p className="bg-gray-900 text-white py-0.5 px-1 inline-block rounded-lg font-medium text-base | lg:text-md lg:py-1 lg:px-2 | 2xl:text-lg">
                                            179
                                        </p>
                                    </td>

                                    <td className='py-6 px-20 truncate'>
                                        <p className="leading-none tracking-tight text-base lg:text-md 2xl:text-lg font-semibold">
                                            🕣 <span className="ml-1">28 months + counting</span>
                                        </p>

                                    </td>
                                </tr>

                                <tr className='bg-gray-50'>
                                    <td className='py-6 px-20 truncate'>
                                        <a href="#" className='flex items-center transform transition-all duration-500 hover:translate-x-2'>
                                            <img src={machinery} alt="" className='mr-4 w-11 shadow-xl rounded-md' />

                                            <span className="text-xs sm:text-sm lg:text-md xl:text-lg green-highlight tracking-tighter font-medium leading-none">
                                                Machinery eCommerce
                                            </span>

                                        </a>
                                    </td>

                                    <td className='py-6 px-20 truncate'>
                                        <div className='flex'>
                                            <div className='bg-[#00DA90] rounded-md text-black fill-current text-xs w-4 h-4 flex items-center justify-center mt-1.5 mr-2 lg:w-5 lg:h-5'>
                                                <FaArrowUp />
                                            </div>

                                            <span>
                                                <p className='text-base sm:text-md lg:text-lg 2xl:text-xl tracking-tighter font-medium leading-none'>599%</p>

                                                <p className="font-regular flex items-center text-gray-500 text-sm leading-none lg:text-base">
                                                    <span>892</span>
                                                    <GoArrowRight />
                                                    <span>6.2k</span>
                                                </p>
                                            </span>
                                        </div>
                                    </td>

                                    <td className='py-6 px-20 truncate'>
                                        <p className="bg-gray-900 text-white py-0.5 px-1 inline-block rounded-lg font-medium text-base | lg:text-md lg:py-1 lg:px-2 | 2xl:text-lg">
                                            287
                                        </p>
                                    </td>

                                    <td className='py-6 px-20 truncate'>
                                        <p className="leading-none tracking-tight text-base lg:text-md 2xl:text-lg font-semibold">
                                            🕣 <span className="ml-1">22 months + counting</span>
                                        </p>

                                    </td>
                                </tr>

                                <tr>
                                    <td className='py-6 px-20 truncate'>
                                        <a href="#" className='flex items-center transform transition-all duration-500 hover:translate-x-2'>
                                            <img src={ucourse} alt="" className='mr-4 w-11 shadow-xl rounded-md' />

                                            <span className="text-xs sm:text-sm lg:text-md xl:text-lg green-highlight tracking-tighter font-medium leading-none">
                                                Online Courses Site
                                            </span>

                                        </a>
                                    </td>

                                    <td className='py-6 px-20 truncate'>
                                        <div className='flex'>
                                            <div className='bg-[#00DA90] rounded-md text-black fill-current text-xs w-4 h-4 flex items-center justify-center mt-1.5 mr-2 lg:w-5 lg:h-5'>
                                                <FaArrowUp />
                                            </div>

                                            <span>
                                                <p className='text-base sm:text-md lg:text-lg 2xl:text-xl tracking-tighter font-medium leading-none'>84%</p>

                                                <p className="font-regular flex items-center text-gray-500 text-sm leading-none lg:text-base">
                                                    <span>5m</span>
                                                    <GoArrowRight />
                                                    <span>9.3m</span>
                                                </p>
                                            </span>
                                        </div>
                                    </td>

                                    <td className='py-6 px-20 truncate'>
                                        <p className="bg-gray-900 text-white py-0.5 px-1 inline-block rounded-lg font-medium text-base | lg:text-md lg:py-1 lg:px-2 | 2xl:text-lg">
                                            682
                                        </p>
                                    </td>

                                    <td className='py-6 px-20 truncate'>
                                        <p className="leading-none tracking-tight text-base lg:text-md 2xl:text-lg font-semibold">
                                            🕣 <span className="ml-1">24 months</span>
                                        </p>

                                    </td>
                                </tr>

                                <tr className='bg-gray-50'>
                                    <td className='py-6 px-20 truncate'>
                                        <a href="#" className='flex items-center transform transition-all duration-500 hover:translate-x-2'>
                                            <img src={snack} alt="" className='mr-4 w-11 shadow-xl rounded-md' />

                                            <span className="text-xs sm:text-sm lg:text-md xl:text-lg green-highlight tracking-tighter font-medium leading-none">
                                                Snack nation
                                            </span>

                                        </a>
                                    </td>

                                    <td className='py-6 px-20 truncate'>
                                        <div className='flex'>
                                            <div className='bg-[#00DA90] rounded-md text-black fill-current text-xs w-4 h-4 flex items-center justify-center mt-1.5 mr-2 lg:w-5 lg:h-5'>
                                                <FaArrowUp />
                                            </div>

                                            <span>
                                                <p className='text-base sm:text-md lg:text-lg 2xl:text-xl tracking-tighter font-medium leading-none'>132%</p>

                                                <p className="font-regular flex items-center text-gray-500 text-sm leading-none lg:text-base">
                                                    <span>428k</span>
                                                    <GoArrowRight />
                                                    <span>995k</span>
                                                </p>
                                            </span>
                                        </div>
                                    </td>

                                    <td className='py-6 px-20 truncate'>
                                        <p className="bg-gray-900 text-white py-0.5 px-1 inline-block rounded-lg font-medium text-base | lg:text-md lg:py-1 lg:px-2 | 2xl:text-lg">
                                            603
                                        </p>
                                    </td>

                                    <td className='py-6 px-20 truncate'>
                                        <p className="leading-none tracking-tight text-base lg:text-md 2xl:text-lg font-semibold">
                                            <span className="ml-1">🕣 26 months + counting</span>
                                        </p>

                                    </td>
                                </tr>

                                <tr>
                                    <td className='py-6 px-20 truncate'>
                                        <a href="#" className='flex items-center transform transition-all duration-500 hover:translate-x-2'>
                                            <img src={identityG} alt="" className='mr-4 w-11 shadow-xl rounded-md' />

                                            <span className="text-xs sm:text-sm lg:text-md xl:text-lg green-highlight tracking-tighter font-medium leading-none">
                                                Identity Guard
                                            </span>

                                        </a>
                                    </td>

                                    <td className='py-6 px-20 truncate'>
                                        <div className='flex'>
                                            <div className='bg-[#00DA90] rounded-md text-black fill-current text-xs w-4 h-4 flex items-center justify-center mt-1.5 mr-2 lg:w-5 lg:h-5'>
                                                <FaArrowUp />
                                            </div>

                                            <span>
                                                <p className='text-base sm:text-md lg:text-lg 2xl:text-xl tracking-tighter font-medium leading-none'>36%</p>

                                                <p className="font-regular flex items-center text-gray-500 text-sm leading-none lg:text-base">
                                                    <span>29k</span>
                                                    <GoArrowRight />
                                                    <span>39.4k</span>
                                                </p>
                                            </span>
                                        </div>
                                    </td>

                                    <td className='py-6 px-20 truncate'>
                                        <p className="bg-gray-900 text-white py-0.5 px-1 inline-block rounded-lg font-medium text-base | lg:text-md lg:py-1 lg:px-2 | 2xl:text-lg">
                                            212
                                        </p>
                                    </td>

                                    <td className='py-6 px-20 truncate'>
                                        <p className="leading-none tracking-tight text-base lg:text-md 2xl:text-lg font-semibold">
                                            🕣 <span className="ml-1">20 months</span>
                                        </p>

                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            <Footer />


            {
                mobileMenu && <MobileMenu />
            }
        </div>
    )
}

export default CaseStudies