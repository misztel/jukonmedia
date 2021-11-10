import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(props => <Link {...props} />)`
  color: ${({ theme }) => theme.accentColor.primary};
  text-decoration: none;
  font-weight: 600;

  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.neutralColor.textPrimary};
  }
`;

const StyledNavLink = styled.li`
  display: inline-block;
  text-align: center;
  padding: 10px 20px;
`;

const NavLink = props => (
  <StyledNavLink>
    <StyledLink onClick={() => props.clicked()} to={props.to}>{props.children}</StyledLink>
  </StyledNavLink>
);

export default NavLink;
