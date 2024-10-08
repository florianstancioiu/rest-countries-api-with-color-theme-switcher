import { Link } from 'react-router-dom';
import DarkMode from './DarkMode';

const Header = () => {
  return (
    <div className='bg-white dark:bg-dark-bg-one dark:text-dark-white px-[1.875rem] flex justify-between items-center h-[160px] shadow-normal dark:shadow-dark-normal select-none'>
      <Link to='/' className='font-bold text-[1.625rem]'>
        Where in the World?
      </Link>
      <DarkMode />
    </div>
  );
};

export default Header;
