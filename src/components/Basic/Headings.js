import * as React from 'react';
import styled from 'styled-components';
import Arrow from '../../images/icons/Arrow';

export const StyledH2 = styled.h2`
  margin-bottom: 30px;
  padding-left: 25px;
  position: relative;

  :before{
    color: ${({ theme }) => theme.accentColor.primary};
    content: "/";
    font-weight: 700;
    left: 0px;
    position: absolute;
    top: 0px;
  }
`;

const StyledH3Box = styled.div`
  display: flex;
  align-items: center;

  svg{
    color: ${({ theme }) => theme.accentColor.primary};
  }
`;

export const StyledH3 = ({ children }) => (
  <StyledH3Box>
    <Arrow /> <h3>{children}</h3>
  </StyledH3Box>
);
