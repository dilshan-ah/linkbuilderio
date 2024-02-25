import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import brandone from '../assets/brandone.png'
import brandtwo from '../assets/brandtwo.svg'
import brandthree from '../assets/brandthree.svg'
import brandfour from '../assets/brandfour.svg'

import { FreeMode, Autoplay } from 'swiper/modules';

// import required modules
import { Pagination } from 'swiper/modules';

export default function BrandSlider() {
   
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={100}
        freeMode={true}
        loop={true}
        
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        breakpoints={{
          
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },

          1440: {
            slidesPerView: 5,
          },
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={brandone} alt="" className='w-20 ' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brandtwo} alt="" className='w-36' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brandthree} alt="" className='w-36' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brandfour} alt="" className='w-36' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brandone} alt="" className='w-20' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brandtwo} alt="" className='w-36' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brandthree} alt="" className='w-36' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brandfour} alt="" className='w-36' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
