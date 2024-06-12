import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { DataContext } from '../context/Context'
import Footer from '../components/Footer'
import BlogSlider from '../components/BlogSlider'

const SingleBlog = () => {

    const { id } = useParams()

    const { allBlog } = useContext(DataContext)

    const singleBlog = allBlog?.find(blog => blog.id == id);

    console.log(singleBlog);

    return (
        <>
            <Helmet>
                <title>LinkBuilder.io | Simple, Transparent Pricing</title>
            </Helmet>

            <Navbar />

            <div className='container mx-auto px-8 py-16 md:py-24 xl:py-32'>
                <div className='flex md:flex-row flex-col-reverse'>
                    <div className='flex-1 flex flex-col justify-center'>
                        <div className='border border-gray-900 rounded-lg py-1 px-2 w-max text-gray-900 leading-none text-sm lg:text-base font-medium mb-3'>{singleBlog?.reading_duration} min read</div>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl green-highlight-two tracking-tighter font-medium leading-tight mb-5">
                            {singleBlog?.title}
                        </h1>

                        <h2 class="font-medium leading-none mb-1 text-lg md:text-xl xl:text-2xl">{singleBlog?.user.name}</h2>
                    </div>

                    <div className='flex-1 flex md:justify-end justify-center'>
                        <img src={`http://127.0.0.1:8000/${singleBlog?.thumbnail}`} alt="" />
                        
                    </div>

                </div>
            </div>

            <div className='container mx-auto px-8 py-8'>
                <div className='grid md:grid-cols-3'>
                    <div>
                        <div className='w-11/12	shadow-2xl rounded-3xl p-10 mb-10'>
                        <h3 className='font-semijkl;\97
                        bold text-3xl mb-5'>Contents</h3>
                            <ol className=' list-decimal'>
                                {singleBlog?.contents.map((content) => (
                                    <li className='mb-4'>
                                        <a href={`#content${content.id}`} className='font-semibold capitalize'>{content.content_title}</a>
                                    </li>
                                ))}

                            </ol>
                        </div>
                    </div>

                    <div>
                        {singleBlog?.contents.map((content) => (
                            <div id={`content${content.id}`}>
                                <div dangerouslySetInnerHTML={{ __html: content.content_details }} />
                                <h3 className='text-4xl font-bold capitalize mb-10 mt-5'>{content.content_title}</h3>
                            </div>
                        ))}
                    </div>

                    <div>
                        <div className='bg-[#00da90] p-8 rounded-2xl'>
                            <h2 className='font-semibold text-3xl capitalize mb-4'>Want to drive insane SEO performance?</h2>

                            <button class="button-two capitalize py-1.5 px-4 !font-semibold flex items-center">📞 Book a call</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full bg-gray-100'>
                <div className='py-12 md:py-24 xl:py-32 mx-auto'>
                    <div className='flex items-center w-full container px-8 mx-auto'>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl green-highlight-two tracking-tighter font-medium leading-tight flex-1">Articles you’ll
                            <strong className="bg-[#00DA90] px-4 pb-1 ms-3 rounded-xl font-medium text-black">love</strong></h2>

                        <button class="button-two capitalize py-1.5 px-4 !font-semibold flex items-center justify-center w-max">View all Blog Posts</button>
                    </div>

                    <div className='lg:pt-20 pt-12'>
                        <BlogSlider />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default SingleBlog