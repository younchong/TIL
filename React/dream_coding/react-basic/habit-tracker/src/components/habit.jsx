import React, { Component } from 'react';

class Habit extends Component {
  render() {
    return (
      <>
        <span className="habit-name">Reading</span>
        <span className="habit-count">7</span>
        <buttton>
          <i className="far fa-plus-square"></i>
        </buttton>
        <buttton>
          <i className="far fa-minus-square"></i>
        </buttton>
        <buttton>
          <i className="far fa-trash"></i>
        </buttton>
      </>
    );
  }
}

export default Habit;