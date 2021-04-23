import { ACTIONS } from './constants';
import { CountryProps } from '../components/Country/Country.model';
import { User } from '../components/Auth/auth.model';
import { MapAllProps } from '../components/MapAll/MapAll.model';
/* eslint-disable @typescript-eslint/no-explicit-any */
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

export const setCountriesWithPlaces = (countries: MapAllProps): any => ({
  type: ACTIONS.SET_COUNTRIES_WithPlaces_API,
  payload: countries,
});
