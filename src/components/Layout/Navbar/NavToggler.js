import React from 'react';
import styled from 'styled-components';

const StyledMenuToggler = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  font-weight: 600;
  background-color: transparent;
  z-index: 10;
  border: none;
  transition: all 0.3s linear;
  .inner {
    transition: all 0.3s linear;
    &:before {
      transition: all 0.3s linear;
    }
    &:after {
      transition: all 0.3s linear;
    }
  }
  &:hover {
    .textinner {
      color: ${({ theme }) => theme.neutralColor.textPrimary};
    }
    .inner {
      background-color: ${({ theme }) => theme.neutralColor.textPrimary};
      &:before {
        background-color: ${({ theme }) => theme.neutralColor.textPrimary};
      }
      &:after {
        background-color: ${({ theme }) => theme.neutralColor.textPrimary};
      }
    }
  }

  @media ${props => props.theme.media.fablet} {
    display: flex;
  }
`;

const HamburgerWrapper = styled.div`
  display: flex;
  overflow: visible;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 10px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
`;

const HamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
`;

const HamburgerInner = styled.div`
  position: absolute;
  width: 40px;
  height: 4px;
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;
  transition-property: transform, top;
  transform: ${props => (props.isToggled ? 'rotate(-45deg)' : 'rotate(0deg)')};
  border-radius: 4px;
  top: ${props => (props.isToggled ? '10px' : '0px')};
  background-color: ${({ theme }) => theme.accentColor.primary};
  &:before {
    content: '';
    position: absolute;
    width: 40px;
    height: 4px;
    transition-timing-function: ease-in-out;
    transition-duration: 0.15s;
    transition-property: transform, top;
    transform: ${props => (props.isToggled ? 'rotate(90deg)' : 'rotate(0deg)')};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.accentColor.primary};
    top: ${props => (props.isToggled ? '0px' : '10px')};
    left: 0px;
  }
  &:after {
    content: '';
    position: absolute;
    width: 40px;
    height: 4px;
    transition-timing-function: ease-in-out;
    transition-duration: 0.15s;
    transition-property: transform, top;
    transform: ${props => (props.isToggled ? 'rotate(90deg)' : 'rotate(0deg)')};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.accentColor.primary};
    top: ${props => (props.isToggled ? '0px' : '20px')};
    left: 0px;
    opacity: ${props => (props.isToggled ? '0' : '1')};
  }
`;

const NavToggler = ({ clicked, toggled }) => {
  return (
    <StyledMenuToggler onClick={() => clicked()}>
      <HamburgerWrapper>
        <HamburgerBox>
          <HamburgerInner className="inner" isToggled={toggled} />
        </HamburgerBox>
      </HamburgerWrapper>
    </StyledMenuToggler>
  );
};

export default NavToggler;
