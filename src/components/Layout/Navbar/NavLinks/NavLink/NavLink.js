import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(props => <Link {...props} />)`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  padding: 10px 20px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const NavLink = props => (
  <StyledLink to={props.to}>{props.children}</StyledLink>
);

export default NavLink;
