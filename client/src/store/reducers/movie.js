import {
  MOVIE_FETCH_LOADING,
  MOVIE_FETCH_SUCCESS,
} from "../actions/actionType";

const initialState = {
  movies: [],
  isMoviesLoading: false,
};

function movieReducer(state = initialState, action) {
  if (action.type === MOVIE_FETCH_SUCCESS) {
    // const newMovies = [...state.movies];
    // newMovies.push({ id: 10 });
    // state.movies.push(...) jadi tidak boleh secara langsung mengubah state yang ada
    return {
      ...state,
      movies: action.payload,
      // movies: newMovies, // supaya lebih dinamis saat pengiriman data via dispatch
    };
  } else if (action.type === MOVIE_FETCH_LOADING) {
    return {
      ...state,
      isMoviesLoading: action.payload, // karena kita bisa kirim true / false. atau lebih DINAMIS
    };
  }

  return state;
}

export default movieReducer;
