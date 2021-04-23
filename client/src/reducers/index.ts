import { Dispatch } from 'redux';
import { ACTIONS } from '../actions/constants';
import { authApi, travelApi } from '../utils/apiConnect';
import { setCountries, setCountry, setUser, setCountriesWithPlaces } from '../actions/index';
import { MapAllProps } from '../components/SightsMap/MapChart.model';
import { CountryProps, CountryWithPlacesProps } from '../components/Country/Country.model';
import { User } from '../components/Auth/auth.model';

export interface StateModel {
  user?: User;
  countries?: CountryProps[];
  currCountry?: CountryWithPlacesProps;
  countriesWP?: MapAllProps;
}

export const initialState: StateModel = {
  currCountry: {
    id: '',
    imageUrl: '',
    imagePreviewUrl: '',
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
    promoDescription: '',
  },
  user: undefined,
  countriesWP: undefined,
};

/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types */
export const reducer = (state = initialState, action: any): StateModel => {
  switch (action.type) {
    case ACTIONS.SET_COUNTRIES_API:
      return {
        ...state,
        countries: action.payload,
      };
    case ACTIONS.SET_COUNTRIES_WithPlaces_API:
      return {
        ...state,
        countriesWP: action.payload,
      };
    case ACTIONS.SET_COUNTRY_API:
      return {
        ...state,
        currCountry: action.payload,
      };
    case ACTIONS.SET_USERLOGIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

interface DispatchProps {
  (dispatch: Dispatch) :any;
}
export const getUserData = (data: FormData):DispatchProps => async (dispatch: Dispatch) => {
  const user = await authApi.loginUser(data);
  dispatch(setUser(user));
  return user;
};

export const getCountriesFromApi = (lang: string):DispatchProps => async (dispatch: Dispatch) => {
  const countries = await travelApi.getCountries(lang);
  dispatch(setCountries(countries));
  return countries;
};

export const getCountryByIdFromApi = (id: string, lang: string):DispatchProps => async (dispatch: Dispatch) => {
  const country = await travelApi.getCountryById(id, lang);
  dispatch(setCountry(country));
  return country;
};

export const getCountriesWithPlacesInfoFromApi = (lang: string):DispatchProps => async (dispatch: Dispatch) => {
  const countries = await travelApi.getCountriesWithPlacesInfo(lang);
  dispatch(setCountriesWithPlaces(countries));
  return countries;
};
