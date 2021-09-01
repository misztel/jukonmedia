import styled from 'styled-components';

export const List = styled.ul`
  padding: 0.5rem 0;
`;

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  position: relative;
  text-align: left;
  align-items: center;
  padding: 0.5rem 1rem;
  justify-content: flex-start;
  text-decoration: none;
  color: ${({ mode, theme }) =>
    mode === 'secondary' ? theme.neutralColor.textSecondary : theme.neutralColor.textPrimary};
`;

export const ListItemIcon = styled.div`
  min-width: 40px;
  flex-shrink: 0;
  color: ${({ mode, theme }) =>
    mode === 'secondary' ? theme.accentColor.primary : theme.accentColor.primary};
`;

export const ListItemText = styled.div`
  font-size: 1rem;
`;
