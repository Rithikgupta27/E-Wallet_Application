import React from 'react';
import '../../App.css';
import Cards from '../Cards';
// import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Scroller from '../Scroller';

function Home() {
  return (
    <div style={{backgroundColor:"grey"}}>
    <Navbar />
    <Scroller/>
      {/* <HeroSection /> */}
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
