import React from 'react';
import VideoItem from '../video-item/video_item';
import styles from './video_list.module.css'

const VideoList = props => (
  <ul className={styles.videos}>
    {props.videos.map(video => (
      <VideoItem 
      key={video.id.videoId || video.id } 
      video={video} 
      onPlay={props.onPlay}
      />
    ))}
  </ul>
);
export default VideoList;