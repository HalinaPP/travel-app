import { Ratings } from '../SightsList/SightsList.model';
import { CountryProps, CountryWithPlacesProps } from '../Country/Country.model';

export interface RatingProps {
  nickName?: string;
  placeId?: string;
  countryId?: string;
  currCountry: CountryWithPlacesProps;
  getCountryByIdFromApi: (id: string, lang: string) => Promise<CountryProps>;
}
