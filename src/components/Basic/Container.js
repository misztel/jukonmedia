import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 84vh;
  align-items: center;

  @media ${props => props.theme.media.fablet} {
    width: 100%;
    height: 100%;
  }

`;

export default Container;
