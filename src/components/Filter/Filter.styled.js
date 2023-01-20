import styled from 'styled-components';

export const FilterWraper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  margin-bottom: ${({ theme }) => `${theme.spacing(3)}`};
`

export const FilterTitle = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => `${theme.spacing(4)}`};
  color: ${({ theme }) => `${theme.colors.accentPink}`}; 
  font-style: italic;

`

export const FilterInput = styled.input`
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