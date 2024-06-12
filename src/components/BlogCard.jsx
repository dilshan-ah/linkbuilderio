import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
    return (
        <div className="card rounded-3xl bg-white">
            <figure>
                <Link to={`/linkbuilding-blog/${blog?.id}`}>
                    <img src={`http://127.0.0.1:8000/${blog?.thumbnail}`} alt="Shoes" />
                </Link>
            </figure>
            <div className="card-body">
                <Link to={`/linkbuilding-blog/${blog?.id}`}>
                    <h2 className="text-lg md:text-xl xl:text-2xl green-highlight tracking-tighter font-medium mb-5 leading-tight">
                        {blog?.title}
                    </h2>
                </Link>


                <div className='border border-gray-900 rounded-lg py-1 px-2 w-max text-gray-900 leading-none text-sm lg:text-base font-medium'>{blog?.reading_duration} min read</div>
                
            </div>
        </div>
    )
}

export default BlogCard