import { CountryProps } from '../Country/Country.model';

export interface CountriesListProps {
  inputText: string;
  getCountriesFromApi: () => void;
}

export type Country = {
  name: string;
  capital: string;
};
