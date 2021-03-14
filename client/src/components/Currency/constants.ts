import { TCurrencyTitle } from './Currency.model';

const API_KEY = 'ad62f5f58d475b612757e8490c150c56';
const BASE_URL = `http://data.fixer.io/api/latest?access_key=${API_KEY}&base=`;
const BASE_CURRENCIES = '&symbols=RUB,EUR,USD';
const CURRENCIES = ['BYN', 'CAD', 'CHF', 'EUR', 'GEL', 'ISK', 'KZT', 'MXN', 'NOK', 'RON'];

export const CURRENCY_URLS = CURRENCIES
  .map((currency) => BASE_URL + currency + BASE_CURRENCIES);
export const CURRENCY_SYMBOLS: string[] = ['100₽', '1€', '1$'];
export const CURRENCY_TITLES: TCurrencyTitle = {
  en: ['Russian ruble', 'Euro', 'U.S. dollar'],
  ru: ['Российский рубль', 'Евро', 'Доллар США'],
  bg: ['Руска рубла', 'Евро', 'Американски долар'],
};
