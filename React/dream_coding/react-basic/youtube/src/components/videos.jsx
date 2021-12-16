import Video from './video';
import React, { PureComponent } from 'react';

class Videos extends PureComponent {
  
  
  handleSearch = () => {
    const optionParams={
      q:"cbum", //여기에 검색결과 
      part:"snippet",
      key:"api_key",
      maxResults:2
     };
     
    let url="https://www.googleapis.com/youtube/v3/search?";
    for(let option in optionParams){
      url+=option+"="+optionParams[option]+"&";
    }
/*
    fetch(url)
  .then(response => response.json())
  .then(json => json.items)
  .then(items => items.map(item => item.snippet.thumbnails.default.url))
  .then(urls => setUrl(urls))
  .catch(err => console.log(err));
*/  
}

  handleData = () => {
    
  }
  render() {
    return (
      <tbody className="table-video">
        {this.props.videos.map(video =>
        <Video
        key={video.id.videoId}
        image={video.snippet.thumbnails.default.url}
        title={video.snippet.title}
        />
        )}
      </tbody>
    );
  }
}

export default Videos;
