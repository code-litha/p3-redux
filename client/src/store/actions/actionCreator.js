import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  MOVIE_FETCH_LOADING,
  MOVIE_FETCH_SUCCESS,
} from "./actionType";
const BASE_URL = "http://localhost:3000";

export const fetchMoviesSuccess = (payload) => {
  return {
    type: MOVIE_FETCH_SUCCESS,
    payload,
  };
};

export const counterDecrement = () => {
  return {
    type: COUNTER_DECREMENT,
  };
};

export const counterIncrement = () => {
  return {
    type: COUNTER_INCREMENT,
  };
};

export function fetchMovies() {
  return async (dispatch, getState) => {
    // disini kita bisa menuliskan code apapun, yang bukan pure function sekalipun
    try {
      dispatch({
        type: MOVIE_FETCH_LOADING,
        payload: true,
      });
      // const state = getState();
      // console.log(state, "<<<< state global saat ini");
      const response = await fetch(BASE_URL + "/movies");
      const responseJSON = await response.json();
      dispatch(fetchMoviesSuccess(responseJSON));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: MOVIE_FETCH_LOADING,
        payload: false,
      });
    }
  };
}

export function addMovie(payload) {
  return async (dispatch, getState) => {
    try {
      if (!payload.title || !payload.year) {
        throw new Error(`All Field is required`);
      }
      const response = await fetch(BASE_URL + "/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      dispatch(fetchMovies());
    } catch (error) {
      // console.log(error);
      throw error;
    }
  };
}
