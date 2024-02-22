import React from 'react';
import '../../../App.css';
import Cards from '../../Helper/Cards';
// import HeroSection from '../HeroSection';
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
<<<<<<< HEAD

function Home() {
  return (
    <div style={{backgroundColor:"grey"}}>
    <Navbar />
=======
import NavbarLand from '../../Header/NavbarLand';

function Home() {
  const isLoggedIn = localStorage.getItem("uniqueId") !== null;
  return (
    <div style={{backgroundColor:"grey"}}>
      {isLoggedIn ? <Navbar /> : <NavbarLand />} 
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f
    <Cards />
    <Footer />
    </div>
  );
}

export default Home;
