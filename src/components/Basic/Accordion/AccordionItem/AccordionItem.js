import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const StyledAccordionItem = styled.div`
  overflow: hidden;
  height: ${({ heightProp }) => heightProp + 'px'};
  color: ${({ theme }) => theme.neutralColor.textPrimary};
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  transition: height 0.2s ease;
  border-left: 4px solid ${({ theme }) => theme.accentColor.primary};
  margin: 0 0 5px 0;
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
  }, [currentItem, index]);

  const content = useRef(null);

  return (
    <StyledAccordionItem ref={content} heightProp={height}>
      <StyledAccordionContent>{children}</StyledAccordionContent>
    </StyledAccordionItem>
  );
};

export default AccordionItem;
