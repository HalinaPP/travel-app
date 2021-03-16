import './video.scss';
import React, { FC } from 'react';
import { VideoProps } from './Video.model';
import CountriesNavigator from '../CountriesNavigator/CountriesNavigator';

const Video: FC<VideoProps> = ({ countryName, src }) => (
  <div className="container">
    <CountriesNavigator></CountriesNavigator>
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
