import './video.scss';
import React, { FC } from 'react';
import { VideoProps } from './Video.model';

const Video: FC<VideoProps> = ({ countryName, src }) => (
  <iframe
    title={`${countryName} video`}
    src={src}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);
export default Video;
