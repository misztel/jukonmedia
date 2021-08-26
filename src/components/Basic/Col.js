import styled from 'styled-components';

function getWidth(span) {
  if (span) {
    const width = (span / 12) * 100;
    return `width: ${width}%;`;
  }
  return false;
}

const Col = styled.div`
  flex: 0 0 auto;
  ${({ xxs }) => (xxs ? getWidth(xxs) : 'width: 100%;')}
  padding: ${props => (props.nopadd ? '0px' : '0px 15px')};

  @media (min-width: 480px) {
    ${({ xs }) => xs && getWidth(xs)}
    margin: 0;
  }
  @media (min-width: 768px) {
    ${({ sm }) => sm && getWidth(sm)}
    margin: 0;
  }
  @media (min-width: 992px) {
    ${({ md }) => md && getWidth(md)}
    margin: ${props => (props.marg ? '0 0 0 8.3333%' : '0')};
  }
  @media (min-width: 1200px) {
    ${({ lg }) => lg && getWidth(lg)}
    margin: ${props => (props.marg ? '0 0 0 8.3333%' : '0')};
  }
`;

export default Col;
