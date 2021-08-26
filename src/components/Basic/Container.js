import styled from 'styled-components';

const Container = styled.div`
  width: 1140px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${props => props.theme.media.desktop} {
    width: 100%;
    padding: 20px;
  }
`;

export default Container;
