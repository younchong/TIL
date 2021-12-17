import './app.css';
import Search from './components/search';
import Videos from './components/videos';
import React, { Component } from 'react';
import Player from './components/player';

class App extends Component {
  state = {
    videos: 
        {
            "kind": "youtube#searchListResponse",
            "etag": "Z4dy2RBGyJQoudpcCc3xB6dIBLE",
            "nextPageToken": "CBkQAA",
            "regionCode": "KR",
            "pageInfo": {
                "totalResults": 69690,
                "resultsPerPage": 25
            },
            "items": [
                {
                    "kind": "youtube#searchResult",
                    "etag": "aKWwZBTSJaNYAIapN9irsL7NkEA",
                    "id": {
                        "kind": "youtube#channel",
                        "videoId": "UC4514FwdRy5gI6CdC9GPb0w"
                    },
                    "snippet": {
                        "publishedAt": "2011-03-05T00:47:30Z",
                        "channelId": "UC4514FwdRy5gI6CdC9GPb0w",
                        "title": "Chris Bumstead",
                        "description": "",
                        "thumbnails": {
                            "default": {
                                "url": "https://yt3.ggpht.com/ytc/AKedOLRd9zzCHVEP3dHgOacrQF1M_hTey2KKp8eHaAohHQ=s88-c-k-c0xffffffff-no-rj-mo"
                            },
                            "medium": {
                                "url": "https://yt3.ggpht.com/ytc/AKedOLRd9zzCHVEP3dHgOacrQF1M_hTey2KKp8eHaAohHQ=s240-c-k-c0xffffffff-no-rj-mo"
                            },
                            "high": {
                                "url": "https://yt3.ggpht.com/ytc/AKedOLRd9zzCHVEP3dHgOacrQF1M_hTey2KKp8eHaAohHQ=s800-c-k-c0xffffffff-no-rj-mo"
                            }
                        },
                        "channelTitle": "Chris Bumstead",
                        "liveBroadcastContent": "none",
                        "publishTime": "2011-03-05T00:47:30Z"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "2GdNpErbyc3288x6p5hcLmYz4R4",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "H6LHNWt565U"
                    },
                    "snippet": {
                        "publishedAt": "2021-12-04T15:27:07Z",
                        "channelId": "UC4514FwdRy5gI6CdC9GPb0w",
                        "title": "BACK &amp; BICEPS PUMP | CANADA TRAVEL VLOG PART 1",
                        "description": "SHOP RAW SUPPLEMENTS     USE CODE CBUM https://getrawnutrition.com/cbum Checkout My Training App, New Workouts ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/H6LHNWt565U/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/H6LHNWt565U/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/H6LHNWt565U/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "Chris Bumstead",
                        "liveBroadcastContent": "none",
                        "publishTime": "2021-12-04T15:27:07Z"
                    }
                }
            ]}
    
  }

  handleSearch = (result) => {
    const optionParams={
      q:result, //여기에 검색결과 
      part:"snippet",
      key:"AIzaSyDIl-W46HdMh54Nkl-bnJXp62k-D7kVIm8",
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
        this.setState({videos})
    });
    
  
  }

  handlePlay = (title) => {
      let url = "https://www.youtube.com/embed/";
      const video = this.state.videos.items.filter(item => item.snippet.title === title);
      url += video[0].id.videoId;
      console.log(url)
  }

  render() {
    return (
      <>
      <header>
        <Search 
        onSearch={this.handleSearch}
        />
      </header>
      <main className="video-container">
        <Videos
        videos={this.state.videos.items}
        onPlay={this.handlePlay}
        />
      </main>
    </>
    );
  }
}

export default App;

