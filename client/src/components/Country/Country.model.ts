export interface CountryProps {
  imageUrl: string;
  videoUrl: string;
  currency: string;
  ISOCode: string;
  capitalLocation: number[];
  localizations: {
    id: string;
    name: string;
    capital: string;
    description: string;
  }[];
}
