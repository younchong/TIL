import React, { useCallback, useEffect, useState } from 'react';
import VideoList from './components/video-list/video_list';
import SearchNav from './components/search/search-nav';
import Selected from './components/selected-video/selected';
import styles from './app.module.css';
function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);

  const onSearch = useCallback(
    word => {
      youtube
      .search(word)
      .then(items => setVideos(items));
      setSelected(null);
    },
    [youtube]
  );

  useEffect(() => {
    youtube
    .mostPopular()
    .then(items => setVideos(items))
  }, [youtube])

  const onPlay = (infomation) => {
    setSelected(infomation);
  }

  return(
    <>
    <SearchNav onSearch={onSearch}/>
    <div className={styles.videos}>
      {selected && (
        <section className={styles.detail}>
        <Selected selected={selected} />
       </section>
      )}
      <section className={styles.list}>
        <VideoList 
        videos={videos}
        onPlay={onPlay}
        display={selected ? "list" : "grid"}
        />
      </section>
    </div>
    </>
  );
}

export default App;
