import React from 'react';
import propTypes from 'prop-types';

interface IPropsVideoList {
  videos: any[];
}

const VideoList: React.FC<IPropsVideoList> = ({ videos }) => {
  return <div>{videos.length}</div>;
};

VideoList.propTypes = {
  videos: propTypes.instanceOf(Array).isRequired,
};

export default VideoList;
