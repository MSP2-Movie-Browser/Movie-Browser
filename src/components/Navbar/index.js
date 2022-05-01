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
          {/* <NavLink to='/about' activeStyle>
            About
          </NavLink> */}
          <NavLink to='/favorites' activeStyle>
            Favorites
          </NavLink>
          <NavLink to='/my-reviews' activeStyle>
            My Reviews
          </NavLink>
          <NavLink to='/movie-search' activeStyle>
            Movie Search
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;