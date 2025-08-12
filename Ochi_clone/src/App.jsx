import React from 'react';
import Navbar from './Component/Navbar'
import './App.css';
import LandingPage from './Component/LandingPage';
import Marquee from './Component/Marquee';
import About from './Component/About';
import Eyes from './Component/Eyes';
import Featured from './Component/Featured';
import Cards from './Component/Cards'
import Footer from './Component/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return ( 
      <div  className="w-full min-h-screen  bg-zinc-900 text-white">
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
        <Cards />
        <Footer />
    </div>
  )
}

export default App
