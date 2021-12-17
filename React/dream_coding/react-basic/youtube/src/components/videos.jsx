import Video from './video';
import React, { PureComponent } from 'react';

class Videos extends PureComponent {

  render() {
    return (
      <>
      {this.props.videos.map(video =>
        <Video
        key={video.id.videoId}
        image={video.snippet.thumbnails.high.url}
        title={video.snippet.title}
        onPlay={this.props.onPlay}
        />
        )}      
      </>
        
    );
  }
}

export default Videos;
