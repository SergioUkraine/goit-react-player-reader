import { Component } from 'react';
import videos from '../../data/videos.json';

import VideoList from './VideoList';
import Player from './Player';

class PlayerPage extends Component {
  state = {
    selectedVideo: null,
  };

  selectedVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    return (
      <div>
        <h1>Selected video: {this.state.selectedVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectedVideo} />
        <Player url={this.state.selectedVideo} />
      </div>
    );
  }
}

export default PlayerPage;
