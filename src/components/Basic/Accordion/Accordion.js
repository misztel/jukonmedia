import React, { useState } from 'react';
import styled from 'styled-components';

import AccordionTitle from './AccordionTitle/AccordionTitle';

const StyledAccordion = styled.div`
  width: 100%;
`;

const Accordion = ({ children }) => {
  const [currentItem, setItem] = useState(null);

  return (
    <>
      {children.map((item, index) => (
        <StyledAccordion>
          <AccordionTitle
            key={index}
            title={item.props.title}
            index={index}
            currentItem={currentItem}
            setItem={setItem}
          />
          {React.cloneElement(children[index], {
            index: index,
            currentItem: currentItem,
          })}
        </StyledAccordion>
      ))}
    </>
  );
};

export default Accordion;
