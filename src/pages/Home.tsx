import { useEffect, useState } from 'react';
import Country from '../components/Country';
import Dropdown from '../components/Dropdown';
import SearchInput from '../components/SearchInput';

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(`data.json`);
      const result = await response.json();

      setCountries(result);
    };

    fetchCountries();
  }, []);

  return (
    <div className='px-[1.875rem] pt-[2.813rem]'>
      <SearchInput />
      <Dropdown />
      <div>
        {countries.map((country) => (
          <Country
            title={country.name}
            flag={country.flag}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
