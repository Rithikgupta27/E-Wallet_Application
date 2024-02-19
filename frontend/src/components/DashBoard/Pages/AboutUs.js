import React from 'react';
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  const titleStyle = {
    color: '#d63384', 
    fontSize: '30px',
    textAlign: 'center',
    marginTop: '2rem'
  };
  
  const subtitleStyle = {
    color: '#6610f2', 
    fontSize: '20px',
    textAlign: 'center',
    marginTop: '1rem'
  };

  const paragraphStyle = {
    fontSize: '16px',
    textAlign: 'justify',
    margin: '1rem 0'
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: '#f8f9fa' }}>
      <Navbar/>
      <div className="row">
        <div className="col-12">
          <h1 style={titleStyle}>About Us</h1>
        </div>
      </div>
      <section style={subtitleStyle}>
        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6 col-xl-7">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                  <h2 style={titleStyle} className="mb-3">Who Are We?</h2>
                  <p style={paragraphStyle}>We are a dedicated team committed to providing you with the best e-wallet experience. Our application is designed to make your financial transactions seamless and secure.</p>
                  <p style={paragraphStyle}>As a fast-growing company, we've never lost sight of our core values. We believe in collaboration, innovation, and customer satisfaction. Always striving to improve our products and services.</p>                              
                  <div className="me-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l-.34-.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l-.311.169a1.464 1.464 0 0 1 2.105.872l-.1.34c.413 1.4 2.397 1.4 2.81 0l-.1-.34a1.464 1.464 0 0 1 2.105-.872l-.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l-.34-.1c1.4-.413-1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l-.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg>
                  </div>
                  <div>
                    <h2 style={titleStyle} className="h4 mb-3">What We Provide?</h2>
                    <p style={paragraphStyle} className="lead fs-4 text-secondary mb-3">We craft a digital platform which provide:</p>
                    <ul style={paragraphStyle} className="text-info">
                      <li>Hassle free and secure transactions.</li>
                      <li>Benefit of saving Payment Gateway charges.</li>
                      <li>Manage account online and top up online.</li>
                      <li>Dependency on a specific bank is reduced, as when any of the provided banks go offline, you can still do transactions from your eWallet account.</li>
                      <li>User Authentication: ePay eWallet users will be verified and authenticated through their Mobile Number in an Online Verification Process.</li>
                      <li>Complete History: User is provided with Transaction history</li>
                      <li>Login to ePay with your mobile number and password.</li>
                    </ul>  
                  </div>                              
                </div>                 
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default AboutUs
