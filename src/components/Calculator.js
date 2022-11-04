import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickHandler = (e) => {
    const result = calculate(this.state, e.target.innerHTML);
    this.setState(result);
  };

  render() {
    const { next, total } = this.state;
    return (
      <div className="container">
        <div className="row-div">
          <div className="result">
            { next ?? total ?? 0 }
          </div>
        </div>
        <div className="row-div">
          <button type="button" className="cell" onClick={this.onClickHandler}>AC</button>
          <button type="button" className="cell" onClick={this.onClickHandler}>+/-</button>
          <button type="button" className="cell" onClick={this.onClickHandler}>%</button>
          <button type="button" className="orange-cell" onClick={this.onClickHandler}>&#247;</button>
        </div>
        <div className="row-div">
          <button type="button" className="cell" onClick={this.onClickHandler}>7</button>
          <button type="button" className="cell" onClick={this.onClickHandler}>8</button>
          <button type="button" className="cell" onClick={this.onClickHandler}>9</button>
          <button type="button" className="orange-cell" onClick={this.onClickHandler}>x</button>
        </div>
        <div className="row-div">
          <button type="button" className="cell" onClick={this.onClickHandler}>4</button>
          <button type="button" className="cell" onClick={this.onClickHandler}>5</button>
          <button type="button" className="cell" onClick={this.onClickHandler}>6</button>
          <button type="button" className="orange-cell" onClick={this.onClickHandler}>-</button>
        </div>
        <div className="row-div">
          <button type="button" className="cell" onClick={this.onClickHandler}>1</button>
          <button type="button" className="cell" onClick={this.onClickHandler}>2</button>
          <button type="button" className="cell" onClick={this.onClickHandler}>3</button>
          <button type="button" className="orange-cell" onClick={this.onClickHandler}>+</button>
        </div>
        <div className="row-div">
          <button type="button" className="zero-cell" onClick={this.onClickHandler}>0</button>
          <button type="button" className="cell" onClick={this.onClickHandler}>.</button>
          <button type="button" className="orange-cell" onClick={this.onClickHandler}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
