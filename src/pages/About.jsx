import React, { useContext, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import banner from '../assets/Linkbuilder.io.webp'
import bannerTwo from '../assets/home-3D.webp'

import { Link } from 'react-router-dom'
import { DataContext } from '../context/Context'
import MobileMenu from '../components/MobileMenu'
import Footer from '../components/Footer'
import TeamSlider from '../components/TeamSlider'

import givewell from '../assets/givewell.svg'
import unicef from '../assets/unicef.webp'
import wateraid from '../assets/wateraid.webp'
import compassion from '../assets/compassion.webp'
import effective from '../assets/effective.svg'

import stewartSignature from '../assets/stewart-signature.webp'
import { Helmet } from 'react-helmet'
import BlogSlider from '../components/BlogSlider'


const About = () => {
    const { mobileMenu } = useContext(DataContext)


    return (
        <div className='relative'>
            <Helmet>
                <title>LinkBuilder.io | About Us</title>
            </Helmet>

            <Navbar />


            <div className='container mx-auto lg:grid lg:grid-cols-2 flex flex-col flex-col-reverse gap-20 lg:h-screen h-auto items-center px-8'>
                <div className='h-max lg:pr-1/12 lg:pt-20 pt-14'>
                    <h1 class="mb-10 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl tracking-tighter font-medium !leading-normal	 green-highlight">
                        <strong className='inline-block font-medium px-3 relative'>Who</strong> we are</h1>

                    <p className='text-lg mb-10'>Collectively, our team of 43 dedicated link building professionals have over 250 years of experience amongst them.</p>

                    <p className='text-lg mb-10'>After launching in 2016, our team has grown rapidly as we’ve earned recognition and increased demand for our bespoke approach to link building.</p>

                    <Link to='/meet-the-team'>👀 <span className='text-lg mr-6 font-bold link text-[#00DA90]'>Meet our team</span></Link>

                </div>

                <div className='flex justify-center pt-28'>
                    <img src={banner} alt="" className='lg:w-auto w-4/5 rounded-3xl' />
                </div>
            </div>


            <div className='w-full mx-auto pt-48 pb-12 md:pb-24 xl:pb-32'>
                <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl green-highlight-two tracking-tighter !leading-normal font-medium leading-tight text-center mb-20">
                    Dedicated link building <br /> experts, <strong className='bg-[#00DA90] px-4 pb-1 rounded-xl font-medium'>just for you</strong>
                </h2>

                <TeamSlider />

                <div className='flex justify-center pt-12 lg:pt-20 pr-1/12 lg:pr-20 3xl:pr-10/100'>
                    <button className="button-one capitalize py-1.5 px-4 !font-semibold flex items-center">
                        Meet the team
                    </button>
                </div>
            </div>


            <div className='w-full bg-gray-950 py-16 md:py-24 xl:py-32'>
                <div className='container mx-auto px-8'>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl green-highlight-two tracking-tighter font-medium leading-tight text-center text-white mb-10">By the <strong className="bg-[#00DA90] px-4 pb-1 rounded-xl font-medium text-black">numbers</strong></h2>

                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-20'>

                        <div className='xl:px-8 lg:px-5 text-center'>

                            <h2 className='text-lg md:text-xl xl:text-8xl text-white tracking-tighter font-medium leading-tight'>2016</h2>


                            <h3 className="text-md md:text-xl xl:text-2xl green-highlight tracking-tighter font-medium text-white hidden mb-2 | md:inline-block leading-none mt-5">
                                Founded 🏡
                            </h3>

                        </div>



                        <div className='xl:px-8 lg:px-5 text-center border-x-2 border-gray-700'>

                            <h2 className='text-lg md:text-xl xl:text-8xl text-white tracking-tighter font-medium leading-tight'>350+</h2>


                            <h3 className="text-md md:text-xl xl:text-2xl green-highlight tracking-tighter font-medium text-white hidden mb-2 | md:inline-block leading-none mt-5">
                                Companies we’ve helped 🤝
                            </h3>

                        </div>

                        <div className='xl:px-8 lg:px-5 text-center'>

                            <h2 className='text-lg md:text-xl xl:text-8xl text-white tracking-tighter font-medium leading-tight'>20k+</h2>


                            <h3 className="text-md md:text-xl xl:text-2xl green-highlight tracking-tighter font-medium text-white hidden mb-2 | md:inline-block leading-none mt-5">
                                Links we've built 🔗
                            </h3>

                        </div>

                    </div>

                    <div className="flex justify-center items-center mt-12 lg:mt-20 gap-4">


                        <button className="button-two capitalize py-1.5 px-4 !font-semibold flex items-center !bg-transparent !border-white hover:bg-[#00DA90]">Get started today</button></div>

                </div>

            </div>

            <div className='w-full bg-gray-50 mx-auto pt-48 pb-12 md:pb-24 xl:pb-32'>
                <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl green-highlight-two tracking-tighter !leading-normal font-medium leading-tight text-center mb-20">
                    Supporting  <strong className='bg-[#00DA90] px-4 pb-1 rounded-xl font-medium'>real</strong> change
                </h2>

                <div className='w-2/3 mx-auto gap-20 flex flex-wrap justify-center'>
                    <img src={givewell} className='h-9' alt="" />

                    <img src={unicef} className='h-9' alt="" />

                    <img src={wateraid} className='h-9' alt="" />

                    <img src={compassion} className='h-9' alt="" />

                    <img src={effective} className='h-9' alt="" />
                </div>

                <p className='w-2/3 mx-auto text-center mt-10 text-lg'>Each month, we donate a percentage of revenue to organizations which aim to provide the highest impact possible for people in less fortunate parts of the World.</p>

            </div>

            <div className='container mx-auto px-8 pb-16 md:pb-24 xl:pb-32 lg:grid lg:grid-cols-2 flex flex-col flex-col-reverse gap-10 items-center'>
                <div>

                    <h2 class="mb-10 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl tracking-tighter font-medium !leading-normal	 green-highlight">
                        From the <strong className='inline-block font-medium px-3 relative'>founder</strong></h2>

                    <div className="redactor text-gray-800" style={{ fontFamily: 'Lato', }}>

                        <p className="mb-5 text-lg">“I founded LinkBuilder because I saw a serious gap in the market for white hat link-building services. Despite all the warnings from Google and the horror stories from buying backlinks, companies have been buying junk for years. SEO on its own is an all-encompassing term, but we focus on link building because time and time again it’s proven to be the number 1 most important factor when it comes to gaining more traffic from Google.</p>

                        <p className="mb-5 text-lg"><strong className="font-bold text-black">We do things differently from other agencies</strong> </p>

                        <p className="mb-5 text-lg">Our process works by acquiring high relevance links to key target pages on your domain, which is the most important Google ranking factor.<br /></p>

                        <ul className='list-disc ml-5'>
                            <li className='mb-5 text-lg'>Painstaking focus on strategy to guarantee results</li>

                            <li className='mb-5 text-lg'>Cutting-edge link-building tactics and outreach techniques</li>

                            <li className='mb-5 text-lg'>Vigorous experiments and A/B testing</li>

                            <li className='mb-5 text-lg'>We use big data to analyze link building performance</li>
                        </ul>

                        <p className="mb-5 text-lg">We now serve a large number of clients in all sorts of challenging industries, primarily ambitious online businesses who want to start seriously driving their organic traffic. Our very holistic and case-by-case approach to each project means you’re getting significantly better value for money.”<br /></p>

                        <Link className="text-lg font-bold link text-[#00DA90]">Check out some of our client reviews here.<br /></Link>

                        <p className="mb-5 mt-5 text-lg">And if you're interested in joining our wonderful team, please <br /> email: careers@linkbuilder.io<br /></p>

                        <div className='flex justify-end items-center gap-5'>
                            <img src={stewartSignature} className='h-9' alt="" />

                            <div>
                                <p className="leading-tight font-medium text-md mb-0 | md:text-lg | 2xl:text-xl">Stewart Dunlop</p>
                                <p className="text-gray-500">Founder</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='flex justify-center pt-28'>
                    <img src={bannerTwo} alt="" className='lg:w-auto w-4/5' />
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

            <Footer />


            {
                mobileMenu && <MobileMenu />
            }
        </div>
    )
}

export default About