import React, { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from './ThemeContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ToggleSwitch = styled.div`
  display: inline-block;
  position: relative;
  width: 44px;
  height: 25px;
  cursor: pointer;
  & > input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #828282;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 40px;
  &:before {
    position: absolute;
    content: '';
    transform: ${props =>
      props.theme === 'light' ? 'translateX(0px);' : 'translateX(18px);'};
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    z-index: 3;
  }
`;

const SunIcon = styled.div`
  position: absolute;
  color: #fff;
  right: 6px;
  top: 5px;
  z-index: 2;
  font-size: 14px;
`;

const MoonIcon = styled.div`
  position: absolute;
  color: #fff;
  left: 6px;
  top: 5px;
  z-index: 2;
  font-size: 14px;
`;

const ThemeToggler = () => {
  const { theme, themeToggler } = useContext(ThemeContext);

  return (
    <ToggleSwitch onClick={themeToggler} theme={theme}>
      <input type="checkbox" />
      <MoonIcon>
        <FontAwesomeIcon icon={faMoon} />
      </MoonIcon>
      <SunIcon>
        <FontAwesomeIcon icon={faSun} />
      </SunIcon>
      <ToggleSlider theme={theme} />
    </ToggleSwitch>
  );
};

export default ThemeToggler;
