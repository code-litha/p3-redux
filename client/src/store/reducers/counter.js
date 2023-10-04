import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "../actions/actionType";

const initialState = {
  counter: 0,
};

function counterReducer(state = initialState, action) {
  if (action.type === COUNTER_INCREMENT) {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === COUNTER_DECREMENT) {
    let counter = state.counter;
    if (counter > 0) {
      counter--;
    }
    return {
      ...state,
      counter,
    };
  }

  return state;
}

export default counterReducer;
