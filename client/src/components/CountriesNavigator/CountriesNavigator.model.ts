import { CountryProps } from '../Country/Country.model';

export interface CountriesNavigatorProps {
  currCountryName: string;
  countries?: CountryProps[];
  getCountriesFromApi: (lang: string) => void;
}
