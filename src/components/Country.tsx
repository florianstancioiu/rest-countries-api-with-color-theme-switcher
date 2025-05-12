import { Link } from "react-router-dom";

export type Currency = {
  code: string;
  name: string;
};

export type Language = {
  name: string;
  iso639_2: string;
};

export type Country = {
  borders?: string[];
  nativeName?: string;
  subregion?: string;
  currencies?: Currency[];
  languages?: Language[];
  topLevelDomain: string;
  alpha3Code: string;
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string;
};

const Country = ({
  alpha3Code,
  name,
  flag,
  population,
  region,
  capital,
}: Country) => {
  return (
    <Link
      to={alpha3Code}
      className="mb-[5rem] bg-white dark:bg-dark-bg-one dark:text-dark-white rounded overflow-hidden shadow-normal dark:shadow-dark-normal"
    >
      <div className="">
        <img className="w-full" src={flag} alt={`${name} flag`} />
      </div>
      <div className="px-[3rem] pt-[3.75rem] pb-[5.875rem]">
        <p className="pb-[3.375rem] text-3xl font-bold">{name}</p>
        <p className="pb-[1.688rem] text-xl">
          <span className="font-bold">Population: </span>
          {population}
        </p>
        <p className="pb-[1.688rem] text-xl">
          <span className="font-bold">Region: </span>
          {region}
        </p>
        <p className="text-xl">
          <span className="font-bold">Capital: </span>
          {capital}
        </p>
      </div>
    </Link>
  );
};

export default Country;
