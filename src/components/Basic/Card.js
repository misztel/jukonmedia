import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.primaryText};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const CardTitle = styled.h3`
  font-weight: 600;
  color: ${({ theme }) => theme.primaryText};
`;

export const CardIcon = styled.div``;

export const CardText = styled.p`
  color: ${({ theme }) => theme.primaryText};
  text-align: center;
`;
