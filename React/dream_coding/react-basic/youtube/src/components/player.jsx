import React, { Component } from 'react';

class Player extends Component {
  render() {
    return (
      <iframe id="player" type="text/html" width="640" height="360"
      src={this.props.url}
      frameborder="0">

      </iframe>
    );
  }
}

export default Player;