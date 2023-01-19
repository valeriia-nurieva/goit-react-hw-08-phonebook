import Navigation  from 'components/Navigation';
import AuthNav from 'components/NavLink/NavLink';
import UserMenu from 'components/UserMenu';
import { HeaderStyled } from './AppBar.styled';
import { useAuth } from 'hooks';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderStyled>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyled>
  );
};

export default AppBar;
