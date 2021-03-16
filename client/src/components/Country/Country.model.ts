import { Ratings, Sights } from '../SightsList/SightsList.model';

export interface CountryProps {
  id: string;
  imageUrl: string;
  imagePreviewUrl: string;
  videoUrl: string;
  currency: string;
  ISOCode: string;
  capitalLocation: { coordinates: number[]; type: string };
  name: string;
  capital: string;
  description: string;
  timezone: string;
  flagUrl: string;
}

export interface CountryWithPlacesProps extends CountryProps {
  places: Sights[];
  ratings: Ratings[];
}

export interface CurrCountryProps {
  currCountry: CountryWithPlacesProps;
  getCountryByIdFromApi: (id: string, lang: string) => Promise<CountryProps>;
}
