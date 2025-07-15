import { useReducer } from 'react';
import './Counter.css';

const initialState = {
  count: 0,
  clicks: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1, clicks: state.clicks + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1, clicks: state.clicks + 1 };
    case 'reset':
      return { count: 0, clicks: 0 };
    default:
      return state;
  }
}

export default function counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter">
      <h1>counter</h1>
      <div className="display">
        <p><strong>Valor:</strong> {state.count}</p>
        <p><strong>Clics:</strong> {state.clicks}</p>
      </div>
      <div className="botones">
        <button onClick={() => dispatch({ type: 'increment' })}>➕ Sumar</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>➖ Restar</button>
        <button onClick={() => dispatch({ type: 'reset' })}>🔁 Reiniciar</button>
      </div>
    </div>
  );
}
