export interface MapProps {
  iso: string;
  capitalName: string;
  capitalCoords: Array<number>;
  lang: string;
  zoom: number;
  sights: Array<PlacemarkProps>;
  imageHref: string;
}

export interface PlacemarkProps {
  name: string;
  coords: Array<number>;
  preset?: string;
}
