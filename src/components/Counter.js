import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from '../store/index';
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const toggleCounterHandler = () => {
    // dispatch({type:'TOGGLE'})
    dispatch(counterActions.toggle());
  };
  const incCounterHandler = () => {
    // dispatch({type: 'INCREMENT'})
    dispatch(counterActions.increment());
  };
  const decCounterHandler = () => {
    // dispatch({type: 'DECREMENT'})
    dispatch(counterActions.decrement());

  };
  const fiveCounterHandler = () => {
    // dispatch({type: 'PLUS' , amount : 5})
    dispatch(counterActions.plus(10));
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      
      <div>
        <button onClick={incCounterHandler}>increment</button>
        <button onClick={decCounterHandler}> decrement</button>
        <button onClick={fiveCounterHandler}> PLUS </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle</button>
    </main>
  );
};

export default Counter;
