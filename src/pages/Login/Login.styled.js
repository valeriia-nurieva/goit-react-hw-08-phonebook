import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => `${theme.spacing(6)}`};
  width: 400px;
  margin: 0 auto;
`

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => `${theme.spacing(4)}`};
  color: ${({ theme }) => `${theme.colors.white}`};
`

export const FormInput = styled.input`
  padding: ${({ theme }) => `${theme.spacing(2)}`};
  border: 1px solid ${({ theme }) => `${theme.colors.black}`};
  border-radius: ${({ theme }) => `${theme.spacing(1)}`};
  font-family: sans-serif;
  font-size: ${({theme})=>`${theme.fontSizes[2]}`};
  outline: none;
  margin-top: ${({ theme }) => `${theme.spacing(1)}`};
  border: none;
  background-color: rgb(255 255 255 / 50%);
`

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  padding-top: ${({ theme }) => `${theme.spacing(3)}`};
  padding-bottom: ${({ theme }) => `${theme.spacing(3)}`};
  padding-left: ${({ theme }) => `${theme.spacing(4)}`};
  padding-right: ${({ theme }) => `${theme.spacing(4)}`};
  width: 120px;
  border: none;
  border-radius: ${({ theme }) => `${theme.spacing(1)}`};
  background-color: ${({ theme }) => `${theme.colors.accent}`};
  color: ${({ theme }) => `${theme.colors.white}`};
  font-size: inherit;
  margin: 0 auto;
  cursor: pointer;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 250ms;
  :hover,
  :focus {
    background-color: ${({ theme }) => `${theme.colors.hover}`};
  }
`;
