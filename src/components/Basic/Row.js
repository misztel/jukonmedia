import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  &>*{
    margin: ${({ itemsMargin }) => itemsMargin ? `0 0 ${itemsMargin}px 0` : '0px'};
  }

`;

export default Row;
