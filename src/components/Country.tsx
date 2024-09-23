const Country = ({ title, flag, population, region, capital }) => {
  return (
    <div className='mb-[5rem] bg-white rounded overflow-hidden shadow-normal'>
      <div className=''>
        <img className='w-full' src={flag} alt={`${title} flag`} />
      </div>
      <div className='px-[3rem] pt-[3.75rem] pb-[5.875rem]'>
        <p className='pb-[3.375rem] text-3xl font-bold'>{title}</p>
        <p className='pb-[1.688rem] text-xl'>
          <span className='font-bold'>Population: </span>
          {population}
        </p>
        <p className='pb-[1.688rem] text-xl'>
          <span className='font-bold'>Region: </span>
          {region}
        </p>
        <p className='text-xl'>
          <span className='font-bold'>Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default Country;
