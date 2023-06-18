import styled from "styled-components";

export const UserInfo = styled.p`
  color: ${({ theme }) => `${theme.colors.white}`};
  padding-top: 32px;
  padding-bottom: 24px;
`

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing(1)}`};
  border: none;
  background-color: transparent;
  color: ${({ theme }) => `${theme.colors.white}`};
  margin: 0 auto;
  cursor: pointer;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 250ms;
  :hover,
  :focus {
    color: ${({ theme }) => `${theme.colors.accentPink}`};
  }
`;