import { ACTIONS } from '../actions/constants';
import { LANGS } from '../constants/constants';
import { travelApi } from '../utils/apiConnect';
import { Dispatch } from 'redux';
import { setCountries } from '../actions/index';
import {CountryProps} from '../components/Country/Country.model';

export interface StateModel {
  lang: string;
  user?: {
    id: number;
    nickName: string;
  };
  countries?:CountryProps[]
}

export const initialState: StateModel = {
  lang: LANGS.ru,
};

export const reducer = (state = initialState, action: any): StateModel => {
  switch (action.type) {
    case ACTIONS.changeLang:
      return {
        ...state,
        lang: action.payload,
      };
    case ACTIONS.GET_COUNTRIES_API:
      return {
        ...state,
        countries: action.payload,
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
