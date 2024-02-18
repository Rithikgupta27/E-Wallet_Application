import React from 'react';
import '../../App.css';
import NavbarLand from '../Header/NavbarLand';
import Scroller from '../Helper/Scroller';
// import Cards from '../Helper/Cards';
import HeroSection from '../Helper/HeroSection';
import Footer from '../Footer/Footer';
import LandingPageCards from '../Helper/LandingPageCards';


function LandingPageComponent() {
  return (
    <div >
      <NavbarLand/>
      
      <Scroller/>
      {/* <h2>hellloooo</h2> */}
      <LandingPageCards/>
      {/* <HeroSection/> */}
      {/* <Cards /> */}
      <Footer />
    </div>
  );
}

export default LandingPageComponent;
