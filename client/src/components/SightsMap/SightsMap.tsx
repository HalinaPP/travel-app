import './sightsMap.scss';
import { FC, useCallback, useEffect, useState, useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import { SightsMapProps } from './SightsMap.model';

import MapChart from './MapChart';

const SightsMap: FC<SightsMapProps> = () => {
  const [content, setContent] = useState('');

  return (
    <main className="">
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </main>
  );
};

export default SightsMap;
