import React, { Component } from 'react';
import PlayerPage from './PlayerPage';
import ReaderPage from './ReaderPage';
import { Controls } from './App.styled';

class App extends Component {
  state = { currentPage: 'Reader' };

  onClick = e => {
    this.setState({ currentPage: e.currentTarget.name });
  };

  render() {
    return (
      <div>
        <Controls>
          <button type="button" onClick={this.onClick} name="Player">
            Player
          </button>
          <button type="button" onClick={this.onClick} name="Reader">
            Reader
          </button>
        </Controls>
        {this.state.currentPage === 'Reader' && <ReaderPage />}
        {this.state.currentPage === 'Player' && <PlayerPage />}
      </div>
    );
  }
}

export default App;
