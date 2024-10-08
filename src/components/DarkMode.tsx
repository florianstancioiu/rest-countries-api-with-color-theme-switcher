import { useEffect, useState } from 'react';
import Moon from '../svgs/moon.svg?react';
import Sun from '../svgs/sun.svg?react';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((val) => {
      localStorage.setItem('darkMode', JSON.stringify(!val));

      return !val;
    });
  };

  useEffect(() => {
    // set dark mode from localstorage
    const darkMode = JSON.parse(localStorage.getItem('darkMode') || '{}');

    if (darkMode === false || darkMode === true) {
      setDarkMode(darkMode);
    } else {
      // set dark mode if the user prefers dark mode
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem('darkMode', JSON.stringify(false));
        setDarkMode(false);
      }
    }
  }, []);

  useEffect(() => {
    if (darkMode === true) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div
      onClick={toggleDarkMode}
      className='gap-2 flex cursor-pointer items-center'
    >
      {darkMode && <Sun />}
      {!darkMode && <Moon />}
      <span>{darkMode ? 'Light' : 'Dark'} Mode</span>
    </div>
  );
};

export default DarkMode;
