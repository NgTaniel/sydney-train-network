import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
//   NavBtn,
//   NavBtnLink,
} from './NavbarElements';
  
import './main.css'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/' activeStyle>
            Welcome & About
          </NavLink>
          <NavLink to='/citycircle' activeStyle>
            City Circle
          </NavLink>
          <NavLink to='/central' activeStyle>
            Central
          </NavLink>
          <NavLink to='/t1' activeStyle>
            T1
          </NavLink>
          <NavLink to='/t2' activeStyle>
            T2
          </NavLink>
          <NavLink to='/t3' activeStyle>
            T3
          </NavLink>
          <NavLink to='/t4' activeStyle>
            T4
          </NavLink>
          <NavLink to='/t5' activeStyle>
            T5
          </NavLink>
          <NavLink to='/t6' activeStyle>
            T6
          </NavLink>
          <NavLink to='/t7' activeStyle>
            T7
          </NavLink>
          <NavLink to='/t8' activeStyle>
            T8
          </NavLink>
          <NavLink to='/t9' activeStyle>
            T9
          </NavLink>
          {/* <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/events' activeStyle>
            Events
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Annual Report
          </NavLink>
          <NavLink to='/team' activeStyle>
            Teams
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};
  
export default Navbar;