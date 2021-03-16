import './video.scss';
import React, { FC } from 'react';
import { VideoProps } from './Video.model';
import { CountriesNavigatorContainer } from '../../containers/CountriesNavigator.container';

const Video: FC<VideoProps> = ({ countryName, src }) => (
  <div className="container">
    <CountriesNavigatorContainer currCountryName={countryName}></CountriesNavigatorContainer>
    <iframe
      title={`${countryName} video`}
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);
export default Video;
