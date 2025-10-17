import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [starWarsData, setStarWarsData] = useState(null);
  const [counter, setCounter] = useState(1);
  console.log("rendered");

  // useEffect(() => {
  //   console.log("effect ran");
  //   fetch("https://swapi.dev/api/people/1")
  //     .then((res) => res.json())
  //     .then((data) => setStarWarsData(data));
  // }, [counter]);
  // with this, we are updating the state always, and the fetching and console logs are done ina infinite loop
  // if no dependency array is mentioned the function calls every time the component renders

  // useEffect(() => {
  //   console.log("effect ran");
  //   fetch("https://swapi.dev/api/people/1")
  //     .then((res) => res.json())
  //     .then((data) => setStarWarsData(data));
  // }, []); // empty dependency array, only one time/first time render

  useEffect(() => {
    console.log("effect ran");
    fetch(`https://swapi.dev/api/people/${counter}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [counter]);

  return (
    <div>
      <h2>the count is {counter}</h2>
      <button onClick={() => setCounter((prev) => prev + 1)}>Add</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
};

export default App;
