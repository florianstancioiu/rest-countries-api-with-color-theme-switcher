import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Default = () => {
  return (
    <div className='bg-light-white dark:bg-dark-bg-two min-h-[100%]'>
      <Header />
      <Outlet />
    </div>
  );
};

export default Default;
