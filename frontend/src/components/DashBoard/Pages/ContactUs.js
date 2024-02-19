import React from 'react'
import '../../../App.css';
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
const ContactUs = () => {
  return (
    <div>
       <Navbar/>
       <h1 className='contact-us'>Contact Us</h1>
       <p className=''>If you have any questions or feedback, feel free to
        reach out to us at @_@ We're always here to help!</p>
      <p>e-Wallet Technology</p>
      <h2 id="our-project">Our Project</h2>
          
          <div class="container mt-5">
              <h2>Our Project</h2>
              <h3>e-Wallet Solution</h3>
              <p>Developed a Java e-Wallet application built using Java EE, Spring, React, MySQL. It provides users with a convenient platform to store and transfer funds securely. The project covers all phases of development, from initiation to closing, ensuring a successful implementation.</p>
          </div>
      
          
          <div class="container mt-5">
              <h2>Our Team</h2>
              <ul>
                  <li><a href="https://github.com/RajkumarKarnakar">Rajkumar Karnakar</a></li>
                  <li><a href="https://github.com/Rithikgupta27">Rithik Gupta</a></li>
                  <li><a href="https://github.com/rohilgupta">Rohil Gupta</a></li>
                  <li><a>Saatvat Gupta</a></li>
                  <li><a href="https://github.com/Orion658">Tejas Murkar</a></li>
                  <li>Vikram Mane</li>
              </ul>
          </div>
      
          
          <div class="container mt-5">
              <h2>Credits</h2>
              <p>...</p>
              
          </div>
      <Footer/>
    </div>
  )
}

export default ContactUs