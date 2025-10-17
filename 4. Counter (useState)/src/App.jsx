import React from "react";
import Count from "./Count";

export default function App() {
  const [count, setCount] = React.useState(0);

  /**
   * Note: if you ever need the old value of state
   * to help you determine the new value of state,
   * you should pass a callback function to your
   * state setter function instead of using
   * state directly. This callback function will
   * receive the old value of state as its parameter,
   * which you can then use to determine your new
   * value of state.
   */

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  // function subtract() {
  //   setCount(count - 1);
  // }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  // function add() {
  //   // +3
  //   setCount((prevCount) => prevCount + 1);
  //   setCount((prevCount) => prevCount + 1);
  //   setCount((prevCount) => prevCount + 1);
  // }

  // function subtract() {
  //   // -1 only
  //   setCount(count - 1);
  //   setCount(count - 1);
  //   setCount(count - 1);
  // }

  return (
    <main className="container">
      <div className="counter">
        <button
          className="minus"
          onClick={subtract}
          aria-label="Decrease count"
        >
          –
        </button>

        {/* <h2 className="count">{count}</h2> */}
        {/* passing state as a prop */}

        <Count number={count} />

        <button className="plus" onClick={add} aria-label="Increase count">
          +
        </button>
      </div>
    </main>
  );
}
