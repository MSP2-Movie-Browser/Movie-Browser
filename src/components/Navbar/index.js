import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/war_zone.jpg')} alt='logo' width="500" height="70" />
        </NavLink>
        <NavLink to='/'>
            Home
          </NavLink>
        <Bars />
        <NavMenu>
          {/* <NavLink to='/about' activestyle='true'>
            About
          </NavLink> */}
          <NavLink to='/favorites' activestyle='true'>
            Favorites
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;