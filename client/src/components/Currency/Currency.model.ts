export interface CurrencyProps {
  currency: string,
}

export type TCurrencyTitle = {
  [key: string]: string[],
};

export type TCurrencyCache = {
  [key: string]: number[],
};

export type TCurrencyData = {
  rates: number[],
  base: string,
};
