import { Link } from 'react-router-dom';

const Country = ({ title, flag, population, region, capital }) => {
  return (
    <Link
      to={title}
      className='mb-[5rem] bg-white dark:bg-dark-bg-one dark:text-dark-white rounded overflow-hidden shadow-normal dark:shadow-dark-normal'
    >
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
    </Link>
  );
};

export default Country;
