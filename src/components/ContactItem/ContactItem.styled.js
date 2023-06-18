import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Phone = styled.a`
  color: ${({ theme }) => `${theme.colors.white}`};
  cursor: pointer;
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 250ms;
  :hover,
  :focus {
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing(2)}`};
  border: none;
  border-radius: ${({ theme }) => `${theme.spacing(1)}`};
  color: ${({ theme }) => `${theme.colors.accentPink}`};
  background-color: transparent;
  font-size: inherit;
  cursor: pointer;
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 250ms;
  :hover,
  :focus {
    transform: scale(1.1);
  }
`;
