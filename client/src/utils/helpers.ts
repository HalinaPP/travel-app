import { Ratings } from '../components/Sight/Sight.model';

export const setInnerHtml = (text: string): { __html: string } => ({ __html: text });

export const countRate = (id: string, ratings: Ratings[]): number =>
  ratings.filter(rating => rating.placeId === id).reduce((prev, curr) => prev + curr.rating, 0);
