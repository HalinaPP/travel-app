export interface CountryProps {
  id:string;
  imageUrl: string;
  videoUrl: string;
  currency: string;
  ISOCode: string;
  capitalLocation: number[];
  name: string;
  capital: string;
  description: string;
}
/* я делал просы которые ниже, они чуть более распространенные. Кто делает родительский компонент - подредачьте */
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
