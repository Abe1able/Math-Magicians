import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row-div">
          <div className="result">
            0
          </div>
        </div>
        <div className="row-div">
          <button type="button" className="cell">AC</button>
          <button type="button" className="cell">+/-</button>
          <button type="button" className="cell">%</button>
          <button type="button" className="orange-cell">&#247;</button>
        </div>
        <div className="row-div">
          <button type="button" className="cell">7</button>
          <button type="button" className="cell">8</button>
          <button type="button" className="cell">9</button>
          <button type="button" className="orange-cell">x</button>
        </div>
        <div className="row-div">
          <button type="button" className="cell">4</button>
          <button type="button" className="cell">5</button>
          <button type="button" className="cell">6</button>
          <button type="button" className="orange-cell">-</button>
        </div>
        <div className="row-div">
          <button type="button" className="cell">1</button>
          <button type="button" className="cell">2</button>
          <button type="button" className="cell">3</button>
          <button type="button" className="orange-cell">+</button>
        </div>
        <div className="row-div">
          <button type="button" className="zero-cell">0</button>
          <button type="button" className="cell">.</button>
          <button type="button" className="orange-cell">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
