import { ACTIONS } from './constants';
import { CountryProps } from '../components/Country/Country.model';

export const setCountries = (countries: Array<CountryProps>): any => ({
  type: ACTIONS.GET_COUNTRIES_API,
  payload: countries,
});

export const setCountry = (country: CountryProps): any => ({
  type: ACTIONS.GET_COUNTRY_API,
  payload: country,
});
