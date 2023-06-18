import { useAuth } from 'hooks';
import { NavLinkStyled } from 'components/NavLink/NavLink.styled';
import { Box } from "components/Box";

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Box display='flex' gridGap='16px'>
        <NavLinkStyled to="/">
          Home
        </NavLinkStyled>
        {isLoggedIn && (
          <NavLinkStyled to="/contacts">
            Contacts
          </NavLinkStyled>
        )}
      </Box>
    </nav>
  );
};

export default Navigation;