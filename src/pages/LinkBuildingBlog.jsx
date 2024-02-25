import React from 'react'
import Navbar from '../components/Navbar'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import BlogCard from '../components/BlogCard'

const LinkBuildingBlog = () => {
    return (
        <div className='relative'>
            <Helmet>
                <title>LinkBuilder.io | Link Building Blog</title>
            </Helmet>

            <Navbar />

            <div className='w-full py-16 md:py-24 xl:py-32'>
                <h1 className="pt-12 sm:pt-20 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl green-highlight-two tracking-tighter font-medium leading-tight text-center">
                    The <strong className='bg-[#00DA90] px-4 pb-1 rounded-xl font-medium'>Ultimate</strong> Link Building Blog
                </h1>

                <div className="redactor text-gray-800 max-w-2xl mx-auto mt-10">
                    <p className="mb-5 text-lg text-center" style={{ fontFamily: 'Lato', }}>Expand your <strong>link-building knowledge</strong> with our in-depth insights and analysis.</p>
                </div>

            </div>

            <div className='container mx-auto px-8 pb-16'>
                <h2 className='mb-10 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl tracking-tighter font-medium !leading-normal'>Popular Articles</h2>

                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2'>

                    <div className='px-3 text-center flex flex-col items-center border-r'>
                        <Link>
                            <div className='p-10 hover:bg-gray-100 rounded-3xl text-start transition-all hover:-translate-y-1.5 duration-500'>
                                <h2 className='text-lg md:text-xl xl:text-2xl tracking-tighter font-medium leading-tight mb-5'>HARO Link Building Service: How We Land BIG Links for SEO Clients</h2>

                                <span className='px-2 py-1 border border-black rounded-lg'>10 min read</span>
                            </div>
                        </Link>
                    </div>

                    <div className='px-3 text-center flex flex-col items-center border-r'>
                        <Link>
                            <div className='p-10 hover:bg-gray-100 rounded-3xl text-start transition-all hover:-translate-y-1.5 duration-500'>
                                <h2 className='text-lg md:text-xl xl:text-2xl tracking-tighter font-medium leading-tight mb-5'>Link Building Pricing: What Does It Cost in 2024?</h2>

                                <span className='px-2 py-1 border border-black rounded-lg'>14 min read</span>
                            </div>
                        </Link>
                    </div>

                    <div className='px-3 text-center flex flex-col items-center border-r'>
                        <Link>
                            <div className='p-10 hover:bg-gray-100 rounded-3xl text-start transition-all hover:-translate-y-1.5 duration-500'>
                                <h2 className='text-lg md:text-xl xl:text-2xl tracking-tighter font-medium leading-tight mb-5'>Buy Backlinks The Right Way in 2024 [Essential Guide]</h2>

                                <span className='px-2 py-1 border border-black rounded-lg'>17 min read</span>
                            </div>
                        </Link>
                    </div>

                    <div className='px-3 text-center flex flex-col items-center'>
                        <Link>
                            <div className='p-10 hover:bg-gray-100 rounded-3xl text-start transition-all hover:-translate-y-1.5 duration-500'>
                                <h2 className='text-lg md:text-xl xl:text-2xl tracking-tighter font-medium leading-tight mb-5'>Landing High Authority Backlinks in 2024</h2>

                                <span className='px-2 py-1 border border-black rounded-lg'>12 min read</span>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>


            <div className='container mx-auto px-8 pb-16'>
                <div className='w-full p-10 mb-20 rounded-3xl bg-[#00DA90] flex gap-5'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl tracking-tighter font-medium !leading-normal'>Filter by</h2>

                    <button className="button-two capitalize py-1.5 px-4 !font-semibold flex items-center">
                        View all
                    </button>

                    <button className="button-one capitalize py-1.5 px-4 !font-semibold flex items-center">
                        Thought Leadership
                    </button>

                    <button className="button-one capitalize py-1.5 px-4 !font-semibold flex items-center">
                        Strategy
                    </button>

                    <button className="button-one capitalize py-1.5 px-4 !font-semibold flex items-center">
                        Services
                    </button>

                    <button className="button-one capitalize py-1.5 px-4 !font-semibold flex items-center">
                        Niches
                    </button>
                </div>


                <div className='grid grid-cols-3 gap-10'>
                    <BlogCard/>

                    <BlogCard/>

                    <BlogCard/>

                    <BlogCard/>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default LinkBuildingBlog