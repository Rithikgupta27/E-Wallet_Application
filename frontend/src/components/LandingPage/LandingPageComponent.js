import React from 'react';
import '../../App.css';
import NavbarLand from '../Header/NavbarLand';
import Scroller from '../Helper/Scroller';
// import Cards from '../Helper/Cards';
import HeroSection from '../Helper/HeroSection';
import Footer from '../Footer/Footer';


function LandingPageComponent() {
  return (
    <div >
      <NavbarLand/>
      
      <Scroller/>
      {/* <h2>hellloooo</h2> */}
      <HeroSection/>
      {/* <Cards /> */}
      <Footer />
    </div>
  );
}

export default LandingPageComponent;
