import React from 'react';
import propTypes from 'prop-types';

import VideoItem from '../VideoItem/VideoItem';

interface IPropsVideoList {
  videos: any[];
  onVideoSelect: (video: any) => void;
}

const VideoList: React.FC<IPropsVideoList> = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

VideoList.propTypes = {
  videos: propTypes.arrayOf(() => {
    return null;
  }).isRequired,
  onVideoSelect: propTypes.func.isRequired,
};

export default VideoList;
