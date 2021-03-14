import { Ratings } from '../components/SightsList/SightsList.model';

export const setInnerHtml = (text: string): { __html: string } => ({ __html: text });

export const getSightRatings = (id: string, ratings: Ratings[]): Ratings[] =>
  ratings.filter(rating => rating.placeId === id);

export const countRate = (ratings: Ratings[]): number => ratings.reduce((prev, curr) => prev + curr.rating, 0);

export const decimalize = (n: number): string => (n < 10 ? `0${n}` : `${n}`);
