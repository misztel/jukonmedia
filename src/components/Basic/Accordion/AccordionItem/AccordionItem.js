import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const StyledAccordionItem = styled.div`
  overflow: hidden;
  height: ${({ heightProp }) => heightProp + 'px'};
  color: ${({ theme }) => theme.secondaryText};
  background-color: ${({ theme }) => theme.reverseSecondaryColor};
  transition: height 0.2s ease;
  border-left: 4px solid ${({ theme }) => theme.primaryColor};
`;

const StyledAccordionContent = styled.div`
  padding: 25px;
`;

const AccordionItem = ({ children, index, currentItem }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    currentItem === index
      ? setHeight(content.current.scrollHeight)
      : setHeight(0);
    console.log('changed: ', currentItem);
  });

  const content = useRef(null);

  return (
    <StyledAccordionItem ref={content} heightProp={height}>
      <StyledAccordionContent>{children}</StyledAccordionContent>
    </StyledAccordionItem>
  );
};

export default AccordionItem;
