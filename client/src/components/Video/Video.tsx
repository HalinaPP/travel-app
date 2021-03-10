import './video.scss';
import React, { FC } from 'react';
import ReactPlayer from 'react-player';
import { VideoProps } from './Video.model';

const Video: FC<VideoProps> = ({ src }) => (
  <ReactPlayer url={src}
    height="60.4rem"
    width="100%"
    controls />
);
export default Video;
