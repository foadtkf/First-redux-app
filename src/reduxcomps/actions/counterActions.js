import { DECREMENT, INCREMENT, RESET } from "../constants/Constants";

export const counterIncrement = () => {
  return { type: INCREMENT };
};
export const counterDecrement = () => {
  return { type: DECREMENT };
};
export const counterReset = () => {
  return { type: RESET };
};
