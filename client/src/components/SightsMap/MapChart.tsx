/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { memo } from 'react';
import { ZoomableGroup, ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { Link } from 'react-router-dom';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';
const countryLink = '/ru/country/604c9011d16ff03e6d7ae271';
const markers = [
  { markerOffset: 0, name: 'Астана-Байтерек', coordinates: [71.430411, 51.128207] },
  { markerOffset: 0, name: 'Мавзолей Ходжи Ахмеда Ясави', coordinates: [71.430411, 51.128207] },
  { markerOffset: 0, name: 'Космодром Байконур', coordinates: [63.286159, 45.926185] },
  { markerOffset: 0, name: 'Карта Казахстана «Атамекен»', coordinates: [71.417565, 51.149306] },
  { markerOffset: 0, name: 'Петроглифы Тамгалы-Тас', coordinates: [76.996462, 44.061422] },
  { markerOffset: 0, name: 'Чарынский каньон', coordinates: [79.095187, 43.353811] },
];

const rounded = (num: number) => {
  if (num > 1000000000) {
    return `${Math.round(num / 100000000) / 10}Bn`;
  }
  if (num > 1000000) {
    return `${Math.round(num / 100000) / 10}M`;
  }
  return `${Math.round(num / 100) / 10}K`;
};

const MapChart = ({ setTooltipContent }: any) => (
  <>
    <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
      <ZoomableGroup>
        <Geographies geography={geoUrl}>
          {({ geographies }: any) =>
            geographies.map(
              (geo: { rsmKey: React.Key | null | undefined; properties: { NAME: any; POP_EST: any } }) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, POP_EST } = geo.properties;
                    setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent('');
                  }}
                  style={{
                    default: {
                      fill: '#D6D6DA',
                      outline: 'none',
                    },
                    hover: {
                      fill: '#F53',
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#E42',
                      outline: 'none',
                    },
                  }}
                />
              ),
            )
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Link to={countryLink}>
            {/* @ts-ignore */}
            <Marker key={name} coordinates={coordinates}>
              <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
              <text textAnchor="middle" y={markerOffset} style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}>
                {name}
              </text>
            </Marker>
          </Link>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  </>
);

export default memo(MapChart);
