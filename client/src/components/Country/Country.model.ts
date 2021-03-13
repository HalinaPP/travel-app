export interface CountryProps {
  id: string;
  imageUrl: string;
  videoUrl: string;
  currency: string;
  ISOCode: string;
  capitalLocation: number[];
  name: string;
  capital: string;
  description: string;
}

export interface CurrCountryProps {
  currCountry: CountryProps;
  getCountryByIdFromApi: (id: string) => Promise<CountryProps>;
}
