import { ACTIONS } from './constants';
import { CountryProps } from '../components/Country/Country.model';
import { User } from '../components/Auth/auth.model';
import { MapAllProps } from '../components/MapAll/MapAll.model';

interface ISetCountriesAction {
  type: string;
  payload: CountryProps[];
}

interface ISetCountryAction {
  type: string;
  payload: CountryProps;
}

interface ISetUserAction {
  type: string;
  payload: User | undefined;
}

interface ISetCountriesWithPlacesAction {
  type: string;
  payload: MapAllProps;
}

export const setCountries = (countries: Array<CountryProps>): ISetCountriesAction => ({
  type: ACTIONS.SET_COUNTRIES_API,
  payload: countries,
});

export const setCountry = (country: CountryProps): ISetCountryAction => ({
  type: ACTIONS.SET_COUNTRY_API,
  payload: country,
});

export const setUser = (user: User | undefined): ISetUserAction => ({
  type: ACTIONS.SET_USERLOGIN,
  payload: user,
});

export const setCountriesWithPlaces = (countries: MapAllProps): ISetCountriesWithPlacesAction => ({
  type: ACTIONS.SET_COUNTRIES_WithPlaces_API,
  payload: countries,
});
