import './counter.css';
import { useReducer } from 'react';

const ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}
const initialState = { count: 3 };

const countReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}


const CounterApp = () => {
  const [counter, dispatch] = useReducer(countReducer, initialState);

  const handleIncrement = () => dispatch({ type: 'INCREMENT' });
  const handleDecrement = () => dispatch({ type: 'DECREMENT' });

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
