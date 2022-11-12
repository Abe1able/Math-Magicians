import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [stateObject, setStateObject] = useState({ total: '0' });

  const onClickHandler = (e) => {
    const result = calculate(stateObject, e.target.innerHTML);
    setStateObject(result);
  };

  return (
    <div className="main_container">
      <div className="text">
        <h2>Let&apos;s do some Math!</h2>
      </div>
      <div className="container">
        <div className="row-div">
          <div className="result">
            { stateObject.total }
            { stateObject.operation }
            { stateObject.next }
          </div>
        </div>
        <div className="row-div">
          <button type="button" className="cell" onClick={onClickHandler}>AC</button>
          <button type="button" className="cell" onClick={onClickHandler}>+/-</button>
          <button type="button" className="cell" onClick={onClickHandler}>%</button>
          <button type="button" className="orange-cell" onClick={onClickHandler}>&#247;</button>
        </div>
        <div className="row-div">
          <button type="button" className="cell" onClick={onClickHandler}>7</button>
          <button type="button" className="cell" onClick={onClickHandler}>8</button>
          <button type="button" className="cell" onClick={onClickHandler}>9</button>
          <button type="button" className="orange-cell" onClick={onClickHandler}>x</button>
        </div>
        <div className="row-div">
          <button type="button" className="cell" onClick={onClickHandler}>4</button>
          <button type="button" className="cell" onClick={onClickHandler}>5</button>
          <button type="button" className="cell" onClick={onClickHandler}>6</button>
          <button type="button" className="orange-cell" onClick={onClickHandler}>-</button>
        </div>
        <div className="row-div">
          <button type="button" className="cell" onClick={onClickHandler}>1</button>
          <button type="button" className="cell" onClick={onClickHandler}>2</button>
          <button type="button" className="cell" onClick={onClickHandler}>3</button>
          <button type="button" className="orange-cell" onClick={onClickHandler}>+</button>
        </div>
        <div className="row-div">
          <button type="button" className="zero-cell" onClick={onClickHandler}>0</button>
          <button type="button" className="cell" onClick={onClickHandler}>.</button>
          <button type="button" className="orange-cell" onClick={onClickHandler}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
