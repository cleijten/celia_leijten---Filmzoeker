import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions'


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button> //increment by 5, geef 5 als argument mee
      <button onClick={() => dispatch(decrement)}> -</button>
      {isLogged ? <p>valuable information i should not see</p> : ''}
    </div>
  );
}

export default App;
