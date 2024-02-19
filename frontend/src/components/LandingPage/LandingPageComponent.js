import React from 'react';
import NavbarLand from '../Header/NavbarLand';
// import Scroller from '../Helper/Scroller';
import HeroSection from '../Helper/HeroSection';
import Footer from '../Footer/Footer';
import '../../App.css';
// import Cards from '../Helper/Cards';
import CardLanding from './CardLanding';


function LandingPageComponent() {
  return (
    <div style={{backgroundColor:''}}>
      <NavbarLand/>    
      {/* <Scroller/> */}
      <HeroSection/>
      <div className='flexed'>
         <div>
           <CardLanding link="another-image-url.jpg" iname="about-us" title="ABOUT US"/>
        </div>
        <div>
           <CardLanding link="another-image-url.jpg" iname="contact-us" title="CONTACT US"/>
        </div>
        <div>
           <CardLanding link="another-image-url.jpg" iname="blogs" title="BLOGS"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPageComponent;
