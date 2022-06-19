import { createStore } from "redux";

const reduceFN = (state = { counter: 30 }, action) => {
  // They should be synchronous function
  // We should not mutate the original state
  if (action.type === "INC") return { counter: state.counter+1 };
  if (action.type === "DEC") return { counter: state.counter-1 };
  return state;
};
const store = createStore(reduceFN);
export default store;
