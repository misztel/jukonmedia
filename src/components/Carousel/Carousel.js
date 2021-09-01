import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const CarouselInner = styled.div`
  white-space: nowrap;
  transform: ${({ activeIndex, items }) => `translateX(-${activeIndex * 100 / items}%)`};
  transition: ${({ transition, transitionTime }) => !transition ? `transform 0s linear` : `transform ${transitionTime}ms linear`};
`;

const CarouselControls = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
`;

const CarouselArrows = styled.div`
display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 11;
    visibility: ${({ arrows }) => arrows ? 'visible' : 'hidden'};
`;

const CarouselArrowLeft = styled.button`
  cursor: pointer;
  padding: 5px;
  border:none;
  border-radius: 20px;
  color: rgba(255,255,255,0.8);
  margin: 5px;
  transition: background-color 0.3s;
  font-size: 20px;

  &:hover{
    color: rgba(255,255,255,1);
  }
`;

const CarouselArrowRight = styled.button`
  cursor: pointer;
  padding: 5px;
  border:none;
  border-radius: 20px;
  color: rgba(255,255,255,0.8);
  margin: 5px;
  transition: background-color 0.3s;
  font-size: 20px;

  &:hover{
    color: rgba(255,255,255,1);
  }
`;

const CarouselBulletNavWrapper = styled.div`
  z-index: 10;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-flow: column-reverse;
`;

const CarouselBulletsNav = styled.div`
  padding: 0 0 10px 0;
  display: inline-flex;
  vertical-align: top;
  align-items: center;
  flex-wrap: wrap;
  visibility: ${({ dots }) => dots ? 'visible' : 'hidden'};
`;

const Bullet = styled.div`
  opacity: 1;
  padding: 5px 5px 5px 5px;
  box-shadow: none;
  border-width: 2px;
  border-style: solid;
  border-color: #ffffff;
  border-color: ${({ active }) => active ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.8)'};
  border-radius: 50px;
  margin: 4px;
  background-color: ${({ active }) => active ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)'};
  cursor: pointer;
`;

const Carousel = ({ children, items, dots, arrows }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  let slides = React.Children.toArray(children);

  for (let i = 0; i < items; i++) {
    slides.push(slides[i]);
  };

  let interval = 3000;
  let transitionTime = 3000;

  const changeItem = (newIndex) => {
    let animation = true;
    if (newIndex < 0) {
      animation = true;
      newIndex = slides.length - items;
      setActiveIndex(newIndex);
      setTransition(animation);
    } else if (newIndex === slides.length - items + 1) {
      animation = false;
      newIndex = 0;
      setActiveIndex(newIndex);
      setTransition(animation);
      setTimeout(() => {
        setTransition(true);
        setActiveIndex(1);
      }, 10);
    }
    setActiveIndex(newIndex);
    setTransition(animation);
  };

  useEffect(() => {
    setTimeout(() => {
      setTransition(true);
      setActiveIndex(1);
    }, 10)
  }, [])

  useEffect(() => {
    const auto = setInterval(() => {
      changeItem(activeIndex + 1);
    }, interval);
    return () => {
      if (auto) {
        clearInterval(auto);
      }
    };
  }, [activeIndex]);

  return (
    <CarouselContainer>
      <CarouselInner
        activeIndex={activeIndex}
        items={items}
        interval={interval}
        transitionTime={transitionTime}
        transition={transition}
      >
        {slides.map((item, index) => {
          return React.cloneElement(item, { width: 100 / items + '%', key: index, index: index });
        })}
      </CarouselInner>
      <CarouselControls>
        <CarouselArrows arrows={arrows}>
          <CarouselArrowLeft
            onClick={() => {
              changeItem(activeIndex - 1);
            }}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </CarouselArrowLeft>
          <CarouselArrowRight
            onClick={() => {
              changeItem(activeIndex + 1);
            }}>
            <FontAwesomeIcon icon={faAngleRight} />
          </CarouselArrowRight>
        </CarouselArrows>
        <CarouselBulletNavWrapper>
          <CarouselBulletsNav dots={dots}>
            {slides.map((child, index) => {
              if (index <= slides.length - items) {
                return (
                  <Bullet
                    key={index}
                    active={index === activeIndex ? true : false}
                    onClick={() => {
                      changeItem(index);
                    }} />
                )
              }
              else {
                return null
              }
            })}
          </CarouselBulletsNav>
        </CarouselBulletNavWrapper>
      </CarouselControls>
    </CarouselContainer>
  );
};

export default Carousel;
