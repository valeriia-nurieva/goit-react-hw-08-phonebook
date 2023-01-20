import { NavLinkStyled } from "./NavLink.styled";
import { Box } from "components/Box";

const AuthNav = () => {
  return (
    <Box display='flex' gridGap='16px'>
      <NavLinkStyled to="/register">
        Register
      </NavLinkStyled>
      <NavLinkStyled to="/login">
        Log In
      </NavLinkStyled>
    </Box>
  );
};

export default AuthNav;