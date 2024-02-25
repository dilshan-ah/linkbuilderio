import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import banner from '../assets/home-3D.webp'
import BrandSlider from '../components/BrandSlider'

import welcomeImage from '../assets/39.webp'
import overlayThumb from '../assets/overlay-thumbnail.webp'
import dinlop from '../assets/Stewart_Dunlop.webp'
import pdfImage from '../assets/pdf-simpli.webp'
import machinery from '../assets/machinery.webp'
import ucourse from '../assets/Online-Courses-Site.webp'
import snack from '../assets/snack-nation.webp'
import identityG from '../assets/Identity-Guard.webp'
import thumbnail from '../assets/video-thumbnail-image.webp'
import benji from '../assets/benji.webp'
import brandon from '../assets/brandon.webp'
import bryce from '../assets/bryce-welker-bio.webp'
import footerImage from '../assets/footer-3D.webp'
import fairpricing from '../assets/Fair-Pricing.webp'


import { FaArrowUp, FaCheck } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { FaPlay } from "react-icons/fa6";
import BlogSlider from '../components/BlogSlider'
import Footer from '../components/Footer'
import MobileMenu from '../components/MobileMenu'
import { DataContext } from '../context/Context'



const Home = () => {

    const { mobileMenu } = useContext(DataContext)
    return (
        <div className='relative'>
            <Helmet>
                <title>LinkBuilder.io | Link Building Services Trusted By 300+ Brands</title>
            </Helmet>

            <Navbar />

            <div className='container mx-auto lg:grid lg:grid-cols-2 flex flex-col flex-col-reverse gap-20 lg:h-screen h-auto items-center px-8'>
                <div className='h-max lg:pr-1/12 lg:pt-20 pt-14'>
                    <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mb-10' style={{ fontFamily: 'Raleway', }}>Link Building Services Agency</h1>

                    <p className='text-lg mb-10'>We’re a specialist link building agency that builds<strong> incredible backlinks</strong> to improve your search engine rankings.</p>

                    <div className='col-span-3 flex gap-3 justify-start'>
                        <button className="button-one capitalize py-1.5 px-4 !font-semibold flex items-center">
                            Access Dashboard
                        </button>

                        <button className="button-two capitalize py-1.5 px-4 !font-semibold flex items-center">
                            👉 Get in Touch
                        </button>
                    </div>

                </div>

                <div className='flex justify-center pt-28'>
                    <img src={banner} alt="" className='lg:w-auto w-4/5' />
                </div>
            </div>

            <div className='container mx-auto py-16 md:py-20 xl:py-24 px-8'>
                <BrandSlider />
                <p className=' mt-12 text-center font-medium text-base md:text-lg xl:text-xl'>The Link Building Company Trusted By Global Brands</p>
            </div>

            <div className='container mx-auto px-8 pb-16 md:pb-24 xl:pb-32 lg:grid lg:grid-cols-2 flex flex-col flex-col-reverse gap-10 items-center'>
                <div>
                    <p class="text-base md:text-lg xl:text-xl font-regular leading-tight mb-3">
                        👋 Welcome to linkbuilder.io</p>

                    <h2 class="mb-10 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl tracking-tighter font-medium !leading-normal	 green-highlight">
                        The link building agency that <strong className='inline-block font-medium px-3 relative'>drives insane rankings</strong></h2>

                    <div className="redactor text-gray-800" style={{ fontFamily: 'Lato', }}>

                        <p className="mb-5 text-lg">Using a process-driven approach with a cutting-edge link building strategy, our link building services significantly improve your search engine rankings and SEO performance.</p>

                        <p className="mb-5 text-lg">Our service is trusted by leading SEO managers around the World because <strong className="font-bold text-black">we deliver incredible backlinks</strong> that other link building providers simply cannot match.</p>

                        <p className="mb-5 text-lg">Our process works by acquiring high relevance links to key target pages on your domain, which is the most important Google ranking factor.<br /></p>

                    </div>
                </div>

                <div className='rounded-3xl bg-[#00DA90] relative pl-8  lg:pl-12  overflow-hidden pb-[90%] lg:w-auto w-full'>
                    <img src={welcomeImage} className='shadow-[0_17px_33px_14px_rgba(0,0,0,.25)] rounded-2xl absolute inset-y-0 my-auto w-full transform translate-x-[8.3%]' alt="" />

                    <img src={overlayThumb} alt="" className='w-40 absolute bottom-12' />
                </div>

            </div>

            <div className='container mx-auto px-8 grid lg:grid-cols-4 grid-cols-1'>

                <div className='pl-4 lg:pl-5'>

                    <div className='w-full relative h-full border-l border-black border-opacity-20 pb-10 pl-10 xl:px-12'>
                        <h3 className='text-lg md:text-xl xl:text-2xl green-highlight tracking-tighter font-semibold mb-3 xl:mb-5 leading-tight' style={{ fontFamily: 'Raleway', }}>Strategy</h3>

                        <div className="redactor text-gray-800" style={{ fontFamily: 'Lato', }}>

                            <p className="mb-5 text-base">Our custom link building process includes <strong className="font-bold text-black">over 20 different link building strategies</strong> that we'll utilize for your company.</p>

                            <p className="mb-5 text-base">We use competitor data to build <strong className="font-bold text-black">the optimal backlink strategy </strong>for your website. It's a time consuming process, but our planning is truly what separates from other SEO agencies and link building providers.</p>

                        </div>

                        <div className="absolute left-0 top-0 bg-[#00DA90] rounded-xl w-9 h-9 font-medium text-md flex items-center justify-center transform -translate-x-1/2 xl:text-lg xl:w-10 xl:h-10 xl:rounded-2xl">
                            1.
                        </div>


                    </div>
                </div>


                <div className='pl-4 lg:pl-5'>

                    <div className='w-full relative h-full border-l border-black border-opacity-20 pb-10 pl-10 xl:px-12'>
                        <h3 className='text-lg md:text-xl xl:text-2xl green-highlight tracking-tighter font-semibold mb-3 xl:mb-5 leading-tight' style={{ fontFamily: 'Raleway', }}>Outreach</h3>

                        <div className="redactor text-gray-800" style={{ fontFamily: 'Lato', }}>

                            <p className="mb-5 text-base">We launch email outreach campaigns, targeting hyper relevant websites in your niche. We only focus on acquiring links from real sites with a high domain authority and strong website traffic.</p>

                            <p className="mb-5 text-base"><strong className="font-bold text-black">Our outreach methodology </strong>is constantly tested & adjusted to yield the best possible response rates, helping our link acquisition team to land backlinks on incredibly powerful, high authority websites.</p>

                        </div>

                        <div className="absolute left-0 top-0 bg-[#00DA90] rounded-xl w-9 h-9 font-medium text-md flex items-center justify-center transform -translate-x-1/2 xl:text-lg xl:w-10 xl:h-10 xl:rounded-2xl">
                            2.
                        </div>


                    </div>
                </div>

                <div className='pl-4 lg:pl-5'>

                    <div className='w-full relative h-full border-l border-black border-opacity-20 pb-10 pl-10 xl:px-12'>
                        <h3 className='text-lg md:text-xl xl:text-2xl green-highlight tracking-tighter font-semibold mb-3 xl:mb-5 leading-tight' style={{ fontFamily: 'Raleway', }}>Links</h3>

                        <div className="redactor text-gray-800" style={{ fontFamily: 'Lato', }}>

                            <p className="mb-5 text-base">Backlink building isn't easy! We consistently earn high authority links with a strong domain rating using a diverse range of <strong className="font-bold text-black"> link-building methods.</strong></p>

                            <p className="mb-5 text-base">Our aim is to build a robust backlink profile with a very natural anchor text profile, to help you <strong className="font-bold text-black">achieve great search engine rankings </strong>that will get your business get more leads & more customers.</p>

                        </div>

                        <div className="absolute left-0 top-0 bg-[#00DA90] rounded-xl w-9 h-9 font-medium text-md flex items-center justify-center transform -translate-x-1/2 xl:text-lg xl:w-10 xl:h-10 xl:rounded-2xl">
                            3.
                        </div>


                    </div>
                </div>

                <div className='pl-4 lg:pl-5'>

                    <div className='w-full relative h-full border-l border-black border-opacity-20 pb-10 pl-10 xl:px-12'>
                        <h3 className='text-lg md:text-xl xl:text-2xl green-highlight tracking-tighter font-semibold mb-3 xl:mb-5 leading-tight' style={{ fontFamily: 'Raleway', }}>Results</h3>

                        <div className="redactor text-gray-800" style={{ fontFamily: 'Lato', }}>

                            <p className="mb-5 text-base">Search engines <strong className="font-bold text-black"> love the backlinks we build,</strong> and our clients trust us to build links which move the needle for their SEO rankings. We measure results and collaborate with our clients to improve our campaigns and adjust our link building tactics.</p>

                            <p className="mb-5 text-base">Our link building packages are designed to help your business goals. We take a long-term approach to our work, and like to get closely aligned with your broader SEO strategy to make sure that we deliver  <strong className="font-bold text-black">a positive return on investment.</strong></p>

                        </div>

                        <div className="absolute left-0 top-0 bg-[#00DA90] rounded-xl w-9 h-9 font-medium text-md flex items-center justify-center transform -translate-x-1/2 xl:text-lg xl:w-10 xl:h-10 xl:rounded-2xl">
                            4.
                        </div>


                    </div>
                </div>

            </div>

            <div className='container mx-auto px-8 flex justify-center items-center mt-12 lg:mt-20 gap-4 pb-16 md:pb-24 xl:pb-32'>
                <img src={dinlop} alt="" className='w-11' />

                <p className="text-lg mr-6 font-semibold" style={{ fontFamily: 'Lato', }}>
                    Want to know more?
                </p>

                <button className="button-two capitalize py-1.5 px-4 !font-semibold flex items-center">
                    How we work
                </button>
            </div>


            <div className='w-full bg-gray-50'>
                <div className='container mx-auto px-8 overflow-hidden py-12 md:py-24 xl:py-32'>

                    <p className="text-center text-md md:text-lg xl:text-xl font-regular mb-3 leading-tight">
                        🚀 Case Studies
                    </p>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl green-highlight-two tracking-tighter font-medium leading-tight text-center mb-10">
                        We get <strong className='bg-[#00DA90] px-4 pb-1 rounded-xl font-medium'>results</strong>
                    </h2>

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

                    <div className='flex justify-center mt-12 lg:mt-20'>
                        <button className="button-two capitalize py-1.5 px-4 !font-semibold flex items-center">
                            View all Case Studies
                        </button>
                    </div>
                </div>
            </div>


            <div className='w-full bg-gray-50'>
                <div className='container mx-auto px-8 overflow-hidden pb-12 md:pb-24 xl:pb-32'>
                    <p className="text-center text-md md:text-lg xl:text-xl font-regular mb-3 leading-tight">
                        🚀 Video Testimonials
                    </p>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl green-highlight-two tracking-tighter font-medium leading-tight text-center mb-20">
                        Hear it <strong className='bg-[#00DA90] px-4 pb-1 rounded-xl font-medium'>first hand</strong>
                    </h2>

                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-24'>
                        <div className='rounded-3xl overflow-hidden relative cursor-pointer' onClick={() => document.getElementById('my_modal_2').showModal()}>
                            <img src={thumbnail} alt="" />
                            <div className='w-full h-full absolute bg-black opacity-50 top-0 left-0'></div>

                            <div className='rounded-2xl z-30 bg-[#00DA90] inline-flex items-center transform justify-center transition opacity-100 h-16 w-16 group-hover:scale-90 absolute inset-x-0 inset-y-0 m-auto z-50'>
                                <FaPlay className='text-3xl' />
                            </div>
                        </div>

                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box w-full h-full max-w-5xl p-0">
                                <iframe src="https://www.youtube.com/embed/fx-OA0TydTY?si=GP3DwCuwr28AYbL1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='w-full h-full'></iframe>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>

                        <div>
                            <div className="w-11 h-11 bg-[#00DA90] rounded-2xl flex flex-wrap justify-center items-center text-black font-medium font-sans-primary text-5xl leading-9 mb-5">
                                <span className="w-6 h-6">
                                    <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15"><path d="M7.96 14.4V7.2H6.4c-1.2 0-2.04-.6-2.04-1.8 0-1.2.84-1.8 2.64-1.8h2.16V0h-1.8C4.06 0 .76.9.76 5.4v9h7.2Zm10.8 0V7.2H17.2c-1.2 0-2.04-.6-2.04-1.8 0-1.2.84-1.8 2.64-1.8h2.16V0h-1.8c-3.3 0-6.6.9-6.6 5.4v9h7.2Z" fill="#000" /></svg>
                                </span>
                            </div>

                            <p className="text-xl md:text-2xl xl:text-3xl green-highlight tracking-tighter font-medium text-black font-sans-primary font-medium !leading-9 tracking-tight 1">
                                We have been working with them for 3 years now, link building for over 25 different clients. The quality of links is always amazing, communication is great and we’ve seen amazing results across every client.
                            </p>

                            <div className='flex items-center mt-5'>
                                <img src={benji} className='w-11 rounded-2xl md:mr-4 mr-3' alt="" />

                                <div>
                                    <p className="leading-tight font-medium text-md mb-0 | md:text-lg | 2xl:text-xl">
                                        Benji Hyam
                                    </p>

                                    <p className="text-gray-500">
                                        Co-Founder - Grow and Convert
                                    </p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full bg-gray-900 grid lg:grid-cols-12 grid-cols-1 lg:h-screen lg:p-0 py-20'>

                <div className='lg:col-span-4 flex flex-col items-start justify-center pl-36 lg:pl-20 pb-14 md:pb-20'>

                    <p className="text-md md:text-lg xl:text-xl font-regular mb-3 leading-tight text-white">
                        👀 Testimonials
                    </p>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl green-highlight-two tracking-tighter font-medium !leading-[3rem] text-white">
                        Hear it from <br />those that <strong className='bg-[#00DA90] text-black px-4 pb-1 rounded-xl font-medium'>know</strong>
                    </h2>
                </div>

                <div className='lg:col-span-8 flex lg:flex-row flex-col overflow-hidden gap-10'>

                    <div className='lg:min-w-80 w-full flex lg:block lg:space-y-10 gap-10  lg:-translate-y-52 lg:-translate-x-0 -translate-x-28'>

                        <div className='lg:min-w-full min-w-96 h-80 w-full bg-[#00DA90] rounded-3xl'></div>
                        <div className='lg:min-w-full min-w-96 h-auto w-full bg-white rounded-3xl p-6'>
                            <span className='leading-snug font-medium text-lg'>
                                We have been working with them for 2 years now, link building for over 25 different clients. The quality of links is always amazing, communication is great and we’ve seen amazing results across every client.
                            </span>

                            <div className='flex items-center mt-5'>
                                <img src={benji} className='w-11 rounded-2xl md:mr-4 mr-3' alt="" />

                                <div>
                                    <p className="leading-tight font-medium text-md mb-0 | md:text-lg | 2xl:text-xl">
                                        Benji Hyam
                                    </p>

                                    <p className="text-gray-500">
                                        Co-Founder - Grow and Convert
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className='lg:min-w-full min-w-96 h-80 w-full bg-[#00DA90] rounded-3xl'></div>

                    </div>

                    <div className='lg:min-w-80 w-full flex lg:block  lg:space-y-10 gap-10  lg:-translate-y-96 lg:-translate-x-0 -translate-x-60'>

                        <div className='lg:min-w-full min-w-96 h-80 w-full bg-[#00DA90] rounded-3xl'></div>
                        <div className='lg:min-w-full min-w-96 h-auto w-full bg-white rounded-3xl p-6'>
                            <span className='leading-snug font-medium text-lg'>
                                LinkBuilder took blogs with zero inbound links, gathered high-quality backlinks, and vaulted them to the top of Google search results. We’ve seen impressive growth in consumer-intent keywords and organic growth.
                            </span>

                            <div className='flex items-center mt-5'>
                                <img src={brandon} className='w-11 rounded-2xl md:mr-4 mr-3' alt="" />

                                <div>
                                    <p className="leading-tight font-medium text-md mb-0 | md:text-lg | 2xl:text-xl">
                                        Brandon Monroe
                                    </p>

                                    <p className="text-gray-500">
                                        SEO Manager – Cellucor.com
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className='lg:min-w-full min-w-96 h-auto w-full bg-white rounded-3xl p-6'>
                            <span className='leading-snug font-medium text-lg'>
                                Honestly, the most professional, best all around link building service I’ve used out of dozens. I’ve recommended several of my friends and they’ve just crushed results with them too.
                            </span>

                            <div className='flex items-center mt-5'>
                                <img src={bryce} className='w-11 rounded-2xl md:mr-4 mr-3' alt="" />

                                <div>
                                    <p className="leading-tight font-medium text-md mb-0 | md:text-lg | 2xl:text-xl">
                                        Bryce Welker
                                    </p>

                                    <p className="text-gray-500">
                                        Founder – Crush Empire
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className='lg:min-w-full min-w-96 h-80 w-full bg-[#00DA90] rounded-3xl'></div>

                    </div>

                    <div className='min-w-80 w-full hidden lg:block  lg:space-y-10 gap-10  lg:-translate-y-48'>

                        <div className='h-80 w-full bg-[#00DA90] rounded-3xl'></div>

                        <div className='h-80 w-full bg-[#00DA90] rounded-3xl'></div>

                        <div className='h-80 w-full bg-[#00DA90] rounded-3xl'></div>
                    </div>
                </div>
            </div>


            <div className='w-full py-16 md:py-24 xl:py-32'>
                <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl green-highlight-two tracking-tighter font-medium leading-tight text-center">
                    Our Link Building <strong className='bg-[#00DA90] px-4 pb-1 rounded-xl font-medium'>Packages</strong> & Pricing
                </h2>

                <div className="redactor text-gray-800 max-w-2xl mx-auto mt-10">
                    <p className="mb-5 text-lg text-center" style={{ fontFamily: 'Lato', }}>Our monthly link building packages provide a fully managed service, so that you can focus on other aspects of SEO. All of our packages and plans include detailed strategy &amp; bespoke outreach.</p>
                </div>


                <div className='flex justify-center mt-10'>
                    <h3 className='font-bold text-lg pb-6 border-b-4 border-[#00DA90]'>Monthly Packages</h3>
                </div>

                <div className='w-full bg-gray-50 py-10'>
                    <div className='container mx-auto px-8 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                        <div className='h-full'>
                            <div className='bg-[#00DA90] lg:pt-16 lg:pb-12 pt-10 pb-8 relative rounded-3xl px-6 shadow-2xl h-full flex flex-col justify-between lg:px-8'>
                                <div>
                                    <h3 className="tracking-tight mb-1 text-md md:text-lg xl:text-xl text-medium">
                                        🧠 Pro
                                    </h3>

                                    <div className="inline-flex items-end">
                                        <p>
                                            <span className="text-2xl md:text-3xl xl:text-4xl green-highlight tracking-tighter font-semibold bg-transparent leading-tight">
                                                $5999
                                            </span>
                                            <span className="ml-2 text-gray-700 ">
                                                / Month
                                            </span>
                                        </p>
                                    </div>

                                    <div className='w-full border-t border-black border-opacity-20 pt-5 mt-5 mb-10"'>
                                        <p className="block mb-4 text-xl pb-4 text-gray-900 font-normal"><strong>🔗 16 Links Per Month</strong></p>

                                        <ul>
                                            <li className='flex items-center text-base font-semibold mb-2'>
                                                <div className='rounded-full bg-black p-1 mr-4'>
                                                    <FaCheck className='text-sm text-white' />
                                                </div>

                                                Average DR 50-90 Links
                                            </li>
                                            <li className='flex items-center text-base font-semibold mb-2'>
                                                <div className='rounded-full bg-black p-1 mr-4'>
                                                    <FaCheck className='text-sm text-white' />
                                                </div>

                                                Authority Links Included
                                            </li>
                                            <li className='flex items-center text-base font-semibold mb-2'>
                                                <div className='rounded-full bg-black p-1 mr-4'>
                                                    <FaCheck className='text-sm text-white' />
                                                </div>

                                                Target Page Planning
                                            </li>
                                            <li className='flex items-center text-base font-semibold mb-2'>
                                                <div className='rounded-full bg-black p-1 mr-4'>
                                                    <FaCheck className='text-sm text-white' />
                                                </div>

                                                Anchor Text Optimization
                                            </li>
                                            <li className='flex items-center text-base font-semibold mb-2'>
                                                <div className='rounded-full bg-black p-1 mr-4'>
                                                    <FaCheck className='text-sm text-white' />
                                                </div>

                                                Competitor Backlink Gap Analysis
                                            </li>
                                            <li className='flex items-center text-base font-semibold mb-2'>
                                                <div className='rounded-full bg-black p-1 mr-4'>
                                                    <FaCheck className='text-sm text-white' />
                                                </div>

                                                Keyword Analysis
                                            </li>
                                            <li className='flex items-center text-base font-semibold mb-2'>
                                                <div className='rounded-full bg-black p-1 mr-4'>
                                                    <FaCheck className='text-sm text-white' />
                                                </div>

                                                Custom Reporting Dashboard
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='mt-10'>
                                    <button class="button-two capitalize py-1.5 px-4 !font-semibold flex items-center justify-center w-full">📞 Book a call</button>
                                </div>

                            </div>
                        </div>

                        <div className='py-10'>
                            <div className='bg-white lg:pt-16 lg:pb-12 pt-10 pb-8 relative rounded-3xl px-6 shadow-2xl h-full flex flex-col justify-between lg:px-8'>
                                <div>
                                    <h3 className="tracking-tight mb-1 text-md md:text-lg xl:text-xl text-medium">
                                        💪 Growth
                                    </h3>

                                    <div className="inline-flex items-end">
                                        <p>
                                            <span className="text-2xl md:text-3xl xl:text-4xl green-highlight tracking-tighter font-semibold bg-transparent leading-tight">
                                                $9999
                                            </span>
                                            <span className="ml-2 text-gray-700 ">
                                                / Month
                                            </span>
                                        </p>
                                    </div>

                                    <div className='w-full border-t border-black border-opacity-20 pt-5 mt-5 mb-10"'>
                                        <p className="block mb-4 text-xl pb-4 text-gray-900 font-normal"><strong>🔗 27 Links Per Month</strong></p>

                                        <ul>
                                            <li className='flex items-center text-base font-semibold mb-2'>
                                                <div className='rounded-full bg-black p-1 mr-4'>
                                                    <FaCheck className='text-sm text-white' />
                                                </div>

                                                Average DR 50-90 Links
                                            </li>
                                            <li className='flex items-center text-base font-semibold mb-2'>
                                                <div className='rounded-full bg-black p-1 mr-4'>
                                                    <FaCheck className='text-sm text-white' />
                                                </div>

                                                Can spread across multiple domains
                                            </li>
                                            <li className='flex items-center text-base font-semibold mb-2'>
                                                <div className='rounded-full bg-black p-1 mr-4'>
                                                    <FaCheck className='text-sm text-white' />
                                                </div>

                                                Authority Links Included
                                            </li>
                                            <li className='flex items-center text-base font-semibold mb-2'>
                                                <div className='rounded-full bg-black p-1 mr-4'>
                                                    <FaCheck className='text-sm text-white' />
                                                </div>

                                                Target Page Planning
                                            </li>
                                            <li className='flex items-center text-base font-semibold mb-2'>
                                                <div className='rounded-full bg-black p-1 mr-4'>
                                                    <FaCheck className='text-sm text-white' />
                                                </div>

                                                Anchor Text Optimization
                                            </li>
                                            <li className='flex items-center text-base font-semibold mb-2'>
                                                <div className='rounded-full bg-black p-1 mr-4'>
                                                    <FaCheck className='text-sm text-white' />
                                                </div>

                                                Competitor Backlink Gap Analysis
                                            </li>
                                            <li className='flex items-center text-base font-semibold mb-2'>
                                                <div className='rounded-full bg-black p-1 mr-4'>
                                                    <FaCheck className='text-sm text-white' />
                                                </div>

                                                Keyword Analysis
                                            </li>

                                            <li className='flex items-center text-base font-semibold mb-2'>
                                                <div className='rounded-full bg-black p-1 mr-4'>
                                                    <FaCheck className='text-sm text-white' />
                                                </div>

                                                Custom Reporting Dashboard
                                            </li>

                                            <li className='flex items-center text-base font-semibold mb-2'>
                                                <div className='rounded-full bg-black p-1 mr-4'>
                                                    <FaCheck className='text-sm text-white' />
                                                </div>

                                                Internal Linking Optimization
                                            </li>

                                            <li className='flex items-center text-base font-semibold mb-2'>
                                                <div className='rounded-full bg-black p-1 mr-4'>
                                                    <FaCheck className='text-sm text-white' />
                                                </div>

                                                Toxic Backlink Audit
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='mt-10'>
                                    <button class="button-three capitalize py-1.5 px-4 !font-semibold flex items-center justify-center w-full">📞 Book a call</button>
                                </div>

                            </div>
                        </div>

                        <div className='py-10'>
                            <div className='bg-white lg:pt-16 lg:pb-12 pt-10 pb-8 relative rounded-3xl px-6 shadow-2xl h-full flex flex-col justify-between lg:px-8'>
                                <div>
                                    <h3 className="tracking-tight mb-1 text-md md:text-lg xl:text-xl text-medium">
                                        🤝 For Agencies
                                    </h3>

                                    <div className="inline-flex items-end">
                                        <p>
                                            <span className="text-2xl md:text-3xl xl:text-4xl green-highlight tracking-tighter font-semibold bg-transparent leading-tight">
                                                Custom
                                            </span>
                                        </p>
                                    </div>

                                    <div className='w-full border-t border-black border-opacity-20 pt-5 mt-5 mb-10"'>
                                        <p className="block mb-4 text-xl pb-4 text-gray-900 font-normal"><strong>🔗 Custom For Agencies</strong></p>

                                        <ul>
                                            <li className='flex items-center text-base font-semibold mb-2'>
                                                <div className='rounded-full bg-black p-1 mr-4'>
                                                    <FaCheck className='text-sm text-white' />
                                                </div>

                                                White-label solutions for agencies & SEO professionals
                                            </li>
                                            <li className='flex items-center text-base font-semibold mb-2'>
                                                <div className='rounded-full bg-black p-1 mr-4'>
                                                    <FaCheck className='text-sm text-white' />
                                                </div>

                                                Build a backlink package to fit your client needs
                                            </li>
                                            <li className='flex items-center text-base font-semibold mb-2'>
                                                <div className='rounded-full bg-black p-1 mr-4'>
                                                    <FaCheck className='text-sm text-white' />
                                                </div>

                                                Custom Reporting Dashboard
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                                <div className='mt-10'>
                                    <button class="button-three capitalize py-1.5 px-4 !font-semibold flex items-center justify-center w-full">📞 Book a call</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full bg-gray-50 relative lg:p-0 px-20'>
                    <div className='w-full flex lg:flex-row flex-col-reverse flex-wrap mx-auto lg:w-11/12 xl:w-10/12 2xl:w-8/12 rounded-3xl overflow-hidden relative'>

                        <div className='lg:w-3/12 w-full z-20'>
                            <img src={footerImage} alt="" />
                        </div>

                        <div className='lg:w-9/12 w-full lg:pt-12 lg:pb-8 py-8 px-8 flex flex-col justify-center items-center z-20'>

                            <div>
                                <h2 className="text-xl md:text-2xl xl:text-3xl green-highlight tracking-tighter font-medium mb-5 | lg:mb-8 leading-none">
                                    Not found exactly what you’re looking for?
                                </h2>

                                <div className='flex md:flex-row flex-col'>
                                    <button class="button-two capitalize py-1.5 px-4 !font-semibold flex items-center justify-center w-max md:mb-0 mb-5">📞 Book a call with our sales team</button>

                                    <div className="flex items-center ml-6">
                                        <img src="/src/assets/benji.webp" className="w-11 rounded-2xl md:mr-4 mr-3" alt />
                                        <div>
                                            <p className="leading-tight font-medium text-md mb-0 | md:text-lg | 2xl:text-xl">Benji Hyam</p>
                                            <p className="text-gray-900 font-medium">Co-Founder - Grow and Convert</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className='absolute left-0 bottom-0 z-10 w-full lg:h-[90%] h-full bg-[#00DA90] rounded-3xl'></div>
                    </div>

                    <div className='w-full h-2/5 bg-white absolute left-0 bottom-0'></div>
                </div>
            </div>


            <div className='container mx-auto py-16 md:py-24 xl:py-32 px-8 flex lg:flex-row flex-col'>
                <div className='lg:w-5/12 w-full'>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl green-highlight-two tracking-tighter font-medium leading-tight text-black">Why is link <br />building important?</h2>

                    <button class="button-two capitalize py-1.5 px-4 !font-semibold flex items-center justify-center w-max mt-10 lg:mb-0 mb-10">Case Studies</button>
                </div>

                <div className='lg:w-7/12 w-full'>
                    <div className="redactor text-gray-800" style={{ fontFamily: 'Lato' }}>

                        <p className="mb-5 text-xl">Having quality backlinks from other websites is the <strong className="font-bold text-black">#1 influencing Google ranking factor</strong>. You can have the fastest, most beautiful website in the World, but if nobody is linking to your website, then you’ll struggle for search engine traffic.</p>

                        <p className="mb-5 text-xl">Our link building services help manage that entire process with a focus on <strong className="font-bold text-black">high quality link building </strong>that’s been fine tuned over many years.</p>

                        <p className="mb-5 text-xl">We only build high-quality backlinks from trustworthy and authoritative websites that are relevant to your industry. We never use black hat methodologies, and prefer a manual approach to backlink building which focuses on real relationships.</p>
                    </div>
                </div>
            </div>


            <div className='w-full bg-gray-950 py-16 md:py-24 xl:py-32'>
                <div className='container mx-auto px-8'>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl green-highlight-two tracking-tighter font-medium leading-tight text-center text-white mb-10">Our SEO Link Building <strong className="bg-[#00DA90] px-4 pb-1 rounded-xl font-medium">Services</strong></h2>

                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
                        <div className='flex xl:px-8 lg:px-5 py-6'>
                            <div className='inline-flex'>
                                <h2 className='text-lg md:text-xl xl:text-2xl green-highlight tracking-tighter font-medium leading-tight'>🤝</h2>
                            </div>

                            <div className="md:ml-3"><h3 className="text-lg | md:text-xl | xl:text-2xl green-highlight tracking-tighter font-medium text-white hidden mb-2 | md:inline-block leading-none">
                                Relationship-Based Link Building</h3><p className="text-gray-400 leading-tight text-md | md:text-lg">
                                    This technique is where we develop real relationships and connections with influential publishers in your space. We earn their trust to build incredible backlinks that your competitors simply cannot replicate. These are the holy grail of backlinks!
                                </p>
                            </div>

                        </div>

                        <div className='flex xl:px-8 lg:px-5 py-6 lg:border-l border-white border-opacity-20'>
                            <div className='inline-flex'>
                                <h2 className='text-lg md:text-xl xl:text-2xl green-highlight tracking-tighter font-medium leading-tight'>💔</h2>
                            </div>

                            <div className="md:ml-3"><h3 className="text-lg | md:text-xl | xl:text-2xl green-highlight tracking-tighter font-medium text-white hidden mb-2 | md:inline-block leading-none">
                                Broken Link Building</h3><p className="text-gray-400 leading-tight text-md | md:text-lg">
                                    This technique is where we develop real relationships and connections with influential publishers in your space. We earn their trust to build incredible backlinks that your competitors simply cannot replicate. These are the holy grail of backlinks!
                                </p>
                            </div>

                        </div>

                        <div className='flex xl:px-8 lg:px-5 py-6 lg:border-l border-white border-opacity-20'>
                            <div className='inline-flex'>
                                <h2 className='text-lg md:text-xl xl:text-2xl green-highlight tracking-tighter font-medium leading-tight'>✍️</h2>
                            </div>

                            <div className="md:ml-3"><h3 className="text-lg | md:text-xl | xl:text-2xl green-highlight tracking-tighter font-medium text-white hidden mb-2 | md:inline-block leading-none">
                                Guest Post Link Building</h3><p className="text-gray-400 leading-tight text-md | md:text-lg">
                                    This technique is where we develop real relationships and connections with influential publishers in your space. We earn their trust to build incredible backlinks that your competitors simply cannot replicate. These are the holy grail of backlinks!
                                </p>
                            </div>

                        </div>

                        <div className='flex xl:px-8 lg:px-5 py-6 lg:border-l border-white border-opacity-20'>
                            <div className='inline-flex'>
                                <h2 className='text-lg md:text-xl xl:text-2xl green-highlight tracking-tighter font-medium leading-tight'>🤝</h2>
                            </div>

                            <div className="md:ml-3"><h3 className="text-lg md:text-xl xl:text-2xl green-highlight tracking-tighter font-medium text-white hidden mb-2 md:inline-block leading-none">
                                Relationship-Based Link Building</h3><p className="text-gray-400 leading-tight text-md md:text-lg">
                                    This technique is where we develop real relationships and connections with influential publishers in your space. We earn their trust to build incredible backlinks that your competitors simply cannot replicate. These are the holy grail of backlinks!
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-center items-center mt-12 lg:mt-20 gap-4">
                        <img src="/src/assets/Stewart_Dunlop.webp" alt className="w-11" />

                        <p className="text-lg mr-6 font-semibold text-white" style={{ fontFamily: 'Lato' }}>Want to know more?</p>

                        <button className="button-two capitalize py-1.5 px-4 !font-semibold flex items-center !bg-transparent !border-white hover:bg-[#00DA90]">How we work</button></div>

                </div>
            </div>

            <div className='container mx-auto px-8 grid lg:grid-cols-2 gap-10 pb-16 md:pb-24 xl:pb-32'>
                <img src={fairpricing} alt="" />
                <div className='flex flex-col justify-center'>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl green-highlight-two tracking-tighter font-medium !leading-[4rem] mb-6 lg:mb-10">
                        <strong className='bg-[#00DA90] px-2 pb-1 rounded-xl font-medium'>Cutting Edge</strong><br /> Link Building Strategy
                    </h2>

                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border border-base-300 md:px-10 lg:px-5">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-2xl font-semibold p-0 flex items-center" style={{ fontFamily: "Lato" }}>
                                🚀<span className='ml-2'>We do things that no one else does</span>
                            </div>
                            <div className="collapse-content px-0">
                                <p>Our team of expert link builders are constantly pushing the boundaries of link building. We never settle for mediocrity, which means we're on the cutting edge of developing new outreach strategies & methods to acquire backlinks that will help our clients achieve massive success. a</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border border-base-300 md:px-10 lg:px-5">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-2xl font-semibold p-0 flex items-center" style={{ fontFamily: "Lato" }}>
                                ⚡️<span className='ml-2'>Vigorous testing & experiments</span>
                            </div>
                            <div className="collapse-content px-0">
                                <p>We're constantly testing the effectiveness of our services and <b>experimenting with strategies.</b> If a backlink doesn't help to improve search engine rankings, then we won't build it. We believe this is absolutely vital to become the best practitioners in the link building industry, and that's why our clients love us.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border border-base-300 md:px-10 lg:px-5">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-2xl font-semibold p-0 flex items-center" style={{ fontFamily: "Lato" }}>
                                💡<span className='ml-2'>Painstaking Strategy</span>
                            </div>
                            <div className="collapse-content px-0">
                                <p>While most link building service providers use guesswork and a very loose and flimsy strategy when it comes to link building, we're different. Our staff have incredible SEO knowledge and are able to see the bigger picture. We know the exact types of links to build for your website, and we're not afraid to go after difficult backlinks.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border border-base-300 md:px-10 lg:px-5">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-2xl font-semibold p-0 flex items-center" style={{ fontFamily: "Lato" }}>
                                💯<span className='ml-2'>We use big data</span>
                            </div>
                            <div className="collapse-content px-0">
                                <p>Inspired by the scientific approach of our sister company over at <a href="htt[s://ppc.io" className='link font-semibold text-[#00DA90]'>PPC.io</a> - Our team uses <b>big data</b> and proprietary tools to analyze link building performance. We're constantly monitoring a massive amount of data to analyze backlink quality and SEO performance. <br /><br />

                                    We don't shy away from taking the difficult route. Many competing link building agencies simply build links from a set database and don't care about the end result, provided they're getting paid. We genuinely want to learn what works and what gets results, which is why we go above and beyond.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='w-full bg-gray-950 py-16 md:py-24 xl:py-32'>
                <div className='container mx-auto px-8'>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl green-highlight-two tracking-tighter font-medium leading-tight text-center text-white mb-10">Don’t even <strong className="bg-[#00DA90] px-4 pb-1 rounded-xl font-medium text-black">think</strong>about building links in-house</h2>

                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
                        <div className='flex xl:px-8 lg:px-5 py-6'>
                            <div className='inline-flex'>
                                <h2 className='text-lg md:text-xl xl:text-2xl green-highlight tracking-tighter font-medium leading-tight'>😭</h2>
                            </div>

                            <div className="md:ml-3"><h3 className="text-xl md:text-2xl xl:text-3xl green-highlight tracking-tighter font-medium text-white hidden mb-2 | md:inline-block leading-none">
                                Full time employee</h3>
                                <p className="text-gray-400 leading-tight text-md | md:text-lg">
                                    $40k+/year
                                </p>
                            </div>

                        </div>

                        <div className='flex xl:px-8 lg:px-5 py-6 lg:border-l border-white border-opacity-20'>
                            <div className='inline-flex'>
                                <h2 className='text-lg md:text-xl xl:text-2xl green-highlight tracking-tighter font-medium leading-tight'>😳</h2>
                            </div>

                            <div className="md:ml-3"><h3 className="text-xl md:text-2xl xl:text-3xl green-highlight tracking-tighter font-medium text-white hidden mb-2 md:inline-block leading-none">
                                Content costs</h3>
                                <p className="text-gray-400 leading-tight text-md | md:text-lg">
                                    Stack up fast
                                </p>
                            </div>

                        </div>

                        <div className='flex xl:px-8 lg:px-5 py-6 lg:border-l border-white border-opacity-20'>
                            <div className='inline-flex'>
                                <h2 className='text-lg md:text-xl xl:text-2xl green-highlight tracking-tighter font-medium leading-tight'>😩</h2>
                            </div>

                            <div className="md:ml-3"><h3 className="text-xl md:text-2xl xl:text-2xl green-highlight tracking-tighter font-medium text-white hidden mb-2 md:inline-block leading-none">
                                Staff Training</h3><p className="text-gray-400 leading-tight text-md md:text-lg">
                                    Wasted time!
                                </p>
                            </div>

                        </div>

                        <div className='flex xl:px-8 lg:px-5 py-6 lg:border-l border-white border-opacity-20'>
                            <div className='inline-flex'>
                                <h2 className='text-lg md:text-xl xl:text-2xl green-highlight tracking-tighter font-medium leading-tight'>😖</h2>
                            </div>

                            <div className="md:ml-3"><h3 className="text-lg md:text-xl xl:text-2xl green-highlight tracking-tighter font-medium text-white hidden mb-2 md:inline-block leading-none">
                                No guarantee</h3>

                                <p className="text-gray-400 leading-tight text-md md:text-lg">
                                    You may not get results
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-center items-center mt-12 lg:mt-20 gap-4">
                        <img src="/src/assets/Stewart_Dunlop.webp" alt className="w-11" />

                        <p className="text-lg mr-6 font-semibold text-white" style={{ fontFamily: 'Lato' }}>So, ready to get started?</p>

                        <button className="button-two capitalize py-1.5 px-4 !font-semibold flex items-center !bg-transparent !border-white hover:bg-[#00DA90]">Get in touch</button></div>

                </div>
            </div>

            <div className='w-full bg-gray-100'>
                <div className='py-12 md:py-24 xl:py-32 mx-auto'>
                    <div className='flex items-center w-full container px-8 mx-auto'>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl green-highlight-two tracking-tighter font-medium leading-tight flex-1">Link Building <strong className="bg-[#00DA90] px-4 pb-1 rounded-xl font-medium text-black">Blog</strong></h2>

                        <button class="button-two capitalize py-1.5 px-4 !font-semibold flex items-center justify-center w-max">View all Blog Posts</button>
                    </div>

                    <div className='lg:pt-20 pt-12'>
                        <BlogSlider />
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-8 py-16 md:py-24 xl:py-32 grid grid-cols-3 gap-10'>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl green-highlight-two tracking-tighter font-medium !leading-normal">Frequently Asked <strong className="bg-[#00DA90] px-4 pb-1 rounded-xl font-medium text-black">Questions</strong></h2>

                <div className='lg:col-span-2 col-span-3'>
                    <div className='p-8 sm:p-10 lg:p-20 bg-gray-100 rounded-3xl mb-7'>
                        <h3 className="text-xl md:text-2xl xl:text-3xl tracking-tighter font-medium mb-5 leading-tight">
                            <span className="mr-3">🔗</span>
                            Link Building FAQs
                        </h3>

                        <div className="join join-vertical w-full">
                            <div className="collapse collapse-arrow join-item">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-2xl font-semibold p-0 flex items-center" style={{ fontFamily: "Lato" }}>
                                    <span className='ml-2'>What are link building services?</span>
                                </div>
                                <div className="collapse-content px-0">
                                    <p>Link building services are <b>an essential SEO strategy</b> that seeks to gain quality links from related, high-authority domains. This allows search engines to perceive your website as a reliable and authoritative source of information while creating the opportunity to improve your search engine rankings organically. Link building experts will carefully craft an individualized link building campaign to generate backlinks that have the potential to benefit your website.</p><br /><br />
                                    <p>At LinkBuilder, we provide a range of link building services, including <b>fully managed</b> link building, guest posting and white label link building. However, by far our most popular offering is our fully managed monthly link building packages. We’ll work closely with you to identify key pages that would benefit from fresh links, and perform competitor analysis to figure out exactly what you need. Our team of link building experts will then craft bespoke link building campaigns to perfectly accelerate your rankings.</p>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow join-item">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-2xl font-semibold p-0 flex items-center" style={{ fontFamily: "Lato" }}>
                                    <span className='ml-2'>What link building strategies do you use?</span>
                                </div>
                                <div className="collapse-content px-0">
                                    <p>We’re proud of being recognized as one of the best link building service provider’s around. With recognition comes responsibility, and we love the challenge of being at the forefront of strategy when it comes to link building.</p>

                                    <br />

                                    <p><b>We use over 20 different link building techniques, including;</b></p>

                                    <br />

                                    <ul className='list-none'>
                                        <li className='font-medium my-2'>
                                            <span className='text-[#00DA90]'>1. </span>
                                            Editorial outreach
                                        </li>

                                        <li className='font-medium my-2'>
                                            <span className='text-[#00DA90]'>2. </span>
                                            Content marketing
                                        </li>

                                        <li className='font-medium my-2'>
                                            <span className='text-[#00DA90]'>3. </span>
                                            SkyScraper approach
                                        </li>

                                        <li className='font-medium my-2'>
                                            <span className='text-[#00DA90]'>4. </span>
                                            Guest posts
                                        </li>


                                        <li className='font-medium my-2'>
                                            <span className='text-[#00DA90]'>5. </span>
                                            Broken link building
                                        </li>

                                        <li className='font-medium my-2'>
                                            <span className='text-[#00DA90]'>6. </span>
                                            Unlinked brand mentions
                                        </li>

                                        <li className='font-medium my-2'>
                                            <span className='text-[#00DA90]'>7. </span>
                                            HARO journalist pitching
                                        </li>

                                        <li className='font-medium my-2'>
                                            <span className='text-[#00DA90]'>8. </span>
                                            Resource page outreach
                                        </li>

                                        <li className='font-medium my-2'>
                                            <span className='text-[#00DA90]'>9. </span>
                                            Competitor link building
                                        </li>

                                        <li className='font-medium my-2'>
                                            <span className='text-[#00DA90]'>10. </span>
                                            Awards link building
                                        </li>

                                        <li className='font-medium my-2'>
                                            <span className='text-[#00DA90]'>11. </span>
                                            Directory link building
                                        </li>

                                        <li className='font-medium my-2'>
                                            <span className='text-[#00DA90]'>12. </span>
                                            Link insertions
                                        </li>

                                        <li className='font-medium my-2'>
                                            <span className='text-[#00DA90]'>13. </span>
                                            PR link building
                                        </li>
                                    </ul>

                                    <br />

                                    <p>The exact strategies we use depend entirely on each and every client we work with, and our team will develop a bespoke strategy depending on your industry.</p>
                                    <br />
                                    <p>Everything we do has our client’s best interests in mind, and ultimately our goal is to help improve your search rankings by building links that will move the needle.</p>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow join-item">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-2xl font-semibold p-0 flex items-center" style={{ fontFamily: "Lato" }}>
                                    <span className='ml-2'>What are white-hat links?</span>
                                </div>
                                <div className="collapse-content px-0">
                                    <p><a className='link text-[#00DA90]' href="https://linkbuilder.io/white-hat-link-building/">White hat link building</a> refers to creating links in an organic, natural way. We build all of our links by launching outreach campaigns and developing a real rapport and relationship with other bloggers, journalists, and webmasters which leads to them linking back to your website. This allows us to earn backlinks on authoritative websites that we wouldn't otherwise be able to land.</p>
                                    <br />
                                    <p>This white-hat methodology is in stark contrast to black hat link building, which involves the active creation of links in a clear attempt to manipulate search engines, for example with social bookmarking, comment spam, forum spam, web 2.0s etc.</p>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow join-item">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-2xl font-semibold p-0 flex items-center" style={{ fontFamily: "Lato" }}>
                                    <span className='ml-2'>Why do I need a link building agency?</span>
                                </div>
                                <div className="collapse-content px-0">
                                    <p>Link building is a complex and process-driven activity that needs to be executed consistently in order to gain success. Our agency has perfected that process, allowing us to consistently build a strong number of links every month, with a different employee and every stage of your project.</p><br />

                                    <p>Yes, you could invest in building an in-house team, but the likelihood is your costs will be far greater and you’ll spend a very long period of time learning and getting up to speed. Having a dependable link building consultant with vast experience in a multitude of campaigns will ensure your business has success right from the start.</p>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow join-item">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-2xl font-semibold p-0 flex items-center" style={{ fontFamily: "Lato" }}>
                                    <span className='ml-2'>What separates you from competitors?</span>
                                </div>
                                <div className="collapse-content px-0">
                                    <p>Unlike other link building services out there, we take a very careful, personalized approach to every project we take on. We use incredibly high-level link building tactics to achieve results, and launch custom outreach campaigns using a persona that represents your business. We avoid using a catalog or database to make our work easier. In other words, our approach is completely organic for each and every new project we take on.</p><br />

                                    <p>It’s important to remember that we’re not an SEO agency, we’re a link building agency. Our team are all tried and tested link builders, and we know what it takes to build the ultimate link profile which will separate you from the competition.</p>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow join-item">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-2xl font-semibold p-0 flex items-center" style={{ fontFamily: "Lato" }}>
                                    <span className='ml-2'>How many links do you build per month?</span>
                                </div>
                                <div className="collapse-content px-0">
                                    <p>The number varies depending on the package you build, but we normally build between 10-50 links per month, depending on our client and the scope of the project.</p><br />

                                    <p>In addition, we will <b>consult with you on the safe volume of backlinks</b> you can build per month, depending on your current stage in the process and your given industry.</p><br />

                                    <p>For example, a local dentist website should never be building more than 15 links per month. Whereas for a global CRM software, 15 links per month would be a very low number given the competitive landscape.</p><br />

                                    <p>We typically set a minimum guaranteed volume of links per month, and the varying factor between hitting the target or surpassing it simply depends on the quality of content we have at our disposal to promote.</p>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow join-item">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-2xl font-semibold p-0 flex items-center" style={{ fontFamily: "Lato" }}>
                                    <span className='ml-2'>How long does it take to see results?</span>
                                </div>
                                <div className="collapse-content px-0">
                                    <p>It will take at least 6 months to start seeing significant results from any link building campaign. Remember, link building is a long-term process, and we always advise any potential clients to know exactly what they’re getting into before they engage in our services. Everyone in SEO acknowledges that link building is the cornerstone to organic search success, and we’ll do everything in our power to ensure that our link building efforts align with your goals of driving more traffic to your website. Time and time again, our company has achieved success with high-profile clients, as detailed via our case studies</p>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow join-item">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-2xl font-semibold p-0 flex items-center" style={{ fontFamily: "Lato" }}>
                                    <span className='ml-2'>What makes a good backlink?</span>
                                </div>
                                <div className="collapse-content px-0">
                                    <p>Not all links are equal! Earning links from high quality websites that are relevant to your business is incredibly important. Remember, Google uses links as a trust signal to see that people are referencing your website. It’s no different to getting good reviews.</p><br />
                                    <p>Sadly, many freelancers and agencies out there are offering links on websites which simply have no traffic, and Google isn’t counting these ‘fake’ reviews.</p><br />

                                    <p>We’re trusted by SEO managers from some of the World’s best online businesses to build high quality links that actually work.</p>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow join-item">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-2xl font-semibold p-0 flex items-center" style={{ fontFamily: "Lato" }}>
                                    <span className='ml-2'>What industries do you work in?</span>
                                </div>
                                <div className="collapse-content px-0">
                                    <p>We've been in business for over 7 years, and built links for <b>hundreds of happy clients</b> in a whole host of different industries.</p><br />

                                    <p>Our approach is completely bespoke for every new project we take on, meaning that our team will become a subject-matter expert in your industry and carefully study exactly what types of relevant links our team should be building.</p><br />

                                    <p><b>With that said, here are some of our most common industries:</b></p><br />

                                    <ul className='list-disc ml-6 rich-list list-outside mb-8 text-lg' style={{ fontFamily: "Lato" }}>
                                        <li>
                                            SaaS - this obviously covers a massive array of sub-industries!
                                        </li>

                                        <li>
                                            Law
                                        </li>

                                        <li>
                                            Real Estate
                                        </li>

                                        <li>
                                            Travel
                                        </li>
                                        <li>
                                            Careers
                                        </li>

                                        <li>
                                            Web Development
                                        </li>

                                        <li>
                                            Ecommerce
                                        </li>

                                        <li>
                                            Affiliates
                                        </li>

                                        <li>
                                            Pets
                                        </li>

                                        <li>
                                            Home
                                        </li>

                                        <li>
                                            Cyber Security
                                        </li>

                                        <li>
                                            Technology
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='p-8 sm:p-10 lg:p-20 bg-gray-100 rounded-3xl'>
                        <h3 className="text-xl md:text-2xl xl:text-3xl tracking-tighter font-medium mb-5 leading-tight">
                            <span className="mr-3">💬</span>
                            Backlink Reporting
                        </h3>

                        <div className="join join-vertical w-full">
                            <div className="collapse collapse-arrow join-item">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-2xl font-semibold p-0 flex items-center" style={{ fontFamily: "Lato" }}>
                                    <span className='ml-2'>How Do You Report on Links?</span>
                                </div>
                                <div className="collapse-content px-0">
                                    <p>We take our project management and reporting seriously, but we don’t believe in ridiculously detailed reports, which is traditionally what SEO agencies spend most of their client’s valuable time and money on.</p>

                                    <br /><br />

                                    <p>Our backlink reporting system is simple – You’ll have access to a shared tracking file which updates throughout the month in real-time to every new backlink we build, along with all of the key metrics:</p>
                                    <br />

                                    <ul className='list-none'>
                                        <li className='font-medium my-2'>
                                            <span className='text-[#00DA90]'>1. </span>
                                            Linking URL
                                        </li>

                                        <li className='font-medium my-2'>
                                            <span className='text-[#00DA90]'>2. </span>
                                            Target Page
                                        </li>

                                        <li className='font-medium my-2'>
                                            <span className='text-[#00DA90]'>3. </span>
                                            Anchor Text
                                        </li>

                                        <li className='font-medium my-2'>
                                            <span className='text-[#00DA90]'>4. </span>
                                            Domain Rating of Backlinks
                                        </li>


                                        <li className='font-medium my-2'>
                                            <span className='text-[#00DA90]'>5. </span>
                                            Website Traffic
                                        </li>

                                        <li className='font-medium my-2'>
                                            <span className='text-[#00DA90]'>6. </span>
                                            Keyword Visibility
                                        </li>
                                    </ul>

                                    <br />

                                    <p>On top of that, we’ll send you a monthly link building report detailing the work we’ve done, and provide guidance with what our plans are for the future.</p>
                                    <br />
                                    <p>We typically give our client’s additional guidance on their overall SEO and content strategy as well. The reason for that is because we spend so much time analyzing your competitors, that we’re able to provide insight on exactly what they’re doing right (or wrong).</p>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow join-item">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-2xl font-semibold p-0 flex items-center" style={{ fontFamily: "Lato" }}>
                                    <span className='ml-2'>How to You Monitor Results?</span>
                                </div>
                                <div className="collapse-content px-0">
                                    <p>We don't simply build backlinks and let you worry about the rest. One of the major things that separates us from other link building agencies is that we truly care about improving your search engine rankings.</p>

                                    <br />

                                    <p>Our reporting includes a target list of all the pages on your website that we think could benefit from link building, and our team of analysts have also calculated what the traffic potential is for those pages pending a successful link building campaign.</p>

                                    <br />

                                    <p>In addition, we report on the results over time and actively monitor rankings for the pages we're building links to. This allows our team to be hyper-focused on achieving results, and looking at the bigger picture, not just the links.</p>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow join-item">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-2xl font-semibold p-0 flex items-center" style={{ fontFamily: "Lato" }}>
                                    <span className='ml-2'>How Do We Communicate?</span>
                                </div>
                                <div className="collapse-content px-0">
                                    <p>You'll be able to message our team 24/7 and can expect a reply on the same day (except Christmas).</p>

                                    <br />
                                    <p>We also offer our clients the ability to book a call any time you like. On top of that, we often schedule regular meetings to talk through our strategy and planning.</p>

                                    <br />

                                    <p>You’ll receive a monthly update on every backlink we've built and other other key observations related to your search engine optimization goals.</p>
                                </div>
                            </div>

                        </div>
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

export default Home