import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  padding-top: ${({ theme }) => `${theme.spacing(8)}`};
  padding-bottom: ${({ theme }) => `${theme.spacing(8)}`};
  color: ${({ theme }) => `${theme.colors.white}`};
  font-size: ${({ theme }) => `${theme.fontSizes[2]}px`};
  font-weight: 500;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 250ms;
  :hover,
  :focus {
    color: ${({ theme }) => `${theme.colors.accent}`};
  }
    &.active {
    color: ${({ theme }) => `${theme.colors.accent}`}; 
  }
`;
