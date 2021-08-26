import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-wrap: ${props => (props.nowrap ? 'no-wrap' : 'wrap')};
  align-content: ${props => props.alignContent};
  flex-direction: ${props => props.flexDirection};
`;

export default Flex;
