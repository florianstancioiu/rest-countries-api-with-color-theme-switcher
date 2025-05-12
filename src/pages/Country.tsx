import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/UI/Button";
import Back from "../svgs/back.svg?react";

import { type Country } from "../components/Country";

const Country = () => {
  const [country, setCountry] = useState<Country | null>(null);
  const { country: countryParam } = useParams();

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(`data.json`);
      const countries = await response.json();

      const filteredCountries = countries.filter(
        (country: Country) => country.alpha3Code === countryParam
      );

      if (filteredCountries.length === 1) {
        setCountry(filteredCountries[0]);
      }
    };

    fetchCountry();
  }, [countryParam]);

  return (
    <div className="fm:w-[1282px] fm:mx-auto fm:px-0 px-[1.875rem] pt-[80px]">
      <Link className="inline-block" to={"/"}>
        <Button className="mb-[125px] flex gap-x-[20px] justify-between items-center fm:mb-[80px]">
          <Back fill="currentColor" className="w-[33px] h-[22px]" />{" "}
          <span>Back</span>
        </Button>
      </Link>
      {country && (
        <div className="pb-[120px] fm:flex fm:justify-between fm:items-center fm:gap-x-[142px]">
          <div className="mb-[100px] fm:w-[560px]">
            <img
              className="w-full fm:h-[400px] fm:object-cover"
              src={country.flag}
              alt={`${country.name} flag`}
            />
          </div>
          <div>
            <div className="dark:text-dark-white fm:flex fm:justify-between fm:items-center">
              <div>
                <h3 className="mb-[60px] font-bold text-[40px] fm:mb-[40px]">
                  {country.name}
                </h3>
                <div className="mb-[100px]">
                  <p className="mb-[40px] fm:mb-[20px]">
                    <strong>Native Name: </strong> {country.nativeName}
                  </p>
                  <p className="mb-[40px] fm:mb-[20px]">
                    <strong>Population: </strong> {country.population}
                  </p>
                  <p className="mb-[40px] fm:mb-[20px]">
                    <strong>Region: </strong> {country.region}
                  </p>
                  <p className="mb-[40px] fm:mb-[20px]">
                    <strong>Sub Region: </strong> {country.subregion}
                  </p>
                  <p className="mb-[40px] fm:mb-[20px]">
                    <strong>Capital: </strong> {country.capital}
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-[40px] fm:mb-[20px]">
                  <strong>Top Level Domain: </strong> {country.topLevelDomain}
                </p>
                <p className="mb-[40px] fm:mb-[20px]">
                  <strong>Currencies: </strong>
                  {country.currencies!.map((currency) => (
                    <span key={currency.code}>{currency.name}</span>
                  ))}
                </p>
                <p className="mb-[40px] fm:mb-[20px]">
                  <strong>Language: </strong>
                  {country.languages!.map((language, index: number) => (
                    <span key={language.iso639_2}>
                      {language.name}
                      {index !== country.languages!.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            {country.borders !== undefined && (
              <div className="dark:text-dark-white fm:flex fm:justify-between fm:items-start fm:gap-[20px]">
                <p className="mb-[40px] text-[28px] font-medium fm:text-[16px] fm:mb-0">
                  Border Countries:
                </p>
                <div className="grid grid-cols-3 gap-[18px] fm:grid-cols-4 fm:gap-[8px]">
                  {country.borders.map((borderCountry, index) => (
                    <Link to={`/${borderCountry}`} key={index}>
                      <Button>{borderCountry}</Button>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
