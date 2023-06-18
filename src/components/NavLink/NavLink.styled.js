import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  position: relative;
  padding-top: ${({ theme }) => `${theme.spacing(8)}`};
  padding-bottom: ${({ theme }) => `${theme.spacing(6)}`};
  font-size: ${({ theme }) => `${theme.fontSizes[2]}px`};
  color: ${({ theme }) => `${theme.colors.white}`};
  font-weight: 500;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 250ms;
  :hover,
  :focus {
    color: ${({ theme }) => `${theme.colors.accentPink}`};
  }
  &.active {
    color: ${({ theme }) => `${theme.colors.accentPink}`};
    &::after {
      display: block;
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      background-color: ${({ theme }) => `${theme.colors.accentPink}`};
      border-radius: 2px;
      left: 0;
      bottom: 0;
    }
  }
`;
