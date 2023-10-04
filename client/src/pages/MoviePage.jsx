import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../store/actions/actionCreator";
import ModalMovieCreate from "../components/ModalMovieCreate";

function MoviePage() {
  const { movies, isMoviesLoading } = useSelector((state) => {
    return state.movies; // nanti berupa object dari initial state si movieReducer
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  // console.log(movies, "<<< movies");
  return (
    <div>
      <Navbar />
      <h1>Movie Page</h1>
      {isMoviesLoading ? (
        <h3>Loadingg....</h3>
      ) : (
        <>
          <ModalMovieCreate />
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                {movie.title} - {movie.year}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default MoviePage;
