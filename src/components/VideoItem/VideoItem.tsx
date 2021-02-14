import React from 'react';

import './VideoItem.css';

interface IPropsVideoItem {
  video: any;
}

const videoItem: React.FC<IPropsVideoItem> = ({ video }) => {
  return (
    <div className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.default.url}
        alt="img"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default videoItem;
