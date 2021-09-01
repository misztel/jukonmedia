import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  color: ${({ theme }) => theme.neutralColor.textPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const CardTitle = styled.h3`
  font-weight: 600;
  color: ${({ theme }) => theme.neutralColor.textPrimary};
`;

export const CardIcon = styled.div`
  color: ${({ theme }) => theme.accentColor.primary};
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.neutralColor.textPrimary};
  text-align: center;
`;
