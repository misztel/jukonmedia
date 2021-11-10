import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import NavLinks from './NavLinks/NavLinks';

import Logo from '../../../images/jukonmedia_logo_v2.png';

const StyledNavDesktop = styled.header`
  position: relative;
  left: 0px;
  top: 0px;
  width: 100%;
  padding: 20px 0px;
  display: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${props => props.theme.media.fablet} {
    display: flex;
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
      <Link to="/">
        <StyledLogo src={Logo} alt={"JukonMedia Logo"} />
      </Link>
      <StyledNav>
        <NavLinks />
      </StyledNav>
    </StyledNavDesktop>
  );
};

export default NavDesktop;
