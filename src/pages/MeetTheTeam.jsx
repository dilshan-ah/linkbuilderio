import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileMenu from '../components/MobileMenu'
import { DataContext } from '../context/Context'
import TeamCard from '../components/TeamCard'
import { Link } from 'react-router-dom'
import bannerTwo from '../assets/home-3D.webp'
import stewartSignature from '../assets/stewart-signature.webp'
import BlogSlider from '../components/BlogSlider'

const MeetTheTeam = () => {

    const { mobileMenu } = useContext(DataContext)

    return (
        <div className='relative'>
            <Helmet>
                <title>LinkBuilder.io | Meet the team</title>
            </Helmet>

            <Navbar />

            <div className='container mx-auto h-screen flex flex-col justify-center items-center'>
                <h2 class="mb-10 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl tracking-tighter font-medium !leading-normal	 green-highlight">
                    Meet the <strong className='inline-block font-medium px-3 relative'>Team</strong></h2>

                <p className="mb-5 text-lg text-center">See all the talented people working on our link building campaigns 😎</p>
            </div>

            <div className='container mx-auto px-8 grid grid-cols-3 gap-20 mb-20'>
                <Link to='/about/team-details'>
                    <TeamCard />
                </Link>
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

export default MeetTheTeam