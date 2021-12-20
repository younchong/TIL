import './app.css';
import Search from './components/search';
import Videos from './components/videos';
import React, { Component } from 'react';
import Player from './components/player';
import { api_key, info } from './components/info';

class App extends Component {
  state = {
    videos: null,
    play: null,
    videoInfo: null
  }

  componentDidMount() {
    const optionParams={
        part:"snippet",
        chart:"mostPopular",
        key:api_key,
        maxResults:25
      };
  
      let url="https://www.googleapis.com/youtube/v3/search?";
      for(let option in optionParams){
      url+=option+"="+optionParams[option]+"&";
      }
      
      fetch(url)
      .then(url => url.json())
      .then(info => this.setState({videos: info}))
      
  }

  manageMain = () => {
    if (this.state.play) {
        return <Player 
        url={this.state.play} 
        videos={this.state.videos} 
        videoInfomation={this.state.videoInfo[0].snippet}
        onPlay={this.handlePlay}
       />
    } else if (this.state.videos) {
        //this.defaultPage();
        return <main className="video-container">
            <Videos
        videos={this.state.videos.items}
        onPlay={this.handlePlay}
        />
        </main>
        
    }
  }

  handleSearch = (result) => {
    const optionParams={
      q:result, //여기에 검색결과 
      part:"snippet",
      key:api_key,
      maxResults:25
    };

    let url="https://www.googleapis.com/youtube/v3/search?";
    for(let option in optionParams){
    url+=option+"="+optionParams[option]+"&";
    }

    fetch(url)
    .then(response => response.json())
    .then(result => {
        const videos = result;
        this.setState({videos, play: null, videoInfo: null})
    });
    
  
  }

  handlePlay = (title) => {
      let url = "https://www.youtube.com/embed/";
      const video = this.state.videos.items.filter(item => item.snippet.title === title);
      url += video[0].id.videoId;
      this.setState({play: url, videoInfo: video});
  }

  handleBackButton = () => {
      console.log("work");
  }

  render() {
    return (
      <>
      <header>
        <Search 
        onSearch={this.handleSearch}
        onBack={this.handleBackButton}
        />
      </header>
      {this.manageMain()}
    </>
    );
  }
}

export default App;

