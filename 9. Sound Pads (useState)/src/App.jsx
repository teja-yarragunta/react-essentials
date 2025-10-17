import React from "react";
import padsData from "../utils/pads";
import { useState } from "react";
import Pad from "../components/Pad";

const App = ({ darkMode }) => {
  const [pads, setPads] = useState(padsData);
  // const styles = {
  //   backgroundColor: darkMode ? "#222222" : "#cccccc",
  // };
  // const turnAllPadsOff = () => {
  //   console.log("Turning off");
  //   setPads((prevPads) =>
  //     prevPads.map((pad) => ({
  //       ...pad,
  //       on: false,
  //     }))
  //   );
  // };
  const toggle = (id) => {
    console.log(id); // we get the clicked id
    // setting on and off based on clicked id
    setPads((prev) =>
      prev.map((pad) => {
        return pad.id === id ? { ...pad, on: !pad.on } : pad;
      })
    );
  };
  const turnAllPadsOff = (id) => {
    setPads((prev) =>
      prev.map((item) => {
        return { ...item, on: false };
      })
    );
  };
  return (
    <main>
      <div className="pad-container">
        {pads.map((pad) => (
          // <Pad key={pad.id} color={pad.color} on={pad.on} />
          <Pad
            key={pad.id}
            id={pad.id}
            color={pad.color}
            on={pad.on}
            toggle={toggle}
          />
        ))}
      </div>
      <button className="all-off" onClick={turnAllPadsOff}>
        Turn All Off
      </button>
      {/* we are getting console logs but, the colors are not setting to off */}
      {/* to have a unified source of truth, its better to pass down the toggle function as well */}
    </main>
  );
};

export default App;
