import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { useAuth } from 'hooks';
import { FiLogOut } from 'react-icons/fi';
import { Box } from 'components/Box';
import { UserInfo, Button } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" gridGap="8px" alignItems="center">
      <UserInfo>Welcome, {user.email}</UserInfo>
      <Button type="button" onClick={() => dispatch(logOut())}>
        <FiLogOut color="currentColor" size="24px" />
      </Button>
    </Box>
  );
};

export default UserMenu;
