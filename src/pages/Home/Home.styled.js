import styled from "styled-components";
import bg from "img/bg.png";

export const Hero = styled.section` 
    padding-top: 84px;
    min-height: calc(100vh - 75px);
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const HeroContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;

    @media (min-width: 375px) {
        width: 380px;
    }
    @media (min-width: 768px) {
        padding: 0 32px;
        width: 768px;
    }
    @media (min-width: 1440px) {
        padding: 0 100px;
        width: 1200px;
    }
`

export const Head = styled.h1`
    margin-bottom: ${({ theme }) => `${theme.spacing(3)}`}; 
    font-size: ${({ theme }) => `${theme.fontSizes[6]}px`};
    color: ${({ theme }) => `${theme.colors.white}`};
    font-weight: 900;
    text-align: end;
` 

export const Description = styled.p`
    margin-bottom: ${({ theme }) => `${theme.spacing(3)}`};
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
    font-family: 'Comfortaa', cursive;
    color: ${({ theme }) => `${theme.colors.accentPink}`};
`