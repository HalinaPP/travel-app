import { useSelector } from 'react-redux';
import { CountryProps } from '../components/Country/Country.model';
import { HEADER_JSON, API_COUNTRIES_URLS, API_COUNTRY_URLS, API_AUTH_URLS } from '../constants/constants';

export interface HeaderValues {
  [key: string]: string;
}

const getRequestInit = (method = 'GET'): RequestInit => {
  const headers: HeaderValues = {
    ...HEADER_JSON,
  };
  /* Для авторизированного пользователя
   const accessToken = useSelector((state: any) => state.user?.token) ?? null;

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

   */
  return {
    method,
    headers,
    mode: 'cors',
    cache: 'default',
  };
};

const loginUser = async (body: any): Promise<any> => {
  const apiObject = await fetch(`${API_AUTH_URLS}/login`, {
    body,
    method: 'POST',
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch(
      (error) => {
        throw new Error(error);
      },
    );
  return apiObject;
};

const registerUser = async (body: any): Promise<any> => {
  const apiObject = await fetch(`${API_AUTH_URLS}/register`, {
    body,
    method: 'POST',
  }).then((response) => response.json())
    .then(data => data)
    .catch(
      (error) => {
        throw new Error(error);
      },
    );
  return apiObject;
};

const getCountries = async (): Promise<CountryProps[]> => {
  const requestInit = getRequestInit();
  const lang = 'ru';
  const apiObject = await fetch(`${API_COUNTRIES_URLS}?lang=${lang}`, requestInit)
    .then((response: Response): Promise<CountryProps[]> => response.json())
    .then((countries: CountryProps[]) => countries)
    .catch(error => {
      throw new Error(error);
    });
  return apiObject;
};

const getCountryById = async (id: string): Promise<CountryProps> => {
  const requestInit = getRequestInit();
  const lang = 'ru';
  const apiObject = await fetch(`${API_COUNTRIES_URLS}/${id}?lang=${lang}`, requestInit)
    .then((response: Response): Promise<CountryProps> => response.json())
    .then((country: CountryProps) => country)
    .catch(error => {
      throw new Error(error);
    });
  return apiObject;
};

export const travelApi = { getCountries, getCountryById };
export const authApi = { loginUser, registerUser };
