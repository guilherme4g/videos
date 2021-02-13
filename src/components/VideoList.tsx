import React from 'react';
import propTypes from 'prop-types';

import VideoItem from './VideoItem';

interface IPropsVideoList {
  videos: any[];
}

const VideoList: React.FC<IPropsVideoList> = ({ videos }) => {
  const renderedList = videos.map(video => {
    return <VideoItem video={video} />;
  });

  return <div>{renderedList}</div>;
};

VideoList.propTypes = {
  videos: propTypes.arrayOf(() => {
    return null;
  }).isRequired,
};

export default VideoList;
