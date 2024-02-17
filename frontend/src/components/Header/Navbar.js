import React, { useState, useEffect } from 'react';
import { Button } from '../Helper/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ButtonProfile } from '../Helper/ButtonProfile';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ePay
            {/* <i class='fab fa-typo3' /> */}
           
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to='/profile'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>
          </ul>
          {button && <ButtonProfile buttonStyle='btn--outline'>Profile</ButtonProfile>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
