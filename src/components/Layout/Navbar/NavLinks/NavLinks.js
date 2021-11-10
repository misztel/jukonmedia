import React from 'react';

import NavLink from './NavLink/NavLink';
import styled from 'styled-components';

const StyledNavLinks = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.media.fablet} {
    flex-direction: row;
  }
`;

const NavLinks = ({ clicked }) => {
  return (
    <StyledNavLinks>
      <NavLink to="/" clicked={() => clicked()}> Start </NavLink>
      <NavLink to="/stronywww" clicked={() => clicked()}> Strony WWW </NavLink>
      <NavLink to="/socialmedia" clicked={() => clicked()}> Social Media </NavLink>
      <NavLink to="/studiograficzne" clicked={() => clicked()}> Studio Graficzne </NavLink>
      <NavLink to="/realizacje" clicked={() => clicked()}> Realizacje </NavLink>
      <NavLink to="/kontakt" clicked={() => clicked()}> Kontakt </NavLink>
    </StyledNavLinks>
  );
};

export default NavLinks;
