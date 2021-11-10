import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const handleButtonColor = color => {
  switch (color) {
    case 'secondary':
      return ({ theme }) => theme.accentColor.secondary;
    case 'danger':
      return ({ theme }) => theme.infoColor.danger;
    default:
      return ({ theme }) => theme.accentColor.primary;
  }
};

const handleButtonHoverColor = color => {
  switch (color) {
    case 'secondary':
      return ({ theme }) => theme.accentColor.tertiary;
    case 'danger':
      return ({ theme }) => theme.infoColor.danger;
    default:
      return ({ theme }) => theme.accentColor.primary;
  }
};

const StyledButtonLink = styled(props => <Link {...props} />)`
  background-color: ${({ outlined, color }) =>
    outlined ? 'trasparent' : handleButtonColor(color)};
  border: solid 2px ${({ color }) => handleButtonColor(color)};
  border-radius: ${props =>
    props.round ? props.round : props.theme.button.round};
  color: ${({ outlined, theme }) => outlined ? ({ color }) => handleButtonColor(color) : theme.backgroundColor.primary};
  cursor: pointer;
  display: inline-block;
  font-size: ${props =>
    props.fontSize ? props.fontSize : props.theme.button.fontSize};
  font-weight: ${props =>
    props.fontWeight ? props.fontWeight : props.theme.button.fontWeight};
  height: auto;
  transition: 0.2s;
  margin: ${props =>
    props.margin ? props.margin : props.theme.button.padding};
  padding: ${props =>
    props.padding ? props.padding : props.theme.button.padding};
  transition: 0.2s;
  width: ${({ width }) => (width ? width : 'auto')};

  &:hover {
    background-color: ${({ color }) => handleButtonHoverColor(color)};
    border: solid 2px ${({ color }) => handleButtonHoverColor(color)};
    color: #f8f8f8;
    transition: 0.2s;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const ButtonLink = ({ to, margin, padding, fontSize, fontWeight, round, children }) => (
  <StyledButtonLink
    to={to}
    margin={margin}
    padding={padding}
    fontSize={fontSize}
    fontWeight={fontWeight}
    round={round}
  >
    {children}
  </StyledButtonLink>
);

export default ButtonLink;
