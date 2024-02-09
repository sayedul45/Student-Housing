import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './navbar.css';
import Dropdown from './Dropdown';
import NavigationDesktop from './NavigationDesktop';
import navLinksData from './Data.json';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }
  );

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };

  return (
    <>
      <nav  >
        {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          EPIC
          <i class='fab fa-firstdraft' />
        </Link> */}
        <div className="navbar-logo">
          <img src="/Logo.png" alt="Image is Loading" />
        </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <i className='fa fa-home' /> Home
            </Link>
          </li>
          <li
            className='nav-item'
            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
            // onMouseEnter={() => setDropdown(true)}
            // onMouseLeave={() => setDropdown(false)}
          >
            <Link
              // to='/rooms'
              className='nav-links'
            // onClick={closeMobileMenu}
            >
              <i className='fa fa-bed' /> Rooms <i className='fas fa-caret-down' />
            </Link>
            <ul className="submenu">
              <li className='line'><Link to="#">Residential<i class="fa-solid fa-angles-right"></i></Link>
                <ul className="submenu2">
                  <li><Link to='/rooms/bsmrh' onClick={closeMobileMenu}>Bangabandhu Hall</Link></li>
                  <li><Link to="/rooms/knih" onClick={closeMobileMenu}>Nazrul Hall</Link></li>
                  <li><Link to="/rooms/ddh" onClick={closeMobileMenu}>Datta Hall</Link></li>
                  <li><Link to="/rooms/nfch" onClick={closeMobileMenu}>Faizunnisa Hall</Link></li>
                  <li><Link to="/rooms/shh" onClick={closeMobileMenu}>Sheikh Hasina Hall</Link></li>
                </ul>
              </li>
              <li className='line'><Link to="#">Non Residential<i class="fa-solid fa-angles-right"></i></Link>
                <ul className="submenu2">
                  <li><Link to="/rooms/ca" onClick={closeMobileMenu}>Campus Area</Link></li>
                  <li><Link to="/rooms/ic" onClick={closeMobileMenu}>Inside City</Link></li>
                </ul>
              </li>
            </ul>
            {/* <NavigationDesktop navLinksData={navLinksData} /> */}
            {/* {dropdown && <Dropdown />} */}
          </li>
          <li className='nav-item'>
            <Link
              to='/fees'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <i className='fa fa-usd' /> Fees
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/apply-now'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <i className='fa fa-address-card' /> Apply Now
            </Link>
          </li>
          <li className="search-box">
            <form action="/">
              <input type="text" name='search' id='search' placeholder='search' />
              <button type='submit' className='buttn'><i className='fa fa-search'></i></button>
            </form>
          </li>
          <li className=''>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;