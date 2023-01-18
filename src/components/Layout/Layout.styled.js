import styled from 'styled-components';

export const LayoutStyled = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing(3)}`};
`;
