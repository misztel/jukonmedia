import React, { useState } from 'react';
import styled from 'styled-components';

import NavLinks from './NavLinks/NavLinks';
import NavToggler from './NavToggler';
import ThemeToggler from '../../Theme/ThemeToggler';

import Logo from '../../../images/logocompany.svg';

const StyledMobileNav = styled.div`
  display: none;
  width: 100%;
  padding: 10px;

  @media ${props => props.theme.media.fablet} {
    display: flex;
  }
`;

const StyledHeader = styled.div`
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
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.background};
  transition: all 0.3s ease-in-out;
  opacity: ${props => props.toggled ? 1 : 0};
  visibility: ${props => props.toggled ? 'visible' : 'hidden'};

  @media ${props => props.theme.media.fablet} {
    display: flex;
  }
`;

const StyledLogo = styled.img`
  width: 200px;
  z-index: 10;
`;

const NavMobile = () => {

  const [toggled, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggled);
  }

  return (
    <StyledMobileNav>
      <StyledHeader>
        <StyledLogo src={Logo} />
        <NavToggler toggled={toggled} clicked={() => toggleHandler()} />
      </StyledHeader>
      <StyledNav toggled={toggled}>
        <NavLinks />
        x
        <ThemeToggler />
      </StyledNav>
    </StyledMobileNav>
  );
};

export default NavMobile;
