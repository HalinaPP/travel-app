export interface countryMainInfo {
  id: string;
  name: string;
  capital: string;
  currency: string;
  ISOCode: string;
  capitalLocation: {
    type: string;
    coordinates: number[];
  };
  timezone: string;
  imagePreviewUrl: string;
}
export interface placeMainInfo {
  id: string;
  name: string;
  countryId: string;
  imageUrl: string;
  coords: number[];
}

export interface MapAllProps {
  countries: countryMainInfo[];
  allPlaces: placeMainInfo[];
}

export interface MapAllListProps {
  countriesWP?: MapAllProps;
  getCountriesWithPlacesInfoFromApi: (lang: string) => void;
}
