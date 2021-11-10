import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;

  @media ${props => props.theme.media.tablet} {
    width: 100%;
  }

  @media ${props => props.theme.media.fablet} {
    width: 100%;
  }

  @media ${props => props.theme.media.desktop} {
    width: ${({ fluid }) => fluid ? '100%' : '1000px'};
  }

  @media ${props => props.theme.media.bigDesktop} {
    width: ${({ fluid }) => fluid ? '100%' : '1200px'};
  }
`;

export default Container;
