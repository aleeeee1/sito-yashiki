import React, { useState, useEffect } from 'react';
import { Button } from './Button';

import { Link } from 'react-router-dom';
import './Navbar.css';

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
          <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
            <div>
              <img src="images/LOGO-YASHIKI-orizzontale.png" alt="YASHIKI" width="180" height="60" />
            </div>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/pranzo'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Men&ugrave; pranzo
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/cena'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Men&ugrave; cena
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/cena'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Takeaway
              </Link>
            </li>

            <li>
              <Link
                to='/info'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Info
              </Link>
            </li>
          </ul>
          {button && <Button linkTo="/info" buttonStyle='btn--outline'>Info</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
