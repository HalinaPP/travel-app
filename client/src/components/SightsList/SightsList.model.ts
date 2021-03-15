export interface Sights {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Ratings {
  id: string;
  placeId: string;
  userNickName: string;
  rating: number;
}

export interface SightProps {
  sights: Sights[];
  ratings: Ratings[];
}
