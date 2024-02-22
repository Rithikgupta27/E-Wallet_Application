import React from 'react';
import './Footer.css';
//import { Button } from '../Helper/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        {/* <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p> */}
        {/* <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p> */}
        {/* <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div> */}
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
<<<<<<< HEAD
            <h2>About Us</h2>
            <Link to='/'>How it works</Link>
=======
          
            <Link to='/about-us'>About Us</Link>
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
<<<<<<< HEAD
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
=======
            
            <Link to='/contact-us'>Contact Us</Link>
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
<<<<<<< HEAD
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
=======
            
            <Link to='https://www.youtube.com/watch?v=_S6gQSu2pBA'>Video</Link>
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
<<<<<<< HEAD
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
=======
            <Link to='https://www.instagram.com'>Instagram</Link>
            <Link to='https://www.facebook.com/'>Facebook</Link>
            <Link to='https://www.youtube.com/'>Youtube</Link>
            <Link to='https://www.twitter.com/'>Twitter</Link>
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              ePay
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>ePay © 2024</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
<<<<<<< HEAD
              to='/'
=======
              to='https://www.facebook.com/'
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
<<<<<<< HEAD
              to='/'
=======
              to='https://www.instagram.com/'
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
<<<<<<< HEAD
              to='/'
=======
              to='https://www.youtube.com/'
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
<<<<<<< HEAD
              to='/'
=======
              to='https://www.twitter.com/'
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
<<<<<<< HEAD
              to='/'
=======
              to='https://www.linkedin.com/'
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
