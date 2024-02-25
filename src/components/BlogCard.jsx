import React from 'react'

const BlogCard = () => {
    return (
        <div className="card rounded-3xl bg-white">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-lg md:text-xl xl:text-2xl green-highlight tracking-tighter font-medium mb-5 leading-tight">
                    Backlinks Indexing: 7 Strategies To Index Backlinks Faster
                </h2>

                <div className='border border-gray-900 rounded-lg py-1 px-2 w-max text-gray-900 leading-none text-sm lg:text-base font-medium'>21 min read</div>
            </div>
        </div>
    )
}

export default BlogCard