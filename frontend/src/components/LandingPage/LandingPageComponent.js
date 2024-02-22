import React from 'react';
import NavbarLand from '../Header/NavbarLand';
// import Scroller from '../Helper/Scroller';
import HeroSection from '../Helper/HeroSection';
import Footer from '../Footer/Footer';
import '../../App.css';
<<<<<<< HEAD
// import Cards from '../Helper/Cards';
import CardLanding from './CardLanding';
=======
import LandingCard from '../Helper/LandingCard';
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f


function LandingPageComponent() {
  return (
    <div style={{backgroundColor:''}}>
      <NavbarLand/>    
      {/* <Scroller/> */}
      <HeroSection/>
<<<<<<< HEAD
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
=======
        <LandingCard/>
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f
      <Footer />
    </div>
  );
}

export default LandingPageComponent;
