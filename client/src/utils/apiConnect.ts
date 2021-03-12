import { CountryProps } from '../components/Country/Country.model';
import { HEADER_JSON, API_COUNTRIES_URLS } from '../constants/constants';

const getRequestInit = (method = 'GET'): RequestInit => {
  /* const { accessToken } = store.getState().user; */
  const headers = {
    // Authorization: `Bearer ${accessToken}`,
    ...HEADER_JSON,
  };
  return {
    method,
    headers,
    mode: 'cors',
    cache: 'default',
    credentials: 'include',
  };
};

const getCountries = async (): Promise<CountryProps[]> => {
  const requestInit = getRequestInit();
  console.log('getCountries');
  const lang = 'ru';
  const apiObject = await fetch(`${API_COUNTRIES_URLS}?lang=${lang}`, requestInit)
    .then(
      (response: Response): Promise<CountryProps[]> => {
        console.log('json');
        return response.json();
      },
    )
    .then((countries: CountryProps[]) => {
      console.log('con', countries);
      return countries;
    })
    .catch(error => {
      throw new Error(error);
    });
  console.log('api=', apiObject);
  return apiObject;
};

export const travelApi = { getCountries };
