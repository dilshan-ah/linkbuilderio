import React, { useContext } from 'react'
import { DataContext } from '../context/Context'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import { FaCheck } from 'react-icons/fa6'
import footerImage from '../assets/footer-3D.webp'
import { Link } from 'react-router-dom'
import faripricing from '../assets/Fair-Pricing.webp'
import bryce from '../assets/bryce-welker-bio.webp'
import benji from '../assets/benji.webp'
import brandon from '../assets/brandon.webp'
import Footer from '../components/Footer'
import { IoIosClose } from "react-icons/io";



import fiverr from '../assets/fiverr.webp'
import linkbuilder from '../assets/LinkBuilder.webp'
import linkbroker from '../assets/blog-03.webp'
import otheragency from '../assets/blog-05.webp'

const Pricing = () => {
    const { mobileMenu, allPackage } = useContext(DataContext)
    return (
        <div className='relative'>
            <Helmet>
                <title>LinkBuilder.io | Simple, Transparent Pricing</title>
            </Helmet>

            <Navbar />

            <div className='w-full py-16 md:py-24 xl:py-32'>
                <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl green-highlight-two tracking-tighter font-medium leading-tight text-center">
                    Our Link Building <strong className='bg-[#00DA90] px-4 pb-1 rounded-xl font-medium'>Packages</strong> & Pricing
                </h1>

                <div className="redactor text-gray-800 max-w-2xl mx-auto mt-10">
                    <p className="mb-5 text-lg text-center" style={{ fontFamily: 'Lato', }}>Our monthly link building packages provide a fully managed service, so that you can focus on other aspects of SEO. All of our packages and plans include detailed strategy &amp; bespoke outreach.</p>
                </div>


                <div className='flex justify-center mt-10'>
                    <h3 className='font-bold text-lg pb-6 border-b-4 border-[#00DA90]'>Monthly Packages</h3>
                </div>

                <div className='w-full bg-gray-50 py-10'>
                    <div className='container mx-auto px-8 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>

                        {
                            allPackage?.map((pack) => (
                                <div className={`py-10 ${pack.popular == 1 && 'h-full'}`}>
                                    <div className={`${pack.popular == 1 ? 'bg-[#00DA90]':'bg-white'} lg:pt-16 lg:pb-12 pt-10 pb-8 relative rounded-3xl px-6 shadow-2xl h-full flex flex-col justify-between lg:px-8`}>
                                        <div>
                                            <h3 className="tracking-tight mb-1 text-md md:text-lg xl:text-xl text-medium text-black">
                                                {pack.name}
                                            </h3>

                                            <div className="inline-flex items-end text-black">
                                                <p>
                                                    <span className="text-2xl md:text-3xl xl:text-4xl green-highlight tracking-tighter font-semibold bg-transparent leading-tight">
                                                        ${pack.price}
                                                    </span>
                                                    <span className="ml-2 text-gray-700 ">
                                                        / Month
                                                    </span>
                                                </p>
                                            </div>

                                            <div className='w-full border-t border-black border-opacity-20 pt-5 mt-5 mb-10"'>
                                                <p className="block mb-4 text-xl pb-4 text-gray-900 font-normal"><strong>🔗 {pack.links_per_month}+ Links Per Month</strong></p>

                                                <ul>
                                                    {pack.items.map((item) => (
                                                        <li className='flex items-center text-base font-semibold mb-2 text-black'>
                                                            <div className='rounded-full bg-black p-1 mr-4'>
                                                                <FaCheck className='text-sm text-white' />
                                                            </div>

                                                            {item.title}
                                                        </li>
                                                    ))}

                                                </ul>
                                            </div>
                                        </div>

                                        <div className='mt-10'>
                                            <button class={`${pack.popular == 1 ? 'button-two':'button-three'} capitalize py-1.5 px-4 !font-semibold flex items-center justify-center w-full`}>📞 Book a call</button>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }

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

            <div className='container mx-auto lg:grid lg:grid-cols-2 flex flex-col flex-col-reverse gap-10 lg:h-screen h-auto items-center px-8'>
                <div className='h-max lg:pr-1/12 lg:pt-20 pt-14'>
                    <h1 class="mb-10 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl tracking-tighter font-medium !leading-normal	 green-highlight">
                        What’s a Fair Price?</h1>

                    <p className='text-lg mb-10'>We’ve put together a <a href="#" className='link text-[#00DA90]'>detailed guide</a> on link building costs to help you make a better informed decision. As a company, we strive to offer a fair deal which represents good value for money.</p>



                    <p className='text-lg mb-10'>Our team works closely with some of the World’s most successful online brands, putting an emphasis on exceptionally high quality work and deep analysis to ensure your success.</p>

                </div>

                <div className='flex justify-center pt-28'>
                    <img src={faripricing} alt="" className='lg:w-auto w-4/5 rounded-3xl' />
                </div>
            </div>

            <div className='w-full py-24 md:py-36 xl:py-40'>
                <div className='container mx-auto px-8'>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl green-highlight-two tracking-tighter font-medium leading-tight text-center mb-10">Who is LinkBuilder a <strong className="bg-[#00DA90] px-4 pb-1 rounded-xl font-medium text-black">perfect</strong> fit for?</h2>

                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-20'>

                        <div className='xl:px-8 lg:px-5 text-center flex flex-col items-center'>

                            <div className='flex justify-center w-32 mb-8'>
                                <img src={bryce} className='rounded-full w-12 h-12 object-cover -mx-1.5' alt="" />
                                <img src={benji} className='rounded-full w-12 h-12 object-cover -mx-1.5' alt="" />
                                <img src={brandon} className='rounded-full w-12 h-12 object-cover -mx-1.5' alt="" />
                            </div>

                            <h2 className='text-lg md:text-xl xl:text-2xl tracking-tighter font-medium leading-tight'>Founders and entrepreneurs</h2>


                            <p className='font-md mt-3'>We help entrepreneurs scale their link building performance with a solution that's incredibly affordable and effective.</p>

                        </div>



                        <div className='xl:px-8 lg:px-5 text-center flex flex-col items-center border-x border-gray-300'>

                            <div className='flex justify-center w-32 mb-8'>
                                <img src={bryce} className='rounded-full w-12 h-12 object-cover -mx-1.5' alt="" />
                                <img src={benji} className='rounded-full w-12 h-12 object-cover -mx-1.5' alt="" />
                                <img src={brandon} className='rounded-full w-12 h-12 object-cover -mx-1.5' alt="" />
                            </div>

                            <h2 className='text-lg md:text-xl xl:text-2xl tracking-tighter font-medium leading-tight'>Marketing directors</h2>


                            <p className='font-md mt-3'>We help marketing directors remove the need to build an expensive in-house link building team, helping to quickly scale high quality links.</p>

                        </div>

                        <div className='xl:px-8 lg:px-5 text-center flex flex-col items-center'>

                            <div className='flex justify-center w-32 mb-8'>
                                <img src={bryce} className='rounded-full w-12 h-12 object-cover -mx-1.5' alt="" />
                                <img src={benji} className='rounded-full w-12 h-12 object-cover -mx-1.5' alt="" />
                                <img src={brandon} className='rounded-full w-12 h-12 object-cover -mx-1.5' alt="" />
                            </div>

                            <h2 className='text-lg md:text-xl xl:text-2xl tracking-tighter font-medium leading-tight'>SEO Professionals</h2>


                            <p className='font-md mt-3'>SEO professionals and agencies love us because they know we can hit the ground running and take care of all the analysis and strategy, leaving them free to tackle other issues.</p>

                        </div>

                    </div>

                    <div className="flex justify-center items-center mt-12 lg:mt-20 gap-4">


                        <button className="button-two capitalize py-1.5 px-4 !font-semibold flex items-center !bg-transparent !border-white hover:bg-[#00DA90]">Get started today</button></div>

                </div>

            </div>

            <div className='w-full bg-gray-50'>
                <div className='container mx-auto px-8 overflow-hidden py-12 md:py-24 xl:py-32'>

                    <p className="text-center text-md md:text-lg xl:text-xl font-regular mb-3 leading-tight">
                        🤔 Us vs. Competitors
                    </p>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl green-highlight-two tracking-tighter font-medium leading-tight text-center mb-10">
                        Why choose <strong className='bg-[#00DA90] px-4 pb-1 rounded-xl font-medium'>LinkBuilder?</strong>
                    </h2>

                    <div className='w-11/12 mx-auto bg-white overflow-x-scroll rounded-3xl'>
                        <table>
                            <thead>
                                <tr>
                                    <th className='text-left font-semibold border-b border-black border-opacity-10 pt-10 pb-6 pl-10 pr-52 leading-none text-sm truncate md:text-base' style={{ fontFamily: 'Lato', }}>Other Services</th>
                                    <th className='text-left font-semibold border-b border-black border-opacity-10 pt-10 pb-6 px-10 leading-none text-sm truncate md:text-base' style={{ fontFamily: 'Lato', }}>Strategist</th>
                                    <th className='text-left font-semibold border-b border-black border-opacity-10 pt-10 pb-6 px-10 leading-none text-sm truncate md:text-base' style={{ fontFamily: 'Lato', }}>Analysis</th>
                                    <th className='text-left font-semibold border-b border-black border-opacity-10 pt-10 pb-6 px-10 leading-none text-sm truncate md:text-base' style={{ fontFamily: 'Lato', }}>Sustainable</th>

                                    <th className='text-left font-semibold border-b border-black border-opacity-10 pt-10 pb-6 px-10 leading-none text-sm truncate md:text-base' style={{ fontFamily: 'Lato', }}>Relationships</th>

                                    <th className='text-left font-semibold border-b border-black border-opacity-10 pt-10 pb-6 px-10 leading-none text-sm truncate md:text-base' style={{ fontFamily: 'Lato', }}>Big Scale</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className='py-6  pl-10 pr-52 truncate'>
                                        <a href="#" className='flex items-center transform transition-all duration-500 hover:translate-x-2'>
                                            <img src={fiverr} alt="" className='mr-4 w-11 shadow-xl rounded-md' />

                                            <span className="text-xs sm:text-sm lg:text-md xl:text-lg green-highlight tracking-tighter font-medium leading-none">
                                                Fiverr
                                            </span>

                                        </a>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full bg-[#00DA90]'>
                                            <FaCheck />
                                        </div>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full border-2 border-gray-500'>
                                            <IoIosClose className='text-gray-500' />
                                        </div>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full border-2 border-gray-500'>
                                            <IoIosClose className='text-gray-500' />
                                        </div>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full border-2 border-gray-500'>
                                            <IoIosClose className='text-gray-500' />
                                        </div>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full border-2 border-gray-500'>
                                            <IoIosClose className='text-gray-500' />
                                        </div>
                                    </td>

                                </tr>

                                <tr>
                                    <td className='py-6  pl-10 pr-52 truncate'>
                                        <a href="#" className='flex items-center transform transition-all duration-500 hover:translate-x-2'>
                                            <img src={bryce} alt="" className='mr-4 w-11 shadow-xl rounded-md' />

                                            <span className="text-xs sm:text-sm lg:text-md xl:text-lg green-highlight tracking-tighter font-medium leading-none">
                                                Freelancer
                                            </span>

                                        </a>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full bg-[#00DA90]'>
                                            <FaCheck />
                                        </div>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full border-2 border-gray-500'>
                                            <IoIosClose className='text-gray-500' />
                                        </div>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full border-2 border-gray-500'>
                                            <IoIosClose className='text-gray-500' />
                                        </div>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full border-2 border-gray-500'>
                                            <IoIosClose className='text-gray-500' />
                                        </div>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full border-2 border-gray-500'>
                                            <IoIosClose className='text-gray-500' />
                                        </div>
                                    </td>

                                </tr>

                                <tr className='bg-[#00DA90]'>
                                    <td className='py-6  pl-10 pr-52 truncate'>
                                        <a href="#" className='flex items-center transform transition-all duration-500 hover:translate-x-2'>
                                            <img src={linkbuilder} alt="" className='mr-4 w-11 shadow-xl rounded-md' />

                                            <span className="text-xs sm:text-sm lg:text-md xl:text-lg green-highlight tracking-tighter font-medium leading-none">
                                                LinkBuilder.io
                                            </span>

                                        </a>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full bg-black'>
                                            <FaCheck className='text-white' />
                                        </div>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full bg-black'>
                                            <FaCheck className='text-white' />
                                        </div>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full bg-black'>
                                            <FaCheck className='text-white' />
                                        </div>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full bg-black'>
                                            <FaCheck className='text-white' />
                                        </div>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full bg-black'>
                                            <FaCheck className='text-white' />
                                        </div>
                                    </td>

                                </tr>

                                <tr>
                                    <td className='py-6  pl-10 pr-52 truncate'>
                                        <a href="#" className='flex items-center transform transition-all duration-500 hover:translate-x-2'>
                                            <img src={linkbroker} alt="" className='mr-4 w-11 shadow-xl rounded-md' />

                                            <span className="text-xs sm:text-sm lg:text-md xl:text-lg green-highlight tracking-tighter font-medium leading-none">
                                                Link Brokers
                                            </span>

                                        </a>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full bg-[#00DA90]'>
                                            <FaCheck />
                                        </div>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full border-2 border-gray-500'>
                                            <IoIosClose className='text-gray-500' />
                                        </div>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full border-2 border-gray-500'>
                                            <IoIosClose className='text-gray-500' />
                                        </div>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full border-2 border-gray-500'>
                                            <IoIosClose className='text-gray-500' />
                                        </div>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full border-2 border-gray-500'>
                                            <IoIosClose className='text-gray-500' />
                                        </div>
                                    </td>

                                </tr>

                                <tr>
                                    <td className='py-6  pl-10 pr-52 truncate'>
                                        <a href="#" className='flex items-center transform transition-all duration-500 hover:translate-x-2'>
                                            <img src={otheragency} alt="" className='mr-4 w-11 shadow-xl rounded-md' />

                                            <span className="text-xs sm:text-sm lg:text-md xl:text-lg green-highlight tracking-tighter font-medium leading-none">
                                                Other Agencies
                                            </span>

                                        </a>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full bg-[#00DA90]'>
                                            <FaCheck />
                                        </div>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full border-2 border-gray-500'>
                                            <IoIosClose className='text-gray-500' />
                                        </div>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full border-2 border-gray-500'>
                                            <IoIosClose className='text-gray-500' />
                                        </div>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full border-2 border-gray-500'>
                                            <IoIosClose className='text-gray-500' />
                                        </div>
                                    </td>

                                    <td className='py-6 px-10 truncate'>
                                        <div className='w-7 h-7 flex justify-center items-center rounded-full border-2 border-gray-500'>
                                            <IoIosClose className='text-gray-500' />
                                        </div>
                                    </td>

                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <div className='flex justify-center mt-12 lg:mt-20'>
                        <button className="button-two capitalize py-1.5 px-4 !font-semibold flex items-center">
                            Get Started
                        </button>
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
        </div>
    )
}

export default Pricing