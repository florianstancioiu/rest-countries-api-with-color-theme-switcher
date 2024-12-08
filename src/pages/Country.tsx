import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/UI/Button';
import Back from '../svgs/back.svg?react';

const Country = () => {
  const [country, setCountry] = useState();
  const { country: countryParam } = useParams();

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(`data.json`);
      const countries = await response.json();

      const filteredCountries = countries.filter(
        (country) => country.name === countryParam
      );

      if (filteredCountries.length === 1) {
        setCountry(filteredCountries[0]);
      }
    };

    fetchCountry();
  }, [countryParam]);

  return (
    <div className='px-[1.875rem]'>
      <Button className='mt-[80px]'>
        <Back /> Back
      </Button>
      {country && (
        <div>
          <div>
            <img
              className='w-full'
              src={country.flag}
              alt={`${country.name} flag`}
            />
          </div>
          <div>
            <h3>{country.name}</h3>
            <div>
              <p>
                <strong>Native Name: </strong> {country.nativeName}
              </p>
              <p>
                <strong>Population: </strong> {country.nativeName}
              </p>
              <p>
                <strong>Region: </strong> {country.nativeName}
              </p>
              <p>
                <strong>Sub Region: </strong> {country.nativeName}
              </p>
              <p>
                <strong>Capital: </strong> {country.nativeName}
              </p>
            </div>
            <div>
              <p>
                <strong>Top Level Domain: </strong> {country.nativeName}
              </p>
              <p>
                <strong>Currencies: </strong> {country.nativeName}
              </p>
              <p>
                <strong>Language: </strong> {country.nativeName}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
