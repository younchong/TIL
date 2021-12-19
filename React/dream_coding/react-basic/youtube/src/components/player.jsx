import React, { Component } from 'react';
import Videos from './videos';

class Player extends Component {
  render() {
    return (
      <>
      <main className="video-player">
        <iframe id="player" type="text/html" width="640" height="360"
        src={this.props.url}
        frameBorder="0">
        </iframe>
        <span className="video-infomation">{this.props.videoInfomation.title}</span>
        <aside className="video-box">
          <Videos videos={this.props.videos.items} onPlay={this.props.onPlay}/>
        </aside>
      </main>
        
      </>
      
    );
  }
}

export default Player;