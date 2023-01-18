// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import { Box } from "components/Box";

const UserMenu = () => {
  //   const dispatch = useDispatch();
  //   const { user } = useAuth();

  return (
    <Box display='flex'>
      {/* <p>Welcome, {user.name}</p> */}
      {/* <button type="button" onClick={() => dispatch(logOut())}> */}
      <p>mango@mail.com</p>
      <button type="button">Logout</button>
    </Box>
  );
};

export default UserMenu;
