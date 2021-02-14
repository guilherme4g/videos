import React from 'react';
import propTypes from 'prop-types';

import VideoItem from '../VideoItem/VideoItem';

interface IPropsVideoList {
  videos: any[];
}

const VideoList: React.FC<IPropsVideoList> = ({ videos }) => {
  const renderedList = videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

VideoList.propTypes = {
  videos: propTypes.arrayOf(() => {
    return null;
  }).isRequired,
};

export default VideoList;
