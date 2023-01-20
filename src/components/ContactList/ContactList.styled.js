import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => `${theme.spacing(2)}`};
  margin-bottom: ${({ theme }) => `${theme.spacing(6)}`};
  width: 400px;
  margin: 0 auto;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => `${theme.colors.white}`};  
  margin-bottom: ${({ theme }) => `${theme.spacing(2)}`};
  width: 400px;
`