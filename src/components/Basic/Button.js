import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.theme.primaryColor};
  color: #f8f8f8;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  width: auto;
  height: auto;
  font-size: ${props => (props.fontSize ? props.fontSize : props.theme.button.fontSize)};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : props.theme.button.fontWeight)};
  padding: ${props => (props.padding ? props.padding : props.theme.button.padding)};
  margin: ${props => (props.margin ? props.margin : props.theme.button.padding)};
  border-radius: ${props => (props.round ? props.round : props.theme.button.round)};
  transition: 0.2s;

  &:hover{
    color: #f8f8f8;
    background: ${props => props.theme.secondaryColor};
    transform: scale(1.05);
    transition: 0.2s;
  }
  &:disabled{
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export default Button;
