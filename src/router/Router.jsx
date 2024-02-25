import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import HowWeWork from '../pages/HowWeWork'
import About from '../pages/About'
import CaseStudies from '../pages/CaseStudies'
import Pricing from '../pages/Pricing'
import LinkBuildingBlog from '../pages/LinkBuildingBlog'
import Contact from '../pages/Contact'
import MeetTheTeam from '../pages/MeetTheTeam'
import TeamDetails from '../pages/TeamDetails'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/how-we-work' element={<HowWeWork/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/case-studies' element={<CaseStudies/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/linkbuilding-blog' element={<LinkBuildingBlog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/meet-the-team' element={<MeetTheTeam/>}/>
        <Route path='/about/team-details' element={<TeamDetails/>}/>
    </Routes>
  )
}

export default Router