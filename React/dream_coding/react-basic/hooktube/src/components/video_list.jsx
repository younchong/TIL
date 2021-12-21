import React from 'react';
import VideoItem from './video_item';

const VideoList = (props) => {
  return <>
    {props.videos.map(video => 
      <ul key={video.id}>
        <VideoItem video={video.snippet} />
      </ul>
      )}
    
  </>
};

export default VideoList;