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
    <div className="px-[1.875rem] pt-[80px]">
      <Link to={"/"}>
        <Button className="mb-[125px] flex gap-x-[20px] justify-between items-center">
          <Back fill="currentColor" className="w-[33px] h-[22px]" />{" "}
          <span>Back</span>
        </Button>
      </Link>
      {country && (
        <div>
          <div className="mb-[100px]">
            <img
              className="w-full"
              src={country.flag}
              alt={`${country.name} flag`}
            />
          </div>
          <div className="dark:text-dark-white">
            <h3 className="mb-[60px] font-bold text-[40px]">{country.name}</h3>
            <div className="mb-[100px]">
              <p className="mb-[40px]">
                <strong>Native Name: </strong> {country.nativeName}
              </p>
              <p className="mb-[40px]">
                <strong>Population: </strong> {country.population}
              </p>
              <p className="mb-[40px]">
                <strong>Region: </strong> {country.region}
              </p>
              <p className="mb-[40px]">
                <strong>Sub Region: </strong> {country.subregion}
              </p>
              <p className="mb-[40px]">
                <strong>Capital: </strong> {country.capital}
              </p>
            </div>
            <div>
              <p className="mb-[40px]">
                <strong>Top Level Domain: </strong> {country.topLevelDomain}
              </p>
              <p className="mb-[40px]">
                <strong>Currencies: </strong>
                {country.currencies!.map((currency) => (
                  <span key={currency.code}>{currency.name}</span>
                ))}
              </p>
              <p className="mb-[40px]">
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
          <div className="pb-[120px] dark:text-dark-white">
            <p className="mb-[40px] text-[28px] font-medium">
              Border Countries:
            </p>
            <div className="grid grid-cols-3 gap-[18px]">
              {country.borders!.map((borderCountry, index) => (
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
