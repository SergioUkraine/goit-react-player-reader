import { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

class Player extends Component {
  //   state = {
  //     isVideoLoaded: false,
  //   };

  //   componentDidUpdate(prevProps) {
  //     if (prevProps.url !== this.props.url) {
  //       this.setState({ isVideoLoaded: false });
  //     }
  //   }

  render() {
    // const { isVideoLoaded } = this.state;
    const { url } = this.props;
    // const showLoader = url && !isVideoLoaded;
    // const playerWidth = isVideoLoaded ? '100%' : 0;
    // const playerHight = isVideoLoaded ? '100%' : 0;
    return (
      <div>
        {/* {showLoaded && <h2>Load video...</h2>} */}
        {url && (
          <PlayerWrapper>
            <StyledPlayer
              url={url}
              // width={playerWidth}
              // height={playerHeight}
              // onReady={() => this.setState({ isVideoLoaded: true })}
              controls
            />
          </PlayerWrapper>
        )}
      </div>
    );
  }
}

export default Player;
