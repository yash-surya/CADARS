// Nav.js

import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #333;
  color: white;
  padding: 15px 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  a {
    color: white;
    text-decoration: none;
    font-size: 1.5em;
    font-weight: bold;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
`;

const NavLinkItem = styled.li`
  margin: 0 15px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <Header>
      <Nav>
        <Logo>
          <a href="#">Your Logo</a>
        </Logo>
        <NavLinks>
          <NavLinkItem><NavLink href="#">Home</NavLink></NavLinkItem>
          <NavLinkItem><NavLink href="#">About</NavLink></NavLinkItem>
          <NavLinkItem><NavLink href="#">Services</NavLink></NavLinkItem>
          <NavLinkItem><NavLink href="#">Contact</NavLink></NavLinkItem>
        </NavLinks>
      </Nav>
    </Header>
  );
}

export default Navbar;
