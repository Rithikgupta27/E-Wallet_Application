import React from 'react'
  import Navbar from '../../Header/Navbar'
  import Footer from '../../Footer/Footer'

  const AboutUs = () => {
    return (
      <div>
        <Navbar/>
        <h1 className='aboutus'>About Us</h1>
        <section class="py-3 py-md-5">
    
        <div class="container">
          <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
              <div class="col-12 col-lg-6 col-xl-5">
                  <img class="img-fluid rounded"  src="../../../../public/images" alt="About Us Image" />
              </div>
              <div class="col-12 col-lg-6 col-xl-7">
                  <div class="row justify-content-xl-center">
                      <div class="col-12 col-xl-11">
                          <h2 class="mb-3">Who Are We?</h2>
                          <p class="lead fs-4 text-secondary mb-3"><p>We are a dedicated team committed to providing you with the
            best e-wallet experience. Our application is designed to make your
            financial transactions seamless and secure.</p></p>
                          <p class="mb-5">As a fast-growing company, we've never lost sight of our core values. We believe in collaboration, innovation, and customer satisfaction. Always striving to improve our products and services.</p>
                          <div class="row gy-4 gy-md-0 gx-xxl-5X">
                              <div class="col-12 col-md-6">
                                  <div class="d-flex">
                                      <div class="me-4 text-primary">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                                              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                                          </svg>
                                      </div>
                                      <div>
                                          <h2 class="h4 mb-3">What We Provide?</h2>
                                          <p class="text-secondary mb-0">We craft a digital platform which provide: </p>
                                        <li>Hassle free and secure transactions.</li>
          <li>Benefit of saving Payment Gateway charges.</li>
          <li>Manage account online and top up online.</li>
          <li>Dependency on a specific bank is reduced, as when any of the
            provided banks go offline, you can still do transactions from your
            eWallet account.</li>
          <ul>
            <li>User Authentication: ePay eWallet users will be verified and
              authenticated through their Mobile Number in an Online Verification
              Process.</li>
            <li>Complete History: User is provided with Transaction
              history</li>
            <li>Login to ePay with your mobile number and password.</li>
          </ul>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-12 col-md-6">
                                  <div class="d-flex">
                                      <div class="me-4 text-primary">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16" />
                                              <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6" />

                              </div>
                          </div>
                      </div>
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
