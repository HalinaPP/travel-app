export interface Sights {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Ratings {
  id: string;
  placeId: string;
  nickName: string;
  rating: number;
  avatar: string;
  feedbackText?: string;
}

export interface SightProps {
  sights: Sights[];
  ratings: Ratings[];
}
