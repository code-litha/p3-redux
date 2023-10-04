import { useState } from "react";
import NavigationBar from "../components/Navbar";

function HomePage() {
  const [counter, setCounter] = useState(0);

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <NavigationBar />
      <div className="container text-center">
        <h1 className="text-center py-5">Counter : {counter}</h1>
        <button className="btn btn-danger mx-3" onClick={decrementCounter}>
          Decrement
        </button>
        <button className="btn btn-success" onClick={incrementCounter}>
          Increment
        </button>
      </div>
    </>
  );
}

export default HomePage;
