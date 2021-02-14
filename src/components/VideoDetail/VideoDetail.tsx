import React from 'react';
import propTypes from 'prop-types';

interface IPropsVideoDetail {
  video: any;
}

const VideoDetail: React.FC<IPropsVideoDetail> = ({ video }) => {
  if (!video.id) {
    return <div> </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title={video.snippet.title} src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

VideoDetail.propTypes = {
  video: propTypes.objectOf(() => {
    return null;
  }).isRequired,
};

export default VideoDetail;
