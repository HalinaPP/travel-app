import './map.scss';
import React, {
  FC, useCallback, Ref,
} from 'react';
import {
  Map as MapYandex,
  YMaps,
  Placemark,
  FullscreenControl,
  YMapsApi,
  ObjectManagerFeature,
  ObjectManagerFeatureCollection,
  PolygonGeometry,
} from 'react-yandex-maps';

import { MapProps } from './Map.model';

const isObjectManagerFeatureArray = (array: Array<ObjectManagerFeature | ObjectManagerFeatureCollection>):
  array is Array<ObjectManagerFeature> => array.every((el) => el.type === 'Feature');

const balloonPlacemark = (el: any) => <Placemark geometry={ el.coords }
                                                 properties={{ balloonContent: el.name }}
                                                 options={{ preset: el.preset ? el.preset : 'islands#blueGovernmentIcon' }}/>;
const Map: FC<MapProps> = (props: MapProps) => {
  const mapRef = React.useRef<any>(null);
  const setMapRef = useCallback((instance: Ref<any>) => { mapRef.current = instance; }, []);

  const getRegion = (ymaps: YMapsApi) => {
    if (mapRef.current && mapRef) {
      ymaps.borders
        .load('001', {
          lang: 'en',
          quality: 3,
        }).then((result: ObjectManagerFeatureCollection) => {
        const polygones = result.features;
        if (!isObjectManagerFeatureArray(polygones)) {
          return;
        }
        const polygonData = polygones.find((el) => el.properties?.iso3166 === props.iso);
        const polygon: PolygonGeometry = new ymaps.Polygon(polygonData?.geometry.coordinates, {}, {
          fillOpacity: 0.6,
          fillImageHref: props.imageHref,
          fillMethod: 'stretch',
          strokeColor: '#000',
          strokeOpacity: 0.5,
          fillColor: '#3D4C76',
        });
        mapRef.current.geoObjects.add(polygon);
      });
    }
  };
  return (
    <div className='map'>
      <YMaps query={{ lang: 'en_RU' }}>
        <MapYandex
          state={{ center: props.capitalCoords, zoom: props.zoom }}
          options={{ minZoom: 2 }}
          width="100%"
          height="58rem"
          onLoad={(ymaps) => getRegion(ymaps)}
          instanceRef={setMapRef}
          modules={['borders', 'Polygon', 'geoObject.addon.balloon']}
        >
          <FullscreenControl />
          <Placemark geometry={props.capitalCoords}
                     properties={{ balloonContent: `Столица ${props.capitalName}` }}
                     options={{ preset: 'islands#redGovernmentIcon' }}
          />
          { props.sights.map(balloonPlacemark) }
        </MapYandex>
      </YMaps>
    </div>
  );
};
export default Map;
