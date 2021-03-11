import { CountryProps } from '../Country/Country.model';

export interface CountriesListProps {
  inputText: string;
  getCountries: () => CountryProps[];
}

export type Country = {
  name: string;
  capital: string;
};
