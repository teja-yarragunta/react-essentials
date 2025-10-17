import React from "react";
import WindowTracker from "./WindowTracker";
import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <main className="container">
      <button onClick={() => setShow((prevShow) => !prevShow)}>
        Toggle Window Tracker
      </button>
      {show && <WindowTracker />}
      {/* every time, the state value changed, the WindowTracker component renders  */}
    </main>
  );
};

export default App;
