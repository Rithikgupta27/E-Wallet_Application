import React from 'react';
import '../../../App.css';
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'

const ContactUs = () => {
  const titleStyle = {
    color: 'turquoise', 
    fontSize: '30px',
    textAlign: 'justify',
    marginTop: '2rem'
  };
  
  const subtitleStyle = {
    color: '#6610f2', 
    fontSize: '20px',
    textAlign: 'justify',
    marginTop: '1rem'
  };

  const paragraphStyle = {
    fontSize: '16px',
    textAlign: 'justify',
    margin: '1rem 0'
  };

  return (
    <div>
       <Navbar/>
       <div className="container mt-5"><h1 style={titleStyle} className='contact-us'>Contact Us</h1>
       <p style={paragraphStyle}>If you have any questions or feedback, feel free to
        reach out to us at <a href='https://github.com/rohilgupta/E-Wallet_application'> epay@helpdesk.org</a>. We're always here to help!</p>
      <p style={subtitleStyle}>e-Wallet Technology</p></div>
          
          <div className="container mt-5">
              <h2 style={titleStyle}>Our Project</h2>
              <h3 style={subtitleStyle}>e-Wallet Solution</h3>
              <p style={paragraphStyle}>Developed a Java e-Wallet application built using Java EE, Spring, React, MySQL. It provides users with a convenient platform to store and transfer funds securely. The project covers all phases of development, from initiation to closing, ensuring a successful implementation.</p>
          </div>
      
          
          <div className="container mt-5">
              <h2 style={titleStyle}>Our Team</h2>
              <ul>
                  <li><a href="https://github.com/RajkumarKarnakar">Rajkumar Karnakar</a></li>
                  <li><a href="https://github.com/Rithikgupta27">Rithik Gupta</a></li>
                  <li><a href="https://github.com/rohilgupta">Rohil Gupta</a></li>
                  <li><a>Saatvat Gupta</a></li>
                  <li><a href="https://github.com/Orion658">Tejas Murkar</a></li>
                  <li>Vikram Mane</li>
              </ul>
          </div>
      
          
          <div className="container mt-5">
              <h2 style={titleStyle}>Credits</h2>
              <p style={paragraphStyle}>...</p>
              
          </div>
      <Footer/>
    </div>
  )
}

export default ContactUs
