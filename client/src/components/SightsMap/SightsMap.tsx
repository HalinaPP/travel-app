import './sightsMap.scss';
import { FC, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { SightsMapProps } from './SightsMap.model';

import { MapChartContainer } from '../../containers/MapChart.container';

const SightsMap: FC<SightsMapProps> = () => {
  const [content, setContent] = useState('');

  return (
    <main className="map-chart">
      <MapChartContainer setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </main>
  );
};

export default SightsMap;
