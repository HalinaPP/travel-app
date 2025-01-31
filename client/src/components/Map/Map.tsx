import './map.scss';

import React, { FC, useCallback, Ref, useState, useEffect } from 'react';

import {
  Map as MapYandex,
  YMaps,
  Placemark,
  FullscreenControl,
  YMapsApi,
  ObjectManagerFeature,
  ObjectManagerFeatureCollection,
  PolygonGeometry,
  TypeSelector,
  GeoObjectGeometry,
} from 'react-yandex-maps';

import { MapProps, PlacemarkProps } from './Map.model';

import {
  queryLang,
  minZoom,
  capitalTranslation,
  fillMethod,
  fillOpacity,
  fillColor,
  strokeColor,
  strokeOpacity,
  customPreset,
  loadingModules,
  loadingGeometry,
  loadingQuality,
  loadingLanguage,
  yaMapsApiKey,
  zoom,
} from '../../constants/map.constants';

const isObjectManagerFeatureArray = (
  array: Array<ObjectManagerFeature | ObjectManagerFeatureCollection>,
): array is Array<ObjectManagerFeature> => array.every(el => el.type === 'Feature');

const balloonPlacemark = ({ coords, name, preset }: PlacemarkProps) => (
  <Placemark
    geometry={coords}
    properties={{ balloonContent: name }}
    options={preset ? { preset } : { preset: 'islands#blueGovernmentIcon' }}
  />
);

const Map: FC<MapProps> = (props: MapProps) => {
  const { iso, capitalName, capitalCoords, lang, sights, imageHref } = props;
  /* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
  const mapRef = React.useRef<any>(null);

  const [zoomCustom, setZoomCustom] = useState<number>(zoom);
  const [ymapsP, setYmapsP] = useState<YMapsApi>({});
  const getZoom = () => {
    if (mapRef.current) {
      if (mapRef.current.getZoom() >= 6) {
        mapRef.current.geoObjects.each((el: GeoObjectGeometry) => {
          if (el.options.get('fillOpacity')) {
            el.options.set('fillOpacity', 0.1);
          }
        });
      } else {
        mapRef.current.geoObjects.each((el: GeoObjectGeometry) => {
          if (el.options.get('fillOpacity')) {
            el.options.set('fillOpacity', fillOpacity);
          }
        });
      }
    }
  };

  const setMapRef = useCallback((instance: Ref<any>) => {
    mapRef.current = instance;
  }, []);

  const getRegion = (ymaps: YMapsApi) => {
    if (mapRef && mapRef.current) {
      ymaps.borders
        .load(loadingGeometry, {
          lang: loadingLanguage,
          quality: loadingQuality,
        })
        .then((result: ObjectManagerFeatureCollection) => {
          const polygones = result.features;
          if (!isObjectManagerFeatureArray(polygones)) {
            return;
          }
          const polygonData = polygones.find(el => el.properties?.iso3166 === iso);
          const polygon: PolygonGeometry = new ymaps.Polygon(
            polygonData?.geometry.coordinates,
            {},
            {
              fillOpacity,
              fillImageHref: imageHref,
              fillMethod,
              strokeColor,
              strokeOpacity,
              fillColor,
            },
          );
          mapRef.current.geoObjects.add(polygon);
        });
    }
  };

  return (
    <div className="map">
      <YMaps query={{ lang: queryLang, apikey: yaMapsApiKey }}>
        <MapYandex
          state={{ center: capitalCoords, zoom: zoomCustom }}
          options={{ minZoom }}
          width="100%"
          height="58rem"
          onLoad={ymaps => getRegion(ymaps)}
          instanceRef={setMapRef}
          modules={loadingModules}
          onBoundsChange={getZoom}
        >
          <FullscreenControl />
          <Placemark
            geometry={capitalCoords}
            properties={{ balloonContent: `${capitalTranslation[lang]} ${capitalName}` }}
            options={{ preset: customPreset }}
          />
          {sights && sights.map(balloonPlacemark)}
          <TypeSelector mapTypes={[]} />
        </MapYandex>
      </YMaps>
    </div>
  );
};
export default Map;
