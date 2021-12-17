import React, { Component } from 'react';

class Video extends Component {
  startPlay = () => {
    this.props.onPlay(this.props.title)
  }

  render() {
    return (
      <article className="video-article" onClick={this.startPlay}>
        <img className="video-thumbnail" src={this.props.image} />
        <div className="video-title">{this.props.title}</div>
      </article>
    );
  }
}

export default Video;