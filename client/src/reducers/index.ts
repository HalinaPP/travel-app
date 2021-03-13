import { Dispatch } from 'redux';
import { ACTIONS } from '../actions/constants';
import { LANGS } from '../constants/constants';
import { travelApi } from '../utils/apiConnect';
import { setCountries, setCountry } from '../actions/index';
import { CountryProps } from '../components/Country/Country.model';

export interface StateModel {
  user?: {
    id: number;
    nickName: string;
  };
  countries?: CountryProps[];
  currCountry?: CountryProps;
}

export const initialState: StateModel = {};

export const reducer = (state = initialState, action: any): StateModel => {
  switch (action.type) {
    case ACTIONS.GET_COUNTRIES_API:
      return {
        ...state,
        countries: action.payload,
      };
    case ACTIONS.GET_COUNTRY_API:
      return {
        ...state,
        currCountry: action.payload,
      };
    default:
      return state;
  }
};

export const getCountriesFromApi = () => async (dispatch: Dispatch) => {
  const countries = await travelApi.getCountries();
  dispatch(setCountries(countries));
  return countries;
};

export const getCountryByIdFromApi = (id: string) => async (dispatch: Dispatch) => {
  const country = await travelApi.getCountryById(id);
  dispatch(setCountry(country));
  return country;
};
