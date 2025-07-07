import React from 'react'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import Contact from './components/Contanct'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <AboutUs/>
      <Contact/>
      <Footer/>
    </div>
  )
}

