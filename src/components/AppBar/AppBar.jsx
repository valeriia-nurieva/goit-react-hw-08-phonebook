import Navigation  from 'components/Navigation';
import AuthNav from 'components/NavLink/NavLink';
import UserMenu from 'components/UserMenu';
import Container from 'components/Container';
import { HeaderStyled } from './AppBar.styled';
import { useAuth } from 'hooks';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    
    <Container>
      <HeaderStyled>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </HeaderStyled>
    </Container>
    
  );
};

export default AppBar;
