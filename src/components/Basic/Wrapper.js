import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.media.fablet} {
    height: 100vh;
  }
`;

export default Wrapper;
