const SearchInput = () => {
  return (
    <div className='relative bg-white shadow-regular mb-[5rem]'>
      <svg
        className='absolute left-[66px] top-[50%] translate-y-[-50%] w-[30px] h-[30px]'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
        <g
          id='SVGRepo_tracerCarrier'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></g>
        <g id='SVGRepo_iconCarrier'>
          <path
            d='M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z'
            stroke='#b8b8b8'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          ></path>
        </g>
      </svg>
      <input
        className='h-[95px] w-full pl-[9.375rem]'
        type='text'
        placeholder='Search for a country...'
      />
    </div>
  );
};

export default SearchInput;
