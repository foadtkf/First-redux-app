import { ADDVAL, DECREMENT, INCREMENT, RESET } from "../constants/Constants";

const initialCounter = { count: 0, name:'no Name'};

const counterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
      case ADDVAL:
        return {
          ...state,
          count: state.count+10,
        };

    default:
      return state;
  }
};
export default counterReducer;
