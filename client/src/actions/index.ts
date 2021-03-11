import { ACTIONS } from './constants';
import { CountryProps } from '../components/Country/Country.model';

export const changeLang = (lang: string) => ({
  type: ACTIONS.changeLang,
  payload: lang,
});

export const setCountries = (countries: Array<CountryProps>): any => ({
  type: ACTIONS.GET_COUNTRIES_API,
  payload: countries,
});
