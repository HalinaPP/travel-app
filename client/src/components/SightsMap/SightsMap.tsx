import './sightsMap.scss';
import { FC, useCallback, useEffect, useState, useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import { SightsMapProps } from './SightsMap.model';

import { MapChartContainer } from '../../containers/MapChart.container';

const SightsMap: FC<SightsMapProps> = () => {
  const [content, setContent] = useState('');

  return (
    <main className="map_chart">
      <MapChartContainer setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </main>
  );
};

export default SightsMap;
