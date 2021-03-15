import { Dispatch } from 'redux';
import { ACTIONS } from '../actions/constants';
import { LANGS } from '../constants/constants';
import { authApi, travelApi } from '../utils/apiConnect';
import { setCountries, setCountry, setUser } from '../actions/index';
import { CountryProps, CountryWithPlacesProps } from '../components/Country/Country.model';
import { AuthData, User } from '../components/Auth/auth.model';

export interface StateModel {
  user?: User;
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
  },
  user: undefined,
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
    case ACTIONS.SET_USERLOGIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const getUserData = (data: AuthData) => async (dispatch: Dispatch) => {
  const user = await authApi.loginUser(data);
  dispatch(setUser(user));
  return user;
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
