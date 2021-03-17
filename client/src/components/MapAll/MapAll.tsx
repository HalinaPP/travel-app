import { FC, useEffect, useContext } from 'react';
import { MapAllListProps } from './MapAll.model';
import { LanguageContext } from '../../utils/LanguageContext';

const MapAll: FC<MapAllListProps> = ({ countriesWP, getCountriesWithPlacesInfoFromApi }) => {
  const { lang: currLang } = useContext(LanguageContext);

  useEffect(() => {
    const firstLoad = async () => {
      await getCountriesWithPlacesInfoFromApi(currLang);
    };
    firstLoad();
  }, []);

  useEffect(() => {
    getCountriesWithPlacesInfoFromApi(currLang);
  }, [currLang]);

  return <div>{countriesWP?.countries[0].name}</div>;
};

export default MapAll;
