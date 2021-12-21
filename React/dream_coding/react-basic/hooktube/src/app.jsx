import './app.css';
import React, { useEffect, useState } from 'react';
import { api_key } from './components/key';
import VideoList from './components/video-list/video_list';
import SearchNav from './components/search/search-nav';

const App = (props) => {
  const [videos, setVideos] = useState([]);
  const searchRef = React.createRef();

  const onSearch = (word) => {
    const requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    let url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="
    url += word + "&key=" + api_key;
    fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => setVideos(result.items))
    .catch(error => console.log('error', error));
  }

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
    <>
    <SearchNav onSearch={onSearch}/>
    <VideoList videos={videos}/>
    </>
  );
}

export default App;
