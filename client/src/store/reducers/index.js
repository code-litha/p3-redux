import { combineReducers } from "redux";
import counterReducer from "./counter";
import movieReducer from "./movie";

const rootReducer = combineReducers({
  counters: counterReducer, // biasanya seperti ini
  movies: movieReducer,
});

export default rootReducer;
