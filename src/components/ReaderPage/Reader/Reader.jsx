import React, { Component } from 'react';
import Controls from '../Controls';
import Progress from '../Progress';
import Publication from '../Publication';

const LS_KEY = 'reader_item_index';

class Reader extends Component {
  state = {
    currentIndex: 0,
  };

  // onPrev = () => {
  //   if (this.state.currentIndex > 0) {
  //     this.setState(prevState => ({
  //       currentIndex: --prevState.currentIndex,
  //     }));
  //   }
  // };
  // onNext = () => {
  //   if (this.state.currentIndex + 1 < this.props.items.length) {
  //     this.setState(prevState => ({
  //       currentIndex: ++prevState.currentIndex,
  //     }));
  //   }
  // };

  componentDidUpdate(_, prevState) {
    if (prevState.currentIndex !== this.state.currentIndex) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.currentIndex));
    }
  }

  componentDidMount() {
    const currentIndexRaw = localStorage.getItem(LS_KEY);
    if (currentIndexRaw) {
      this.setState({ currentIndex: JSON.parse(currentIndexRaw) });
    }
  }

  changeValue = value => {
    const lastItemIndex = this.props.items.length - 1;
    let result = this.state.currentIndex + value;
    if (result < 0) {
      result = lastItemIndex;
    } else if (result > lastItemIndex) {
      result = 0;
    }
    this.setState({ currentIndex: result });
  };

  render() {
    const { items } = this.props;
    const { currentIndex } = this.state;
    const currentItem = items[currentIndex];
    return (
      <div>
        <Controls onChange={this.changeValue} />
        <Progress currentPage={currentIndex + 1} totalPages={items.length} />
        <Publication text={currentItem.title} title={currentItem.text} />
      </div>
    );
  }
}

export default Reader;
