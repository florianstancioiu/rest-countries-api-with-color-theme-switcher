import DarkMode from './DarkMode';

const Header = () => {
  return (
    <div className='bg-white px-[1.875rem] flex justify-between items-center h-[160px] shadow-normal'>
      <h2 className='font-bold text-[1.625rem]'>Where in the World?</h2>
      <DarkMode />
    </div>
  );
};

export default Header;
