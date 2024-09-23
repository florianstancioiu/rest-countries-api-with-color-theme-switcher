import { Link } from 'react-router-dom';
import DarkMode from './DarkMode';

const Header = () => {
  return (
    <div className='bg-white px-[1.875rem] flex justify-between items-center h-[160px] shadow-normal select-none'>
      <Link to='/' className='font-bold text-[1.625rem]'>
        Where in the World?
      </Link>
      <DarkMode />
    </div>
  );
};

export default Header;
