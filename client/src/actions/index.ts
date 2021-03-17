import { ACTIONS } from './constants';
import { CountryProps } from '../components/Country/Country.model';
import { User } from '../components/Auth/auth.model';

export const setCountries = (countries: Array<CountryProps>): any => ({
  type: ACTIONS.SET_COUNTRIES_API,
  payload: countries,
});

export const setCountry = (country: CountryProps): any => ({
  type: ACTIONS.SET_COUNTRY_API,
  payload: country,
});

export const setUser = (user: User | undefined): any => ({
  type: ACTIONS.SET_USERLOGIN,
  payload: user,
});
