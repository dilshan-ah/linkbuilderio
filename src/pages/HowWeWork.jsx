import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Helmet } from 'react-helmet'
import { DataContext } from '../context/Context'
import MobileMenu from '../components/MobileMenu'
import analysis from '../assets/Analysis.jpg'
import strategy from '../assets/Strategy.jpg'
import prospecting from '../assets/Prospecting.jpg'
import outreach from '../assets/Outreach.jpg'
import relationship from '../assets/Relationship.jpg'
import results from '../assets/Results.jpg'
import Footer from '../components/Footer'

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const HowWeWork = () => {
  const { mobileMenu } = useContext(DataContext)


  return (
    <div className='relative'>
      <Helmet>
        <title>LinkBuilder.io | How we work</title>
      </Helmet>
      <Navbar />
      <div className='container mx-auto h-screen flex flex-col justify-center items-center'>
        <h2 class="mb-10 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl tracking-tighter font-medium !leading-normal	 green-highlight">
          How our <strong className='inline-block font-medium px-3 relative'>process</strong> works</h2>

        <p className="mb-5 text-lg text-center">We pride ourselves in taking a completely bespoke approach for every one of our link building <br />clients. That means our SEO analysts will methodically plan our strategy to ensure that we're <br /> building the right types of links for your business.</p>

        <p className="mb-5 text-lg text-center mt-16 "><strong>Here's how it works...</strong></p>
      </div>

      <div className='container mx-auto px-8'>


        <div className='grid grid-cols-2 mb-20'>
          <div className='flex justify-center items-start'>
            <h2 class="mb-10 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl tracking-tighter font-medium !leading-normal	 green-highlight">
              <strong className='inline-block font-medium px-3 relative'>Strategy</strong> Development</h2>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col items-start w-full pl-20'>
              <h2 class="mb-5 text-xl md:text-2xl lg:text-3xl 2xl:text-4xl tracking-tighter font-medium !leading-normal	 green-highlight">
                Building the roadmap</h2>

              <ul className="list-disc ml-5 mb-10">
                <li className="mb-2 text-lg">Determining optimal link-building strategies</li>
                <li className="mb-2 text-lg">Identifying linkable content assets</li>
                <li className="mb-2 text-lg">Developing our trustworthy outreach persona</li>
              </ul>
            </div>

            <img src={strategy} className='w-8/12' alt="" />
          </div>
        </div>

        <div className='grid grid-cols-2 mb-20'>
          <div className='flex justify-center items-start'>
            <h2 class="mb-10 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl tracking-tighter font-medium !leading-normal	 green-highlight">
              <strong className='inline-block font-medium px-3 relative'>Prospecting</strong> Targets</h2>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col items-start w-full pl-20'>
              <h2 class="mb-5 text-xl md:text-2xl lg:text-3xl 2xl:text-4xl tracking-tighter font-medium !leading-normal	 green-highlight">
                Who do we target?</h2>

              <ul className="list-disc ml-5 mb-10">
                <li className="mb-2 text-lg">Discovering link opportunities that nobody else can find</li>
                <li className="mb-2 text-lg">We painstakingly find the right people who can make our links reality</li>
                <li className="mb-2 text-lg">We find personalized data and details on every single link prospect</li>
              </ul>
            </div>

            <img src={prospecting} className='w-8/12' alt="" />
          </div>
        </div>

        <div className='grid grid-cols-2 mb-20'>
          <div className='flex justify-center items-start'>
            <h2 class="mb-10 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl tracking-tighter font-medium !leading-normal	 green-highlight">
              <strong className='inline-block font-medium px-3 relative'>Outreach</strong> Strategy</h2>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col items-start w-full pl-20'>
              <h2 class="mb-5 text-xl md:text-2xl lg:text-3xl 2xl:text-4xl tracking-tighter font-medium !leading-normal	 green-highlight">
                Launching outreach campaigns</h2>

              <ul className="list-disc ml-5 mb-10">
                <li className="mb-2 text-lg">We craft email templates and regularly A/B test</li>
                <li className="mb-2 text-lg">Our team launches multiple outreach campaigns to hedge our bets</li>
                <li className="mb-2 text-lg">We schedule regular follow-ups and schedule phone calls with decision makers</li>
              </ul>
            </div>

            <img src={outreach} className='w-8/12' alt="" />
          </div>
        </div>

        <div className='grid grid-cols-2 mb-20'>
          <div className='flex justify-center items-start'>
            <h2 class="mb-10 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl tracking-tighter font-medium !leading-normal	 green-highlight">
              <strong className='inline-block font-medium px-3 relative'>Relationship</strong> Development</h2>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col items-start w-full pl-20'>
              <h2 class="mb-5 text-xl md:text-2xl lg:text-3xl 2xl:text-4xl tracking-tighter font-medium !leading-normal	 green-highlight">
                It’s all about connecting</h2>

              <ul className="list-disc ml-5 mb-10">
                <li className="mb-2 text-lg">We build trust with partners and editors</li>
                <li className="mb-2 text-lg">We nurture long-lasting relationships</li>
                <li className="mb-2 text-lg">Ultimately we focus on earning links that make a difference to your rankings</li>
              </ul>
            </div>

            <img src={relationship} className='w-9/12' alt="" />
          </div>
        </div>

        <div className='grid grid-cols-2 mb-20'>
          <div className='flex justify-center items-start'>
            <h2 class="mb-10 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl tracking-tighter font-medium !leading-normal	 green-highlight">
              <strong className='inline-block font-medium px-3 relative'>Deliver</strong> Results</h2>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col items-start w-full pl-20'>
              <h2 class="mb-5 text-xl md:text-2xl lg:text-3xl 2xl:text-4xl tracking-tighter font-medium !leading-normal	 green-highlight">
                Tracking & optimisation</h2>

              <ul className="list-disc ml-5 mb-10">
                <li className="mb-2 text-lg">We track links and key metrics constantaly</li>
                <li className="mb-2 text-lg">Our team measures results and regularly benchmarks vs. competitors</li>
                <li className="mb-2 text-lg">We engage with our clients to bounce around ideas</li>
                <li className="mb-2 text-lg">Planning ahead is a key component to ensure we stay ahead of the competition</li>
              </ul>
            </div>

            <img src={results} className='w-8/12' alt="" />
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

export default HowWeWork