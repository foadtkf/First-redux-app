import { createStore } from "redux";
import counterReducer from "./reduxcomps/reducers/CounterReducer";

const store = createStore(counterReducer);
export default store;
