/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { memo, useContext, useEffect, FC } from 'react';
import { ZoomableGroup, ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const markers = [
  {
    // KAZAKHSTAN
    markerOffset: -10,
    name: 'Baiterek, Atameken, The mausoleum of Khoja Akhmed Yasavi',
    coordinates: [71.430411, 51.128207],
  },
  { markerOffset: 15, name: 'Baikonur', coordinates: [63.286159, 45.926185] },
  { markerOffset: 15, name: 'Petroglyphs of Tamgaly-Tas', coordinates: [76.996462, 44.061422] },
  { markerOffset: 15, name: 'Charyn canyon', coordinates: [79.095187, 43.353811] },
  // ICELAND
  { markerOffset: 15, name: 'Whale Watching', coordinates: [-20.706012951412067, 65.87326452646111] },
  { markerOffset: 15, name: 'Geysers', coordinates: [-20.482487370177076, 64.49379914366331] },
  { markerOffset: 15, name: 'Landmannalaugar', coordinates: [-19.165008046301256, 64.29324430750243] },
  { markerOffset: 15, name: 'Waterfalls', coordinates: [-20.96773563507064, 64.84866503612854] },
  { markerOffset: 15, name: 'Ice Caves', coordinates: [-16.841916279661422, 64.56376525858055] },
  { markerOffset: 15, name: 'Head to the Hot Springs', coordinates: [-20.33587484501688, 64.2566664917179] },
  // MEXICO
  { markerOffset: 15, name: 'Cancún and the Mayan Riviera', coordinates: [-86.84656, 21.17429] },
  { markerOffset: 15, name: 'Puerto Vallarta', coordinates: [-105.2253, 20.6534] },
  { markerOffset: 15, name: 'Copper Canyon', coordinates: [-107.7561, 27.5281] },
  { markerOffset: 15, name: 'Chichén Itzá', coordinates: [-88.5678, 20.6843] },
  { markerOffset: 15, name: 'Guanajuato', coordinates: [-101.2574, 21.019] },
  { markerOffset: 15, name: 'Cozumel', coordinates: [-86.9223, 20.423] },
  // SWITZERLAND
  { markerOffset: 15, name: 'Cathedral of Grossmünster', coordinates: [8.544048, 47.370033] },
  { markerOffset: 15, name: 'Chillon Castle', coordinates: [6.9253037, 46.4142131] },
  { markerOffset: 15, name: 'Pilatus', coordinates: [8.2460464, 46.9794843] },
  { markerOffset: 15, name: 'Museum of Art and History', coordinates: [6.1493857, 46.1993078] },
  { markerOffset: 15, name: 'Matterhorn', coordinates: [7.6540745, 45.9765806] },
  { markerOffset: 15, name: 'The Dying Lion in Lucerne', coordinates: [8.3109151, 47.0584263] },
  // GEORGIA
  { markerOffset: 15, name: 'Kazbek', coordinates: [32.0871179, 48.9359663] },
  { markerOffset: 15, name: 'Svaneti', coordinates: [41.7949812, 42.6623328] },
  { markerOffset: 15, name: 'Andrew the First Called', coordinates: [44.7392383, 41.7109267] },
  { markerOffset: 15, name: 'Martvili Canyon', coordinates: [42.3735192, 42.4567207] },
  { markerOffset: 15, name: 'Svetitskhoveli', coordinates: [44.7186445, 41.8422262] },
  { markerOffset: 15, name: 'David-Gareja', coordinates: [45.3729333, 41.4448473] },
  // BELARUS
  { markerOffset: 15, name: 'Polissya swamps', coordinates: [24.9546238, 51.8147088] },
  { markerOffset: 15, name: 'Brest Fortress', coordinates: [23.6558648, 52.0827635] },
  { markerOffset: 15, name: 'Soligorsk waste heaps', coordinates: [27.4799977, 52.7896018] },
  { markerOffset: 15, name: 'Belarusian Maldives', coordinates: [24.470577, 53.279295] },
  { markerOffset: 15, name: 'Manor of the Gerards', coordinates: [31.28173, 52.31448] },
  { markerOffset: 15, name: 'Lake Svityaz', coordinates: [23.8056179, 51.4999714] },
  // CANADA
  { markerOffset: 15, name: 'The Great Lakes', coordinates: [-82.484612, 45.052238] },
  { markerOffset: 15, name: 'Notre-Dame Basilica', coordinates: [2.349902, 48.852966] },
  { markerOffset: 15, name: 'The Royal Ontario Museum', coordinates: [79.394809, 43.667679] },
  { markerOffset: 15, name: 'Capilano Suspension Bridge', coordinates: [-123.1171131, 49.3428609] },
  { markerOffset: 15, name: 'Banff National Park', coordinates: [-115.5858347, 51.1772808] },
  { markerOffset: 15, name: 'Niagara Falls', coordinates: [79.0747, 43.0799] },
  // IRELAND
  { markerOffset: 15, name: 'Dunluce Castle', coordinates: [-6.581795, 55.2106954] },
  { markerOffset: 15, name: 'The road of the giants', coordinates: [-6.511667, 55.240833] },
  { markerOffset: 15, name: 'Carrickfergus Castle', coordinates: [-5.8085127, 54.7137177] },
  { markerOffset: 15, name: 'Londonderry city wall', coordinates: [-7.3261532, 54.9951798] },
  { markerOffset: 15, name: 'Craigmore Viaduct', coordinates: [-6.3700117, 54.1942724] },
  { markerOffset: 15, name: 'Mourne Mountains', coordinates: [-6.0750296, 54.1533145] },
];

const MapChart = ({ setTooltipContent }: any) => (
  <>
    <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
      <ZoomableGroup>
        <Geographies geography={geoUrl}>
          {({ geographies }: any) =>
            geographies.map(
              (geo: { rsmKey: React.Key | null | undefined; properties: { NAME: string; POP_EST: any } }) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  stroke="#2A8086"
                  onMouseEnter={() => {
                    const { NAME, POP_EST } = geo.properties;
                    setTooltipContent(`${NAME}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent('');
                  }}
                  style={{
                    default: {
                      fill: '#FFFFFF',
                      outline: 'none',
                    },
                    hover: {
                      fill: '#196469',
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
          // @ts-ignore
          <Marker key={name} coordinates={coordinates}>
            <circle r={5} fill="rgba(42, 128, 134, 0.7)" stroke="#0D444D" strokeWidth={1} className="mark" />
            <text className="tooltip_text" textAnchor="middle" y={markerOffset} style={{ fontFamily: 'system-ui' }}>
              {name}
            </text>
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  </>
);

export default memo(MapChart);
