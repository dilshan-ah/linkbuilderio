import React from 'react'
import teamImage from '../assets/Stewart_Dunlop.webp'
import { FaLinkedinIn } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const TeamCard = () => {
    return (
        <div className='flex flex-col justify-center'>
            <img src={teamImage} alt="" className='mb-5' />

            <div className='flex'>
                <div className='team-details flex-1'>
                    <h2 className='font-medium leading-none mb-1 text-lg md:text-xl xl:text-2xl'>Stewart</h2>
                    <p className='text-gray-800 text-base md:text-lg xl:text-xl'>Chief Link Building Strategist</p>
                </div>

                <div className='flex-none'>
                    <Link>
                        <div className='p-3 border-2 border-black rounded-md hover:bg-[#00DA90] hover:border-[#00DA90] transition-all duration-300'>
                            <FaLinkedinIn />
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default TeamCard