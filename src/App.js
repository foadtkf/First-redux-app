import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { DECREMENT, INCREMENT, RESET } from "./reduxcomps/constants/Constants";

function App() {
  const counter = useSelector((state) => state.count);
  console.log(counter)
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: DECREMENT });
  };
  const reset = () => {
    dispatch({ type: RESET });
  };
  const addvalue =()=>{
    dispatch({type:"ADDVAL",payload:10})
  }
  return (
    <div className="App">
      <h1>Counter: </h1>
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <button onClick={addvalue}>Add value</button>
    </div>
  );
}

export default App;
