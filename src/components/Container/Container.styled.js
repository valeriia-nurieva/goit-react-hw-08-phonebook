import styled from 'styled-components';

const Container = styled.div`
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
    @media (min-width: 1200px) {
        padding: 0 100px;
        width: 1200px;
    }
`;

export default Container;
