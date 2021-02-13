import React from 'react';

interface IPropsVideoItem {
  video: any;
}

const videoItem: React.FC<IPropsVideoItem> = ({ video }) => {
  return (
    <div>
      <img src={video.snippet.thumbnails.default.url} alt="img" />
      {video.snippet.title}
    </div>
  );
};

export default videoItem;
