import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';


import { FreeMode, Navigation } from 'swiper/modules';
import BlogCard from './BlogCard';

const BlogSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3.2}
        spaceBetween={40}
        freeMode={true}
        grabCursor={true}
        navigation={true}
        breakpoints={{
          
          0: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2.2,
          },
          1280: {
            slidesPerView: 3.2,
          },
        }}
        modules={[FreeMode, Navigation]}
        className="mySwiper pl-20"
      >
        <SwiperSlide>
            <BlogCard/>
        </SwiperSlide>
        <SwiperSlide>
            <BlogCard/>
        </SwiperSlide>
        <SwiperSlide>
            <BlogCard/>
        </SwiperSlide>
        <SwiperSlide>
            <BlogCard/>
        </SwiperSlide>
        <SwiperSlide>
            <BlogCard/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default BlogSlider