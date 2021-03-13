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
  };
};

const getCountries = async (): Promise<CountryProps[]> => {
  const requestInit = getRequestInit();
  const lang = 'ru';
  const apiObject = await fetch(`${API_COUNTRIES_URLS}?lang=${lang}`, requestInit)
    .then(
      (response: Response): Promise<CountryProps[]> => response.json(),
    )
    .then((countries: CountryProps[]) => countries)
    .catch(error => {
      throw new Error(error);
    });
  return apiObject;
};

export const travelApi = { getCountries };
