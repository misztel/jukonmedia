import styled from 'styled-components';

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

const Button = styled.button`
  background-color: ${({ outlined, color }) =>
    outlined ? 'trasparent' : handleButtonColor(color)};
  color: ${({ outlined, theme }) => outlined ? ({ color }) => handleButtonColor(color) : theme.backgroundColor.primary};
  cursor: pointer;
  transition: 0.2s;
  width: ${({ width }) => (width ? width : 'auto')};
  height: auto;
  border: solid 2px ${({ color }) => handleButtonColor(color)};
  font-size: ${props =>
    props.fontSize ? props.fontSize : props.theme.button.fontSize};
  font-weight: ${props =>
    props.fontWeight ? props.fontWeight : props.theme.button.fontWeight};
  padding: ${props =>
    props.padding ? props.padding : props.theme.button.padding};
  margin: ${props =>
    props.margin ? props.margin : props.theme.button.padding};
  border-radius: ${props =>
    props.round ? props.round : props.theme.button.round};
  transition: 0.2s;

  &:hover {
    color: #f8f8f8;
    background-color: ${({ color }) => handleButtonHoverColor(color)};
    border: solid 2px ${({ color }) => handleButtonHoverColor(color)};
    transition: 0.2s;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export default Button;
