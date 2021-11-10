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
  padding-right: 15px;
  padding-left: 15px;
  ${({ xxs }) => (xxs ? getWidth(xxs) : 'width: 100%;')}
  padding: ${props => (props.nopadd ? '0px' : '0px 15px')};

  @media (min-width: 480px) {
    ${({ xs }) => xs && getWidth(xs)}
  }
  @media (min-width: 768px) {
    ${({ sm }) => sm && getWidth(sm)}
  }
  @media (min-width: 992px) {
    ${({ md }) => md && getWidth(md)}
  }
  @media (min-width: 1200px) {
    ${({ lg }) => lg && getWidth(lg)}
  }
  @media (min-width: 1400px) {
    ${({ xlg }) => xlg && getWidth(xlg)}
  }
`;

export default Col;
