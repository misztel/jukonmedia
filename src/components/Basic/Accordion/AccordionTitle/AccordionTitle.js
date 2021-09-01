import React, { useCallback } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const ItemButton = styled.div`
  width: 100%;
  padding: 25px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  color: ${({ theme }) => theme.neutralColor.textPrimary};
  transition: transform 0.2s ease;
  font-weight: 600;
  border-bottom: 2px solid ${({ theme }) => theme.accentColor.primary};;
  margin: 0 0 5px 0;

  &:hover {
    color: ${({ theme }) => theme.accentColor.primary};
  }
`;

const ItemIcon = styled.div`
  font-size: 1.5rem;
  transition: transform 0.2s ease;
  transform: ${({ index, currentItem }) =>
    index === currentItem ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const AccordionTitle = ({ title, index, setItem, currentItem }) => {
  const onClick = useCallback(() => {
    index === currentItem ? setItem(null) : setItem(index);
  }, [setItem, index, currentItem]);

  return (
    <ItemButton currentItem={currentItem} index={index} onClick={onClick}>
      {title}{' '}
      <ItemIcon currentItem={currentItem} index={index}>
        <FontAwesomeIcon icon={faAngleDown} />
      </ItemIcon>
    </ItemButton>
  );
};

export default AccordionTitle;
