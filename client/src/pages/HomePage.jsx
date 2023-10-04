import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  counterDecrement,
  counterIncrement,
} from "../store/actions/actionCreator";

function HomePage() {
  const counter = useSelector((state) => {
    // console.log(state, "<<< state");
    return state.counters.counter;
  });
  const dispatch = useDispatch();

  // console.log(counter, "<<< counter");

  function increment() {
    // console.log("increment");
    dispatch(counterIncrement());
  }

  function decrement() {
    // console.log("decrement");
    dispatch(counterDecrement());
  }
  return (
    <div>
      <Navbar />
      <h1>Counter: {counter}</h1>

      <button className="btn btn-success mx-3" onClick={increment}>
        Increment
      </button>

      <button
        className="btn btn-danger"
        onClick={decrement}
        disabled={!counter}
      >
        Decrement
      </button>
    </div>
  );
}

export default HomePage;
