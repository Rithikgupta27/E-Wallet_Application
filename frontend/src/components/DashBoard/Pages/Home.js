import React from 'react';
import '../../../App.css';
import Cards from '../../Helper/Cards';
// import HeroSection from '../HeroSection';
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'

function Home() {
  return (
    <div style={{backgroundColor:"grey"}}>
    <Navbar />
    <Cards />
    <Footer />
    </div>
  );
}

export default Home;
