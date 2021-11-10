import styled from 'styled-components';

export const Card = styled.div`
  align-items: start;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 4px 4px 8px rgb(39 39 62 / 12%);
  display: flex;
  flex-direction: ${({ direction }) => direction};
  height: ${({ equal }) => equal ? '100%' : 'auto'};
  justify-content: flex-start;
  transition: all ease-in-out 0.3s;
  width: 100%;

  &:hover{
    box-shadow: 12px 12px 8px rgb(39 39 62 / 12%);
    transform: translate(-5px, -5px);
  }
`;

export const CardContent = styled.div`
  align-items: ${({ alignItems }) => alignItems};
  display: flex;
  flex-direction: ${({ direction }) => direction ? direction : 'inherit'};
  justify-content: flex-start;
  padding: ${({ padding }) => padding};
  width: 100%;
`;

export const CardImage = styled.div`
  background-image: ${props => `url(${props.bg})`};
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  height: 200px;
  width: 100%;
`;

export const CardIcon = styled.div`
  color: ${({ theme }) => theme.accentColor.primary};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};

  svg{
    height: 100%;
    width: 100%;
  }
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.neutralColor.textPrimary};
  font-size: 22px;
  font-weight: 600;
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.neutralColor.textPrimary};
  white-space: normal;
`;
