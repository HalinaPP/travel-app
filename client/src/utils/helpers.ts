import { Ratings } from '../components/SightsList/SightsList.model';

export const setInnerHtml = (text: string): { __html: string } => ({ __html: text });

export const getSightRatings = (id: string, ratings: Ratings[]): Ratings[] =>
  ratings.filter((rating) => rating.placeId === id);

export const countRate = (ratings: Ratings[]): number =>
  Math.round(ratings.reduce((prev, curr) => prev + curr.rating / ratings.length, 0) * 10) / 10;
