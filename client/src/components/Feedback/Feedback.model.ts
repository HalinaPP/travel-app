import { Sights, Ratings } from '../SightsList/SightsList.model';

export interface FeedbackProps {
  isOpen: boolean;
  setIsOpen: any;
  sight: Sights;
  ratings: Ratings[];
}
