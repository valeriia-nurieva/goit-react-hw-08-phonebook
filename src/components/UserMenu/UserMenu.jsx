import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { useAuth } from 'hooks';
import {FaRegUserCircle} from 'react-icons/fa'
import { Box } from "components/Box";
import { UserInfo, Button } from './UserMenu.styled';

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

  return (
    <Box display='flex' gridGap='8px' alignItems='center'>
      <UserInfo>Welcome, {user.email}</UserInfo>
      <FaRegUserCircle color='#ffffff' size='24px'/>
      <Button type="button" onClick={() => dispatch(logOut())}>Logout</Button>
    </Box>
  );
};

export default UserMenu;
