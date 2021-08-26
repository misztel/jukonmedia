import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

const CarouselInner = styled.div`
  white-space: nowrap;
  transform: ${({ activeIndex, items }) => `translateX(-${activeIndex * 100 / items}%)`};
  transition: transform 0.5s;
`;

const CarouselNav = styled.div`
  display: flex;
  justify-content: center;

  button{
    margin: 5px;
  }
`;

const CarouselNavBullet = styled.button`
  background-color: ${({ active }) => active ? 'red' : 'green'};
`;

const Carousel = ({ children, items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const checkIndex = (index) => index <= children.length - items ? index : 0;

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - items;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(checkIndex(activeIndex + 1));
    }, 10000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(checkIndex(activeIndex + 1)),
    onSwipedRight: () => updateIndex(checkIndex(activeIndex - 1))
  });

  return (
    <CarouselContainer {...handlers}>
      <CarouselInner activeIndex={activeIndex} items={items}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: 100 / items + '%' });
        })}
      </CarouselInner>
      <CarouselNav>
        <button
          onClick={() => {
            updateIndex(checkIndex(activeIndex - 1));
          }}>
          Prev
        </button>
        {React.Children.map(children, (child, index) => {
          if (index <= children.length - items) {
            return (
              <CarouselNavBullet
                active={index === activeIndex ? true : false}
                onClick={() => {
                  updateIndex(index);
                }}>
                {index + 1}
              </CarouselNavBullet>
            )
          }
        })}
        <button
          onClick={() => {
            updateIndex(checkIndex(activeIndex + 1));
          }}>
          Next
        </button>
      </CarouselNav>
    </CarouselContainer>
  );
};

export default Carousel;
