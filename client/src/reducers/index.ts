import { Dispatch } from 'redux';
import { ACTIONS } from '../actions/constants';
import { travelApi } from '../utils/apiConnect';
import { setCountries, setCountry } from '../actions/index';
import { CountryProps, CountryWithPlacesProps } from '../components/Country/Country.model';

export interface StateModel {
  user?: {
    id: number;
    nickName: string;
  };
  countries?: CountryProps[];
  currCountry?: CountryWithPlacesProps;
}

export const initialState: StateModel = {
  currCountry: {
    id: '',
    imageUrl: '',
    videoUrl: '',
    currency: '',
    ISOCode: '',
    capitalLocation: { coordinates: [0, 0], type: 'Point' },
    name: '',
    capital: '',
    description: '',
    places: [],
    ratings: [],
    timezone: '',
    flagUrl: '',
  },
};

export const reducer = (state = initialState, action: any): StateModel => {
  switch (action.type) {
    case ACTIONS.SET_COUNTRIES_API:
      return {
        ...state,
        countries: action.payload,
      };
    case ACTIONS.SET_COUNTRY_API:
      return {
        ...state,
        currCountry: action.payload,
      };
    default:
      return state;
  }
};

export const getCountriesFromApi = (lang: string) => async (dispatch: Dispatch) => {
  const countries = await travelApi.getCountries(lang);
  dispatch(setCountries(countries));
  return countries;
};

export const getCountryByIdFromApi = (id: string, lang: string) => async (dispatch: Dispatch) => {
  const country = await travelApi.getCountryById(id, lang);
  dispatch(setCountry(country));
  return country;
};
