import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: ${props => (props.justify ? props.justify : 'center')};
  align-items: ${props => (props.align ? props.align : 'baseline')};
  flex-wrap: ${props => (props.nowrap ? 'no-wrap' : 'wrap')};
`;

export default Flex;
