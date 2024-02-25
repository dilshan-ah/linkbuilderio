import React from 'react'

const MobileMenu = () => {
    return (
        <div className='w-screen bg-red-50  h-screen fixed top-0 left-0 bg-white z-40 flex items-center justify-center'>
            <ul className='text-center'>
                <li>
                    <a href="#" className='pb-0.5 font-semibold menu-anime text-2xl mb-3' style={{ fontFamily: 'Lato', }}>How we work</a>
                </li>

                <li>
                    <a href="#" className='pb-0.5 font-semibold menu-anime text-2xl mb-3' style={{ fontFamily: 'Lato', }}>About Us</a>
                </li>

                <li>
                    <a href="#" className='pb-0.5 font-semibold menu-anime text-2xl mb-3' style={{ fontFamily: 'Lato', }}>Pricing</a>
                </li>

                <li>
                    <a href="#" className='pb-0.5 font-semibold menu-anime text-2xl mb-3' style={{ fontFamily: 'Lato', }}>Case Studies</a>
                </li>

                <li>
                    <a href="#" className='pb-0.5 font-semibold menu-anime text-2xl mb-3' style={{ fontFamily: 'Lato', }}>
Link Building Blog</a>
                </li>
            </ul>
        </div>
    )
}

export default MobileMenu