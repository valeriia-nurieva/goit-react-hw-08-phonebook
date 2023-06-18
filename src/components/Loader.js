import { Watch } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Watch
      height="40"
      width="40"
      radius="48"
      color="rgb(255 255 255 / 85%)"
      ariaLabel="watch-loading"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: ' 50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};
