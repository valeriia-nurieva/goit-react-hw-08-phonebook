import styled from "styled-components";

export const Button = styled.button`
  display: block;
  padding: ${({ theme }) => `${theme.spacing(1)}`};
  border: none;
  background-color: transparent;
  margin-left: auto;
  cursor: pointer;
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 250ms;
  :hover,
  :focus {
    transform: scale(1.1);
  }
`;