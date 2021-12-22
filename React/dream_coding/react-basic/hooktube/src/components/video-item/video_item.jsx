import React from 'react';
import styles from './video_item.module.css'

const VideoItem = ({video, onPlay}) => {
  const handleClick = () => {
    onPlay(video);
  }

  return ( //props 내부에 인자 이름을 바꿔서 이렇게 사용 가능
  <li className={styles.container}>
    <div className={styles.video} onClick={handleClick}>
      <img 
      className={styles.thumbnail}
      src={video.snippet.thumbnails.high.url}
      alt="video thumbnails"
      />
    <div className={styles.metadata}>
      <p className={styles.title}>{video.snippet.title}</p>
      <p className={styles.channel}>{video.snippet.channelTitle}</p>
      </div>
    </div>
  </li>
)};

export default VideoItem;