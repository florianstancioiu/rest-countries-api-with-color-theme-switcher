import { useEffect, useState } from 'react';
import Country from '../components/Country';
import Dropdown from '../components/Dropdown';
import SearchInput from '../components/SearchInput';

const regions = [
  {
    name: 'Africa',
    id: 1,
  },
  {
    name: 'Americas',
    id: 2,
  },
  {
    name: 'Asia',
    id: 3,
  },
  {
    name: 'Europe',
    id: 4,
  },
  {
    name: 'Oceania',
    id: 5,
  },
];

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(`data.json`);
      const result = await response.json();

      const filteredResults = result
        .filter((item) => {
          if (searchKeyword === '') {
            return true;
          }

          if (
            item.name.toLowerCase().includes(searchKeyword.trim().toLowerCase())
          ) {
            return true;
          } else {
            return false;
          }
        })
        .filter((item) => {
          if (region === '') {
            return true;
          }

          if (item.region.toLowerCase() === region.name.toLowerCase()) {
            return true;
          }

          return false;
        });

      setCountries(filteredResults);
    };

    fetchCountries();
  }, [searchKeyword, region]);

  const handleSearchInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleRegionChange = (value) => {
    setRegion(value);
  };

  return (
    <>
      <div className='px-[1.875rem] pt-[2.813rem]'>
        <SearchInput
          keyword={searchKeyword}
          onChange={handleSearchInputChange}
        />
        <Dropdown
          options={regions}
          value={region}
          onChange={handleRegionChange}
        />
      </div>
      <div className='px-[7rem]'>
        {countries.map((country) => (
          <Country
            key={country.name}
            title={country.name}
            flag={country.flag}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
