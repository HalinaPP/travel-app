import { Ratings, Sights } from '../SightsList/SightsList.model';

export interface CountryProps {
  id: string;
  imageUrl: string;
  videoUrl: string;
  currency: string;
  ISOCode: string;
  capitalLocation: { coordinates: number[]; type: string };
  name: string;
  capital: string;
  description: string;
}

export interface CountryWithPlacesProps extends CountryProps {
  places: Sights[];
  ratings: Ratings[];
}

export interface CurrCountryProps {
  currCountry: CountryWithPlacesProps;
  getCountryByIdFromApi: (id: string) => Promise<CountryProps>;
}
