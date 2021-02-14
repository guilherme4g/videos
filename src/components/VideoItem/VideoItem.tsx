import React from 'react';

import './VideoItem.css';

interface IPropsVideoItem {
  video: any;
  onVideoSelect: (video: any) => void;
}

const videoItem: React.FC<IPropsVideoItem> = ({ video, onVideoSelect }) => {
  const onVideoClick = () => {
    onVideoSelect(video);
  };

  return (
    /*
      eslint-disable jsx-a11y/click-events-have-key-events,
      jsx-a11y/no-noninteractive-element-interactions,
      jsx-a11y/no-static-element-interactions
    */
    <div className="video-item item" onClick={onVideoClick}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default videoItem;
