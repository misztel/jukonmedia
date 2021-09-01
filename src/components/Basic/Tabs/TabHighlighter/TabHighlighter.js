import React from 'react';
import styled from 'styled-components';

const StyledTabHighlighter = styled.span`
  position: absolute;
  bottom: 0px;
  height: 3px;
  background-color: ${({ theme }) => theme.accentColor.primary};
  width: 100%;
  max-width: 130px;
  display: block;
  left: 0;
  transition: transform 0.2s ease;
  transform: translateX(${({ index }) => index * 130}px);
`;

const TabHighlighter = ({ index }) => {
  return <StyledTabHighlighter index={index} />;
};

export default TabHighlighter;
