import styled from 'styled-components';
import bgContacts from 'img/bg-contacts.png';
import Container from 'components/Container/Container.styled';

export const ContainerBg = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-image: url(${bgContacts});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left 16px center;
  min-height: 120px;
`;

export const ButtonAdd = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => `${theme.spacing(1)}`};
  padding: ${({ theme }) => `${theme.spacing(1)}`};
  border: none;
  border-radius: ${({ theme }) => `${theme.spacing(1)}`};
  background-color: transparent;
  font-size: 18px;
  color: ${({ theme }) => `${theme.colors.green}`};
  cursor: pointer;
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 250ms;
  :hover,
  :focus {
    transform: scale(1.1);
  }
`;