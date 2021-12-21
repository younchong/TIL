import './app.css';
import React, { useEffect, useState } from 'react';
import { api_key } from './components/key';
import VideoList from './components/video_list';

const App = (props) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
  const requestOptions = {
  method: 'GET',
  redirect: 'follow'
  };
  
  let url = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=" + api_key;
  fetch(url, requestOptions)
  .then(response => response.json())
  .then(result => setVideos(result.items))
  .catch(error => console.log('error', error));
    
  }, [])

  return(
    <VideoList videos={videos}/>
  );
}

export default App;
