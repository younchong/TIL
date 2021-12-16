import './app.css';
import Search from './components/search';
import Videos from './components/videos';
import React, { Component } from 'react';

class App extends Component {
  state = {
    videos: [
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
    }
    ]
  }
  render() {
    return (
      <>
      <header>
        <Search />
      </header>
      <table>
        <Videos
        videos={this.state.videos}
        />
      </table>
    </>
    );
  }
}

export default App;

