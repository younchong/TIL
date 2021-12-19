import './app.css';
import Search from './components/search';
import Videos from './components/videos';
import React, { Component } from 'react';
import Player from './components/player';
import { api_key, info } from './components/info';

class App extends Component {
  state = {
    videos: 
        {"kind": "youtube#searchListResponse",
        "etag": "We22krYqr80wEan2Jw21aqYZVQY",
        "nextPageToken": "CBkQAA",
        "regionCode": "KR",
        "pageInfo": {
            "totalResults": 70316,
            "resultsPerPage": 25
        },
        "items": [
            {
                "kind": "youtube#searchResult",
                "etag": "rA2Ji2P6VVsPRaTnFWhM92jKiwQ",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "twN0jcFxbVo"
                },
                "snippet": {
                    "publishedAt": "2021-12-17T15:00:35Z",
                    "channelId": "UC4514FwdRy5gI6CdC9GPb0w",
                    "title": "GIVING AWAY A TESLA | FULL BACK WORKOUT",
                    "description": "SHOP RAW SUPPLEMENTS: EVERY $50 SPENT GETS YOU A TICKET FOR A CHANCE TO WIN A FREE TESLA     USE CODE ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/twN0jcFxbVo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/twN0jcFxbVo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/twN0jcFxbVo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Chris Bumstead",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-12-17T15:00:35Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "FUoj1nh1k2k2-NBopI_k6YNnx5g",
                "id": {
                    "kind": "youtube#channel",
                    "channelId": "UC4514FwdRy5gI6CdC9GPb0w"
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
            },
            {
                "kind": "youtube#searchResult",
                "etag": "qoubu51D-GkTreTVnnLVk2QFBjk",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "con2rTmZZLI"
                },
                "snippet": {
                    "publishedAt": "2021-10-17T13:58:30Z",
                    "channelId": "UC4514FwdRy5gI6CdC9GPb0w",
                    "title": "SHOWDAY OLYMPIA FINALS | BUILDING A LEGACY",
                    "description": "FILMED AND EDITED @CALVINYOUTTITHAM SHOP RAW SUPPLEMENTS     USE CODE CBUM ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/con2rTmZZLI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/con2rTmZZLI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/con2rTmZZLI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Chris Bumstead",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-10-17T13:58:30Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "_RjQeBI8gKViYORJ2waluJXs_zI",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "gd5i6hQQwcg"
                },
                "snippet": {
                    "publishedAt": "2021-09-20T13:58:03Z",
                    "channelId": "UC4514FwdRy5gI6CdC9GPb0w",
                    "title": "SHREDDED CHEST WORKOUT 3 WEEKS OUT MR. OLYMPIA",
                    "description": "SHOP RAW SUPPLEMENTS     USE CODE CBUM https://getrawnutrition.com/cbum FILM AND EDIT BY @CALVINYOUTTITHAM ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/gd5i6hQQwcg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/gd5i6hQQwcg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/gd5i6hQQwcg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Chris Bumstead",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-09-20T13:58:03Z"
                }
            }
        ]},
    play: null,
    videoInfo: null
  }

  manageMain = () => {
    if (this.state.play) {
        console.log(this.state.videoInfo[0].snippet)
        return <Player 
        url={this.state.play} 
        videos={this.state.videos} 
        videoInfomation={this.state.videoInfo[0].snippet}
        onPlay={this.handlePlay}
       />
    } else {
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
        this.setState({videos})
    });
    
  
  }

  handlePlay = (title) => {
      let url = "https://www.youtube.com/embed/";
      const video = this.state.videos.items.filter(item => item.snippet.title === title);
      url += video[0].id.videoId;
      this.setState({play: url, videoInfo: video});
  }

  render() {
    return (
      <>
      <header>
        <Search 
        onSearch={this.handleSearch}
        />
      </header>
        {this.manageMain()}
    </>
    );
  }
}

export default App;

