import './styles.scss';
import React, { FC } from 'react';
import { CurrencyProps } from './Currency.model';

const Currency: FC<CurrencyProps> = (props: CurrencyProps) => {
  const { currency } = props;
  const currencies = { 'Российский рубль': 15, Евро: 121, 'Доллар США': 212 };
  const CURRENCY_SYMBOLS: string[] = ['₽', '€', '$'];
  const CURRENCY_TITLES: string[] = ['Российский рубль', 'Евро', 'Доллар США'];
  const titles: string[] = Object.keys(currencies);
  const values: number[] = Object.values(currencies);
  return (
    <div className="currency-container">
      <ul className="currency-list">
        {
          CURRENCY_SYMBOLS.map((currencySymbol, index) => <li title={titles[index]}
            className="currency-item"
            key={values[index].toFixed(0)}>
            {`${currencySymbol} ${values[index].toFixed(2)}`}
          </li>)
        }
      </ul>
    </div>
  );
};
export default Currency;
