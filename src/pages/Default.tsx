import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Default = () => {
  return (
    <div className='bg-light-white h-[100%]'>
      <Header />
      <Outlet />
    </div>
  );
};

export default Default;
