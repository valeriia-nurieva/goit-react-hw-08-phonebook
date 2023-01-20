import styled from "styled-components";

export const Hero = styled.section` 
    margin: 0 auto;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => `${theme.spacing(2)}`};
    padding-top: 118px;
    padding-bottom: 118px;
`

export const Head = styled.h1`
    font-size: ${({ theme }) => `${theme.fontSizes[6]}px`};
    color: ${({ theme }) => `${theme.colors.white}`};
    font-weight: 900;
    text-align: center;
`

export const Description = styled.p`
    color: ${({ theme }) => `${theme.colors.white}`};
    text-align: end;
`

export const Text = styled.p`
    color: ${({ theme }) => `${theme.colors.white}`};
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-direction: column;
    gap: ${({ theme }) => `${theme.spacing(2)}`};;
    align-items: flex-end;
    font-style: italic;
    color: ${({ theme }) => `${theme.colors.accentPink}`};
`