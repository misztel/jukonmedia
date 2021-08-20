import React from 'react';

import NavLink from './NavLink/NavLink'
import styled from 'styled-components';

const StyledNavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.media.fablet} {
    flex-direction: column;
  }
`;

const NavLinks = () => {
  return (
    <StyledNavLinks>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/realizacje"> Realizacje </NavLink>
      <NavLink to="/kontakt"> Kontakt </NavLink>
    </StyledNavLinks>
  );
};

export default NavLinks;
