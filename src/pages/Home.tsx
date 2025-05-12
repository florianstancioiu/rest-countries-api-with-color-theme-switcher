import { useEffect, useState } from "react";
import Country from "../components/Country";
import Dropdown from "../components/Dropdown";
import SearchInput from "../components/SearchInput";
import { type Country as CountryType } from "../components/Country";

export type Region = {
  id: number;
  name: string;
};

const regions: Region[] = [
  {
    name: "Africa",
    id: 1,
  },
  {
    name: "Americas",
    id: 2,
  },
  {
    name: "Asia",
    id: 3,
  },
  {
    name: "Europe",
    id: 4,
  },
  {
    name: "Oceania",
    id: 5,
  },
  {
    name: "All",
    id: 6,
  },
];

const Home = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<CountryType[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [region, setRegion] = useState<Region>(regions[5]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(`data.json`);
      const countries = await response.json();

      setCountries(countries);
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const filteredResults = countries
      .filter((item) => {
        if (searchKeyword === "") {
          return true;
        }

        if (
          item.name!.toLowerCase().includes(searchKeyword.trim().toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      })
      .filter((item) => {
        if (region.name === "All") {
          return true;
        }

        if (item.region.toLowerCase() === region.name.toLowerCase()) {
          return true;
        }

        return false;
      });

    setFilteredCountries(filteredResults);
  }, [searchKeyword, region, countries]);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchKeyword(event.target.value);
  };

  const handleRegionChange = (value: Region) => {
    setRegion(value);
  };

  return (
    <>
      <div className="fm:px-0 px-[1.875rem] pt-[2.813rem] fm:w-[1282px] fm:mx-auto fm:flex fm:justify-between fm:items-center">
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
      <div className="px-[7rem] fm:w-[1282px] fm:mx-auto fm:grid fm:grid-cols-4 fm:gap-[75px] fm:px-0">
        {filteredCountries.map((country) => (
          <Country
            alpha3Code={country.alpha3Code}
            key={country.name}
            name={country.name}
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
