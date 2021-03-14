export interface CurrencyProps {
  currency: string,
}

export type TCurrencyTitle = {
  [key: string]: string[],
};

export type TCurrencyCash = {
  [key: string]: number[],
};

export type TCurrencyData = {
  rates: number[],
  base: string,
};
