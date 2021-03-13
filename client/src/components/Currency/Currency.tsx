import './styles.scss';
import React, {
  FC,
  useEffect,
  useState,
  useContext,
} from 'react';
import { CurrencyProps, TCurrencyValue } from './Currency.model';
import { Context } from '../../utils/Context';
import { CURRENCIES, CURRENCY_SYMBOLS, CURRENCY_TITLES } from './constants';

const apiKey = 'ad62f5f58d475b612757e8490c150c56';
const baseUrl = `http://data.fixer.io/api/latest?access_key=${apiKey}&base=`;
const baseCurrencies = '&symbols=RUB,EUR,USD';

const Currency: FC<CurrencyProps> = (props: CurrencyProps) => {
  const { lang: currLang } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState<number[] | string[] | never[]>([]);

  useEffect(() => {
    const lsItem = sessionStorage.getItem('travelApp131-currency');
    if (lsItem) {
      setValues(JSON.parse(lsItem)[props.currency]);
      setLoading(false);
    } else {
      const currencyCash: TCurrencyValue = {};
      Promise.all(
        CURRENCIES.map((currency) => fetch(baseUrl + currency + baseCurrencies)
          .then((res) => res.json())),
      ).then((currencyObjArray) => {
        currencyObjArray.forEach(data => {
          const arr: number[] = Object.values(data.rates);
          currencyCash[data.base] = arr.map(rate => +rate.toFixed(4));
        });
        sessionStorage.setItem('travelApp131-currency', JSON.stringify(currencyCash));
        setLoading(false);
        setValues(currencyCash[props.currency]);
      }).catch(() => {
        setLoading(false);
        setValues(['no data', 'no data', 'no data']);
      });
    }
  }, []);
  return (
    <div className="currency-container">
      <ul className="currency-list">
        {
          CURRENCY_SYMBOLS.map((currencySymbol, index) => (<li title={CURRENCY_TITLES[currLang][index]}
            className="currency-item"
            key={CURRENCY_TITLES[currLang][index]}>
            {`${currencySymbol} ${loading ? '--' : values[index]}`}
          </li>))
        }
      </ul>
    </div>
  );
};
export default Currency;
