import React from 'react';
import styled from 'styled-components';

import NavLinks from './NavLinks/NavLinks';
import ThemeToggler from '../../Theme/ThemeToggler';

import Logo from '../../../images/logocompany.svg';

const StyledNavDesktop = styled.header`
  position: relative;
  left: 0px;
  top: 0px;
  width: 100%;
  padding: 20px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${props => props.theme.media.fablet} {
    display: none;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

const StyledLogo = styled.img`
  width: 200px;
`;

const NavDesktop = () => {
  return (
    <StyledNavDesktop>
      <StyledLogo src={Logo} />
      <StyledNav>
        <NavLinks />
        <ThemeToggler />
      </StyledNav>
    </StyledNavDesktop>
  );
};

export default NavDesktop;
