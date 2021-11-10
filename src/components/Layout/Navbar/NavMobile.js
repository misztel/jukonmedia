import React, { useState } from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';
import NavLinks from './NavLinks/NavLinks';
import NavToggler from './NavToggler';

import Logo from '../../../images/jukonmedia_logo_v2.png';

const StyledMobileNav = styled.header`
  display: flex;
  width: 100%;
  padding: 10px;

  @media ${props => props.theme.media.fablet} {
    display: none;
  }
`;

const StyledHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledNav = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100vh;
  padding: 75px 25px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  transition: all 0.3s ease-in-out;
  opacity: ${props => (props.toggled ? 1 : 0)};
  visibility: ${props => (props.toggled ? 'visible' : 'hidden')};
  z-index: 11;

  @media ${props => props.theme.media.fablet} {
    display: none;
  }
`;

const StyledLogo = styled.img`
  width: 250px;
  z-index: 15;
`;

const NavMobile = () => {
  const [toggled, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggled);
  };

  return (
    <StyledMobileNav>
      <StyledHeader>
        <Link to="/" style={{ zIndex: 15 }}>
          <StyledLogo src={Logo} alt={"JukonMedia Logo"} />
        </Link>
        <NavToggler toggled={toggled} clicked={() => toggleHandler()} />
      </StyledHeader>
      <StyledNav toggled={toggled}>
        <NavLinks clicked={() => toggleHandler()} />
      </StyledNav>
    </StyledMobileNav>
  );
};

export default NavMobile;
