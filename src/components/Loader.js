import { Watch } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Watch
      height="80"
      width="80"
      radius="48"
      color="#F943FD"
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
