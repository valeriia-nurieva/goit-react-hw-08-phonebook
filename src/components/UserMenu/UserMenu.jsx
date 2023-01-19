import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { useAuth } from 'hooks';
import { Box } from "components/Box";

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

  return (
    <Box display='flex'>
      <p>Welcome, {user.email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>Logout</button>
    </Box>
  );
};

export default UserMenu;
