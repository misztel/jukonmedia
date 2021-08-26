import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.media.fablet} {
    height: auto;
  }
`;

export default Wrapper;
