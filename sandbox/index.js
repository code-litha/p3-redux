const { legacy_createStore: createStore } = require("redux");

const initialState = {
  counter: 0,
  movies: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === "counter/increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === "counter/decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (action.type === "movies/fetchSuccess") {
    // const newMovies = [...state.movies];
    // newMovies.push({ id: 10 });
    // state.movies.push(...) jadi tidak boleh secara langsung mengubah state yang ada
    return {
      ...state,
      movies: action.payload,
      // movies: newMovies, // supaya lebih dinamis saat pengiriman data via dispatch
    };
  }

  return state;
}

const store = createStore(rootReducer);

console.log(store.getState(), "<<< state di store");

store.dispatch({
  type: "counter/increment",
});

console.log(store.getState(), "<<< state kedua di store");

const data = [
  {
    id: 1,
    title: "minion",
  },
  {
    id: 2,
    title: "thor",
  },
];

store.dispatch({
  type: "movies/fetchSuccess",
  payload: data,
});

console.log(store.getState(), "<<< state ketiga di store");

const data2 = [
  {
    id: 1,
    title: "minion",
  },
  {
    id: 2,
    title: "thor",
  },
  {
    id: 3,
    title: "thor 2",
  },
];

store.dispatch({
  type: "movies/fetchSuccess",
  payload: data2,
});

console.log(store.getState(), "<<< state keempat di store");
