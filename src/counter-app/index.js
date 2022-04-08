import './counter.css';
import { useReducer } from 'react';
import counterReducer, { ACTIONS, initialState } from './counter-reducer';

const CounterApp = () => {
  const [counter, dispatch] = useReducer(counterReducer, initialState)
  const handleIncrement = () => dispatch({ type: ACTIONS.INCREMENT });
  const handleDecrement = () => dispatch({ type: ACTIONS.DECREMENT });

  return (
    <div className='app-style'>
      <div>
        <button className='b' onClick={handleIncrement}>Increment</button>
        {counter.count}
        <button className='b' onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  )
};

export default CounterApp;
