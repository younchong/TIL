import React from 'react';
import styles from './video_item.module.css'

const VideoItem = ({video: videoInfo}) => ( //props 내부에 인자 이름을 바꿔서 이렇게 사용 가능
  <li className={styles.container}>
    <div className={styles.video}>
      <img 
      className={styles.thumbnail}
      src={videoInfo.thumbnails.high.url}
      alt="video thumbnails"
      />
    <div className={styles.metadata}>
      <p className={styles.title}>{videoInfo.title}</p>
      <p className={styles.channel}>{videoInfo.channelTitle}</p>
      </div>
    </div>
  </li>
);

export default VideoItem;