const Country = ({ title, flag, population, region, capital }) => {
  return (
    <div className='mb-[5rem]'>
      <img className='w-full' src={flag} alt={`${title} flag`} />
      <p>{title}</p>
      <p>
        <span>Population: </span>
        {population}
      </p>
      <p>
        <span>Region: </span>
        {region}
      </p>
      <p>
        <span>Capital: </span>
        {capital}
      </p>
    </div>
  );
};

export default Country;
