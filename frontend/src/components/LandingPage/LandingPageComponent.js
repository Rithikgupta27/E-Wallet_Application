import React from 'react';
import NavbarLand from '../Header/NavbarLand';
import Scroller from '../Helper/Scroller';
import HeroSection from '../Helper/HeroSection';
import Footer from '../Footer/Footer';
import '../../App.css';


function LandingPageComponent() {
  return (
    <div >
      <NavbarLand/>    
      <Scroller/>
      <HeroSection/>
      <Footer />
    </div>
  );
}

export default LandingPageComponent;
