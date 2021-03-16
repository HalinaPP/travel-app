import { Ratings } from '../SightsList/SightsList.model';

export interface RatingProps {
  nickName?: string;
  placeId?: string;
  countryId?: string;
  currCountry: {
    ratings: Ratings[];
    id: string;
  };
}
