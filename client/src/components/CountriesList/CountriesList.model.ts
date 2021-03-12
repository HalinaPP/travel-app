import { CountryProps } from '../Country/Country.model';

export interface CountriesListProps {
  inputText: string;
  countries?: CountryProps[];
  getCountriesFromApi: () => void;
}

export type Country = {
  name: string;
  capital: string;
};
