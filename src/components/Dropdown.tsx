const Dropdown = () => {
  return (
    <div className='w-[25rem] bg-white h-[90px] shadow-regular flex justify-evenly items-center cursor-pointer mb-[3.75rem]'>
      <p>Filter by region</p>
      <svg
        className='w-[0.938rem]'
        viewBox='0 -4.5 24 24'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'
        fill='#000000'
      >
        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
        <g
          id='SVGRepo_tracerCarrier'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></g>
        <g id='SVGRepo_iconCarrier'>
          <title>chevron-down</title> <desc>Created with Sketch Beta.</desc>{' '}
          <defs> </defs>
          <g
            id='Page-1'
            stroke='none'
            strokeWidth='1'
            fill='none'
            fillRule='evenodd'
            sketch:type='MSPage'
          >
            <g
              id='Icon-Set-Filled'
              sketch:type='MSLayerGroup'
              transform='translate(-574.000000, -1201.000000)'
              fill='#000000'
            >
              <path
                d='M597.405,1201.63 C596.576,1200.8 595.23,1200.8 594.401,1201.63 L586.016,1210.88 L577.63,1201.63 C576.801,1200.8 575.455,1200.8 574.626,1201.63 C573.797,1202.46 573.797,1203.81 574.626,1204.64 L584.381,1215.4 C584.83,1215.85 585.429,1216.05 586.016,1216.01 C586.603,1216.05 587.201,1215.85 587.65,1215.4 L597.405,1204.64 C598.234,1203.81 598.234,1202.46 597.405,1201.63'
                id='chevron-down'
                sketch:type='MSShapeGroup'
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Dropdown;
