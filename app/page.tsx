import React from 'react'
import Nav from "./components/Nav"
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import MyPortfolio from './components/MyPortfolio'
import CoreDesign from './components/CoreDesign'
import Testimonials from './components/Testimonials'
import DesignIns from './components/DesignInsp'
import GetInTouch from './components/GetInTouch'
import Foot from './components/Foot'

const Home  = () => {
  return (
    <main> 
      <Nav />
      <AboutMe />
      <Services />
      <MyPortfolio />
      <CoreDesign />
      <Testimonials />
      <DesignIns />
      <GetInTouch />
      <Foot />
      

      
    </main>
    
  )
}

export default Home 