import "./video.scss";
import React, { FC } from "react";

const Video: FC = () => (
  <iframe
    // width="560"
    // height={315}
    title={"2"}
    style={{ height: 604, width: '100%' }}
    src="https://www.youtube.com/embed/wYFKlfr-ELU"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);
export default Video;
