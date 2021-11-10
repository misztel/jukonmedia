import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: ${({ padding }) => padding ? padding : `0`};
`;

const CarouselInner = styled.div`
  white-space: nowrap;
  transform: ${({ activeIndex, items }) => `translateX(-${activeIndex * 100 / items}%)`};
  transition: ${({ transition, transitionTime }) => !transition ? `transform 0s ease-in-out` : `transform ${transitionTime}ms ease-in-out`};
`;

const CarouselArrows = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  z-index: 10;
  transform: translateY(-50%);
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

const CarouselBulletsNav = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate3d(-50%,0,0);
  z-index: 10;
  visibility: ${({ dots }) => dots ? 'visible' : 'hidden'};
`;

const Bullet = styled.div`
  display: inline-block;
  margin: 0px 5px;
  width: ${({ active }) => active ? '28px' : '13px'};
  height: 13px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.accentColor.primary};
  cursor: pointer;
  transition: ${({ transitionTime }) => `all 0.2s ease-in-out ${transitionTime / 2}ms`};
`;

const Carousel = ({ children, items, dots, arrows, pauseTime, transitionTime, autoplay, padding }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    let slides = React.Children.toArray(children);
    let clonedSlides = slides;

    let cloneBackCount = items === 1 ? 1 : items;

    for (let i = 0; i < cloneBackCount; i++) {
      clonedSlides = [...clonedSlides, slides[i]];
    };
    clonedSlides = [slides[slides.length - 1], ...clonedSlides];

    setCarouselItems(clonedSlides);
    setActiveIndex(1);
  }, [children, items]);

  const changeItem = (newIndex) => {

    let resetIndex = carouselItems.length - items;

    if (newIndex === 0) {
      setActiveIndex(newIndex);
      setTimeout(() => {
        setTransition(false);
        setActiveIndex(carouselItems.length - items - 1);
      }, transitionTime);
    } else if (newIndex === resetIndex) {
      setActiveIndex(newIndex);
      setTimeout(() => {
        setTransition(false);
        setActiveIndex(1);
      }, transitionTime);
    }
    setActiveIndex(newIndex);
    setTransition(true);
  };

  useEffect(() => {
    if (autoplay) {
      const auto = setInterval(() => {
        changeItem(activeIndex + 1);
      }, pauseTime);
      return () => {
        if (auto) {
          clearInterval(auto);
        }
      };
    }
  }, [activeIndex, pauseTime, autoplay]);

  return (
    !carouselItems
      ?
      <> noo </>
      :
      <CarouselContainer padding={padding}>
        <CarouselInner
          activeIndex={activeIndex}
          items={items}
          pauseTime={pauseTime}
          transitionTime={transitionTime}
          transition={transition}
        >
          {carouselItems.map((item, index) => {
            return React.cloneElement(item, { width: 100 / items + '%', key: index, index: index });
          })}
        </CarouselInner>
        <CarouselArrows arrows={arrows}>
          <CarouselArrowLeft
            style={{ float: 'left' }}
            onClick={() => {
              changeItem(activeIndex - 1);
            }}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </CarouselArrowLeft>
          <CarouselArrowRight
            style={{ float: 'right' }}
            onClick={() => {
              changeItem(activeIndex + 1);
            }}>
            <FontAwesomeIcon icon={faAngleRight} />
          </CarouselArrowRight>
        </CarouselArrows>
        <CarouselBulletsNav dots={dots}>
          {carouselItems.map((child, index) => {
            if (index <= carouselItems.length - items - 1 && index >= 1) {
              return (
                <Bullet
                  transitionTime={transitionTime}
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
      </CarouselContainer>
  )
};

export default Carousel;
