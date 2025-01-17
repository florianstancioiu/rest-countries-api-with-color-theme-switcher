import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
        (country) => country.alpha3Code === countryParam
      );

      if (filteredCountries.length === 1) {
        setCountry(filteredCountries[0]);
      }
    };

    fetchCountry();
  }, [countryParam]);

  return (
    <div className='px-[1.875rem] pt-[80px]'>
      <Link to={'/'}>
        <Button className='mb-[125px] flex gap-x-[20px] justify-between items-center'>
          <Back className='w-[33px] h-[22px]' /> <span>Back</span>
        </Button>
      </Link>
      {country && (
        <div>
          <div className='mb-[100px]'>
            <img
              className='w-full'
              src={country.flag}
              alt={`${country.name} flag`}
            />
          </div>
          <div>
            <h3 className='mb-[68px]'>{country.name}</h3>
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
          <div>
            <p className='mb-[40px]'>
              <strong>Border Countries: </strong>
            </p>
            <div className='flex gap-[18px]'>
              {country.borders.map((borderCountry, index) => (
                <Link to={`/${borderCountry}`} key={index}>
                  <Button>{borderCountry}</Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
