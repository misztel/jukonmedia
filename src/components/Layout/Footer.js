import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 30px 0px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h1>Footer</h1>
      <h3>Contact</h3>
      <h3>Map</h3>
    </StyledFooter>
  );
};

export default Footer;
