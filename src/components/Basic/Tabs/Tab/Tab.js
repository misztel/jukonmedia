import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTab = styled.div`
  padding: 20px;
  color: ${({ theme }) => theme.primaryText};
`;

const Tab = ({ children }) => {
  return <StyledTab>{children}</StyledTab>;
};

export default Tab;
