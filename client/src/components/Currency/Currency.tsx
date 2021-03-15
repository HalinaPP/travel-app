import './styles.scss';
import React, {
  FC,
  useState,
  useEffect,
  useContext,
} from 'react';
import { Context } from '../../utils/Context';
import { CurrencyProps, TCurrencyCache, TCurrencyData } from './Currency.model';
import { CURRENCY_URLS, CURRENCY_SYMBOLS, CURRENCY_TITLES } from './constants';

const getAllFormattedCurrencies = (responseJSONArray: TCurrencyData[]) => responseJSONArray
  .reduce((currencyCache: TCurrencyCache, currencyData: TCurrencyData) => {
    currencyCache[currencyData.base] = Object.values(currencyData.rates)
      .map((rate, idx) => {
        const divider = idx ? 1 : 100;
        return divider / rate >= 100
          ? Math.round(divider / rate)
          : Number.parseFloat((divider / rate).toFixed(2));
      });
    return currencyCache;
  }, {});

const Currency: FC<CurrencyProps> = (props: CurrencyProps) => {
  const { lang: currLang } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState<number[]>([]);

  useEffect(() => {
    if (!values) return;
    const storedCurrencies = sessionStorage.getItem('travelApp131-currency');
    if (storedCurrencies) {
      setValues(JSON.parse(storedCurrencies)[props.currency]);
      setLoading(false);
    } else {
      Promise.all(CURRENCY_URLS.map((url) => fetch(url)
        .then(response => response.json())))
        .then(getAllFormattedCurrencies)
        .then((currencyCache) => {
          sessionStorage.setItem('travelApp131-currency', JSON.stringify(currencyCache));
          setValues(currencyCache[props.currency]);
        })
        .catch(() => setValues([]))
        .finally(() => setLoading(false));
    }
  }, [props.currency]);

  const currencies = Array.isArray(values)
    ? CURRENCY_SYMBOLS.map((currencySymbol, index) => (
      <li className="currency-item"
        title={CURRENCY_TITLES[currLang][index]}
        key={CURRENCY_TITLES[currLang][index]} >
        <strong>{currencySymbol}</strong>
        {` ${loading ? '--' : values[index]}`}
      </li>))
    : <li className="currency-item">no data</li>;

  return (
    <div className="currency-container">
      <ul className="currency-list">
        {currencies}
      </ul>
    </div>
  );
};
export default Currency;
