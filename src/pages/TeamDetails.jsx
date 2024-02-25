import React, { useContext } from 'react'
import { DataContext } from '../context/Context'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileMenu from '../components/MobileMenu'
import { FaLinkedinIn } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import BlogSlider from '../components/BlogSlider'
import teamImage from '../assets/Stewart_Dunlop.webp'

const TeamDetails = () => {
    const { mobileMenu } = useContext(DataContext)
    return (
        <div className='relative'>
            <Helmet>
                <title>LinkBuilder.io | Steward</title>
            </Helmet>

            <Navbar />

            <div className='container mx-auto px-8 lg:grid lg:grid-cols-2 flex flex-col-reverse pt-52 pb-32'>
                <div>
                    <h2 class="mb-10 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl tracking-tighter font-medium !leading-normal	 green-highlight">
                        Meet <strong className='inline-block font-medium px-3 relative'>Stewart</strong></h2>

                    <p className="mb-5 text-lg">Stewart is the founder and chief link building strategist at LinkBuilderio. He has over 11 years of experience in the link building industry, and 14 years of experience in online marketing.</p>

                    <p className="mb-5 text-lg">He's contributed over 70 thought leadership articles and has been featured on dozens of industry-leading publications like Ahrefs, Search Engine Journal, Authority Hacker and more.</p>

                    <p className="mb-5 text-lg">In addition his company, LinkBuilder.io, has frequently been mentioned across industry-leading publications as one of the top link building agencies in the World.</p>

                    <p className="mb-5 text-lg">His passion lies in developing cutting-edge link building strategies and constantly making sure the company are amongst the World's leading link builders.</p>

                    <p className="mb-5 text-lg">Stewart founded LinkBuilder.io in 2016 after noticing a gap in the market for high-quality outreach at reasonable pricing points where many SEO agencies struggle.</p>

                    <Link>
                        <div className='p-3 border-2 border-black rounded-md hover:bg-[#00DA90] hover:border-[#00DA90] transition-all duration-300 inline-block'>
                            <FaLinkedinIn />
                        </div>
                    </Link>
                </div>

                <div>
                    <img src={teamImage} className='w-full mb-28' alt="" />
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

export default TeamDetails