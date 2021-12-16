import React, { useEffect, useState } from 'react';
import info from './info';
import Video from './video';

const Videos = (props) => {
const [urlList, setUrl] = useState([]);

const optionParams={
	q:"bts", //여기에 검색결과 
	part:"snippet",
	key:"secret",
	maxResults:2
 };

let url="https://www.googleapis.com/youtube/v3/search?";
for(let option in optionParams){
	url+=option+"="+optionParams[option]+"&";
}
useEffect(() => {
  document.title={urlList}
})
/*
fetch(url)
.then(response => response.json())
.then(json => json.items)
.then(items => items.map(item => item.snippet.thumbnails.default.url))
.then(urls => setUrl(urls))
.catch(err => console.log(err));
*/
  return (
    <>
    </>
  )
};

export default Videos;