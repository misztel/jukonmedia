import React, { useCallback } from 'react';
import styled from 'styled-components';

const TabButton = styled.span`
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  cursor: pointer;
  color: ${({ theme, currentTab, index }) =>
    currentTab === index ? theme.primaryColor : theme.primaryText};
  transition: transform 0.2s ease;
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;

const TabTitle = ({ title, index, setTab, currentTab }) => {
  const onClick = useCallback(() => {
    setTab(index);
  }, [setTab, index]);

  return (
    <TabButton currentTab={currentTab} index={index} onClick={onClick}>
      {title}
    </TabButton>
  );
};

export default TabTitle;
