import React from 'react';
import styled from 'styled-components';

const StyledCarouselItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content:center;
  height: 200px;
  background-color: ${({ color }) => color ? color : 'greenyellow'};
  color: floralwhite;
`;

const CarouselItem = ({ children, width, color }) => {
  return (
    <StyledCarouselItem color={color} style={{ width: width }}>
      {children}
    </StyledCarouselItem>
  );
};

export default CarouselItem;
