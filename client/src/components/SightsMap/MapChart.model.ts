export interface CountryMainInfo {
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
export interface PlaceMainInfo {
  id: string;
  name: string;
  countryId: string;
  imageUrl: string;
  coords: number[];
}

export interface MapAllProps {
  countries: CountryMainInfo[];
  allPlaces: PlaceMainInfo[];
}

export interface MapAllListProps {
  setTooltipContent: any;
  countriesWP?: MapAllProps;
  getCountriesWithPlacesInfoFromApi: (lang: string) => void;
}
