import React from 'react';
import styles from '.video_item.module.css';

const VideoItem = ({video: videoInfo}) => ( //props 내부에 인자 이름을 바꿔서 이렇게 사용 가능
  <li>
    <img 
    src={videoInfo.thumbnails.high.url}
    alt="video thumbnails"
    />
    <div className="title">{videoInfo.title}</div>
  </li>
)


export default VideoItem;